import assert from "assert"
import * as marshal from "./marshal"

export class CallAction {
    public readonly isTypeOf = 'CallAction'
    private _from!: string | undefined | null
    private _to!: string | undefined | null
    private _value!: bigint | undefined | null
    private _gas!: bigint | undefined | null
    private _sighash!: string | undefined | null
    private _input!: string | undefined | null

    constructor(props?: Partial<Omit<CallAction, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._from = json.from == null ? undefined : marshal.string.fromJSON(json.from)
            this._to = json.to == null ? undefined : marshal.string.fromJSON(json.to)
            this._value = json.value == null ? undefined : marshal.bigint.fromJSON(json.value)
            this._gas = json.gas == null ? undefined : marshal.bigint.fromJSON(json.gas)
            this._sighash = json.sighash == null ? undefined : marshal.string.fromJSON(json.sighash)
            this._input = json.input == null ? undefined : marshal.string.fromJSON(json.input)
        }
    }

    get from(): string | undefined | null {
        return this._from
    }

    set from(value: string | undefined | null) {
        this._from = value
    }

    get to(): string | undefined | null {
        return this._to
    }

    set to(value: string | undefined | null) {
        this._to = value
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

    get sighash(): string | undefined | null {
        return this._sighash
    }

    set sighash(value: string | undefined | null) {
        this._sighash = value
    }

    get input(): string | undefined | null {
        return this._input
    }

    set input(value: string | undefined | null) {
        this._input = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            from: this.from,
            to: this.to,
            value: this.value == null ? undefined : marshal.bigint.toJSON(this.value),
            gas: this.gas == null ? undefined : marshal.bigint.toJSON(this.gas),
            sighash: this.sighash,
            input: this.input,
        }
    }
}
