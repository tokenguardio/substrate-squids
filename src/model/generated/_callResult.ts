import assert from "assert"
import * as marshal from "./marshal"

export class CallResult {
    public readonly isTypeOf = 'CallResult'
    private _gasUsed!: bigint | undefined | null
    private _output!: string | undefined | null

    constructor(props?: Partial<Omit<CallResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._gasUsed = json.gasUsed == null ? undefined : marshal.bigint.fromJSON(json.gasUsed)
            this._output = json.output == null ? undefined : marshal.string.fromJSON(json.output)
        }
    }

    get gasUsed(): bigint | undefined | null {
        return this._gasUsed
    }

    set gasUsed(value: bigint | undefined | null) {
        this._gasUsed = value
    }

    get output(): string | undefined | null {
        return this._output
    }

    set output(value: string | undefined | null) {
        this._output = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            gasUsed: this.gasUsed == null ? undefined : marshal.bigint.toJSON(this.gasUsed),
            output: this.output,
        }
    }
}
