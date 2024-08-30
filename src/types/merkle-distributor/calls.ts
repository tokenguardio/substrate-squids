import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v954 from '../v954'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const addToCreateWhitelist =  {
    name: 'MerkleDistributor.add_to_create_whitelist',
    v954: new CallType(
        'MerkleDistributor.add_to_create_whitelist',
        sts.struct({
            account: v954.AccountId32,
        })
    ),
}

export const removeFromCreateWhitelist =  {
    name: 'MerkleDistributor.remove_from_create_whitelist',
    v954: new CallType(
        'MerkleDistributor.remove_from_create_whitelist',
        sts.struct({
            account: v954.AccountId32,
        })
    ),
}

export const createMerkleDistributor =  {
    name: 'MerkleDistributor.create_merkle_distributor',
    /**
     * `create_merkle_distributor` will create a merkle distributor,
     *  which allow specified users claim asset.
     * 
     * The dispatch origin for this call must be `Signed` by root.
     * 
     * - `merkle_root`: The root of a merkle tree.
     * - `description`: About the purpose of this distribution.
     * - `distribute_currency`: The id of currency about this distribution.
     * - `distribute_amount`: The total currency amount of this distribution.
     */
    v954: new CallType(
        'MerkleDistributor.create_merkle_distributor',
        sts.struct({
            merkleRoot: v954.H256,
            description: sts.bytes(),
            distributeCurrency: v954.CurrencyId,
            distributeAmount: sts.bigint(),
        })
    ),
    /**
     * `create_merkle_distributor` will create a merkle distributor,
     *  which allow specified users claim asset.
     * 
     * The dispatch origin for this call must be `Signed` by root.
     * 
     * - `merkle_root`: The root of a merkle tree.
     * - `description`: About the purpose of this distribution.
     * - `distribute_currency`: The id of currency about this distribution.
     * - `distribute_amount`: The total currency amount of this distribution.
     */
    v956: new CallType(
        'MerkleDistributor.create_merkle_distributor',
        sts.struct({
            merkleRoot: v956.H256,
            description: sts.bytes(),
            distributeCurrency: v956.CurrencyId,
            distributeAmount: sts.bigint(),
        })
    ),
    /**
     * `create_merkle_distributor` will create a merkle distributor,
     *  which allow specified users claim asset.
     * 
     * The dispatch origin for this call must be `Signed` by root.
     * 
     * - `merkle_root`: The root of a merkle tree.
     * - `description`: About the purpose of this distribution.
     * - `distribute_currency`: The id of currency about this distribution.
     * - `distribute_amount`: The total currency amount of this distribution.
     */
    v962: new CallType(
        'MerkleDistributor.create_merkle_distributor',
        sts.struct({
            merkleRoot: v962.H256,
            description: sts.bytes(),
            distributeCurrency: v962.CurrencyId,
            distributeAmount: sts.bigint(),
        })
    ),
    /**
     * `create_merkle_distributor` will create a merkle distributor,
     *  which allow specified users claim asset.
     * 
     * The dispatch origin for this call must be `Signed` by root.
     * 
     * - `merkle_root`: The root of a merkle tree.
     * - `description`: About the purpose of this distribution.
     * - `distribute_currency`: The id of currency about this distribution.
     * - `distribute_amount`: The total currency amount of this distribution.
     */
    v980: new CallType(
        'MerkleDistributor.create_merkle_distributor',
        sts.struct({
            merkleRoot: v980.H256,
            description: sts.bytes(),
            distributeCurrency: v980.CurrencyId,
            distributeAmount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::create_merkle_distributor`].
     */
    v990: new CallType(
        'MerkleDistributor.create_merkle_distributor',
        sts.struct({
            merkleRoot: v990.H256,
            description: sts.bytes(),
            distributeCurrency: v990.CurrencyId,
            distributeAmount: sts.bigint(),
        })
    ),
}

export const claim =  {
    name: 'MerkleDistributor.claim',
    /**
     * `claim` Claim rewards through user information and merkle proof.
     * 
     * - `merkle_distributor_id`: ID of a merkle distributor.
     * - `index`: The index of the merkle tree leaf.
     * - `account`: The owner's account of merkle proof.
     * - `merkle_proof`: The hashes with merkle tree leaf can get merkle tree root.
     */
    v954: new CallType(
        'MerkleDistributor.claim',
        sts.struct({
            merkleDistributorId: sts.number(),
            index: sts.number(),
            account: v954.MultiAddress,
            amount: sts.bigint(),
            merkleProof: sts.array(() => v954.H256),
        })
    ),
}

export const charge =  {
    name: 'MerkleDistributor.charge',
    /**
     * Charge currency to the account of merkle distributor
     * 
     * `merkle_distributor_id`: ID of a merkle distributor.
     */
    v954: new CallType(
        'MerkleDistributor.charge',
        sts.struct({
            merkleDistributorId: sts.number(),
        })
    ),
}

export const emergencyWithdraw =  {
    name: 'MerkleDistributor.emergency_withdraw',
    v954: new CallType(
        'MerkleDistributor.emergency_withdraw',
        sts.struct({
            merkleDistributorId: sts.number(),
            recipient: v954.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}
