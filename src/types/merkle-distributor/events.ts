import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v954 from '../v954'

export const create =  {
    name: 'MerkleDistributor.Create',
    /**
     * create a merkle distributor. \ [merkle distributor id, merkle tree root, total reward balance]
     */
    v954: new EventType(
        'MerkleDistributor.Create',
        sts.tuple([sts.number(), v954.H256, sts.bigint()])
    ),
}

export const claim =  {
    name: 'MerkleDistributor.Claim',
    /**
     * claim reward. \[merkle distributor id, account, balance]
     */
    v954: new EventType(
        'MerkleDistributor.Claim',
        sts.tuple([sts.number(), v954.AccountId32, sts.bigint()])
    ),
}

export const withdraw =  {
    name: 'MerkleDistributor.Withdraw',
    /**
     * withdraw reward. \ [merkle distributor id, account, balance]
     */
    v954: new EventType(
        'MerkleDistributor.Withdraw',
        sts.tuple([sts.number(), v954.AccountId32, sts.bigint()])
    ),
}

export const addToWhiteList =  {
    name: 'MerkleDistributor.AddToWhiteList',
    /**
     * add account who can create merkle distributor. \ [account]
     */
    v954: new EventType(
        'MerkleDistributor.AddToWhiteList',
        v954.AccountId32
    ),
}

export const removeFromWhiteList =  {
    name: 'MerkleDistributor.RemoveFromWhiteList',
    /**
     * remove account from the set who can create merkle distributor. \ [account]
     */
    v954: new EventType(
        'MerkleDistributor.RemoveFromWhiteList',
        v954.AccountId32
    ),
}
