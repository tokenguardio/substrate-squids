import assert from "assert"
import * as marshal from "./marshal"

export class CreateAction {
    public readonly isTypeOf = 'CreateAction'
    private _from!: string | undefined | null
    private _value!: bigint | undefined | null
    private _gas!: bigint | undefined | null
    private _init!: string | undefined | null

    constructor(props?: Partial<Omit<CreateAction, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._from = json.from == null ? undefined : marshal.string.fromJSON(json.from)
            this._value = json.value == null ? undefined : marshal.bigint.fromJSON(json.value)
            this._gas = json.gas == null ? undefined : marshal.bigint.fromJSON(json.gas)
            this._init = json.init == null ? undefined : marshal.string.fromJSON(json.init)
        }
    }

    get from(): string | undefined | null {
        return this._from
    }

    set from(value: string | undefined | null) {
        this._from = value
    }

    get value(): bigint | undefined | null {
        return this._value
    }

    set value(value: bigint | undefined | null) {
        this._value = value
    }

    get gas(): bigint | undefined | null {
        return this._gas
    }

    set gas(value: bigint | undefined | null) {
        this._gas = value
    }

    get init(): string | undefined | null {
        return this._init
    }

    set init(value: string | undefined | null) {
        this._init = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            from: this.from,
            value: this.value == null ? undefined : marshal.bigint.toJSON(this.value),
            gas: this.gas == null ? undefined : marshal.bigint.toJSON(this.gas),
            init: this.init,
        }
    }
}
