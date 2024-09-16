import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v222 from '../v222'

export const bindEvmAddress =  {
    name: 'EVMAccounts.bind_evm_address',
    /**
     * See [`Pallet::bind_evm_address`].
     */
    v222: new CallType(
        'EVMAccounts.bind_evm_address',
        sts.unit()
    ),
}

export const addContractDeployer =  {
    name: 'EVMAccounts.add_contract_deployer',
    /**
     * See [`Pallet::add_contract_deployer`].
     */
    v222: new CallType(
        'EVMAccounts.add_contract_deployer',
        sts.struct({
            address: v222.H160,
        })
    ),
}

export const removeContractDeployer =  {
    name: 'EVMAccounts.remove_contract_deployer',
    /**
     * See [`Pallet::remove_contract_deployer`].
     */
    v222: new CallType(
        'EVMAccounts.remove_contract_deployer',
        sts.struct({
            address: v222.H160,
        })
    ),
}

export const renounceContractDeployer =  {
    name: 'EVMAccounts.renounce_contract_deployer',
    /**
     * See [`Pallet::renounce_contract_deployer`].
     */
    v222: new CallType(
        'EVMAccounts.renounce_contract_deployer',
        sts.unit()
    ),
}
