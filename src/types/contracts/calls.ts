import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v59 from '../v59'

export const call =  {
    name: 'Contracts.call',
    /**
     * Makes a call to an account, optionally transferring some balance.
     * 
     * # Parameters
     * 
     * * `dest`: Address of the contract to call.
     * * `value`: The balance to transfer from the `origin` to `dest`.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
     *   caller to pay for the storage consumed.
     * * `data`: The input data to pass to the contract.
     * 
     * * If the account is a smart-contract account, the associated code will be
     * executed and any value will be transferred.
     * * If the account is a regular account, any value will be transferred.
     * * If no account exists and the call value is not less than `existential_deposit`,
     * a regular account will be created and any value will be transferred.
     */
    v59: new CallType(
        'Contracts.call',
        sts.struct({
            dest: v59.MultiAddress,
            value: sts.bigint(),
            gasLimit: v59.Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        })
    ),
}
