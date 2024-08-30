import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const bound =  {
    name: 'EVMAccounts.Bound',
    /**
     * Binding was created.
     */
    v12001: new EventType(
        'EVMAccounts.Bound',
        sts.struct({
            account: v12001.AccountId32,
            address: v12001.H160,
        })
    ),
}

export const deployerAdded =  {
    name: 'EVMAccounts.DeployerAdded',
    /**
     * Deployer was added.
     */
    v12001: new EventType(
        'EVMAccounts.DeployerAdded',
        sts.struct({
            who: v12001.H160,
        })
    ),
}

export const deployerRemoved =  {
    name: 'EVMAccounts.DeployerRemoved',
    /**
     * Deployer was removed.
     */
    v12001: new EventType(
        'EVMAccounts.DeployerRemoved',
        sts.struct({
            who: v12001.H160,
        })
    ),
}
