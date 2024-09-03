import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v234 from '../v234'

export const migrated =  {
    name: 'StateTrieMigration.Migrated',
    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    v234: new EventType(
        'StateTrieMigration.Migrated',
        sts.struct({
            top: sts.number(),
            child: sts.number(),
            compute: v234.MigrationCompute,
        })
    ),
}

export const slashed =  {
    name: 'StateTrieMigration.Slashed',
    /**
     * Some account got slashed by the given amount.
     */
    v234: new EventType(
        'StateTrieMigration.Slashed',
        sts.struct({
            who: v234.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const autoMigrationFinished =  {
    name: 'StateTrieMigration.AutoMigrationFinished',
    /**
     * The auto migration task finished.
     */
    v234: new EventType(
        'StateTrieMigration.AutoMigrationFinished',
        sts.unit()
    ),
}

export const halted =  {
    name: 'StateTrieMigration.Halted',
    /**
     * Migration got halted due to an error or miss-configuration.
     */
    v234: new EventType(
        'StateTrieMigration.Halted',
        sts.struct({
            error: v234.Error,
        })
    ),
}
