import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v990 from '../v990'

export const flashLoanDeposit =  {
    name: 'LeverageStaking.flash_loan_deposit',
    /**
     * See [`Pallet::flash_loan_deposit`].
     */
    v990: new CallType(
        'LeverageStaking.flash_loan_deposit',
        sts.struct({
            assetId: v990.CurrencyId,
            rate: v990.FixedU128,
        })
    ),
}
