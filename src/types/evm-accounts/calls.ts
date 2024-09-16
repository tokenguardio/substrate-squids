import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const bindEvmAddress =  {
    name: 'EVMAccounts.bind_evm_address',
    /**
     * Binds a Substrate address to EVM address.
     * After binding, the EVM is able to convert an EVM address to the original Substrate
     * address. Without binding, the EVM converts an EVM address to a truncated Substrate
     * address, which doesn't correspond to the origin address.
     * 
     * Binding an address is not necessary for interacting with the EVM.
     * 
     * Parameters:
     * - `origin`: Substrate account binding an address
     * 
     * Emits `EvmAccountBound` event when successful.
     */
    v12001: new CallType(
        'EVMAccounts.bind_evm_address',
        sts.unit()
    ),
}

export const addContractDeployer =  {
    name: 'EVMAccounts.add_contract_deployer',
    /**
     * Adds an EVM address to the list of addresses that are allowed to deploy smart contracts.
     * 
     * Parameters:
     * - `origin`: Substrate account whitelisting an address. Must be `ControllerOrigin`.
     * - `address`: EVM address that is whitelisted
     * 
     * Emits `DeployerAdded` event when successful.
     */
    v12001: new CallType(
        'EVMAccounts.add_contract_deployer',
        sts.struct({
            address: v12001.H160,
        })
    ),
}

export const removeContractDeployer =  {
    name: 'EVMAccounts.remove_contract_deployer',
    /**
     * Removes an EVM address from the list of addresses that are allowed to deploy smart
     * contracts.
     * 
     * Parameters:
     * - `origin`: Substrate account removing the EVM address from the whitelist. Must be
     *   `ControllerOrigin`.
     * - `address`: EVM address that is removed from the whitelist
     * 
     * Emits `DeployerRemoved` event when successful.
     */
    v12001: new CallType(
        'EVMAccounts.remove_contract_deployer',
        sts.struct({
            address: v12001.H160,
        })
    ),
}

export const renounceContractDeployer =  {
    name: 'EVMAccounts.renounce_contract_deployer',
    /**
     * Removes the account's EVM address from the list of addresses that are allowed to deploy
     * smart contracts. Based on the best practices, this extrinsic can be called by any
     * whitelisted account to renounce their own permission.
     * 
     * Parameters:
     * - `origin`: Substrate account removing their EVM address from the whitelist.
     * 
     * Emits `DeployerRemoved` event when successful.
     */
    v12001: new CallType(
        'EVMAccounts.renounce_contract_deployer',
        sts.unit()
    ),
}
