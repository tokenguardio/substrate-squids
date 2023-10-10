import assert from "assert"
import * as marshal from "./marshal"

export class RewardAction {
    public readonly isTypeOf = 'RewardAction'
    private _author!: string | undefined | null
    private _value!: bigint | undefined | null
    private _rewardType!: string | undefined | null

    constructor(props?: Partial<Omit<RewardAction, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._author = json.author == null ? undefined : marshal.string.fromJSON(json.author)
            this._value = json.value == null ? undefined : marshal.bigint.fromJSON(json.value)
            this._rewardType = json.rewardType == null ? undefined : marshal.string.fromJSON(json.rewardType)
        }
    }

    get author(): string | undefined | null {
        return this._author
    }

    set author(value: string | undefined | null) {
        this._author = value
    }

    get value(): bigint | undefined | null {
        return this._value
    }

    set value(value: bigint | undefined | null) {
        this._value = value
    }

    get rewardType(): string | undefined | null {
        return this._rewardType
    }

    set rewardType(value: string | undefined | null) {
        this._rewardType = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            author: this.author,
            value: this.value == null ? undefined : marshal.bigint.toJSON(this.value),
            rewardType: this.rewardType,
        }
    }
}
