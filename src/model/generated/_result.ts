import {CreateResult} from "./_createResult"
import {CallResult} from "./_callResult"

export type Result = CreateResult | CallResult

export function fromJsonResult(json: any): Result {
    switch(json?.isTypeOf) {
        case 'CreateResult': return new CreateResult(undefined, json)
        case 'CallResult': return new CallResult(undefined, json)
        default: throw new TypeError('Unknown json object passed as Result')
    }
}
