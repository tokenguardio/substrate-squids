import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9230 from '../v9230'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const created =  {
    name: 'Crowdloan.Created',
    /**
     * Create a new crowdloaning campaign. `[fund_index]`
     */
    v9110: new EventType(
        'Crowdloan.Created',
        v9110.Id
    ),
    /**
     * Create a new crowdloaning campaign.
     */
    v9230: new EventType(
        'Crowdloan.Created',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const contributed =  {
    name: 'Crowdloan.Contributed',
    /**
     * Contributed to a crowd sale. `[who, fund_index, amount]`
     */
    v9110: new EventType(
        'Crowdloan.Contributed',
        sts.tuple([v9110.AccountId32, v9110.Id, sts.bigint()])
    ),
    /**
     * Contributed to a crowd sale.
     */
    v9230: new EventType(
        'Crowdloan.Contributed',
        sts.struct({
            who: v9230.AccountId32,
            fundIndex: v9230.Id,
            amount: sts.bigint(),
        })
    ),
}

export const withdrew =  {
    name: 'Crowdloan.Withdrew',
    /**
     * Withdrew full balance of a contributor. `[who, fund_index, amount]`
     */
    v9110: new EventType(
        'Crowdloan.Withdrew',
        sts.tuple([v9110.AccountId32, v9110.Id, sts.bigint()])
    ),
    /**
     * Withdrew full balance of a contributor.
     */
    v9230: new EventType(
        'Crowdloan.Withdrew',
        sts.struct({
            who: v9230.AccountId32,
            fundIndex: v9230.Id,
            amount: sts.bigint(),
        })
    ),
}

export const partiallyRefunded =  {
    name: 'Crowdloan.PartiallyRefunded',
    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed. `[fund_index]`
     */
    v9110: new EventType(
        'Crowdloan.PartiallyRefunded',
        v9110.Id
    ),
    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    v9230: new EventType(
        'Crowdloan.PartiallyRefunded',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const allRefunded =  {
    name: 'Crowdloan.AllRefunded',
    /**
     * All loans in a fund have been refunded. `[fund_index]`
     */
    v9110: new EventType(
        'Crowdloan.AllRefunded',
        v9110.Id
    ),
    /**
     * All loans in a fund have been refunded.
     */
    v9230: new EventType(
        'Crowdloan.AllRefunded',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const dissolved =  {
    name: 'Crowdloan.Dissolved',
    /**
     * Fund is dissolved. `[fund_index]`
     */
    v9110: new EventType(
        'Crowdloan.Dissolved',
        v9110.Id
    ),
    /**
     * Fund is dissolved.
     */
    v9230: new EventType(
        'Crowdloan.Dissolved',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const handleBidResult =  {
    name: 'Crowdloan.HandleBidResult',
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9110: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9110.Id, sts.result(() => sts.unit(), () => v9110.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9170: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9170.Id, sts.result(() => sts.unit(), () => v9170.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9190: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9190.Id, sts.result(() => sts.unit(), () => v9190.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9230: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9230.Id,
            result: sts.result(() => sts.unit(), () => v9230.DispatchError),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9340: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9340.Id,
            result: sts.result(() => sts.unit(), () => v9340.DispatchError),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9420: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9420.Id,
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9430: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9430.Id,
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const edited =  {
    name: 'Crowdloan.Edited',
    /**
     * The configuration to a crowdloan has been edited. `[fund_index]`
     */
    v9110: new EventType(
        'Crowdloan.Edited',
        v9110.Id
    ),
    /**
     * The configuration to a crowdloan has been edited.
     */
    v9230: new EventType(
        'Crowdloan.Edited',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const memoUpdated =  {
    name: 'Crowdloan.MemoUpdated',
    /**
     * A memo has been updated. `[who, fund_index, memo]`
     */
    v9110: new EventType(
        'Crowdloan.MemoUpdated',
        sts.tuple([v9110.AccountId32, v9110.Id, sts.bytes()])
    ),
    /**
     * A memo has been updated.
     */
    v9230: new EventType(
        'Crowdloan.MemoUpdated',
        sts.struct({
            who: v9230.AccountId32,
            paraId: v9230.Id,
            memo: sts.bytes(),
        })
    ),
}

export const addedToNewRaise =  {
    name: 'Crowdloan.AddedToNewRaise',
    /**
     * A parachain has been moved to `NewRaise`
     */
    v9110: new EventType(
        'Crowdloan.AddedToNewRaise',
        v9110.Id
    ),
    /**
     * A parachain has been moved to `NewRaise`
     */
    v9230: new EventType(
        'Crowdloan.AddedToNewRaise',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}
