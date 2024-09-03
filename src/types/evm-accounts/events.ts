import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v222 from '../v222'

export const bound =  {
    name: 'EVMAccounts.Bound',
    /**
     * Binding was created.
     */
    v222: new EventType(
        'EVMAccounts.Bound',
        sts.struct({
            account: v222.AccountId32,
            address: v222.H160,
        })
    ),
}

export const deployerAdded =  {
    name: 'EVMAccounts.DeployerAdded',
    /**
     * Deployer was added.
     */
    v222: new EventType(
        'EVMAccounts.DeployerAdded',
        sts.struct({
            who: v222.H160,
        })
    ),
}

export const deployerRemoved =  {
    name: 'EVMAccounts.DeployerRemoved',
    /**
     * Deployer was removed.
     */
    v222: new EventType(
        'EVMAccounts.DeployerRemoved',
        sts.struct({
            who: v222.H160,
        })
    ),
}
