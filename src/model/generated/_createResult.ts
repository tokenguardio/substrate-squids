import assert from "assert"
import * as marshal from "./marshal"

export class CreateResult {
    public readonly isTypeOf = 'CreateResult'
    private _gasUsed!: bigint | undefined | null
    private _code!: string | undefined | null
    private _address!: string | undefined | null

    constructor(props?: Partial<Omit<CreateResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._gasUsed = json.gasUsed == null ? undefined : marshal.bigint.fromJSON(json.gasUsed)
            this._code = json.code == null ? undefined : marshal.string.fromJSON(json.code)
            this._address = json.address == null ? undefined : marshal.string.fromJSON(json.address)
        }
    }

    get gasUsed(): bigint | undefined | null {
        return this._gasUsed
    }

    set gasUsed(value: bigint | undefined | null) {
        this._gasUsed = value
    }

    get code(): string | undefined | null {
        return this._code
    }

    set code(value: string | undefined | null) {
        this._code = value
    }

    get address(): string | undefined | null {
        return this._address
    }

    set address(value: string | undefined | null) {
        this._address = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            gasUsed: this.gasUsed == null ? undefined : marshal.bigint.toJSON(this.gasUsed),
            code: this.code,
            address: this.address,
        }
    }
}
