import assert from "assert"
import * as marshal from "./marshal"

export class AbiEntry {
    private _address!: string
    private _name!: string | undefined | null
    private _abi!: unknown

    constructor(props?: Partial<Omit<AbiEntry, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._address = marshal.string.fromJSON(json.address)
            this._name = json.name == null ? undefined : marshal.string.fromJSON(json.name)
            this._abi = json.abi
        }
    }

    get address(): string {
        assert(this._address != null, 'uninitialized access')
        return this._address
    }

    set address(value: string) {
        this._address = value
    }

    get name(): string | undefined | null {
        return this._name
    }

    set name(value: string | undefined | null) {
        this._name = value
    }

    get abi(): unknown {
        assert(this._abi != null, 'uninitialized access')
        return this._abi
    }

    set abi(value: unknown) {
        this._abi = value
    }

    toJSON(): object {
        return {
            address: this.address,
            name: this.name,
            abi: this.abi,
        }
    }
}
