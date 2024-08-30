import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v990 from '../v990'

export const flashLoanDeposited =  {
    name: 'LeverageStaking.FlashLoanDeposited',
    v990: new EventType(
        'LeverageStaking.FlashLoanDeposited',
        sts.struct({
            who: v990.AccountId32,
            assetId: v990.CurrencyId,
            oldRate: v990.FixedU128,
            newRate: v990.FixedU128,
        })
    ),
}
