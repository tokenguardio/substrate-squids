import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1002000 from '../v1002000'

export const controlAutoMigration =  {
    name: 'StateTrieMigration.control_auto_migration',
    /**
     * See [`Pallet::control_auto_migration`].
     */
    v1002000: new CallType(
        'StateTrieMigration.control_auto_migration',
        sts.struct({
            maybeConfig: sts.option(() => v1002000.MigrationLimits),
        })
    ),
}

export const continueMigrate =  {
    name: 'StateTrieMigration.continue_migrate',
    /**
     * See [`Pallet::continue_migrate`].
     */
    v1002000: new CallType(
        'StateTrieMigration.continue_migrate',
        sts.struct({
            limits: v1002000.MigrationLimits,
            realSizeUpper: sts.number(),
            witnessTask: v1002000.MigrationTask,
        })
    ),
}

export const migrateCustomTop =  {
    name: 'StateTrieMigration.migrate_custom_top',
    /**
     * See [`Pallet::migrate_custom_top`].
     */
    v1002000: new CallType(
        'StateTrieMigration.migrate_custom_top',
        sts.struct({
            keys: sts.array(() => sts.bytes()),
            witnessSize: sts.number(),
        })
    ),
}

export const migrateCustomChild =  {
    name: 'StateTrieMigration.migrate_custom_child',
    /**
     * See [`Pallet::migrate_custom_child`].
     */
    v1002000: new CallType(
        'StateTrieMigration.migrate_custom_child',
        sts.struct({
            root: sts.bytes(),
            childKeys: sts.array(() => sts.bytes()),
            totalSize: sts.number(),
        })
    ),
}

export const setSignedMaxLimits =  {
    name: 'StateTrieMigration.set_signed_max_limits',
    /**
     * See [`Pallet::set_signed_max_limits`].
     */
    v1002000: new CallType(
        'StateTrieMigration.set_signed_max_limits',
        sts.struct({
            limits: v1002000.MigrationLimits,
        })
    ),
}

export const forceSetProgress =  {
    name: 'StateTrieMigration.force_set_progress',
    /**
     * See [`Pallet::force_set_progress`].
     */
    v1002000: new CallType(
        'StateTrieMigration.force_set_progress',
        sts.struct({
            progressTop: v1002000.Progress,
            progressChild: v1002000.Progress,
        })
    ),
}
