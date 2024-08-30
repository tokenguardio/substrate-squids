import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const crossIn =  {
    name: 'CrossInOut.cross_in',
    v970: new CallType(
        'CrossInOut.cross_in',
        sts.struct({
            location: v970.V1MultiLocation,
            currencyId: v970.CurrencyId,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        })
    ),
    v980: new CallType(
        'CrossInOut.cross_in',
        sts.struct({
            location: v980.V2MultiLocation,
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * See [`Pallet::cross_in`].
     */
    v990: new CallType(
        'CrossInOut.cross_in',
        sts.struct({
            location: v990.V2MultiLocation,
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        })
    ),
}

export const crossOut =  {
    name: 'CrossInOut.cross_out',
    /**
     * Destroy some balance from an account and issue cross-out event.
     */
    v970: new CallType(
        'CrossInOut.cross_out',
        sts.struct({
            currencyId: v970.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Destroy some balance from an account and issue cross-out event.
     */
    v980: new CallType(
        'CrossInOut.cross_out',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::cross_out`].
     */
    v990: new CallType(
        'CrossInOut.cross_out',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const registerLinkedAccount =  {
    name: 'CrossInOut.register_linked_account',
    v970: new CallType(
        'CrossInOut.register_linked_account',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.AccountId32,
            foreignLocation: v970.V1MultiLocation,
        })
    ),
    v980: new CallType(
        'CrossInOut.register_linked_account',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            foreignLocation: v980.V2MultiLocation,
        })
    ),
    /**
     * See [`Pallet::register_linked_account`].
     */
    v990: new CallType(
        'CrossInOut.register_linked_account',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            foreignLocation: v990.V2MultiLocation,
        })
    ),
}

export const changeOuterLinkedAccount =  {
    name: 'CrossInOut.change_outer_linked_account',
    v970: new CallType(
        'CrossInOut.change_outer_linked_account',
        sts.struct({
            currencyId: v970.CurrencyId,
            foreignLocation: v970.V1MultiLocation,
            account: v970.AccountId32,
        })
    ),
    v980: new CallType(
        'CrossInOut.change_outer_linked_account',
        sts.struct({
            currencyId: v980.CurrencyId,
            foreignLocation: v980.V2MultiLocation,
            account: v980.AccountId32,
        })
    ),
    /**
     * See [`Pallet::change_outer_linked_account`].
     */
    v990: new CallType(
        'CrossInOut.change_outer_linked_account',
        sts.struct({
            currencyId: v990.CurrencyId,
            foreignLocation: v990.V2MultiLocation,
            account: v990.AccountId32,
        })
    ),
}

export const registerCurrencyForCrossInOut =  {
    name: 'CrossInOut.register_currency_for_cross_in_out',
    v970: new CallType(
        'CrossInOut.register_currency_for_cross_in_out',
        sts.struct({
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new CallType(
        'CrossInOut.register_currency_for_cross_in_out',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::register_currency_for_cross_in_out`].
     */
    v990: new CallType(
        'CrossInOut.register_currency_for_cross_in_out',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const deregisterCurrencyForCrossInOut =  {
    name: 'CrossInOut.deregister_currency_for_cross_in_out',
    v970: new CallType(
        'CrossInOut.deregister_currency_for_cross_in_out',
        sts.struct({
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new CallType(
        'CrossInOut.deregister_currency_for_cross_in_out',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::deregister_currency_for_cross_in_out`].
     */
    v990: new CallType(
        'CrossInOut.deregister_currency_for_cross_in_out',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const addToIssueWhitelist =  {
    name: 'CrossInOut.add_to_issue_whitelist',
    v970: new CallType(
        'CrossInOut.add_to_issue_whitelist',
        sts.struct({
            currencyId: v970.CurrencyId,
            account: v970.AccountId32,
        })
    ),
    v980: new CallType(
        'CrossInOut.add_to_issue_whitelist',
        sts.struct({
            currencyId: v980.CurrencyId,
            account: v980.AccountId32,
        })
    ),
    /**
     * See [`Pallet::add_to_issue_whitelist`].
     */
    v990: new CallType(
        'CrossInOut.add_to_issue_whitelist',
        sts.struct({
            currencyId: v990.CurrencyId,
            account: v990.AccountId32,
        })
    ),
}

export const removeFromIssueWhitelist =  {
    name: 'CrossInOut.remove_from_issue_whitelist',
    v970: new CallType(
        'CrossInOut.remove_from_issue_whitelist',
        sts.struct({
            currencyId: v970.CurrencyId,
            account: v970.AccountId32,
        })
    ),
    v980: new CallType(
        'CrossInOut.remove_from_issue_whitelist',
        sts.struct({
            currencyId: v980.CurrencyId,
            account: v980.AccountId32,
        })
    ),
    /**
     * See [`Pallet::remove_from_issue_whitelist`].
     */
    v990: new CallType(
        'CrossInOut.remove_from_issue_whitelist',
        sts.struct({
            currencyId: v990.CurrencyId,
            account: v990.AccountId32,
        })
    ),
}

export const addToRegisterWhitelist =  {
    name: 'CrossInOut.add_to_register_whitelist',
    v970: new CallType(
        'CrossInOut.add_to_register_whitelist',
        sts.struct({
            currencyId: v970.CurrencyId,
            account: v970.AccountId32,
        })
    ),
    v980: new CallType(
        'CrossInOut.add_to_register_whitelist',
        sts.struct({
            currencyId: v980.CurrencyId,
            account: v980.AccountId32,
        })
    ),
    /**
     * See [`Pallet::add_to_register_whitelist`].
     */
    v990: new CallType(
        'CrossInOut.add_to_register_whitelist',
        sts.struct({
            currencyId: v990.CurrencyId,
            account: v990.AccountId32,
        })
    ),
}

export const removeFromRegisterWhitelist =  {
    name: 'CrossInOut.remove_from_register_whitelist',
    v970: new CallType(
        'CrossInOut.remove_from_register_whitelist',
        sts.struct({
            currencyId: v970.CurrencyId,
            account: v970.AccountId32,
        })
    ),
    v980: new CallType(
        'CrossInOut.remove_from_register_whitelist',
        sts.struct({
            currencyId: v980.CurrencyId,
            account: v980.AccountId32,
        })
    ),
    /**
     * See [`Pallet::remove_from_register_whitelist`].
     */
    v990: new CallType(
        'CrossInOut.remove_from_register_whitelist',
        sts.struct({
            currencyId: v990.CurrencyId,
            account: v990.AccountId32,
        })
    ),
}

export const setCrossingMinimumAmount =  {
    name: 'CrossInOut.set_crossing_minimum_amount',
    v970: new CallType(
        'CrossInOut.set_crossing_minimum_amount',
        sts.struct({
            currencyId: v970.CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        })
    ),
    v980: new CallType(
        'CrossInOut.set_crossing_minimum_amount',
        sts.struct({
            currencyId: v980.CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_crossing_minimum_amount`].
     */
    v990: new CallType(
        'CrossInOut.set_crossing_minimum_amount',
        sts.struct({
            currencyId: v990.CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        })
    ),
}
