import {CreateAction} from "./_createAction"
import {CallAction} from "./_callAction"
import {SuicideAction} from "./_suicideAction"
import {RewardAction} from "./_rewardAction"

export type Action = CreateAction | CallAction | SuicideAction | RewardAction

export function fromJsonAction(json: any): Action {
    switch(json?.isTypeOf) {
        case 'CreateAction': return new CreateAction(undefined, json)
        case 'CallAction': return new CallAction(undefined, json)
        case 'SuicideAction': return new SuicideAction(undefined, json)
        case 'RewardAction': return new RewardAction(undefined, json)
        default: throw new TypeError('Unknown json object passed as Action')
    }
}
