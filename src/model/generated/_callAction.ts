import assert from "assert"
import * as marshal from "./marshal"
import {AddressType} from "./_addressType"

export class CallAction {
    public readonly isTypeOf = 'CallAction'
    private _from!: string
    private _fromType!: AddressType | undefined | null
    private _to!: string
    private _toType!: AddressType | undefined | null
    private _value!: bigint | undefined | null
    private _gas!: bigint | undefined | null
    private _sighash!: string | undefined | null
    private _input!: string | undefined | null

    constructor(props?: Partial<Omit<CallAction, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._from = marshal.string.fromJSON(json.from)
            this._fromType = json.fromType == null ? undefined : marshal.enumFromJson(json.fromType, AddressType)
            this._to = marshal.string.fromJSON(json.to)
            this._toType = json.toType == null ? undefined : marshal.enumFromJson(json.toType, AddressType)
            this._value = json.value == null ? undefined : marshal.bigint.fromJSON(json.value)
            this._gas = json.gas == null ? undefined : marshal.bigint.fromJSON(json.gas)
            this._sighash = json.sighash == null ? undefined : marshal.string.fromJSON(json.sighash)
            this._input = json.input == null ? undefined : marshal.string.fromJSON(json.input)
        }
    }

    get from(): string {
        assert(this._from != null, 'uninitialized access')
        return this._from
    }

    set from(value: string) {
        this._from = value
    }

    get fromType(): AddressType | undefined | null {
        return this._fromType
    }

    set fromType(value: AddressType | undefined | null) {
        this._fromType = value
    }

    get to(): string {
        assert(this._to != null, 'uninitialized access')
        return this._to
    }

    set to(value: string) {
        this._to = value
    }

    get toType(): AddressType | undefined | null {
        return this._toType
    }

    set toType(value: AddressType | undefined | null) {
        this._toType = value
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
            fromType: this.fromType,
            to: this.to,
            toType: this.toType,
            value: this.value == null ? undefined : marshal.bigint.toJSON(this.value),
            gas: this.gas == null ? undefined : marshal.bigint.toJSON(this.gas),
            sighash: this.sighash,
            input: this.input,
        }
    }
}
