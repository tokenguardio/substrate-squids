import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v958 from '../v958'
import * as v962 from '../v962'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v974 from '../v974'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v996 from '../v996'
import * as v10000 from '../v10000'

export const initializeDelegator =  {
    name: 'Slp.initialize_delegator',
    /**
     * ****************************x/
     * ****** Outer Calls *****x/
     * ****************************x/
     * 
     * Delegator initialization work. Generate a new delegator and return its ID.
     */
    v956: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v956.CurrencyId,
        })
    ),
    /**
     * ****************************x/
     * ****** Outer Calls *****x/
     * ****************************x/
     * 
     * Delegator initialization work. Generate a new delegator and return its ID.
     */
    v962: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorLocation: sts.option(() => v962.V1MultiLocation),
        })
    ),
    /**
     * ****************************x/
     * ****** Outer Calls *****x/
     * ****************************x/
     * 
     * Delegator initialization work. Generate a new delegator and return its ID.
     */
    v970: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorLocation: sts.option(() => v970.V1MultiLocation),
        })
    ),
    /**
     * ****************************x/
     * ****** Outer Calls *****x/
     * ****************************x/
     * 
     * Delegator initialization work. Generate a new delegator and return its ID.
     */
    v972: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorLocation: sts.option(() => v972.V3MultiLocation),
        })
    ),
    /**
     * *****************************
     * ****** Outer Calls ******
     * *****************************
     * 
     * Delegator initialization work. Generate a new delegator and return its ID.
     */
    v980: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorLocation: sts.option(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::initialize_delegator`].
     */
    v990: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorLocation: sts.option(() => v990.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::initialize_delegator`].
     */
    v10000: new CallType(
        'Slp.initialize_delegator',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorLocation: sts.option(() => v10000.V3MultiLocation),
        })
    ),
}

export const bond =  {
    name: 'Slp.bond',
    /**
     * First time bonding some amount to a delegator.
     */
    v956: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v956.V1MultiLocation),
        })
    ),
    /**
     * First time bonding some amount to a delegator.
     */
    v962: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v962.V1MultiLocation),
        })
    ),
    /**
     * First time bonding some amount to a delegator.
     */
    v970: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v970.V1MultiLocation),
        })
    ),
    /**
     * First time bonding some amount to a delegator.
     */
    v972: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v972.V3MultiLocation),
        })
    ),
    /**
     * First time bonding some amount to a delegator.
     */
    v980: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::bond`].
     */
    v990: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v990.V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::bond`].
     */
    v10000: new CallType(
        'Slp.bond',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => v10000.V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const bondExtra =  {
    name: 'Slp.bond_extra',
    /**
     * Bond extra amount to a delegator.
     */
    v956: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            validator: sts.option(() => v956.V1MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Bond extra amount to a delegator.
     */
    v962: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            validator: sts.option(() => v962.V1MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Bond extra amount to a delegator.
     */
    v970: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            validator: sts.option(() => v970.V1MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Bond extra amount to a delegator.
     */
    v972: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            validator: sts.option(() => v972.V3MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Bond extra amount to a delegator.
     */
    v980: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            validator: sts.option(() => v980.V3MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::bond_extra`].
     */
    v990: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            validator: sts.option(() => v990.V3MultiLocation),
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::bond_extra`].
     */
    v10000: new CallType(
        'Slp.bond_extra',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            validator: sts.option(() => v10000.V3MultiLocation),
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const unbond =  {
    name: 'Slp.unbond',
    /**
     * Decrease some amount to a delegator. Leave no less than the minimum delegator
     * requirement.
     */
    v956: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            validator: sts.option(() => v956.V1MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Decrease some amount to a delegator. Leave no less than the minimum delegator
     * requirement.
     */
    v962: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            validator: sts.option(() => v962.V1MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Decrease some amount to a delegator. Leave no less than the minimum delegator
     * requirement.
     */
    v970: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            validator: sts.option(() => v970.V1MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Decrease some amount to a delegator. Leave no less than the minimum delegator
     * requirement.
     */
    v972: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            validator: sts.option(() => v972.V3MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * Decrease some amount to a delegator. Leave no less than the minimum delegator
     * requirement.
     */
    v980: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            validator: sts.option(() => v980.V3MultiLocation),
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::unbond`].
     */
    v990: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            validator: sts.option(() => v990.V3MultiLocation),
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::unbond`].
     */
    v10000: new CallType(
        'Slp.unbond',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            validator: sts.option(() => v10000.V3MultiLocation),
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const unbondAll =  {
    name: 'Slp.unbond_all',
    /**
     * Unbond all the active amount of a delegator.
     */
    v956: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    /**
     * Unbond all the active amount of a delegator.
     */
    v962: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    /**
     * Unbond all the active amount of a delegator.
     */
    v970: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Unbond all the active amount of a delegator.
     */
    v972: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Unbond all the active amount of a delegator.
     */
    v980: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::unbond_all`].
     */
    v990: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::unbond_all`].
     */
    v10000: new CallType(
        'Slp.unbond_all',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const rebond =  {
    name: 'Slp.rebond',
    /**
     * Rebond some unlocking amount to a delegator.
     */
    v956: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            validator: sts.option(() => v956.V1MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Rebond some unlocking amount to a delegator.
     */
    v962: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            validator: sts.option(() => v962.V1MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Rebond some unlocking amount to a delegator.
     */
    v970: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            validator: sts.option(() => v970.V1MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Rebond some unlocking amount to a delegator.
     */
    v972: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            validator: sts.option(() => v972.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Rebond some unlocking amount to a delegator.
     */
    v980: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            validator: sts.option(() => v980.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * See [`Pallet::rebond`].
     */
    v990: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            validator: sts.option(() => v990.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::rebond`].
     */
    v10000: new CallType(
        'Slp.rebond',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            validator: sts.option(() => v10000.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const delegate =  {
    name: 'Slp.delegate',
    /**
     * Delegate to some validator set.
     */
    v956: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            targets: sts.array(() => v956.V1MultiLocation),
        })
    ),
    /**
     * Delegate to some validator set.
     */
    v962: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            targets: sts.array(() => v962.V1MultiLocation),
        })
    ),
    /**
     * Delegate to some validator set.
     */
    v970: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            targets: sts.array(() => v970.V1MultiLocation),
        })
    ),
    /**
     * Delegate to some validator set.
     */
    v972: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            targets: sts.array(() => v972.V3MultiLocation),
        })
    ),
    /**
     * Delegate to some validator set.
     */
    v980: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            targets: sts.array(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::delegate`].
     */
    v990: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            targets: sts.array(() => v990.V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::delegate`].
     */
    v10000: new CallType(
        'Slp.delegate',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            targets: sts.array(() => v10000.V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const undelegate =  {
    name: 'Slp.undelegate',
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v956: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            targets: sts.array(() => v956.V1MultiLocation),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v962: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            targets: sts.array(() => v962.V1MultiLocation),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v970: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            targets: sts.array(() => v970.V1MultiLocation),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v972: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            targets: sts.array(() => v972.V3MultiLocation),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v980: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            targets: sts.array(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::undelegate`].
     */
    v990: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            targets: sts.array(() => v990.V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::undelegate`].
     */
    v10000: new CallType(
        'Slp.undelegate',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            targets: sts.array(() => v10000.V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const redelegate =  {
    name: 'Slp.redelegate',
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v956: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            targets: sts.option(() => sts.array(() => v956.V1MultiLocation)),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v962: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            targets: sts.option(() => sts.array(() => v962.V1MultiLocation)),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v970: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            targets: sts.option(() => sts.array(() => v970.V1MultiLocation)),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v972: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v972.V3MultiLocation)),
        })
    ),
    /**
     * Re-delegate existing delegation to a new validator set.
     */
    v980: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v980.V3MultiLocation)),
        })
    ),
    /**
     * See [`Pallet::redelegate`].
     */
    v990: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v990.V3MultiLocation)),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::redelegate`].
     */
    v10000: new CallType(
        'Slp.redelegate',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v10000.V3MultiLocation)),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const payout =  {
    name: 'Slp.payout',
    /**
     * Initiate payout for a certain delegator.
     */
    v956: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            validator: v956.V1MultiLocation,
            when: sts.option(() => v956.TimeUnit),
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v962: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            validator: v962.V1MultiLocation,
            when: sts.option(() => v962.TimeUnit),
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v970: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            validator: v970.V1MultiLocation,
            when: sts.option(() => v970.TimeUnit),
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v972: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            validator: v972.V3MultiLocation,
            when: sts.option(() => v972.TimeUnit),
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v980: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            validator: v980.V3MultiLocation,
            when: sts.option(() => v980.TimeUnit),
        })
    ),
    /**
     * See [`Pallet::payout`].
     */
    v990: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            validator: v990.V3MultiLocation,
            when: sts.option(() => v990.TimeUnit),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::payout`].
     */
    v10000: new CallType(
        'Slp.payout',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            validator: v10000.V3MultiLocation,
            when: sts.option(() => v10000.TimeUnit),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const liquidize =  {
    name: 'Slp.liquidize',
    /**
     * Withdraw the due payout into free balance.
     */
    v956: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            when: sts.option(() => v956.TimeUnit),
            validator: sts.option(() => v956.V1MultiLocation),
        })
    ),
    /**
     * Withdraw the due payout into free balance.
     */
    v962: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            when: sts.option(() => v962.TimeUnit),
            validator: sts.option(() => v962.V1MultiLocation),
        })
    ),
    /**
     * Withdraw the due payout into free balance.
     */
    v970: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            when: sts.option(() => v970.TimeUnit),
            validator: sts.option(() => v970.V1MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Withdraw the due payout into free balance.
     */
    v972: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            when: sts.option(() => v972.TimeUnit),
            validator: sts.option(() => v972.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Withdraw the due payout into free balance.
     */
    v980: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            when: sts.option(() => v980.TimeUnit),
            validator: sts.option(() => v980.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * See [`Pallet::liquidize`].
     */
    v990: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            when: sts.option(() => v990.TimeUnit),
            validator: sts.option(() => v990.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::liquidize`].
     */
    v10000: new CallType(
        'Slp.liquidize',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            when: sts.option(() => v10000.TimeUnit),
            validator: sts.option(() => v10000.V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const chill =  {
    name: 'Slp.chill',
    /**
     * Initiate payout for a certain delegator.
     */
    v956: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v962: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v970: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v972: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Initiate payout for a certain delegator.
     */
    v980: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::chill`].
     */
    v990: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::chill`].
     */
    v10000: new CallType(
        'Slp.chill',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const transferBack =  {
    name: 'Slp.transfer_back',
    v956: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.V1MultiLocation,
            to: v956.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.V1MultiLocation,
            to: v962.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v970: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v970.CurrencyId,
            from: v970.V1MultiLocation,
            to: v970.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v972: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v972.CurrencyId,
            from: v972.V3MultiLocation,
            to: v972.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.V3MultiLocation,
            to: v980.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::transfer_back`].
     */
    v990: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.V3MultiLocation,
            to: v990.V3MultiLocation,
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::transfer_back`].
     */
    v10000: new CallType(
        'Slp.transfer_back',
        sts.struct({
            currencyId: v10000.CurrencyId,
            from: v10000.V3MultiLocation,
            to: v10000.V3MultiLocation,
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const transferTo =  {
    name: 'Slp.transfer_to',
    v956: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.V1MultiLocation,
            to: v956.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.V1MultiLocation,
            to: v962.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v970: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v970.CurrencyId,
            from: v970.V1MultiLocation,
            to: v970.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v972: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v972.CurrencyId,
            from: v972.V3MultiLocation,
            to: v972.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.V3MultiLocation,
            to: v980.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::transfer_to`].
     */
    v990: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.V3MultiLocation,
            to: v990.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::transfer_to`].
     */
    v10000: new CallType(
        'Slp.transfer_to',
        sts.struct({
            currencyId: v10000.CurrencyId,
            from: v10000.V3MultiLocation,
            to: v10000.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const increaseTokenPool =  {
    name: 'Slp.increase_token_pool',
    v956: new CallType(
        'Slp.increase_token_pool',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.increase_token_pool',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.increase_token_pool',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::increase_token_pool`].
     */
    v990: new CallType(
        'Slp.increase_token_pool',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const decreaseTokenPool =  {
    name: 'Slp.decrease_token_pool',
    v956: new CallType(
        'Slp.decrease_token_pool',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.decrease_token_pool',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.decrease_token_pool',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::decrease_token_pool`].
     */
    v990: new CallType(
        'Slp.decrease_token_pool',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const updateOngoingTimeUnit =  {
    name: 'Slp.update_ongoing_time_unit',
    v956: new CallType(
        'Slp.update_ongoing_time_unit',
        sts.struct({
            currencyId: v956.CurrencyId,
            timeUnit: v956.TimeUnit,
        })
    ),
    v962: new CallType(
        'Slp.update_ongoing_time_unit',
        sts.struct({
            currencyId: v962.CurrencyId,
            timeUnit: v962.TimeUnit,
        })
    ),
    v970: new CallType(
        'Slp.update_ongoing_time_unit',
        sts.struct({
            currencyId: v970.CurrencyId,
            timeUnit: v970.TimeUnit,
        })
    ),
    v980: new CallType(
        'Slp.update_ongoing_time_unit',
        sts.struct({
            currencyId: v980.CurrencyId,
            timeUnit: v980.TimeUnit,
        })
    ),
    /**
     * See [`Pallet::update_ongoing_time_unit`].
     */
    v990: new CallType(
        'Slp.update_ongoing_time_unit',
        sts.struct({
            currencyId: v990.CurrencyId,
            timeUnit: v990.TimeUnit,
        })
    ),
}

export const refundCurrencyDueUnbond =  {
    name: 'Slp.refund_currency_due_unbond',
    v956: new CallType(
        'Slp.refund_currency_due_unbond',
        sts.struct({
            currencyId: v956.CurrencyId,
        })
    ),
    v962: new CallType(
        'Slp.refund_currency_due_unbond',
        sts.struct({
            currencyId: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'Slp.refund_currency_due_unbond',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::refund_currency_due_unbond`].
     */
    v990: new CallType(
        'Slp.refund_currency_due_unbond',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const supplementFeeReserve =  {
    name: 'Slp.supplement_fee_reserve',
    v956: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v956.CurrencyId,
            dest: v956.V1MultiLocation,
        })
    ),
    v962: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v962.CurrencyId,
            dest: v962.V1MultiLocation,
        })
    ),
    v970: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v970.CurrencyId,
            dest: v970.V1MultiLocation,
        })
    ),
    v972: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v972.CurrencyId,
            dest: v972.V3MultiLocation,
        })
    ),
    v980: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v980.CurrencyId,
            dest: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::supplement_fee_reserve`].
     */
    v990: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v990.CurrencyId,
            dest: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::supplement_fee_reserve`].
     */
    v10000: new CallType(
        'Slp.supplement_fee_reserve',
        sts.struct({
            currencyId: v10000.CurrencyId,
            dest: v10000.V3MultiLocation,
        })
    ),
}

export const chargeHostFeeAndTuneVtokenExchangeRate =  {
    name: 'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
    /**
     * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
     * for single delegator.
     */
    v956: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v956.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v956.V1MultiLocation),
        })
    ),
    /**
     * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
     * for single delegator.
     */
    v962: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v962.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v962.V1MultiLocation),
        })
    ),
    /**
     * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
     * for single delegator.
     */
    v970: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v970.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v970.V1MultiLocation),
        })
    ),
    /**
     * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
     * for single delegator.
     */
    v972: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v972.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v972.V3MultiLocation),
        })
    ),
    /**
     * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
     * for single delegator.
     */
    v980: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v980.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::charge_host_fee_and_tune_vtoken_exchange_rate`].
     */
    v990: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v990.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v990.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::charge_host_fee_and_tune_vtoken_exchange_rate`].
     */
    v10000: new CallType(
        'Slp.charge_host_fee_and_tune_vtoken_exchange_rate',
        sts.struct({
            currencyId: v10000.CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => v10000.V3MultiLocation),
        })
    ),
}

export const setXcmDestWeightAndFee =  {
    name: 'Slp.set_xcm_dest_weight_and_fee',
    /**
     * ****************************x/
     * ****** Storage Setters *****x/
     * ****************************x/
     * 
     * Update storage XcmDestWeightAndFee<T>.
     */
    v956: new CallType(
        'Slp.set_xcm_dest_weight_and_fee',
        sts.struct({
            currencyId: v956.CurrencyId,
            operation: v956.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
    /**
     * ****************************x/
     * ****** Storage Setters *****x/
     * ****************************x/
     * 
     * Update storage XcmDestWeightAndFee<T>.
     */
    v962: new CallType(
        'Slp.set_xcm_dest_weight_and_fee',
        sts.struct({
            currencyId: v962.CurrencyId,
            operation: v962.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
    /**
     * ****************************x/
     * ****** Storage Setters *****x/
     * ****************************x/
     * 
     * Update storage XcmDestWeightAndFee<T>.
     */
    v970: new CallType(
        'Slp.set_xcm_dest_weight_and_fee',
        sts.struct({
            currencyId: v970.CurrencyId,
            operation: v970.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
    /**
     * ****************************x/
     * ****** Storage Setters *****x/
     * ****************************x/
     * 
     * Update storage XcmDestWeightAndFee<T>.
     */
    v972: new CallType(
        'Slp.set_xcm_dest_weight_and_fee',
        sts.struct({
            currencyId: v972.CurrencyId,
            operation: v972.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [v972.Weight, sts.bigint()])),
        })
    ),
    /**
     * *****************************
     * ****** Storage Setters ******
     * *****************************
     * 
     * Update storage XcmDestWeightAndFee<T>.
     */
    v980: new CallType(
        'Slp.set_xcm_dest_weight_and_fee',
        sts.struct({
            currencyId: v980.CurrencyId,
            operation: v980.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [v980.Weight, sts.bigint()])),
        })
    ),
}

export const setOperateOrigin =  {
    name: 'Slp.set_operate_origin',
    /**
     * Update storage OperateOrigins<T>.
     */
    v956: new CallType(
        'Slp.set_operate_origin',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: sts.option(() => v956.AccountId32),
        })
    ),
    /**
     * Update storage OperateOrigins<T>.
     */
    v962: new CallType(
        'Slp.set_operate_origin',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: sts.option(() => v962.AccountId32),
        })
    ),
    /**
     * Update storage OperateOrigins<T>.
     */
    v980: new CallType(
        'Slp.set_operate_origin',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: sts.option(() => v980.AccountId32),
        })
    ),
    /**
     * See [`Pallet::set_operate_origin`].
     */
    v990: new CallType(
        'Slp.set_operate_origin',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: sts.option(() => v990.AccountId32),
        })
    ),
}

export const setFeeSource =  {
    name: 'Slp.set_fee_source',
    /**
     * Update storage FeeSources<T>.
     */
    v956: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v956.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v956.V1MultiLocation, sts.bigint()])),
        })
    ),
    /**
     * Update storage FeeSources<T>.
     */
    v962: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v962.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v962.V1MultiLocation, sts.bigint()])),
        })
    ),
    /**
     * Update storage FeeSources<T>.
     */
    v970: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v970.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v970.V1MultiLocation, sts.bigint()])),
        })
    ),
    /**
     * Update storage FeeSources<T>.
     */
    v972: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v972.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v972.V3MultiLocation, sts.bigint()])),
        })
    ),
    /**
     * Update storage FeeSources<T>.
     */
    v980: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v980.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v980.V3MultiLocation, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::set_fee_source`].
     */
    v990: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v990.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v990.V3MultiLocation, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::set_fee_source`].
     */
    v10000: new CallType(
        'Slp.set_fee_source',
        sts.struct({
            currencyId: v10000.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v10000.V3MultiLocation, sts.bigint()])),
        })
    ),
}

export const addDelegator =  {
    name: 'Slp.add_delegator',
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v956: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v956.CurrencyId,
            index: sts.number(),
            who: v956.V1MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v962: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v962.CurrencyId,
            index: sts.number(),
            who: v962.V1MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v970: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v970.CurrencyId,
            index: sts.number(),
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v972: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v972.CurrencyId,
            index: sts.number(),
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v980: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v980.CurrencyId,
            index: sts.number(),
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_delegator`].
     */
    v990: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v990.CurrencyId,
            index: sts.number(),
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_delegator`].
     */
    v10000: new CallType(
        'Slp.add_delegator',
        sts.struct({
            currencyId: v10000.CurrencyId,
            index: sts.number(),
            who: v10000.V3MultiLocation,
        })
    ),
}

export const removeDelegator =  {
    name: 'Slp.remove_delegator',
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v956: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v962: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v970: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v972: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
     */
    v980: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_delegator`].
     */
    v990: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_delegator`].
     */
    v10000: new CallType(
        'Slp.remove_delegator',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const addValidator =  {
    name: 'Slp.add_validator',
    /**
     * Update storage Validators<T>.
     */
    v956: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v962: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v970: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v972: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v980: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_validator`].
     */
    v990: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_validator`].
     */
    v10000: new CallType(
        'Slp.add_validator',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const removeValidator =  {
    name: 'Slp.remove_validator',
    /**
     * Update storage Validators<T>.
     */
    v956: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v962: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v970: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v972: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Update storage Validators<T>.
     */
    v980: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_validator`].
     */
    v990: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_validator`].
     */
    v10000: new CallType(
        'Slp.remove_validator',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const setValidatorsByDelegator =  {
    name: 'Slp.set_validators_by_delegator',
    /**
     * Update storage ValidatorsByDelegator<T>.
     */
    v956: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            validators: sts.array(() => v956.V1MultiLocation),
        })
    ),
    /**
     * Update storage ValidatorsByDelegator<T>.
     */
    v962: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            validators: sts.array(() => v962.V1MultiLocation),
        })
    ),
    /**
     * Update storage ValidatorsByDelegator<T>.
     */
    v970: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            validators: sts.array(() => v970.V1MultiLocation),
        })
    ),
    /**
     * Update storage ValidatorsByDelegator<T>.
     */
    v972: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            validators: sts.array(() => v972.V3MultiLocation),
        })
    ),
    /**
     * Update storage ValidatorsByDelegator<T>.
     */
    v980: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            validators: sts.array(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::set_validators_by_delegator`].
     */
    v990: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            validators: sts.array(() => v990.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::set_validators_by_delegator`].
     */
    v10000: new CallType(
        'Slp.set_validators_by_delegator',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            validators: sts.array(() => v10000.V3MultiLocation),
        })
    ),
}

export const setDelegatorLedger =  {
    name: 'Slp.set_delegator_ledger',
    /**
     * Update storage DelegatorLedgers<T>.
     */
    v956: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
            ledger: sts.option(() => v956.Ledger),
        })
    ),
    /**
     * Update storage DelegatorLedgers<T>.
     */
    v958: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v958.CurrencyId,
            who: v958.V1MultiLocation,
            ledger: sts.option(() => v958.Ledger),
        })
    ),
    /**
     * Update storage DelegatorLedgers<T>.
     */
    v962: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
            ledger: sts.option(() => v962.Ledger),
        })
    ),
    /**
     * Update storage DelegatorLedgers<T>.
     */
    v970: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            ledger: sts.option(() => v970.Ledger),
        })
    ),
    /**
     * Update storage DelegatorLedgers<T>.
     */
    v972: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            ledger: sts.option(() => v972.Ledger),
        })
    ),
    /**
     * Update storage DelegatorLedgers<T>.
     */
    v980: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            ledger: sts.option(() => v980.Ledger),
        })
    ),
    /**
     * See [`Pallet::set_delegator_ledger`].
     */
    v990: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            ledger: sts.option(() => v990.Ledger),
        })
    ),
    /**
     * See [`Pallet::set_delegator_ledger`].
     */
    v10000: new CallType(
        'Slp.set_delegator_ledger',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            ledger: sts.option(() => v10000.Ledger),
        })
    ),
}

export const setMinimumsAndMaximums =  {
    name: 'Slp.set_minimums_and_maximums',
    /**
     * Update storage MinimumsAndMaximums<T>.
     */
    v956: new CallType(
        'Slp.set_minimums_and_maximums',
        sts.struct({
            currencyId: v956.CurrencyId,
            constraints: sts.option(() => v956.MinimumsMaximums),
        })
    ),
    /**
     * Update storage MinimumsAndMaximums<T>.
     */
    v962: new CallType(
        'Slp.set_minimums_and_maximums',
        sts.struct({
            currencyId: v962.CurrencyId,
            constraints: sts.option(() => v962.MinimumsMaximums),
        })
    ),
    /**
     * Update storage MinimumsAndMaximums<T>.
     */
    v980: new CallType(
        'Slp.set_minimums_and_maximums',
        sts.struct({
            currencyId: v980.CurrencyId,
            constraints: sts.option(() => v980.MinimumsMaximums),
        })
    ),
    /**
     * See [`Pallet::set_minimums_and_maximums`].
     */
    v990: new CallType(
        'Slp.set_minimums_and_maximums',
        sts.struct({
            currencyId: v990.CurrencyId,
            constraints: sts.option(() => v990.MinimumsMaximums),
        })
    ),
}

export const setCurrencyDelays =  {
    name: 'Slp.set_currency_delays',
    /**
     * Update storage Delays<T>.
     */
    v956: new CallType(
        'Slp.set_currency_delays',
        sts.struct({
            currencyId: v956.CurrencyId,
            maybeDelays: sts.option(() => v956.Delays),
        })
    ),
    /**
     * Update storage Delays<T>.
     */
    v962: new CallType(
        'Slp.set_currency_delays',
        sts.struct({
            currencyId: v962.CurrencyId,
            maybeDelays: sts.option(() => v962.Delays),
        })
    ),
    /**
     * Update storage Delays<T>.
     */
    v970: new CallType(
        'Slp.set_currency_delays',
        sts.struct({
            currencyId: v970.CurrencyId,
            maybeDelays: sts.option(() => v970.Delays),
        })
    ),
    /**
     * Update storage Delays<T>.
     */
    v980: new CallType(
        'Slp.set_currency_delays',
        sts.struct({
            currencyId: v980.CurrencyId,
            maybeDelays: sts.option(() => v980.Delays),
        })
    ),
    /**
     * See [`Pallet::set_currency_delays`].
     */
    v990: new CallType(
        'Slp.set_currency_delays',
        sts.struct({
            currencyId: v990.CurrencyId,
            maybeDelays: sts.option(() => v990.Delays),
        })
    ),
}

export const setHostingFees =  {
    name: 'Slp.set_hosting_fees',
    /**
     * Set HostingFees storage.
     */
    v956: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v956.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v956.Permill, v956.V1MultiLocation])),
        })
    ),
    /**
     * Set HostingFees storage.
     */
    v962: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v962.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v962.Permill, v962.V1MultiLocation])),
        })
    ),
    /**
     * Set HostingFees storage.
     */
    v970: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v970.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v970.Permill, v970.V1MultiLocation])),
        })
    ),
    /**
     * Set HostingFees storage.
     */
    v972: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v972.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v972.Permill, v972.V3MultiLocation])),
        })
    ),
    /**
     * Set HostingFees storage.
     */
    v980: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v980.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v980.Permill, v980.V3MultiLocation])),
        })
    ),
    /**
     * See [`Pallet::set_hosting_fees`].
     */
    v990: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v990.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v990.Permill, v990.V3MultiLocation])),
        })
    ),
    /**
     * See [`Pallet::set_hosting_fees`].
     */
    v10000: new CallType(
        'Slp.set_hosting_fees',
        sts.struct({
            currencyId: v10000.CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [v10000.Permill, v10000.V3MultiLocation])),
        })
    ),
}

export const setCurrencyTuneExchangeRateLimit =  {
    name: 'Slp.set_currency_tune_exchange_rate_limit',
    /**
     * Set  CurrencyTuneExchangeRateLimit<T> storage.
     */
    v956: new CallType(
        'Slp.set_currency_tune_exchange_rate_limit',
        sts.struct({
            currencyId: v956.CurrencyId,
            maybeTuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v956.Permill])),
        })
    ),
    /**
     * Set  CurrencyTuneExchangeRateLimit<T> storage.
     */
    v962: new CallType(
        'Slp.set_currency_tune_exchange_rate_limit',
        sts.struct({
            currencyId: v962.CurrencyId,
            maybeTuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v962.Permill])),
        })
    ),
    /**
     * Set  CurrencyTuneExchangeRateLimit<T> storage.
     */
    v980: new CallType(
        'Slp.set_currency_tune_exchange_rate_limit',
        sts.struct({
            currencyId: v980.CurrencyId,
            maybeTuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v980.Permill])),
        })
    ),
    /**
     * See [`Pallet::set_currency_tune_exchange_rate_limit`].
     */
    v990: new CallType(
        'Slp.set_currency_tune_exchange_rate_limit',
        sts.struct({
            currencyId: v990.CurrencyId,
            maybeTuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v990.Permill])),
        })
    ),
}

export const setOngoingTimeUnitUpdateInterval =  {
    name: 'Slp.set_ongoing_time_unit_update_interval',
    /**
     * Set  OngoingTimeUnitUpdateInterval<T> storage.
     */
    v956: new CallType(
        'Slp.set_ongoing_time_unit_update_interval',
        sts.struct({
            currencyId: v956.CurrencyId,
            maybeInterval: sts.option(() => sts.number()),
        })
    ),
    /**
     * Set  OngoingTimeUnitUpdateInterval<T> storage.
     */
    v962: new CallType(
        'Slp.set_ongoing_time_unit_update_interval',
        sts.struct({
            currencyId: v962.CurrencyId,
            maybeInterval: sts.option(() => sts.number()),
        })
    ),
    /**
     * Set  OngoingTimeUnitUpdateInterval<T> storage.
     */
    v980: new CallType(
        'Slp.set_ongoing_time_unit_update_interval',
        sts.struct({
            currencyId: v980.CurrencyId,
            maybeInterval: sts.option(() => sts.number()),
        })
    ),
    /**
     * See [`Pallet::set_ongoing_time_unit_update_interval`].
     */
    v990: new CallType(
        'Slp.set_ongoing_time_unit_update_interval',
        sts.struct({
            currencyId: v990.CurrencyId,
            maybeInterval: sts.option(() => sts.number()),
        })
    ),
}

export const addSupplementFeeAccountToWhitelist =  {
    name: 'Slp.add_supplement_fee_account_to_whitelist',
    v956: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    v962: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    v970: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    v972: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    v980: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_supplement_fee_account_to_whitelist`].
     */
    v990: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_supplement_fee_account_to_whitelist`].
     */
    v10000: new CallType(
        'Slp.add_supplement_fee_account_to_whitelist',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const removeSupplementFeeAccountFromWhitelist =  {
    name: 'Slp.remove_supplement_fee_account_from_whitelist',
    v956: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    v962: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    v970: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    v972: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    v980: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_supplement_fee_account_from_whitelist`].
     */
    v990: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_supplement_fee_account_from_whitelist`].
     */
    v10000: new CallType(
        'Slp.remove_supplement_fee_account_from_whitelist',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const confirmDelegatorLedgerQueryResponse =  {
    name: 'Slp.confirm_delegator_ledger_query_response',
    /**
     * ********************************************************************
     * *************Outer Confirming Xcm queries functions ****************
     * ********************************************************************
     */
    v956: new CallType(
        'Slp.confirm_delegator_ledger_query_response',
        sts.struct({
            currencyId: v956.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    /**
     * ********************************************************************
     * *************Outer Confirming Xcm queries functions ****************
     * ********************************************************************
     */
    v962: new CallType(
        'Slp.confirm_delegator_ledger_query_response',
        sts.struct({
            currencyId: v962.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    /**
     * ********************************************************************
     * *************Outer Confirming Xcm queries functions ****************
     * ********************************************************************
     */
    v980: new CallType(
        'Slp.confirm_delegator_ledger_query_response',
        sts.struct({
            currencyId: v980.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::confirm_delegator_ledger_query_response`].
     */
    v990: new CallType(
        'Slp.confirm_delegator_ledger_query_response',
        sts.struct({
            currencyId: v990.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
}

export const failDelegatorLedgerQueryResponse =  {
    name: 'Slp.fail_delegator_ledger_query_response',
    v956: new CallType(
        'Slp.fail_delegator_ledger_query_response',
        sts.struct({
            currencyId: v956.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.fail_delegator_ledger_query_response',
        sts.struct({
            currencyId: v962.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.fail_delegator_ledger_query_response',
        sts.struct({
            currencyId: v980.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::fail_delegator_ledger_query_response`].
     */
    v990: new CallType(
        'Slp.fail_delegator_ledger_query_response',
        sts.struct({
            currencyId: v990.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
}

export const confirmValidatorsByDelegatorQueryResponse =  {
    name: 'Slp.confirm_validators_by_delegator_query_response',
    v956: new CallType(
        'Slp.confirm_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v956.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.confirm_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v962.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.confirm_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v980.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::confirm_validators_by_delegator_query_response`].
     */
    v990: new CallType(
        'Slp.confirm_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v990.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
}

export const failValidatorsByDelegatorQueryResponse =  {
    name: 'Slp.fail_validators_by_delegator_query_response',
    v956: new CallType(
        'Slp.fail_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v956.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    v962: new CallType(
        'Slp.fail_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v962.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slp.fail_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v980.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::fail_validators_by_delegator_query_response`].
     */
    v990: new CallType(
        'Slp.fail_validators_by_delegator_query_response',
        sts.struct({
            currencyId: v990.CurrencyId,
            queryId: sts.bigint(),
        })
    ),
}

export const convertAsset =  {
    name: 'Slp.convert_asset',
    v970: new CallType(
        'Slp.convert_asset',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            amount: sts.bigint(),
            ifFromCurrency: sts.boolean(),
        })
    ),
    v972: new CallType(
        'Slp.convert_asset',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            amount: sts.bigint(),
            ifFromCurrency: sts.boolean(),
        })
    ),
    v980: new CallType(
        'Slp.convert_asset',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            amount: sts.bigint(),
            ifFromCurrency: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::convert_asset`].
     */
    v990: new CallType(
        'Slp.convert_asset',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            amount: sts.bigint(),
            ifFromCurrency: sts.boolean(),
            weightAndFee: sts.option(() => sts.tuple(() => [v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::convert_asset`].
     */
    v10000: new CallType(
        'Slp.convert_asset',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            amount: sts.bigint(),
            ifFromCurrency: sts.boolean(),
            weightAndFee: sts.option(() => sts.tuple(() => [v10000.Weight, sts.bigint()])),
        })
    ),
}

export const confirmDelegatorLedger =  {
    name: 'Slp.confirm_delegator_ledger',
    v972: new CallType(
        'Slp.confirm_delegator_ledger',
        sts.struct({
            queryId: sts.bigint(),
            response: v972.V3Response,
        })
    ),
    /**
     * See [`Pallet::confirm_delegator_ledger`].
     */
    v10000: new CallType(
        'Slp.confirm_delegator_ledger',
        sts.struct({
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
}

export const confirmValidatorsByDelegator =  {
    name: 'Slp.confirm_validators_by_delegator',
    v972: new CallType(
        'Slp.confirm_validators_by_delegator',
        sts.struct({
            queryId: sts.bigint(),
            response: v972.V3Response,
        })
    ),
    /**
     * See [`Pallet::confirm_validators_by_delegator`].
     */
    v10000: new CallType(
        'Slp.confirm_validators_by_delegator',
        sts.struct({
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
}

export const resetValidators =  {
    name: 'Slp.reset_validators',
    /**
     * Reset the whole storage Validators<T>.
     */
    v974: new CallType(
        'Slp.reset_validators',
        sts.struct({
            currencyId: v974.CurrencyId,
            validatorList: sts.array(() => v974.V3MultiLocation),
        })
    ),
    /**
     * Reset the whole storage Validators<T>.
     */
    v980: new CallType(
        'Slp.reset_validators',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorList: sts.array(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::reset_validators`].
     */
    v990: new CallType(
        'Slp.reset_validators',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorList: sts.array(() => v990.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::reset_validators`].
     */
    v10000: new CallType(
        'Slp.reset_validators',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorList: sts.array(() => v10000.V3MultiLocation),
        })
    ),
}

export const setValidatorBoostList =  {
    name: 'Slp.set_validator_boost_list',
    /**
     * Reset the whole storage Validator_boost_list<T>.
     */
    v974: new CallType(
        'Slp.set_validator_boost_list',
        sts.struct({
            currencyId: v974.CurrencyId,
            validatorList: sts.array(() => v974.V3MultiLocation),
        })
    ),
    /**
     * Reset the whole storage Validator_boost_list<T>.
     */
    v980: new CallType(
        'Slp.set_validator_boost_list',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorList: sts.array(() => v980.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::set_validator_boost_list`].
     */
    v990: new CallType(
        'Slp.set_validator_boost_list',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorList: sts.array(() => v990.V3MultiLocation),
        })
    ),
    /**
     * See [`Pallet::set_validator_boost_list`].
     */
    v10000: new CallType(
        'Slp.set_validator_boost_list',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorList: sts.array(() => v10000.V3MultiLocation),
        })
    ),
}

export const addToValidatorBoostList =  {
    name: 'Slp.add_to_validator_boost_list',
    v974: new CallType(
        'Slp.add_to_validator_boost_list',
        sts.struct({
            currencyId: v974.CurrencyId,
            who: v974.V3MultiLocation,
        })
    ),
    v980: new CallType(
        'Slp.add_to_validator_boost_list',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_to_validator_boost_list`].
     */
    v990: new CallType(
        'Slp.add_to_validator_boost_list',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::add_to_validator_boost_list`].
     */
    v10000: new CallType(
        'Slp.add_to_validator_boost_list',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const removeFromValidatorBootList =  {
    name: 'Slp.remove_from_validator_boot_list',
    /**
     * Update storage Validator_boost_list<T>.
     */
    v974: new CallType(
        'Slp.remove_from_validator_boot_list',
        sts.struct({
            currencyId: v974.CurrencyId,
            who: v974.V3MultiLocation,
        })
    ),
    /**
     * Update storage Validator_boost_list<T>.
     */
    v980: new CallType(
        'Slp.remove_from_validator_boot_list',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_from_validator_boot_list`].
     */
    v990: new CallType(
        'Slp.remove_from_validator_boot_list',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    /**
     * See [`Pallet::remove_from_validator_boot_list`].
     */
    v10000: new CallType(
        'Slp.remove_from_validator_boot_list',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const convertTreasuryVtoken =  {
    name: 'Slp.convert_treasury_vtoken',
    /**
     * See [`Pallet::convert_treasury_vtoken`].
     */
    v996: new CallType(
        'Slp.convert_treasury_vtoken',
        sts.struct({
            vtoken: v996.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const cleanOutdatedValidatorBoostList =  {
    name: 'Slp.clean_outdated_validator_boost_list',
    /**
     * See [`Pallet::clean_outdated_validator_boost_list`].
     */
    v996: new CallType(
        'Slp.clean_outdated_validator_boost_list',
        sts.struct({
            token: v996.CurrencyId,
            page: sts.number(),
        })
    ),
}
