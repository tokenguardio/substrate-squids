import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v59 from '../v59'
import * as v68 from '../v68'

export const callOldWeight =  {
    name: 'Contracts.call_old_weight',
    /**
     * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
     */
    v59: new CallType(
        'Contracts.call_old_weight',
        sts.struct({
            dest: v59.MultiAddress,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        })
    ),
}

export const instantiateWithCodeOldWeight =  {
    name: 'Contracts.instantiate_with_code_old_weight',
    /**
     * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
     */
    v59: new CallType(
        'Contracts.instantiate_with_code_old_weight',
        sts.struct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        })
    ),
}

export const instantiateOldWeight =  {
    name: 'Contracts.instantiate_old_weight',
    /**
     * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
     */
    v59: new CallType(
        'Contracts.instantiate_old_weight',
        sts.struct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: v59.H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        })
    ),
}

export const uploadCode =  {
    name: 'Contracts.upload_code',
    /**
     * Upload new `code` without instantiating a contract from it.
     * 
     * If the code does not already exist a deposit is reserved from the caller
     * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
     * depends on the instrumented size of the the supplied `code`.
     * 
     * If the code already exists in storage it will still return `Ok` and upgrades
     * the in storage version to the current
     * [`InstructionWeights::version`](InstructionWeights).
     * 
     * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
     *   then the only way to use this code is to delegate call into it from an offchain
     *   execution. Set to [`Determinism::Deterministic`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    v59: new CallType(
        'Contracts.upload_code',
        sts.struct({
            code: sts.bytes(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            determinism: v59.Determinism,
        })
    ),
    /**
     * See [`Pallet::upload_code`].
     */
    v68: new CallType(
        'Contracts.upload_code',
        sts.struct({
            code: sts.bytes(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            determinism: v68.Determinism,
        })
    ),
}

export const removeCode =  {
    name: 'Contracts.remove_code',
    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    v59: new CallType(
        'Contracts.remove_code',
        sts.struct({
            codeHash: v59.H256,
        })
    ),
}

export const setCode =  {
    name: 'Contracts.set_code',
    /**
     * Privileged function that changes the code of an existing contract.
     * 
     * This takes care of updating refcounts and all other necessary operations. Returns
     * an error if either the `code_hash` or `dest` do not exist.
     * 
     * # Note
     * 
     * This does **not** change the address of the contract in question. This means
     * that the contract address is no longer derived from its code hash after calling
     * this dispatchable.
     */
    v59: new CallType(
        'Contracts.set_code',
        sts.struct({
            dest: v59.MultiAddress,
            codeHash: v59.H256,
        })
    ),
}

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

export const instantiateWithCode =  {
    name: 'Contracts.instantiate_with_code',
    /**
     * Instantiates a new contract from the supplied `code` optionally transferring
     * some balance.
     * 
     * This dispatchable has the same effect as calling [`Self::upload_code`] +
     * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
     * also check the documentation of [`Self::upload_code`].
     * 
     * # Parameters
     * 
     * * `value`: The balance to transfer from the `origin` to the newly created contract.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
     *   from the caller to pay for the storage consumed.
     * * `code`: The contract code to deploy in raw bytes.
     * * `data`: The input data to pass to the contract constructor.
     * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
     * 
     * Instantiation is executed as follows:
     * 
     * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
     *   code.
     * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
     * - The destination address is computed based on the sender, code_hash and the salt.
     * - The smart-contract account is created at the computed address.
     * - The `value` is transferred to the new account.
     * - The `deploy` function is executed in the context of the newly-created account.
     */
    v59: new CallType(
        'Contracts.instantiate_with_code',
        sts.struct({
            value: sts.bigint(),
            gasLimit: v59.Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        })
    ),
}

export const instantiate =  {
    name: 'Contracts.instantiate',
    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    v59: new CallType(
        'Contracts.instantiate',
        sts.struct({
            value: sts.bigint(),
            gasLimit: v59.Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: v59.H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        })
    ),
}

export const migrate =  {
    name: 'Contracts.migrate',
    /**
     * See [`Pallet::migrate`].
     */
    v68: new CallType(
        'Contracts.migrate',
        sts.struct({
            weightLimit: v68.Weight,
        })
    ),
}
