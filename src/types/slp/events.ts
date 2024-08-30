import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v958 from '../v958'
import * as v962 from '../v962'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v974 from '../v974'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v996 from '../v996'
import * as v998 from '../v998'
import * as v10000 from '../v10000'

export const delegatorInitialized =  {
    name: 'Slp.DelegatorInitialized',
    v956: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorInitialized',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
        })
    ),
}

export const delegatorBonded =  {
    name: 'Slp.DelegatorBonded',
    v956: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
            validator: sts.option(() => v956.V1MultiLocation),
        })
    ),
    v962: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
            validator: sts.option(() => v962.V1MultiLocation),
        })
    ),
    v970: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
            validator: sts.option(() => v970.V1MultiLocation),
        })
    ),
    v972: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
            validator: sts.option(() => v972.V3MultiLocation),
        })
    ),
    v980: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
            validator: sts.option(() => v980.V3MultiLocation),
        })
    ),
    v990: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
            validator: sts.option(() => v990.V3MultiLocation),
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorBonded',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            bondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
            validator: sts.option(() => v10000.V3MultiLocation),
        })
    ),
}

export const delegatorBondExtra =  {
    name: 'Slp.DelegatorBondExtra',
    v956: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
            validator: sts.option(() => v956.V1MultiLocation),
        })
    ),
    v962: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
            validator: sts.option(() => v962.V1MultiLocation),
        })
    ),
    v970: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
            validator: sts.option(() => v970.V1MultiLocation),
        })
    ),
    v972: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
            validator: sts.option(() => v972.V3MultiLocation),
        })
    ),
    v980: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
            validator: sts.option(() => v980.V3MultiLocation),
        })
    ),
    v990: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
            validator: sts.option(() => v990.V3MultiLocation),
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorBondExtra',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            extraBondedAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
            validator: sts.option(() => v10000.V3MultiLocation),
        })
    ),
}

export const delegatorUnbond =  {
    name: 'Slp.DelegatorUnbond',
    v956: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
            validator: sts.option(() => v956.V1MultiLocation),
        })
    ),
    v962: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
            validator: sts.option(() => v962.V1MultiLocation),
        })
    ),
    v970: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
            validator: sts.option(() => v970.V1MultiLocation),
        })
    ),
    v972: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
            validator: sts.option(() => v972.V3MultiLocation),
        })
    ),
    v980: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
            validator: sts.option(() => v980.V3MultiLocation),
        })
    ),
    v990: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
            validator: sts.option(() => v990.V3MultiLocation),
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorUnbond',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            unbondAmount: sts.bigint(),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
            validator: sts.option(() => v10000.V3MultiLocation),
        })
    ),
}

export const delegatorUnbondAll =  {
    name: 'Slp.DelegatorUnbondAll',
    v956: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
        })
    ),
    v962: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
        })
    ),
    v970: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
        })
    ),
    v972: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
        })
    ),
    v980: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
        })
    ),
    v990: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorUnbondAll',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
        })
    ),
}

export const delegatorRebond =  {
    name: 'Slp.DelegatorRebond',
    v956: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
            validator: sts.option(() => v956.V1MultiLocation),
        })
    ),
    v962: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
            validator: sts.option(() => v962.V1MultiLocation),
        })
    ),
    v970: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
            validator: sts.option(() => v970.V1MultiLocation),
        })
    ),
    v972: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
            validator: sts.option(() => v972.V3MultiLocation),
        })
    ),
    v980: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
            validator: sts.option(() => v980.V3MultiLocation),
        })
    ),
    v990: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
            validator: sts.option(() => v990.V3MultiLocation),
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorRebond',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            rebondAmount: sts.option(() => sts.bigint()),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
            validator: sts.option(() => v10000.V3MultiLocation),
        })
    ),
}

export const delegated =  {
    name: 'Slp.Delegated',
    v956: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            targets: sts.option(() => sts.array(() => v956.V1MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
        })
    ),
    v962: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            targets: sts.option(() => sts.array(() => v962.V1MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
        })
    ),
    v970: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            targets: sts.option(() => sts.array(() => v970.V1MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
        })
    ),
    v972: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v972.V3MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
        })
    ),
    v980: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v980.V3MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
        })
    ),
    v990: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v990.V3MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
        })
    ),
    v10000: new EventType(
        'Slp.Delegated',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            targets: sts.option(() => sts.array(() => v10000.V3MultiLocation)),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
        })
    ),
}

export const undelegated =  {
    name: 'Slp.Undelegated',
    v956: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            targets: sts.array(() => v956.V1MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
        })
    ),
    v962: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            targets: sts.array(() => v962.V1MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
        })
    ),
    v970: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            targets: sts.array(() => v970.V1MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
        })
    ),
    v972: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            targets: sts.array(() => v972.V3MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
        })
    ),
    v980: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            targets: sts.array(() => v980.V3MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
        })
    ),
    v990: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            targets: sts.array(() => v990.V3MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
        })
    ),
    v10000: new EventType(
        'Slp.Undelegated',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            targets: sts.array(() => v10000.V3MultiLocation),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
        })
    ),
}

export const payout =  {
    name: 'Slp.Payout',
    v956: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v956.CurrencyId,
            validator: v956.V1MultiLocation,
            timeUnit: sts.option(() => v956.TimeUnit),
        })
    ),
    v962: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v962.CurrencyId,
            validator: v962.V1MultiLocation,
            timeUnit: sts.option(() => v962.TimeUnit),
        })
    ),
    v970: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v970.CurrencyId,
            validator: v970.V1MultiLocation,
            timeUnit: sts.option(() => v970.TimeUnit),
        })
    ),
    v972: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v972.CurrencyId,
            validator: v972.V3MultiLocation,
            timeUnit: sts.option(() => v972.TimeUnit),
        })
    ),
    v980: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v980.CurrencyId,
            validator: v980.V3MultiLocation,
            timeUnit: sts.option(() => v980.TimeUnit),
        })
    ),
    v990: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v990.CurrencyId,
            validator: v990.V3MultiLocation,
            timeUnit: sts.option(() => v990.TimeUnit),
        })
    ),
    v10000: new EventType(
        'Slp.Payout',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validator: v10000.V3MultiLocation,
            timeUnit: sts.option(() => v10000.TimeUnit),
        })
    ),
}

export const liquidize =  {
    name: 'Slp.Liquidize',
    v956: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            timeUnit: sts.option(() => v956.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
        })
    ),
    v962: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            timeUnit: sts.option(() => v962.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
        })
    ),
    v970: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            timeUnit: sts.option(() => v970.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
            amount: sts.option(() => sts.bigint()),
        })
    ),
    v972: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            timeUnit: sts.option(() => v972.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
            amount: sts.option(() => sts.bigint()),
        })
    ),
    v980: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            timeUnit: sts.option(() => v980.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
            amount: sts.option(() => sts.bigint()),
        })
    ),
    v990: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            timeUnit: sts.option(() => v990.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
            amount: sts.option(() => sts.bigint()),
        })
    ),
    v10000: new EventType(
        'Slp.Liquidize',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            timeUnit: sts.option(() => v10000.TimeUnit),
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
            amount: sts.option(() => sts.bigint()),
        })
    ),
}

export const chill =  {
    name: 'Slp.Chill',
    v956: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v956.H256,
        })
    ),
    v962: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v962.H256,
        })
    ),
    v970: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v970.H256,
        })
    ),
    v972: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v972.H256,
        })
    ),
    v980: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v980.H256,
        })
    ),
    v990: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v990.H256,
        })
    ),
    v10000: new EventType(
        'Slp.Chill',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
            queryId: sts.bigint(),
            queryIdHash: v10000.H256,
        })
    ),
}

export const transferBack =  {
    name: 'Slp.TransferBack',
    v956: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.V1MultiLocation,
            to: v956.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.V1MultiLocation,
            to: v962.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v970: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v970.CurrencyId,
            from: v970.V1MultiLocation,
            to: v970.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v972: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v972.CurrencyId,
            from: v972.V3MultiLocation,
            to: v972.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.V3MultiLocation,
            to: v980.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.V3MultiLocation,
            to: v990.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'Slp.TransferBack',
        sts.struct({
            currencyId: v10000.CurrencyId,
            from: v10000.V3MultiLocation,
            to: v10000.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const transferTo =  {
    name: 'Slp.TransferTo',
    v956: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.V1MultiLocation,
            to: v956.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.V1MultiLocation,
            to: v962.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v970: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v970.CurrencyId,
            from: v970.V1MultiLocation,
            to: v970.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v972: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v972.CurrencyId,
            from: v972.V3MultiLocation,
            to: v972.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.V3MultiLocation,
            to: v980.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.V3MultiLocation,
            to: v990.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'Slp.TransferTo',
        sts.struct({
            currencyId: v10000.CurrencyId,
            from: v10000.V3MultiLocation,
            to: v10000.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const delegatorAdded =  {
    name: 'Slp.DelegatorAdded',
    v956: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v956.CurrencyId,
            index: sts.number(),
            delegatorId: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v962.CurrencyId,
            index: sts.number(),
            delegatorId: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v970.CurrencyId,
            index: sts.number(),
            delegatorId: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v972.CurrencyId,
            index: sts.number(),
            delegatorId: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v980.CurrencyId,
            index: sts.number(),
            delegatorId: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v990.CurrencyId,
            index: sts.number(),
            delegatorId: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorAdded',
        sts.struct({
            currencyId: v10000.CurrencyId,
            index: sts.number(),
            delegatorId: v10000.V3MultiLocation,
        })
    ),
}

export const delegatorRemoved =  {
    name: 'Slp.DelegatorRemoved',
    v956: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegatorId: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegatorId: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegatorId: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegatorId: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegatorId: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegatorId: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorRemoved',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegatorId: v10000.V3MultiLocation,
        })
    ),
}

export const validatorsAdded =  {
    name: 'Slp.ValidatorsAdded',
    v956: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v956.CurrencyId,
            validatorId: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v962.CurrencyId,
            validatorId: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v970.CurrencyId,
            validatorId: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v972.CurrencyId,
            validatorId: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorId: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorId: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorsAdded',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorId: v10000.V3MultiLocation,
        })
    ),
}

export const validatorsRemoved =  {
    name: 'Slp.ValidatorsRemoved',
    v956: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v956.CurrencyId,
            validatorId: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v962.CurrencyId,
            validatorId: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v970.CurrencyId,
            validatorId: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v972.CurrencyId,
            validatorId: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorId: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorId: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorsRemoved',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorId: v10000.V3MultiLocation,
        })
    ),
}

export const refund =  {
    name: 'Slp.Refund',
    v956: new EventType(
        'Slp.Refund',
        sts.struct({
            currencyId: v956.CurrencyId,
            timeUnit: v956.TimeUnit,
            index: sts.number(),
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.Refund',
        sts.struct({
            currencyId: v962.CurrencyId,
            timeUnit: v962.TimeUnit,
            index: sts.number(),
            amount: sts.bigint(),
        })
    ),
    v970: new EventType(
        'Slp.Refund',
        sts.struct({
            currencyId: v970.CurrencyId,
            timeUnit: v970.TimeUnit,
            index: sts.number(),
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.Refund',
        sts.struct({
            currencyId: v980.CurrencyId,
            timeUnit: v980.TimeUnit,
            index: sts.number(),
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.Refund',
        sts.struct({
            currencyId: v990.CurrencyId,
            timeUnit: v990.TimeUnit,
            index: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const fundMoveFromExitToEntrance =  {
    name: 'Slp.FundMoveFromExitToEntrance',
    v956: new EventType(
        'Slp.FundMoveFromExitToEntrance',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.FundMoveFromExitToEntrance',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.FundMoveFromExitToEntrance',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.FundMoveFromExitToEntrance',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const timeUnitUpdated =  {
    name: 'Slp.TimeUnitUpdated',
    v956: new EventType(
        'Slp.TimeUnitUpdated',
        sts.struct({
            currencyId: v956.CurrencyId,
            old: sts.option(() => v956.TimeUnit),
            new: v956.TimeUnit,
        })
    ),
    v962: new EventType(
        'Slp.TimeUnitUpdated',
        sts.struct({
            currencyId: v962.CurrencyId,
            old: sts.option(() => v962.TimeUnit),
            new: v962.TimeUnit,
        })
    ),
    v970: new EventType(
        'Slp.TimeUnitUpdated',
        sts.struct({
            currencyId: v970.CurrencyId,
            old: sts.option(() => v970.TimeUnit),
            new: v970.TimeUnit,
        })
    ),
    v980: new EventType(
        'Slp.TimeUnitUpdated',
        sts.struct({
            currencyId: v980.CurrencyId,
            old: sts.option(() => v980.TimeUnit),
            new: v980.TimeUnit,
        })
    ),
    v990: new EventType(
        'Slp.TimeUnitUpdated',
        sts.struct({
            currencyId: v990.CurrencyId,
            old: sts.option(() => v990.TimeUnit),
            new: v990.TimeUnit,
        })
    ),
}

export const poolTokenIncreased =  {
    name: 'Slp.PoolTokenIncreased',
    v956: new EventType(
        'Slp.PoolTokenIncreased',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.PoolTokenIncreased',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.PoolTokenIncreased',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.PoolTokenIncreased',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const hostingFeeCharged =  {
    name: 'Slp.HostingFeeCharged',
    v956: new EventType(
        'Slp.HostingFeeCharged',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.HostingFeeCharged',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.HostingFeeCharged',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.HostingFeeCharged',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const poolTokenDecreased =  {
    name: 'Slp.PoolTokenDecreased',
    v956: new EventType(
        'Slp.PoolTokenDecreased',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'Slp.PoolTokenDecreased',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.PoolTokenDecreased',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.PoolTokenDecreased',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const feeSupplemented =  {
    name: 'Slp.FeeSupplemented',
    v956: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
            from: v956.V1MultiLocation,
            to: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
            from: v962.V1MultiLocation,
            to: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v970.CurrencyId,
            amount: sts.bigint(),
            from: v970.V1MultiLocation,
            to: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v972.CurrencyId,
            amount: sts.bigint(),
            from: v972.V3MultiLocation,
            to: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
            from: v980.V3MultiLocation,
            to: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
            from: v990.V3MultiLocation,
            to: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.FeeSupplemented',
        sts.struct({
            currencyId: v10000.CurrencyId,
            amount: sts.bigint(),
            from: v10000.V3MultiLocation,
            to: v10000.V3MultiLocation,
        })
    ),
}

export const validatorsByDelegatorSet =  {
    name: 'Slp.ValidatorsByDelegatorSet',
    v956: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            validatorsList: sts.array(() => sts.tuple(() => [v956.V1MultiLocation, v956.H256])),
        })
    ),
    v962: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            validatorsList: sts.array(() => sts.tuple(() => [v962.V1MultiLocation, v962.H256])),
            delegatorId: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            validatorsList: sts.array(() => sts.tuple(() => [v970.V1MultiLocation, v970.H256])),
            delegatorId: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v972.CurrencyId,
            validatorsList: sts.array(() => sts.tuple(() => [v972.V3MultiLocation, v972.H256])),
            delegatorId: v972.V3MultiLocation,
        })
    ),
    v974: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v974.CurrencyId,
            validatorsList: sts.array(() => v974.V3MultiLocation),
            delegatorId: v974.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorsList: sts.array(() => v980.V3MultiLocation),
            delegatorId: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorsList: sts.array(() => v990.V3MultiLocation),
            delegatorId: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorsByDelegatorSet',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorsList: sts.array(() => v10000.V3MultiLocation),
            delegatorId: v10000.V3MultiLocation,
        })
    ),
}

export const xcmDestWeightAndFeeSet =  {
    name: 'Slp.XcmDestWeightAndFeeSet',
    v956: new EventType(
        'Slp.XcmDestWeightAndFeeSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            operation: v956.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
    v962: new EventType(
        'Slp.XcmDestWeightAndFeeSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            operation: v962.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
    v970: new EventType(
        'Slp.XcmDestWeightAndFeeSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            operation: v970.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
    v972: new EventType(
        'Slp.XcmDestWeightAndFeeSet',
        sts.struct({
            currencyId: v972.CurrencyId,
            operation: v972.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [v972.Weight, sts.bigint()])),
        })
    ),
    v980: new EventType(
        'Slp.XcmDestWeightAndFeeSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            operation: v980.XcmOperation,
            weightAndFee: sts.option(() => sts.tuple(() => [v980.Weight, sts.bigint()])),
        })
    ),
}

export const operateOriginSet =  {
    name: 'Slp.OperateOriginSet',
    v956: new EventType(
        'Slp.OperateOriginSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            operator: sts.option(() => v956.AccountId32),
        })
    ),
    v962: new EventType(
        'Slp.OperateOriginSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            operator: sts.option(() => v962.AccountId32),
        })
    ),
    v980: new EventType(
        'Slp.OperateOriginSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            operator: sts.option(() => v980.AccountId32),
        })
    ),
    v990: new EventType(
        'Slp.OperateOriginSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            operator: sts.option(() => v990.AccountId32),
        })
    ),
}

export const feeSourceSet =  {
    name: 'Slp.FeeSourceSet',
    v956: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v956.V1MultiLocation, sts.bigint()])),
        })
    ),
    v962: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v962.V1MultiLocation, sts.bigint()])),
        })
    ),
    v970: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v970.V1MultiLocation, sts.bigint()])),
        })
    ),
    v972: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v972.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v972.V3MultiLocation, sts.bigint()])),
        })
    ),
    v980: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v980.V3MultiLocation, sts.bigint()])),
        })
    ),
    v990: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v990.V3MultiLocation, sts.bigint()])),
        })
    ),
    v10000: new EventType(
        'Slp.FeeSourceSet',
        sts.struct({
            currencyId: v10000.CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [v10000.V3MultiLocation, sts.bigint()])),
        })
    ),
}

export const delegatorLedgerSet =  {
    name: 'Slp.DelegatorLedgerSet',
    v956: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            delegator: v956.V1MultiLocation,
            ledger: sts.option(() => v956.Ledger),
        })
    ),
    v958: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v958.CurrencyId,
            delegator: v958.V1MultiLocation,
            ledger: sts.option(() => v958.Ledger),
        })
    ),
    v962: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            delegator: v962.V1MultiLocation,
            ledger: sts.option(() => v962.Ledger),
        })
    ),
    v970: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            delegator: v970.V1MultiLocation,
            ledger: sts.option(() => v970.Ledger),
        })
    ),
    v972: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v972.CurrencyId,
            delegator: v972.V3MultiLocation,
            ledger: sts.option(() => v972.Ledger),
        })
    ),
    v980: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            delegator: v980.V3MultiLocation,
            ledger: sts.option(() => v980.Ledger),
        })
    ),
    v990: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            delegator: v990.V3MultiLocation,
            ledger: sts.option(() => v990.Ledger),
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorLedgerSet',
        sts.struct({
            currencyId: v10000.CurrencyId,
            delegator: v10000.V3MultiLocation,
            ledger: sts.option(() => v10000.Ledger),
        })
    ),
}

export const delegatorLedgerQueryResponseConfirmed =  {
    name: 'Slp.DelegatorLedgerQueryResponseConfirmed',
    v956: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v956.LedgerUpdateEntry,
        })
    ),
    v958: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v958.LedgerUpdateEntry,
        })
    ),
    v962: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v962.LedgerUpdateEntry,
        })
    ),
    v970: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v970.LedgerUpdateEntry,
        })
    ),
    v972: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v972.LedgerUpdateEntry,
        })
    ),
    v980: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v980.LedgerUpdateEntry,
        })
    ),
    v990: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v990.LedgerUpdateEntry,
        })
    ),
    v10000: new EventType(
        'Slp.DelegatorLedgerQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v10000.LedgerUpdateEntry,
        })
    ),
}

export const delegatorLedgerQueryResponseFailSuccessfully =  {
    name: 'Slp.DelegatorLedgerQueryResponseFailSuccessfully',
    v956: new EventType(
        'Slp.DelegatorLedgerQueryResponseFailSuccessfully',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const validatorsByDelegatorQueryResponseConfirmed =  {
    name: 'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
    v956: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v956.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v962: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v962.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v970: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v970.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v972: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v972.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v974: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v974.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v980: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v980.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v990: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v990.ValidatorsByDelegatorUpdateEntry,
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseConfirmed',
        sts.struct({
            queryId: sts.bigint(),
            entry: v10000.ValidatorsByDelegatorUpdateEntry,
        })
    ),
}

export const validatorsByDelegatorQueryResponseFailSuccessfully =  {
    name: 'Slp.ValidatorsByDelegatorQueryResponseFailSuccessfully',
    v956: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseFailSuccessfully',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const minimumsMaximumsSet =  {
    name: 'Slp.MinimumsMaximumsSet',
    v956: new EventType(
        'Slp.MinimumsMaximumsSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            minimumsAndMaximums: sts.option(() => v956.MinimumsMaximums),
        })
    ),
    v962: new EventType(
        'Slp.MinimumsMaximumsSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            minimumsAndMaximums: sts.option(() => v962.MinimumsMaximums),
        })
    ),
    v980: new EventType(
        'Slp.MinimumsMaximumsSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            minimumsAndMaximums: sts.option(() => v980.MinimumsMaximums),
        })
    ),
    v990: new EventType(
        'Slp.MinimumsMaximumsSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            minimumsAndMaximums: sts.option(() => v990.MinimumsMaximums),
        })
    ),
}

export const currencyDelaysSet =  {
    name: 'Slp.CurrencyDelaysSet',
    v956: new EventType(
        'Slp.CurrencyDelaysSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            delays: sts.option(() => v956.Delays),
        })
    ),
    v962: new EventType(
        'Slp.CurrencyDelaysSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            delays: sts.option(() => v962.Delays),
        })
    ),
    v970: new EventType(
        'Slp.CurrencyDelaysSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            delays: sts.option(() => v970.Delays),
        })
    ),
    v980: new EventType(
        'Slp.CurrencyDelaysSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            delays: sts.option(() => v980.Delays),
        })
    ),
    v990: new EventType(
        'Slp.CurrencyDelaysSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            delays: sts.option(() => v990.Delays),
        })
    ),
}

export const hostingFeesSet =  {
    name: 'Slp.HostingFeesSet',
    v956: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v956.Permill, v956.V1MultiLocation])),
        })
    ),
    v962: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v962.Permill, v962.V1MultiLocation])),
        })
    ),
    v970: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v970.Permill, v970.V1MultiLocation])),
        })
    ),
    v972: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v972.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v972.Permill, v972.V3MultiLocation])),
        })
    ),
    v980: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v980.Permill, v980.V3MultiLocation])),
        })
    ),
    v990: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v990.Permill, v990.V3MultiLocation])),
        })
    ),
    v10000: new EventType(
        'Slp.HostingFeesSet',
        sts.struct({
            currencyId: v10000.CurrencyId,
            fees: sts.option(() => sts.tuple(() => [v10000.Permill, v10000.V3MultiLocation])),
        })
    ),
}

export const currencyTuneExchangeRateLimitSet =  {
    name: 'Slp.CurrencyTuneExchangeRateLimitSet',
    v956: new EventType(
        'Slp.CurrencyTuneExchangeRateLimitSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            tuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v956.Permill])),
        })
    ),
    v962: new EventType(
        'Slp.CurrencyTuneExchangeRateLimitSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            tuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v962.Permill])),
        })
    ),
    v980: new EventType(
        'Slp.CurrencyTuneExchangeRateLimitSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            tuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v980.Permill])),
        })
    ),
    v990: new EventType(
        'Slp.CurrencyTuneExchangeRateLimitSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            tuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), v990.Permill])),
        })
    ),
}

export const ongoingTimeUnitUpdateIntervalSet =  {
    name: 'Slp.OngoingTimeUnitUpdateIntervalSet',
    v956: new EventType(
        'Slp.OngoingTimeUnitUpdateIntervalSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            interval: sts.option(() => sts.number()),
        })
    ),
    v962: new EventType(
        'Slp.OngoingTimeUnitUpdateIntervalSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            interval: sts.option(() => sts.number()),
        })
    ),
    v980: new EventType(
        'Slp.OngoingTimeUnitUpdateIntervalSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            interval: sts.option(() => sts.number()),
        })
    ),
    v990: new EventType(
        'Slp.OngoingTimeUnitUpdateIntervalSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            interval: sts.option(() => sts.number()),
        })
    ),
}

export const supplementFeeAccountWhitelistAdded =  {
    name: 'Slp.SupplementFeeAccountWhitelistAdded',
    v956: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.SupplementFeeAccountWhitelistAdded',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const supplementFeeAccountWhitelistRemoved =  {
    name: 'Slp.SupplementFeeAccountWhitelistRemoved',
    v956: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.V1MultiLocation,
        })
    ),
    v962: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.V1MultiLocation,
        })
    ),
    v970: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
        })
    ),
    v972: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.SupplementFeeAccountWhitelistRemoved',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const convertAsset =  {
    name: 'Slp.ConvertAsset',
    v970: new EventType(
        'Slp.ConvertAsset',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v972: new EventType(
        'Slp.ConvertAsset',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slp.ConvertAsset',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slp.ConvertAsset',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'Slp.ConvertAsset',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const delegatorLedgerQueryResponseFailed =  {
    name: 'Slp.DelegatorLedgerQueryResponseFailed',
    v972: new EventType(
        'Slp.DelegatorLedgerQueryResponseFailed',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const validatorsByDelegatorQueryResponseFailed =  {
    name: 'Slp.ValidatorsByDelegatorQueryResponseFailed',
    v972: new EventType(
        'Slp.ValidatorsByDelegatorQueryResponseFailed',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const validatorsReset =  {
    name: 'Slp.ValidatorsReset',
    v974: new EventType(
        'Slp.ValidatorsReset',
        sts.struct({
            currencyId: v974.CurrencyId,
            validatorList: sts.array(() => v974.V3MultiLocation),
        })
    ),
    v980: new EventType(
        'Slp.ValidatorsReset',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorList: sts.array(() => v980.V3MultiLocation),
        })
    ),
    v990: new EventType(
        'Slp.ValidatorsReset',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorList: sts.array(() => v990.V3MultiLocation),
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorsReset',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorList: sts.array(() => v10000.V3MultiLocation),
        })
    ),
}

export const validatorBoostListSet =  {
    name: 'Slp.ValidatorBoostListSet',
    v974: new EventType(
        'Slp.ValidatorBoostListSet',
        sts.struct({
            currencyId: v974.CurrencyId,
            validatorBoostList: sts.array(() => sts.tuple(() => [v974.V3MultiLocation, sts.number()])),
        })
    ),
    v980: new EventType(
        'Slp.ValidatorBoostListSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            validatorBoostList: sts.array(() => sts.tuple(() => [v980.V3MultiLocation, sts.number()])),
        })
    ),
    v990: new EventType(
        'Slp.ValidatorBoostListSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            validatorBoostList: sts.array(() => sts.tuple(() => [v990.V3MultiLocation, sts.number()])),
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorBoostListSet',
        sts.struct({
            currencyId: v10000.CurrencyId,
            validatorBoostList: sts.array(() => sts.tuple(() => [v10000.V3MultiLocation, sts.number()])),
        })
    ),
}

export const validatorBoostListAdded =  {
    name: 'Slp.ValidatorBoostListAdded',
    v974: new EventType(
        'Slp.ValidatorBoostListAdded',
        sts.struct({
            currencyId: v974.CurrencyId,
            who: v974.V3MultiLocation,
            dueBlockNumber: sts.number(),
        })
    ),
    v980: new EventType(
        'Slp.ValidatorBoostListAdded',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
            dueBlockNumber: sts.number(),
        })
    ),
    v990: new EventType(
        'Slp.ValidatorBoostListAdded',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
            dueBlockNumber: sts.number(),
        })
    ),
    v10000: new EventType(
        'Slp.ValidatorBoostListAdded',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
            dueBlockNumber: sts.number(),
        })
    ),
}

export const removedFromBoostList =  {
    name: 'Slp.RemovedFromBoostList',
    v974: new EventType(
        'Slp.RemovedFromBoostList',
        sts.struct({
            currencyId: v974.CurrencyId,
            who: v974.V3MultiLocation,
        })
    ),
    v980: new EventType(
        'Slp.RemovedFromBoostList',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.V3MultiLocation,
        })
    ),
    v990: new EventType(
        'Slp.RemovedFromBoostList',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.V3MultiLocation,
        })
    ),
    v10000: new EventType(
        'Slp.RemovedFromBoostList',
        sts.struct({
            currencyId: v10000.CurrencyId,
            who: v10000.V3MultiLocation,
        })
    ),
}

export const outdatedValidatorBoostListCleaned =  {
    name: 'Slp.OutdatedValidatorBoostListCleaned',
    v996: new EventType(
        'Slp.OutdatedValidatorBoostListCleaned',
        sts.struct({
            currencyId: v996.CurrencyId,
            page: sts.number(),
            removeNum: sts.number(),
            numLeft: sts.number(),
        })
    ),
}

export const burnFeeFailed =  {
    name: 'Slp.BurnFeeFailed',
    v998: new EventType(
        'Slp.BurnFeeFailed',
        sts.struct({
            currencyId: v998.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}
