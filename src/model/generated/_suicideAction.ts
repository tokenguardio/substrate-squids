import assert from "assert"
import * as marshal from "./marshal"

export class SuicideAction {
    public readonly isTypeOf = 'SuicideAction'
    private _address!: string | undefined | null
    private _refundAddress!: string | undefined | null
    private _balance!: bigint | undefined | null

    constructor(props?: Partial<Omit<SuicideAction, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._address = json.address == null ? undefined : marshal.string.fromJSON(json.address)
            this._refundAddress = json.refundAddress == null ? undefined : marshal.string.fromJSON(json.refundAddress)
            this._balance = json.balance == null ? undefined : marshal.bigint.fromJSON(json.balance)
        }
    }

    get address(): string | undefined | null {
        return this._address
    }

    set address(value: string | undefined | null) {
        this._address = value
    }

    get refundAddress(): string | undefined | null {
        return this._refundAddress
    }

    set refundAddress(value: string | undefined | null) {
        this._refundAddress = value
    }

    get balance(): bigint | undefined | null {
        return this._balance
    }

    set balance(value: bigint | undefined | null) {
        this._balance = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            address: this.address,
            refundAddress: this.refundAddress,
            balance: this.balance == null ? undefined : marshal.bigint.toJSON(this.balance),
        }
    }
}
