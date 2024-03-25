import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1 from './v1'
import * as v3 from './v3'
import * as v4 from './v4'
import * as v9 from './v9'
import * as v12 from './v12'
import * as v15 from './v15'
import * as v16 from './v16'
import * as v17 from './v17'
import * as v23 from './v23'
import * as v30 from './v30'
import * as v33 from './v33'
import * as v43 from './v43'
import * as v49 from './v49'
import * as v52 from './v52'
import * as v55 from './v55'
import * as v61 from './v61'
import * as v64 from './v64'
import * as v66 from './v66'
import * as v68 from './v68'
import * as v70 from './v70'
import * as v72 from './v72'
import * as v74 from './v74'
import * as v77 from './v77'
import * as v79 from './v79'
import * as v82 from './v82'

export class AssetsAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'dec6aca263f1b254f4e1f2c19f138a595b9f6914e2e28b6841961a6a24518d9f'
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get asV15(): AssetsAccountStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get isV64(): boolean {
        return this.getTypeHash() === 'c101916616470361869ffc454e1716a26043820583af00df688c1a63340d6f00'
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get asV64(): AssetsAccountStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  The holdings of a specific account for a specific asset.
 */
export interface AssetsAccountStorageV15 {
    get(key1: bigint, key2: Uint8Array): Promise<(v15.AssetAccount | undefined)>
    getAll(): Promise<v15.AssetAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v15.AssetAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v15.AssetAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v15.AssetAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v15.AssetAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v15.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v15.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v15.AssetAccount][]>
}

/**
 *  The holdings of a specific account for a specific asset.
 */
export interface AssetsAccountStorageV64 {
    get(key1: bigint, key2: Uint8Array): Promise<(v64.AssetAccount | undefined)>
    getAll(): Promise<v64.AssetAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v64.AssetAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v64.AssetAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v64.AssetAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v64.AssetAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v64.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v64.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v64.AssetAccount][]>
}

export class AssetsApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Approved balance transfers. First balance is the amount approved for transfer. Second
     *  is the amount of `T::Currency` reserved for storing this.
     *  First key is the asset ID, second key is the owner and third key is the delegate.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'e181a040aa893d48be2d310d45d7896de63efce4a62f2ac85888064719e4bbc6'
    }

    /**
     *  Approved balance transfers. First balance is the amount approved for transfer. Second
     *  is the amount of `T::Currency` reserved for storing this.
     *  First key is the asset ID, second key is the owner and third key is the delegate.
     */
    get asV15(): AssetsApprovalsStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Approved balance transfers. First balance is the amount approved for transfer. Second
 *  is the amount of `T::Currency` reserved for storing this.
 *  First key is the asset ID, second key is the owner and third key is the delegate.
 */
export interface AssetsApprovalsStorageV15 {
    get(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<(v15.Approval | undefined)>
    getAll(): Promise<v15.Approval[]>
    getMany(keys: [bigint, Uint8Array, Uint8Array][]): Promise<(v15.Approval | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array, key3: Uint8Array): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairs(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array, key3: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v15.Approval][]>
}

export class AssetsAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Asset'
    }

    /**
     *  Details of an asset.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '9e49113456e8ef83e86f4fee837966e60cb2b17a136f00b66516dfb9130a52f7'
    }

    /**
     *  Details of an asset.
     */
    get asV15(): AssetsAssetStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Details of an asset.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '725438ae5f03c56c59785767933695c0b6ca519ecc7c8bc7af981c676867483b'
    }

    /**
     *  Details of an asset.
     */
    get asV52(): AssetsAssetStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Details of an asset.
 */
export interface AssetsAssetStorageV15 {
    get(key: bigint): Promise<(v15.AssetDetails | undefined)>
    getAll(): Promise<v15.AssetDetails[]>
    getMany(keys: bigint[]): Promise<(v15.AssetDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v15.AssetDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v15.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v15.AssetDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v15.AssetDetails][]>
}

/**
 *  Details of an asset.
 */
export interface AssetsAssetStorageV52 {
    get(key: bigint): Promise<(v52.AssetDetails | undefined)>
    getAll(): Promise<v52.AssetDetails[]>
    getMany(keys: bigint[]): Promise<(v52.AssetDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.AssetDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.AssetDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.AssetDetails][]>
}

export class AssetsMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  Metadata of an asset.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '61e62fb4641e931b380be1690bd1571bb1c974c2abd9a8958d22bf2a3b91ce05'
    }

    /**
     *  Metadata of an asset.
     */
    get asV15(): AssetsMetadataStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Metadata of an asset.
 */
export interface AssetsMetadataStorageV15 {
    get(key: bigint): Promise<v15.AssetMetadata>
    getAll(): Promise<v15.AssetMetadata[]>
    getMany(keys: bigint[]): Promise<v15.AssetMetadata[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v15.AssetMetadata][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v15.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v15.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v15.AssetMetadata][]>
}

export class AuraAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Aura'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authority set.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current authority set.
     */
    get asV1(): AuraAuthoritiesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The current authority set.
 */
export interface AuraAuthoritiesStorageV1 {
    get(): Promise<Uint8Array[]>
}

export class AuraCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Aura'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get asV1(): AuraCurrentSlotStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface AuraCurrentSlotStorageV1 {
    get(): Promise<bigint>
}

export class AuraExtAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'AuraExt'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will always
     *  be updated to the latest AuRa authorities in `on_finalize`.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will always
     *  be updated to the latest AuRa authorities in `on_finalize`.
     */
    get asV1(): AuraExtAuthoritiesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Serves as cache for the authorities.
 * 
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will always
 *  be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuraExtAuthoritiesStorageV1 {
    get(): Promise<Uint8Array[]>
}

export class AuraExtSlotInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'AuraExt'
    }

    protected getName() {
        return 'SlotInfo'
    }

    /**
     *  Current slot paired with a number of authored blocks.
     * 
     *  Updated on each block initialization.
     */
    get isV82(): boolean {
        return this.getTypeHash() === 'c945ad0b49f59ad16d0f6eba3f41827b2893873386effc63928223533e715d96'
    }

    /**
     *  Current slot paired with a number of authored blocks.
     * 
     *  Updated on each block initialization.
     */
    get asV82(): AuraExtSlotInfoStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  Current slot paired with a number of authored blocks.
 * 
 *  Updated on each block initialization.
 */
export interface AuraExtSlotInfoStorageV82 {
    get(): Promise<([bigint, number] | undefined)>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV1(): AuthorshipAuthorStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV1 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV1(): AuthorshipDidSetUnclesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV1 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isV1(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV1(): AuthorshipUnclesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV1 {
    get(): Promise<v1.UncleEntryItem[]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV1(): BalancesAccountStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV64(): BalancesAccountStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV1 {
    get(key: Uint8Array): Promise<v1.AccountData>
    getAll(): Promise<v1.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV64 {
    get(key: Uint8Array): Promise<v64.AccountData>
    getAll(): Promise<v64.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v64.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.AccountData][]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asV64(): BalancesFreezesStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  Freeze locks on account balances.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '56ac14e0a1f659eb52f1f9c056d78a16b87f529addecb7440f738fd4339412ac'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asV79(): BalancesFreezesStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageV64 {
    get(key: Uint8Array): Promise<v64.IdAmount[]>
    getAll(): Promise<v64.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v64.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.IdAmount[]][]>
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageV79 {
    get(key: Uint8Array): Promise<v79.Type_356[]>
    getAll(): Promise<v79.Type_356[][]>
    getMany(keys: Uint8Array[]): Promise<v79.Type_356[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v79.Type_356[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v79.Type_356[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v79.Type_356[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v79.Type_356[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asV64(): BalancesHoldsStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  Holds on account balances.
     */
    get isV82(): boolean {
        return this.getTypeHash() === '453453c4f37cfd299b923e19b6e97218892ff66f0e72f0bbb8a9b4d420afa98b'
    }

    /**
     *  Holds on account balances.
     */
    get asV82(): BalancesHoldsStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageV64 {
    get(key: Uint8Array): Promise<v64.IdAmount[]>
    getAll(): Promise<v64.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v64.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.IdAmount[]][]>
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageV82 {
    get(key: Uint8Array): Promise<v82.IdAmount[]>
    getAll(): Promise<v82.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v82.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v82.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v82.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v82.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v82.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV52(): BalancesInactiveIssuanceStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV52 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV1(): BalancesLocksStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV1 {
    get(key: Uint8Array): Promise<v1.BalanceLock[]>
    getAll(): Promise<v1.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v1.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV1(): BalancesReservesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV1 {
    get(key: Uint8Array): Promise<v1.ReserveData[]>
    getAll(): Promise<v1.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v1.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV1(): BalancesStorageVersionStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV1 {
    get(): Promise<v1.Type_208>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1(): BalancesTotalIssuanceStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1 {
    get(): Promise<bigint>
}

export class BaseFeeBaseFeePerGasStorage extends StorageBase {
    protected getPrefix() {
        return 'BaseFee'
    }

    protected getName() {
        return 'BaseFeePerGas'
    }

    get isV9(): boolean {
        return this.getTypeHash() === '12f873961beb65950ba33112c0ef55aa5cd3ec2d1e17a439f76a028d6b94ec7b'
    }

    get asV9(): BaseFeeBaseFeePerGasStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

export interface BaseFeeBaseFeePerGasStorageV9 {
    get(): Promise<bigint>
}

export class BaseFeeElasticityStorage extends StorageBase {
    protected getPrefix() {
        return 'BaseFee'
    }

    protected getName() {
        return 'Elasticity'
    }

    get isV9(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV9(): BaseFeeElasticityStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

export interface BaseFeeElasticityStorageV9 {
    get(): Promise<number>
}

export class BaseFeeIsActiveStorage extends StorageBase {
    protected getPrefix() {
        return 'BaseFee'
    }

    protected getName() {
        return 'IsActive'
    }

    get isV9(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV9(): BaseFeeIsActiveStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

export interface BaseFeeIsActiveStorageV9 {
    get(): Promise<boolean>
}

export class BlockRewardRewardDistributionConfigStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'BlockReward'
    }

    protected getName() {
        return 'RewardDistributionConfigStorage'
    }

    get isV12(): boolean {
        return this.getTypeHash() === '38b670a2de5b977d302098a88e1784291c1a7d8348dab95cdd8991f08a789e01'
    }

    get asV12(): BlockRewardRewardDistributionConfigStorageStorageV12 {
        assert(this.isV12)
        return this as any
    }

    get isV74(): boolean {
        return this.getTypeHash() === '97b493e6233aea8fc3393925278a70b0a71f9e9b4dfa7b53e7c5f4e7d2a65fe0'
    }

    get asV74(): BlockRewardRewardDistributionConfigStorageStorageV74 {
        assert(this.isV74)
        return this as any
    }
}

export interface BlockRewardRewardDistributionConfigStorageStorageV12 {
    get(): Promise<v12.RewardDistributionConfig>
}

export interface BlockRewardRewardDistributionConfigStorageStorageV74 {
    get(): Promise<v74.RewardDistributionConfig>
}

export class CollatorSelectionCandidacyBondStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'CandidacyBond'
    }

    /**
     *  Fixed deposit bond for each candidate.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fixed deposit bond for each candidate.
     */
    get asV1(): CollatorSelectionCandidacyBondStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Fixed deposit bond for each candidate.
 */
export interface CollatorSelectionCandidacyBondStorageV1 {
    get(): Promise<bigint>
}

export class CollatorSelectionCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '239ae5a83674078569642b29549b6d89d616b5748799fde8f01f3356f32141fd'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get asV1(): CollatorSelectionCandidatesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The (community, limited) collation candidates.
 */
export interface CollatorSelectionCandidatesStorageV1 {
    get(): Promise<v1.CandidateInfo[]>
}

export class CollatorSelectionDesiredCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'DesiredCandidates'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get asV1(): CollatorSelectionDesiredCandidatesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Desired number of candidates.
 * 
 *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
export interface CollatorSelectionDesiredCandidatesStorageV1 {
    get(): Promise<number>
}

export class CollatorSelectionInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get asV1(): CollatorSelectionInvulnerablesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The invulnerable, fixed collators.
 */
export interface CollatorSelectionInvulnerablesStorageV1 {
    get(): Promise<Uint8Array[]>
}

export class CollatorSelectionLastAuthoredBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'LastAuthoredBlock'
    }

    /**
     *  Last block authored by collator.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Last block authored by collator.
     */
    get asV1(): CollatorSelectionLastAuthoredBlockStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Last block authored by collator.
 */
export interface CollatorSelectionLastAuthoredBlockStorageV1 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class CollatorSelectionSlashDestinationStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'SlashDestination'
    }

    /**
     *  Destination account for slashed amount.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Destination account for slashed amount.
     */
    get asV30(): CollatorSelectionSlashDestinationStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  Destination account for slashed amount.
 */
export interface CollatorSelectionSlashDestinationStorageV30 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ContractsCodeInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'CodeInfoOf'
    }

    /**
     *  A mapping from a contract's code hash to its code info.
     */
    get isV82(): boolean {
        return this.getTypeHash() === '14afed0b78ca8603cba6db022558f6c0e9aabac216a6a3b3853ff20ac62f41b8'
    }

    /**
     *  A mapping from a contract's code hash to its code info.
     */
    get asV82(): ContractsCodeInfoOfStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  A mapping from a contract's code hash to its code info.
 */
export interface ContractsCodeInfoOfStorageV82 {
    get(key: Uint8Array): Promise<(v82.CodeInfo | undefined)>
    getAll(): Promise<v82.CodeInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v82.CodeInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v82.CodeInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v82.CodeInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v82.CodeInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v82.CodeInfo][]>
}

export class ContractsCodeStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'CodeStorage'
    }

    /**
     *  A mapping between an original code hash and instrumented wasm code, ready for execution.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'd90967ccfb2cbaf184f7d41bb1a330beaf15a192d25803d6352047090a9e635e'
    }

    /**
     *  A mapping between an original code hash and instrumented wasm code, ready for execution.
     */
    get asV55(): ContractsCodeStorageStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  A mapping between an original code hash and instrumented wasm code, ready for execution.
     */
    get isV64(): boolean {
        return this.getTypeHash() === 'a481725ba0babde38b5f0021234024af1dccca9a2371bd58204fc6d8f6b5c6e9'
    }

    /**
     *  A mapping between an original code hash and instrumented wasm code, ready for execution.
     */
    get asV64(): ContractsCodeStorageStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  A mapping between an original code hash and instrumented wasm code, ready for execution.
 */
export interface ContractsCodeStorageStorageV55 {
    get(key: Uint8Array): Promise<(v55.PrefabWasmModule | undefined)>
    getAll(): Promise<v55.PrefabWasmModule[]>
    getMany(keys: Uint8Array[]): Promise<(v55.PrefabWasmModule | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.PrefabWasmModule][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.PrefabWasmModule][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.PrefabWasmModule][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.PrefabWasmModule][]>
}

/**
 *  A mapping between an original code hash and instrumented wasm code, ready for execution.
 */
export interface ContractsCodeStorageStorageV64 {
    get(key: Uint8Array): Promise<(v64.PrefabWasmModule | undefined)>
    getAll(): Promise<v64.PrefabWasmModule[]>
    getMany(keys: Uint8Array[]): Promise<(v64.PrefabWasmModule | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.PrefabWasmModule][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.PrefabWasmModule][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.PrefabWasmModule][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.PrefabWasmModule][]>
}

export class ContractsContractInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'ContractInfoOf'
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'b19f56551b6001070487b6e33ba3a88bf2e7a48df38a8c979b2d69856127de63'
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV55(): ContractsContractInfoOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '2ed3030a48bdd27968f084078d4be8ce85cf8eb4a02dee5baf25409f96c4aa32'
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV64(): ContractsContractInfoOfStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV82(): boolean {
        return this.getTypeHash() === 'cc6d94454d3f3715ec698595d3f8dbe2e2a696898da3ee08825d04bebd196172'
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV82(): ContractsContractInfoOfStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  The code associated with a given account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ContractsContractInfoOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.ContractInfo | undefined)>
    getAll(): Promise<v55.ContractInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v55.ContractInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.ContractInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.ContractInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.ContractInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.ContractInfo][]>
}

/**
 *  The code associated with a given account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ContractsContractInfoOfStorageV64 {
    get(key: Uint8Array): Promise<(v64.ContractInfo | undefined)>
    getAll(): Promise<v64.ContractInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v64.ContractInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.ContractInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.ContractInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.ContractInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.ContractInfo][]>
}

/**
 *  The code associated with a given account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ContractsContractInfoOfStorageV82 {
    get(key: Uint8Array): Promise<(v82.ContractInfo | undefined)>
    getAll(): Promise<v82.ContractInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v82.ContractInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v82.ContractInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v82.ContractInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v82.ContractInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v82.ContractInfo][]>
}

export class ContractsDeletionQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'DeletionQueue'
    }

    /**
     *  Evicted contracts that await child trie deletion.
     * 
     *  Child trie deletion is a heavy operation depending on the amount of storage items
     *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'acd21a3434a729eeba0503ec7163c1b1afb6a839983d2fed35e9e4681d68d116'
    }

    /**
     *  Evicted contracts that await child trie deletion.
     * 
     *  Child trie deletion is a heavy operation depending on the amount of storage items
     *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
     */
    get asV55(): ContractsDeletionQueueStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Evicted contracts that await child trie deletion.
     * 
     *  Child trie deletion is a heavy operation depending on the amount of storage items
     *  stored in said trie. Therefore this operation is performed lazily in `on_idle`.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  Evicted contracts that await child trie deletion.
     * 
     *  Child trie deletion is a heavy operation depending on the amount of storage items
     *  stored in said trie. Therefore this operation is performed lazily in `on_idle`.
     */
    get asV64(): ContractsDeletionQueueStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  Evicted contracts that await child trie deletion.
 * 
 *  Child trie deletion is a heavy operation depending on the amount of storage items
 *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
 */
export interface ContractsDeletionQueueStorageV55 {
    get(): Promise<v55.DeletedContract[]>
}

/**
 *  Evicted contracts that await child trie deletion.
 * 
 *  Child trie deletion is a heavy operation depending on the amount of storage items
 *  stored in said trie. Therefore this operation is performed lazily in `on_idle`.
 */
export interface ContractsDeletionQueueStorageV64 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ContractsDeletionQueueCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'DeletionQueueCounter'
    }

    /**
     *  A pair of monotonic counters used to track the latest contract marked for deletion
     *  and the latest deleted contract in queue.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '65d5c1dade2675e2cfc8b3bec1aea2c072e986624721f7e36114b12902e231a0'
    }

    /**
     *  A pair of monotonic counters used to track the latest contract marked for deletion
     *  and the latest deleted contract in queue.
     */
    get asV64(): ContractsDeletionQueueCounterStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  A pair of monotonic counters used to track the latest contract marked for deletion
 *  and the latest deleted contract in queue.
 */
export interface ContractsDeletionQueueCounterStorageV64 {
    get(): Promise<v64.DeletionQueueManager>
}

export class ContractsMigrationInProgressStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'MigrationInProgress'
    }

    get isV64(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    get asV64(): ContractsMigrationInProgressStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

export interface ContractsMigrationInProgressStorageV64 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ContractsNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'Nonce'
    }

    /**
     *  This is a **monotonic** counter incremented on contract instantiation.
     * 
     *  This is used in order to generate unique trie ids for contracts.
     *  The trie id of a new contract is calculated from hash(account_id, nonce).
     *  The nonce is required because otherwise the following sequence would lead to
     *  a possible collision of storage:
     * 
     *  1. Create a new contract.
     *  2. Terminate the contract.
     *  3. Immediately recreate the contract with the same account_id.
     * 
     *  This is bad because the contents of a trie are deleted lazily and there might be
     *  storage of the old instantiation still in it when the new contract is created. Please
     *  note that we can't replace the counter by the block number because the sequence above
     *  can happen in the same block. We also can't keep the account counter in memory only
     *  because storage is the only way to communicate across different extrinsics in the
     *  same block.
     * 
     *  # Note
     * 
     *  Do not use it to determine the number of contracts. It won't be decremented if
     *  a contract is destroyed.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  This is a **monotonic** counter incremented on contract instantiation.
     * 
     *  This is used in order to generate unique trie ids for contracts.
     *  The trie id of a new contract is calculated from hash(account_id, nonce).
     *  The nonce is required because otherwise the following sequence would lead to
     *  a possible collision of storage:
     * 
     *  1. Create a new contract.
     *  2. Terminate the contract.
     *  3. Immediately recreate the contract with the same account_id.
     * 
     *  This is bad because the contents of a trie are deleted lazily and there might be
     *  storage of the old instantiation still in it when the new contract is created. Please
     *  note that we can't replace the counter by the block number because the sequence above
     *  can happen in the same block. We also can't keep the account counter in memory only
     *  because storage is the only way to communicate across different extrinsics in the
     *  same block.
     * 
     *  # Note
     * 
     *  Do not use it to determine the number of contracts. It won't be decremented if
     *  a contract is destroyed.
     */
    get asV55(): ContractsNonceStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  This is a **monotonic** counter incremented on contract instantiation.
 * 
 *  This is used in order to generate unique trie ids for contracts.
 *  The trie id of a new contract is calculated from hash(account_id, nonce).
 *  The nonce is required because otherwise the following sequence would lead to
 *  a possible collision of storage:
 * 
 *  1. Create a new contract.
 *  2. Terminate the contract.
 *  3. Immediately recreate the contract with the same account_id.
 * 
 *  This is bad because the contents of a trie are deleted lazily and there might be
 *  storage of the old instantiation still in it when the new contract is created. Please
 *  note that we can't replace the counter by the block number because the sequence above
 *  can happen in the same block. We also can't keep the account counter in memory only
 *  because storage is the only way to communicate across different extrinsics in the
 *  same block.
 * 
 *  # Note
 * 
 *  Do not use it to determine the number of contracts. It won't be decremented if
 *  a contract is destroyed.
 */
export interface ContractsNonceStorageV55 {
    get(): Promise<bigint>
}

export class ContractsOwnerInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'OwnerInfoOf'
    }

    /**
     *  A mapping between an original code hash and its owner information.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '76689686c73821ee740f33d092a38a05de83a2833f6c8857baa886203c5bf939'
    }

    /**
     *  A mapping between an original code hash and its owner information.
     */
    get asV55(): ContractsOwnerInfoOfStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  A mapping between an original code hash and its owner information.
 */
export interface ContractsOwnerInfoOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.OwnerInfo | undefined)>
    getAll(): Promise<v55.OwnerInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v55.OwnerInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.OwnerInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.OwnerInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.OwnerInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.OwnerInfo][]>
}

export class ContractsPristineCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'PristineCode'
    }

    /**
     *  A mapping from an original code hash to the original code, untouched by instrumentation.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  A mapping from an original code hash to the original code, untouched by instrumentation.
     */
    get asV55(): ContractsPristineCodeStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  A mapping from an original code hash to the original code, untouched by instrumentation.
 */
export interface ContractsPristineCodeStorageV55 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class DappStakingActiveProtocolStateStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'ActiveProtocolState'
    }

    /**
     *  General information about dApp staking protocol state.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '68391abd230d2ae297c6b423bafb45c84b7230113818a952ee083f3d807e60df'
    }

    /**
     *  General information about dApp staking protocol state.
     */
    get asV79(): DappStakingActiveProtocolStateStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  General information about dApp staking protocol state.
 */
export interface DappStakingActiveProtocolStateStorageV79 {
    get(): Promise<v79.ProtocolState>
}

export class DappStakingContractStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'ContractStake'
    }

    /**
     *  Information about how much has been staked on a smart contract in some era or period.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '6fb018d3ce9d9bb6bf3091777e6ddacb8eaf9ab827b9adf45435268f9eac3200'
    }

    /**
     *  Information about how much has been staked on a smart contract in some era or period.
     */
    get asV79(): DappStakingContractStakeStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Information about how much has been staked on a smart contract in some era or period.
 */
export interface DappStakingContractStakeStorageV79 {
    get(key: number): Promise<v79.ContractStakeAmount>
    getAll(): Promise<v79.ContractStakeAmount[]>
    getMany(keys: number[]): Promise<v79.ContractStakeAmount[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v79.ContractStakeAmount][]>
    getPairs(key: number): Promise<[k: number, v: v79.ContractStakeAmount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v79.ContractStakeAmount][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v79.ContractStakeAmount][]>
}

export class DappStakingCounterForIntegratedDAppsStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'CounterForIntegratedDApps'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV79(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV79(): DappStakingCounterForIntegratedDAppsStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DappStakingCounterForIntegratedDAppsStorageV79 {
    get(): Promise<number>
}

export class DappStakingCurrentEraInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'CurrentEraInfo'
    }

    /**
     *  General information about the current era.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '4a7e518b1835b5a8310ff79996a48b6b75ece052cd365b90e277897a6597eb06'
    }

    /**
     *  General information about the current era.
     */
    get asV79(): DappStakingCurrentEraInfoStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  General information about the current era.
 */
export interface DappStakingCurrentEraInfoStorageV79 {
    get(): Promise<v79.EraInfo>
}

export class DappStakingDAppTiersStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'DAppTiers'
    }

    /**
     *  Information about which tier a dApp belonged to in a specific era.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '72837fef3d87199349c48e9bb0536a8fcc03fb7d91f8110aa98176e83d81835e'
    }

    /**
     *  Information about which tier a dApp belonged to in a specific era.
     */
    get asV79(): DappStakingDAppTiersStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Information about which tier a dApp belonged to in a specific era.
 */
export interface DappStakingDAppTiersStorageV79 {
    get(key: number): Promise<(v79.DAppTierRewards | undefined)>
    getAll(): Promise<v79.DAppTierRewards[]>
    getMany(keys: number[]): Promise<(v79.DAppTierRewards | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v79.DAppTierRewards][]>
    getPairs(key: number): Promise<[k: number, v: v79.DAppTierRewards][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v79.DAppTierRewards][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v79.DAppTierRewards][]>
}

export class DappStakingEraRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'EraRewards'
    }

    /**
     *  Information about rewards for each era.
     * 
     *  Since each entry is a 'span', covering up to `T::EraRewardSpanLength` entries, only certain era value keys can exist in storage.
     *  For the sake of simplicity, valid `era` keys are calculated as:
     * 
     *  era_key = era - (era % T::EraRewardSpanLength)
     * 
     *  This means that e.g. in case `EraRewardSpanLength = 8`, only era values 0, 8, 16, 24, etc. can exist in storage.
     *  Eras 1-7 will be stored in the same entry as era 0, eras 9-15 will be stored in the same entry as era 8, etc.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '1733d7837b5bd0cb26a9317f3d7983f714fd20cfe726c58d3c83cdcd5e16b766'
    }

    /**
     *  Information about rewards for each era.
     * 
     *  Since each entry is a 'span', covering up to `T::EraRewardSpanLength` entries, only certain era value keys can exist in storage.
     *  For the sake of simplicity, valid `era` keys are calculated as:
     * 
     *  era_key = era - (era % T::EraRewardSpanLength)
     * 
     *  This means that e.g. in case `EraRewardSpanLength = 8`, only era values 0, 8, 16, 24, etc. can exist in storage.
     *  Eras 1-7 will be stored in the same entry as era 0, eras 9-15 will be stored in the same entry as era 8, etc.
     */
    get asV79(): DappStakingEraRewardsStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Information about rewards for each era.
 * 
 *  Since each entry is a 'span', covering up to `T::EraRewardSpanLength` entries, only certain era value keys can exist in storage.
 *  For the sake of simplicity, valid `era` keys are calculated as:
 * 
 *  era_key = era - (era % T::EraRewardSpanLength)
 * 
 *  This means that e.g. in case `EraRewardSpanLength = 8`, only era values 0, 8, 16, 24, etc. can exist in storage.
 *  Eras 1-7 will be stored in the same entry as era 0, eras 9-15 will be stored in the same entry as era 8, etc.
 */
export interface DappStakingEraRewardsStorageV79 {
    get(key: number): Promise<(v79.EraRewardSpan | undefined)>
    getAll(): Promise<v79.EraRewardSpan[]>
    getMany(keys: number[]): Promise<(v79.EraRewardSpan | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v79.EraRewardSpan][]>
    getPairs(key: number): Promise<[k: number, v: v79.EraRewardSpan][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v79.EraRewardSpan][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v79.EraRewardSpan][]>
}

export class DappStakingHistoryCleanupMarkerStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'HistoryCleanupMarker'
    }

    /**
     *  History cleanup marker - holds information about which DB entries should be cleaned up next, when applicable.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '1a48056420aebdb96376d2af07ab7d609acd277e77b1bffed4bc24e7782c8e4c'
    }

    /**
     *  History cleanup marker - holds information about which DB entries should be cleaned up next, when applicable.
     */
    get asV79(): DappStakingHistoryCleanupMarkerStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  History cleanup marker - holds information about which DB entries should be cleaned up next, when applicable.
 */
export interface DappStakingHistoryCleanupMarkerStorageV79 {
    get(): Promise<v79.CleanupMarker>
}

export class DappStakingIntegratedDAppsStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'IntegratedDApps'
    }

    /**
     *  Map of all dApps integrated into dApp staking protocol.
     * 
     *  Even though dApp is integrated, it does not mean it's still actively participating in dApp staking.
     *  It might have been unregistered at some point in history.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '17cc8fc75f47dc681b0290be936aa60863f65f77715525e20d7be7042490c649'
    }

    /**
     *  Map of all dApps integrated into dApp staking protocol.
     * 
     *  Even though dApp is integrated, it does not mean it's still actively participating in dApp staking.
     *  It might have been unregistered at some point in history.
     */
    get asV79(): DappStakingIntegratedDAppsStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Map of all dApps integrated into dApp staking protocol.
 * 
 *  Even though dApp is integrated, it does not mean it's still actively participating in dApp staking.
 *  It might have been unregistered at some point in history.
 */
export interface DappStakingIntegratedDAppsStorageV79 {
    get(key: v79.SmartContract): Promise<(v79.DAppInfo | undefined)>
    getAll(): Promise<v79.DAppInfo[]>
    getMany(keys: v79.SmartContract[]): Promise<(v79.DAppInfo | undefined)[]>
    getKeys(): Promise<v79.SmartContract[]>
    getKeys(key: v79.SmartContract): Promise<v79.SmartContract[]>
    getKeysPaged(pageSize: number): AsyncIterable<v79.SmartContract[]>
    getKeysPaged(pageSize: number, key: v79.SmartContract): AsyncIterable<v79.SmartContract[]>
    getPairs(): Promise<[k: v79.SmartContract, v: v79.DAppInfo][]>
    getPairs(key: v79.SmartContract): Promise<[k: v79.SmartContract, v: v79.DAppInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v79.SmartContract, v: v79.DAppInfo][]>
    getPairsPaged(pageSize: number, key: v79.SmartContract): AsyncIterable<[k: v79.SmartContract, v: v79.DAppInfo][]>
}

export class DappStakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  General locked/staked information for each account.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '2c5b4ef232bb7b02cad6f412263eadc585dee66e023bc06ee92a4ea09fbf3fc2'
    }

    /**
     *  General locked/staked information for each account.
     */
    get asV79(): DappStakingLedgerStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  General locked/staked information for each account.
 */
export interface DappStakingLedgerStorageV79 {
    get(key: Uint8Array): Promise<v79.AccountLedger>
    getAll(): Promise<v79.AccountLedger[]>
    getMany(keys: Uint8Array[]): Promise<v79.AccountLedger[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v79.AccountLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v79.AccountLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v79.AccountLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v79.AccountLedger][]>
}

export class DappStakingNextDAppIdStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'NextDAppId'
    }

    /**
     *  Counter for unique dApp identifiers.
     */
    get isV79(): boolean {
        return this.getTypeHash() === 'a863022e4ed74c574d4df8778565bf755f6f88a8279ed05d8097a21bc6ec382e'
    }

    /**
     *  Counter for unique dApp identifiers.
     */
    get asV79(): DappStakingNextDAppIdStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Counter for unique dApp identifiers.
 */
export interface DappStakingNextDAppIdStorageV79 {
    get(): Promise<number>
}

export class DappStakingPeriodEndStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'PeriodEnd'
    }

    /**
     *  Information about period's end.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '8a1b40811ce206a79c9d0d13d48855cce3fe61ed84a7a39071b6e821a9b6a6a4'
    }

    /**
     *  Information about period's end.
     */
    get asV79(): DappStakingPeriodEndStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Information about period's end.
 */
export interface DappStakingPeriodEndStorageV79 {
    get(key: number): Promise<(v79.PeriodEndInfo | undefined)>
    getAll(): Promise<v79.PeriodEndInfo[]>
    getMany(keys: number[]): Promise<(v79.PeriodEndInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v79.PeriodEndInfo][]>
    getPairs(key: number): Promise<[k: number, v: v79.PeriodEndInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v79.PeriodEndInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v79.PeriodEndInfo][]>
}

export class DappStakingSafeguardStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'Safeguard'
    }

    /**
     *  Safeguard to prevent unwanted operations in production.
     *  Kept as a storage without extrinsic setter, so we can still enable it for some
     *  chain-fork debugging if required.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Safeguard to prevent unwanted operations in production.
     *  Kept as a storage without extrinsic setter, so we can still enable it for some
     *  chain-fork debugging if required.
     */
    get asV79(): DappStakingSafeguardStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Safeguard to prevent unwanted operations in production.
 *  Kept as a storage without extrinsic setter, so we can still enable it for some
 *  chain-fork debugging if required.
 */
export interface DappStakingSafeguardStorageV79 {
    get(): Promise<boolean>
}

export class DappStakingStakerInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'StakerInfo'
    }

    /**
     *  Information about how much each staker has staked for each smart contract in some period.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '0eac073ffccfb250c7a7280c16f23a3952a196afea0880bca7a91206d87037f6'
    }

    /**
     *  Information about how much each staker has staked for each smart contract in some period.
     */
    get asV79(): DappStakingStakerInfoStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Information about how much each staker has staked for each smart contract in some period.
 */
export interface DappStakingStakerInfoStorageV79 {
    get(key1: Uint8Array, key2: v79.SmartContract): Promise<(v79.SingularStakingInfo | undefined)>
    getAll(): Promise<v79.SingularStakingInfo[]>
    getMany(keys: [Uint8Array, v79.SmartContract][]): Promise<(v79.SingularStakingInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, v79.SmartContract][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v79.SmartContract][]>
    getKeys(key1: Uint8Array, key2: v79.SmartContract): Promise<[Uint8Array, v79.SmartContract][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v79.SmartContract][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v79.SmartContract][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v79.SmartContract): AsyncIterable<[Uint8Array, v79.SmartContract][]>
    getPairs(): Promise<[k: [Uint8Array, v79.SmartContract], v: v79.SingularStakingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v79.SmartContract], v: v79.SingularStakingInfo][]>
    getPairs(key1: Uint8Array, key2: v79.SmartContract): Promise<[k: [Uint8Array, v79.SmartContract], v: v79.SingularStakingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v79.SmartContract], v: v79.SingularStakingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v79.SmartContract], v: v79.SingularStakingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v79.SmartContract): AsyncIterable<[k: [Uint8Array, v79.SmartContract], v: v79.SingularStakingInfo][]>
}

export class DappStakingStaticTierParamsStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'StaticTierParams'
    }

    /**
     *  Static tier parameters used to calculate tier configuration.
     */
    get isV79(): boolean {
        return this.getTypeHash() === 'e186067a8e14c91cb900cb1e5cd1fff1cfff93af7a8a56a48e33726585144ae5'
    }

    /**
     *  Static tier parameters used to calculate tier configuration.
     */
    get asV79(): DappStakingStaticTierParamsStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Static tier parameters used to calculate tier configuration.
 */
export interface DappStakingStaticTierParamsStorageV79 {
    get(): Promise<v79.TierParameters>
}

export class DappStakingTierConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStaking'
    }

    protected getName() {
        return 'TierConfig'
    }

    /**
     *  Tier configuration user for current & preceding eras.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '7a491a4dc823c17337e32ce880d758ec89bed149725232f462abfdb50b9a4000'
    }

    /**
     *  Tier configuration user for current & preceding eras.
     */
    get asV79(): DappStakingTierConfigStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Tier configuration user for current & preceding eras.
 */
export interface DappStakingTierConfigStorageV79 {
    get(): Promise<v79.TiersConfiguration>
}

export class DappStakingMigrationMigrationStateStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'DappStakingMigration'
    }

    protected getName() {
        return 'MigrationStateStorage'
    }

    /**
     *  Used to store the current migration state.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '977777094f153ef6137417692e61cbc7d36d666fc3a4a7d9ce732534bfc8e85b'
    }

    /**
     *  Used to store the current migration state.
     */
    get asV79(): DappStakingMigrationMigrationStateStorageStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Used to store the current migration state.
 */
export interface DappStakingMigrationMigrationStateStorageStorageV79 {
    get(): Promise<v79.MigrationState>
}

export class DappsStakingBlockRewardAccumulatorStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'BlockRewardAccumulator'
    }

    /**
     *  Accumulator for block rewards during an era. It is reset at every new era
     */
    get isV4(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Accumulator for block rewards during an era. It is reset at every new era
     */
    get asV4(): DappsStakingBlockRewardAccumulatorStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Accumulator for block rewards during an era. It is reset at every new era
     */
    get isV12(): boolean {
        return this.getTypeHash() === 'ef667c8ce67e899f95a691335a2d2a289bdb4e5eef6280813ba66c710785730e'
    }

    /**
     *  Accumulator for block rewards during an era. It is reset at every new era
     */
    get asV12(): DappsStakingBlockRewardAccumulatorStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Accumulator for block rewards during an era. It is reset at every new era
 */
export interface DappsStakingBlockRewardAccumulatorStorageV4 {
    get(): Promise<bigint>
}

/**
 *  Accumulator for block rewards during an era. It is reset at every new era
 */
export interface DappsStakingBlockRewardAccumulatorStorageV12 {
    get(): Promise<v12.RewardInfo>
}

export class DappsStakingContractEraStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'ContractEraStake'
    }

    /**
     *  Stores amount staked and stakers for a contract per era
     */
    get isV4(): boolean {
        return this.getTypeHash() === '781613cd7a0234d56dd522f45b641fd8416ce9c47ba50dc44b1b292834a3b420'
    }

    /**
     *  Stores amount staked and stakers for a contract per era
     */
    get asV4(): DappsStakingContractEraStakeStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Stores amount staked and stakers for a contract per era
     */
    get isV12(): boolean {
        return this.getTypeHash() === '7a56f98a8b5b701c18909748103c7d7b42c30d0262f5339db2653e671fc69874'
    }

    /**
     *  Stores amount staked and stakers for a contract per era
     */
    get asV12(): DappsStakingContractEraStakeStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Stores amount staked and stakers for a contract per era
 */
export interface DappsStakingContractEraStakeStorageV4 {
    get(key1: v4.SmartContract, key2: number): Promise<(v4.EraStakingPoints | undefined)>
    getAll(): Promise<v4.EraStakingPoints[]>
    getMany(keys: [v4.SmartContract, number][]): Promise<(v4.EraStakingPoints | undefined)[]>
    getKeys(): Promise<[v4.SmartContract, number][]>
    getKeys(key1: v4.SmartContract): Promise<[v4.SmartContract, number][]>
    getKeys(key1: v4.SmartContract, key2: number): Promise<[v4.SmartContract, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v4.SmartContract, number][]>
    getKeysPaged(pageSize: number, key1: v4.SmartContract): AsyncIterable<[v4.SmartContract, number][]>
    getKeysPaged(pageSize: number, key1: v4.SmartContract, key2: number): AsyncIterable<[v4.SmartContract, number][]>
    getPairs(): Promise<[k: [v4.SmartContract, number], v: v4.EraStakingPoints][]>
    getPairs(key1: v4.SmartContract): Promise<[k: [v4.SmartContract, number], v: v4.EraStakingPoints][]>
    getPairs(key1: v4.SmartContract, key2: number): Promise<[k: [v4.SmartContract, number], v: v4.EraStakingPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v4.SmartContract, number], v: v4.EraStakingPoints][]>
    getPairsPaged(pageSize: number, key1: v4.SmartContract): AsyncIterable<[k: [v4.SmartContract, number], v: v4.EraStakingPoints][]>
    getPairsPaged(pageSize: number, key1: v4.SmartContract, key2: number): AsyncIterable<[k: [v4.SmartContract, number], v: v4.EraStakingPoints][]>
}

/**
 *  Stores amount staked and stakers for a contract per era
 */
export interface DappsStakingContractEraStakeStorageV12 {
    get(key1: v12.SmartContract, key2: number): Promise<(v12.ContractStakeInfo | undefined)>
    getAll(): Promise<v12.ContractStakeInfo[]>
    getMany(keys: [v12.SmartContract, number][]): Promise<(v12.ContractStakeInfo | undefined)[]>
    getKeys(): Promise<[v12.SmartContract, number][]>
    getKeys(key1: v12.SmartContract): Promise<[v12.SmartContract, number][]>
    getKeys(key1: v12.SmartContract, key2: number): Promise<[v12.SmartContract, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v12.SmartContract, number][]>
    getKeysPaged(pageSize: number, key1: v12.SmartContract): AsyncIterable<[v12.SmartContract, number][]>
    getKeysPaged(pageSize: number, key1: v12.SmartContract, key2: number): AsyncIterable<[v12.SmartContract, number][]>
    getPairs(): Promise<[k: [v12.SmartContract, number], v: v12.ContractStakeInfo][]>
    getPairs(key1: v12.SmartContract): Promise<[k: [v12.SmartContract, number], v: v12.ContractStakeInfo][]>
    getPairs(key1: v12.SmartContract, key2: number): Promise<[k: [v12.SmartContract, number], v: v12.ContractStakeInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v12.SmartContract, number], v: v12.ContractStakeInfo][]>
    getPairsPaged(pageSize: number, key1: v12.SmartContract): AsyncIterable<[k: [v12.SmartContract, number], v: v12.ContractStakeInfo][]>
    getPairsPaged(pageSize: number, key1: v12.SmartContract, key2: number): AsyncIterable<[k: [v12.SmartContract, number], v: v12.ContractStakeInfo][]>
}

export class DappsStakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     */
    get isV4(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current era index.
     */
    get asV4(): DappsStakingCurrentEraStorageV4 {
        assert(this.isV4)
        return this as any
    }
}

/**
 *  The current era index.
 */
export interface DappsStakingCurrentEraStorageV4 {
    get(): Promise<number>
}

export class DappsStakingDecommissionStartedStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'DecommissionStarted'
    }

    /**
     *  Denotes whether pallet decommissioning has started or not.
     */
    get isV77(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Denotes whether pallet decommissioning has started or not.
     */
    get asV77(): DappsStakingDecommissionStartedStorageV77 {
        assert(this.isV77)
        return this as any
    }
}

/**
 *  Denotes whether pallet decommissioning has started or not.
 */
export interface DappsStakingDecommissionStartedStorageV77 {
    get(): Promise<boolean>
}

export class DappsStakingEraRewardsAndStakesStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'EraRewardsAndStakes'
    }

    /**
     *  Total block rewards for the pallet per era and total staked funds
     */
    get isV4(): boolean {
        return this.getTypeHash() === '4d2f1b5e8dc93a77e8bce81ec5c3325c9b405c14bb0f8a76afe588aa142dba73'
    }

    /**
     *  Total block rewards for the pallet per era and total staked funds
     */
    get asV4(): DappsStakingEraRewardsAndStakesStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Legacy, don't use.
     *  TODO: remove in future upgrades
     */
    get isV12(): boolean {
        return this.getTypeHash() === '98656039ccbf4a4da9cfcac7496399e66ad9b55f1ea5acb22c9ac64ffd28b3c7'
    }

    /**
     *  Legacy, don't use.
     *  TODO: remove in future upgrades
     */
    get asV12(): DappsStakingEraRewardsAndStakesStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Total block rewards for the pallet per era and total staked funds
 */
export interface DappsStakingEraRewardsAndStakesStorageV4 {
    get(key: number): Promise<(v4.EraRewardAndStake | undefined)>
    getAll(): Promise<v4.EraRewardAndStake[]>
    getMany(keys: number[]): Promise<(v4.EraRewardAndStake | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v4.EraRewardAndStake][]>
    getPairs(key: number): Promise<[k: number, v: v4.EraRewardAndStake][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v4.EraRewardAndStake][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v4.EraRewardAndStake][]>
}

/**
 *  Legacy, don't use.
 *  TODO: remove in future upgrades
 */
export interface DappsStakingEraRewardsAndStakesStorageV12 {
    get(key: number): Promise<(v12.V3OldEraRewardAndStake | undefined)>
    getAll(): Promise<v12.V3OldEraRewardAndStake[]>
    getMany(keys: number[]): Promise<(v12.V3OldEraRewardAndStake | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v12.V3OldEraRewardAndStake][]>
    getPairs(key: number): Promise<[k: number, v: v12.V3OldEraRewardAndStake][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v12.V3OldEraRewardAndStake][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v12.V3OldEraRewardAndStake][]>
}

export class DappsStakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  Mode of era forcing.
     */
    get isV4(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV4(): DappsStakingForceEraStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Mode of era forcing.
     */
    get isV12(): boolean {
        return this.getTypeHash() === 'c43ea456808ff0003c75f59a3a2d7adbbc99a2ccb70b0b59784cf14e8da1a652'
    }

    /**
     *  Mode of era forcing.
     */
    get asV12(): DappsStakingForceEraStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface DappsStakingForceEraStorageV4 {
    get(): Promise<v4.Forcing>
}

/**
 *  Mode of era forcing.
 */
export interface DappsStakingForceEraStorageV12 {
    get(): Promise<v12.Forcing>
}

export class DappsStakingGeneralEraInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'GeneralEraInfo'
    }

    /**
     *  Total staked, locked & rewarded for a paticular era
     */
    get isV12(): boolean {
        return this.getTypeHash() === 'd176f0001ce61c25aa5826f2e60e9519205bae5d3e8ef1be59365f903aa53770'
    }

    /**
     *  Total staked, locked & rewarded for a paticular era
     */
    get asV12(): DappsStakingGeneralEraInfoStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Total staked, locked & rewarded for a paticular era
 */
export interface DappsStakingGeneralEraInfoStorageV12 {
    get(key: number): Promise<(v12.EraInfo | undefined)>
    getAll(): Promise<v12.EraInfo[]>
    getMany(keys: number[]): Promise<(v12.EraInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v12.EraInfo][]>
    getPairs(key: number): Promise<[k: number, v: v12.EraInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v12.EraInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v12.EraInfo][]>
}

export class DappsStakingGeneralStakerInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'GeneralStakerInfo'
    }

    get isV12(): boolean {
        return this.getTypeHash() === 'ffaa158cd224e2f778af948d775cdf4933073a502b7fbf30a3229a21e000a16e'
    }

    get asV12(): DappsStakingGeneralStakerInfoStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

export interface DappsStakingGeneralStakerInfoStorageV12 {
    get(key1: Uint8Array, key2: v12.SmartContract): Promise<v12.StakerInfo>
    getAll(): Promise<v12.StakerInfo[]>
    getMany(keys: [Uint8Array, v12.SmartContract][]): Promise<v12.StakerInfo[]>
    getKeys(): Promise<[Uint8Array, v12.SmartContract][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v12.SmartContract][]>
    getKeys(key1: Uint8Array, key2: v12.SmartContract): Promise<[Uint8Array, v12.SmartContract][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v12.SmartContract][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v12.SmartContract][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v12.SmartContract): AsyncIterable<[Uint8Array, v12.SmartContract][]>
    getPairs(): Promise<[k: [Uint8Array, v12.SmartContract], v: v12.StakerInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v12.SmartContract], v: v12.StakerInfo][]>
    getPairs(key1: Uint8Array, key2: v12.SmartContract): Promise<[k: [Uint8Array, v12.SmartContract], v: v12.StakerInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v12.SmartContract], v: v12.StakerInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v12.SmartContract], v: v12.StakerInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v12.SmartContract): AsyncIterable<[k: [Uint8Array, v12.SmartContract], v: v12.StakerInfo][]>
}

export class DappsStakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Bonded amount for the staker
     */
    get isV4(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Bonded amount for the staker
     */
    get asV4(): DappsStakingLedgerStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Bonded amount for the staker
     */
    get isV12(): boolean {
        return this.getTypeHash() === 'bf7d8454aaa894899341799a1668f8343ff6e16a3dd56efa4c51529fe4e772b9'
    }

    /**
     *  Bonded amount for the staker
     */
    get asV12(): DappsStakingLedgerStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Bonded amount for the staker
 */
export interface DappsStakingLedgerStorageV4 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  Bonded amount for the staker
 */
export interface DappsStakingLedgerStorageV12 {
    get(key: Uint8Array): Promise<v12.AccountLedger>
    getAll(): Promise<v12.AccountLedger[]>
    getMany(keys: Uint8Array[]): Promise<v12.AccountLedger[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v12.AccountLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v12.AccountLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v12.AccountLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v12.AccountLedger][]>
}

export class DappsStakingMigrationStateV2Storage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'MigrationStateV2'
    }

    get isV12(): boolean {
        return this.getTypeHash() === 'bd2e859f1b62e19832e3434fc47c27d750af65fa09598124d8af6af68d4a38b0'
    }

    get asV12(): DappsStakingMigrationStateV2StorageV12 {
        assert(this.isV12)
        return this as any
    }
}

export interface DappsStakingMigrationStateV2StorageV12 {
    get(): Promise<v12.V2MigrationState>
}

export class DappsStakingMigrationStateV3Storage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'MigrationStateV3'
    }

    get isV12(): boolean {
        return this.getTypeHash() === '49a17e40a31640c8a4bba0f87c0dc962e97e2998ba7d9bafbe0b37330d820d55'
    }

    get asV12(): DappsStakingMigrationStateV3StorageV12 {
        assert(this.isV12)
        return this as any
    }
}

export interface DappsStakingMigrationStateV3StorageV12 {
    get(): Promise<v12.V3MigrationState>
}

export class DappsStakingMigrationUndergoingUnbondingStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'MigrationUndergoingUnbonding'
    }

    get isV12(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV12(): DappsStakingMigrationUndergoingUnbondingStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

export interface DappsStakingMigrationUndergoingUnbondingStorageV12 {
    get(): Promise<bigint>
}

export class DappsStakingNextEraStartingBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'NextEraStartingBlock'
    }

    /**
     *  Stores the block number of when the next era starts
     */
    get isV12(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Stores the block number of when the next era starts
     */
    get asV12(): DappsStakingNextEraStartingBlockStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Stores the block number of when the next era starts
 */
export interface DappsStakingNextEraStartingBlockStorageV12 {
    get(): Promise<number>
}

export class DappsStakingPalletDisabledStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'PalletDisabled'
    }

    get isV12(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV12(): DappsStakingPalletDisabledStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

export interface DappsStakingPalletDisabledStorageV12 {
    get(): Promise<boolean>
}

export class DappsStakingPreApprovalIsEnabledStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'PreApprovalIsEnabled'
    }

    /**
     *  Enable or disable pre-approval list for new contract registration
     */
    get isV4(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Enable or disable pre-approval list for new contract registration
     */
    get asV4(): DappsStakingPreApprovalIsEnabledStorageV4 {
        assert(this.isV4)
        return this as any
    }
}

/**
 *  Enable or disable pre-approval list for new contract registration
 */
export interface DappsStakingPreApprovalIsEnabledStorageV4 {
    get(): Promise<boolean>
}

export class DappsStakingPreApprovedDevelopersStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'PreApprovedDevelopers'
    }

    /**
     *  List of pre-approved developers
     */
    get isV4(): boolean {
        return this.getTypeHash() === 'fe02c7c6da7f8383db55e0922ebd18c94adaef6d2e324f53262bf23a7edd3ec3'
    }

    /**
     *  List of pre-approved developers
     */
    get asV4(): DappsStakingPreApprovedDevelopersStorageV4 {
        assert(this.isV4)
        return this as any
    }
}

/**
 *  List of pre-approved developers
 */
export interface DappsStakingPreApprovedDevelopersStorageV4 {
    get(key: Uint8Array): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<null[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class DappsStakingRegisteredDappsStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'RegisteredDapps'
    }

    /**
     *  Registered dapp points to the developer who registered it
     */
    get isV4(): boolean {
        return this.getTypeHash() === 'c9595b0f3e6093402e607a49dd5a0aac366dd0e033c87550fcddc3da6acde345'
    }

    /**
     *  Registered dapp points to the developer who registered it
     */
    get asV4(): DappsStakingRegisteredDappsStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Registered dapp points to the developer who registered it
     */
    get isV12(): boolean {
        return this.getTypeHash() === '7f71d4f11ad1b16e62fce8dce6263e4593c7d701113ffdac4fadf4f52c3a2849'
    }

    /**
     *  Registered dapp points to the developer who registered it
     */
    get asV12(): DappsStakingRegisteredDappsStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Registered dapp points to the developer who registered it
 */
export interface DappsStakingRegisteredDappsStorageV4 {
    get(key: v4.SmartContract): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: v4.SmartContract[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<v4.SmartContract[]>
    getKeys(key: v4.SmartContract): Promise<v4.SmartContract[]>
    getKeysPaged(pageSize: number): AsyncIterable<v4.SmartContract[]>
    getKeysPaged(pageSize: number, key: v4.SmartContract): AsyncIterable<v4.SmartContract[]>
    getPairs(): Promise<[k: v4.SmartContract, v: Uint8Array][]>
    getPairs(key: v4.SmartContract): Promise<[k: v4.SmartContract, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v4.SmartContract, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: v4.SmartContract): AsyncIterable<[k: v4.SmartContract, v: Uint8Array][]>
}

/**
 *  Registered dapp points to the developer who registered it
 */
export interface DappsStakingRegisteredDappsStorageV12 {
    get(key: v12.SmartContract): Promise<(v12.DAppInfo | undefined)>
    getAll(): Promise<v12.DAppInfo[]>
    getMany(keys: v12.SmartContract[]): Promise<(v12.DAppInfo | undefined)[]>
    getKeys(): Promise<v12.SmartContract[]>
    getKeys(key: v12.SmartContract): Promise<v12.SmartContract[]>
    getKeysPaged(pageSize: number): AsyncIterable<v12.SmartContract[]>
    getKeysPaged(pageSize: number, key: v12.SmartContract): AsyncIterable<v12.SmartContract[]>
    getPairs(): Promise<[k: v12.SmartContract, v: v12.DAppInfo][]>
    getPairs(key: v12.SmartContract): Promise<[k: v12.SmartContract, v: v12.DAppInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v12.SmartContract, v: v12.DAppInfo][]>
    getPairsPaged(pageSize: number, key: v12.SmartContract): AsyncIterable<[k: v12.SmartContract, v: v12.DAppInfo][]>
}

export class DappsStakingRegisteredDevelopersStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'RegisteredDevelopers'
    }

    /**
     *  Registered developer accounts points to coresponding contract
     */
    get isV4(): boolean {
        return this.getTypeHash() === '853002c8b8f8811bf57a76c66879833e6bcefe2079aef00ba477febf07484601'
    }

    /**
     *  Registered developer accounts points to coresponding contract
     */
    get asV4(): DappsStakingRegisteredDevelopersStorageV4 {
        assert(this.isV4)
        return this as any
    }
}

/**
 *  Registered developer accounts points to coresponding contract
 */
export interface DappsStakingRegisteredDevelopersStorageV4 {
    get(key: Uint8Array): Promise<(v4.SmartContract | undefined)>
    getAll(): Promise<v4.SmartContract[]>
    getMany(keys: Uint8Array[]): Promise<(v4.SmartContract | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v4.SmartContract][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v4.SmartContract][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v4.SmartContract][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v4.SmartContract][]>
}

export class DappsStakingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'DappsStaking'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Stores the current pallet storage version.
     */
    get isV12(): boolean {
        return this.getTypeHash() === 'e699701b42eb2d9ff0059cb28316261e1257c6ee1b0f9bc7b1009b44f348f7b9'
    }

    /**
     *  Stores the current pallet storage version.
     */
    get asV12(): DappsStakingStorageVersionStorageV12 {
        assert(this.isV12)
        return this as any
    }

    /**
     *  Stores the current pallet storage version.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '14d2417128e14eb0206f0cc0ab5cad0b23b84292c338ef13a09b19429080f4e1'
    }

    /**
     *  Stores the current pallet storage version.
     */
    get asV33(): DappsStakingStorageVersionStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Stores the current pallet storage version.
 */
export interface DappsStakingStorageVersionStorageV12 {
    get(): Promise<v12.Version>
}

/**
 *  Stores the current pallet storage version.
 */
export interface DappsStakingStorageVersionStorageV33 {
    get(): Promise<v33.Version>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
    }

    /**
     *  The configuration.
     */
    get asV15(): DmpQueueConfigurationStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '67bde14908f93a3aea4aa5877726bd296c59aa66227203739244319bbf5fb443'
    }

    /**
     *  The configuration.
     */
    get asV43(): DmpQueueConfigurationStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asV49(): DmpQueueConfigurationStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV15 {
    get(): Promise<v15.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV43 {
    get(): Promise<v43.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV49 {
    get(): Promise<v49.ConfigData>
}

export class DmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV61(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV61(): DmpQueueCounterForOverweightStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageV61 {
    get(): Promise<number>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asV15(): DmpQueueOverweightStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageV15 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asV15(): DmpQueuePageIndexStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageV15 {
    get(): Promise<v15.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asV15(): DmpQueuePagesStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageV15 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class DynamicEvmBaseFeeBaseFeePerGasStorage extends StorageBase {
    protected getPrefix() {
        return 'DynamicEvmBaseFee'
    }

    protected getName() {
        return 'BaseFeePerGas'
    }

    get isV72(): boolean {
        return this.getTypeHash() === '12f873961beb65950ba33112c0ef55aa5cd3ec2d1e17a439f76a028d6b94ec7b'
    }

    get asV72(): DynamicEvmBaseFeeBaseFeePerGasStorageV72 {
        assert(this.isV72)
        return this as any
    }
}

export interface DynamicEvmBaseFeeBaseFeePerGasStorageV72 {
    get(): Promise<bigint>
}

export class EVMAccountCodesStorage extends StorageBase {
    protected getPrefix() {
        return 'EVM'
    }

    protected getName() {
        return 'AccountCodes'
    }

    get isV1(): boolean {
        return this.getTypeHash() === '4b802a732c8f27bcaa64a64c00c70aeccf7b09e63cd3db9000de1ada8ab379c2'
    }

    get asV1(): EVMAccountCodesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface EVMAccountCodesStorageV1 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class EVMAccountCodesMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'EVM'
    }

    protected getName() {
        return 'AccountCodesMetadata'
    }

    get isV64(): boolean {
        return this.getTypeHash() === '85b2848eb820c708bd1d2c8e96a947d7f7597fba6d42d560a793758fc63f060e'
    }

    get asV64(): EVMAccountCodesMetadataStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

export interface EVMAccountCodesMetadataStorageV64 {
    get(key: Uint8Array): Promise<(v64.CodeMetadata | undefined)>
    getAll(): Promise<v64.CodeMetadata[]>
    getMany(keys: Uint8Array[]): Promise<(v64.CodeMetadata | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.CodeMetadata][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.CodeMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.CodeMetadata][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.CodeMetadata][]>
}

export class EVMAccountStoragesStorage extends StorageBase {
    protected getPrefix() {
        return 'EVM'
    }

    protected getName() {
        return 'AccountStorages'
    }

    get isV1(): boolean {
        return this.getTypeHash() === 'e46b64a08590ade9974d6cacb482b7b117daf13fb4b1c7e4a0c1e141c3c7c76f'
    }

    get asV1(): EVMAccountStoragesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface EVMAccountStoragesStorageV1 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class EVMSuicidedStorage extends StorageBase {
    protected getPrefix() {
        return 'EVM'
    }

    protected getName() {
        return 'Suicided'
    }

    get isV82(): boolean {
        return this.getTypeHash() === '38797e2de9f8f94e738f58ec584f9de96f378dfa5348b82ba307ea7cacec468b'
    }

    get asV82(): EVMSuicidedStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

export interface EVMSuicidedStorageV82 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class EthereumBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'BlockHash'
    }

    get isV1(): boolean {
        return this.getTypeHash() === '3cdb160343948514e73c6294339cfda53b65a21ccd0591b9966cf8b00b8db892'
    }

    get asV1(): EthereumBlockHashStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface EthereumBlockHashStorageV1 {
    get(key: bigint): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<Uint8Array[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class EthereumCurrentBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentBlock'
    }

    /**
     *  The current Ethereum block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '0210c19c3dd8953e8a03ffae39e3596d447227f387c61bcecf095aef04c44e1a'
    }

    /**
     *  The current Ethereum block.
     */
    get asV1(): EthereumCurrentBlockStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The current Ethereum block.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '83cc60e6bcafe0d8714add8cf55f02976711d5e30ab464d1a2079648429b2716'
    }

    /**
     *  The current Ethereum block.
     */
    get asV9(): EthereumCurrentBlockStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  The current Ethereum block.
 */
export interface EthereumCurrentBlockStorageV1 {
    get(): Promise<(v1.Block | undefined)>
}

/**
 *  The current Ethereum block.
 */
export interface EthereumCurrentBlockStorageV9 {
    get(): Promise<(v9.Block | undefined)>
}

export class EthereumCurrentReceiptsStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentReceipts'
    }

    /**
     *  The current Ethereum receipts.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'b4343bd18832b42de089930162303b7641b5809e65fee5604ef3ed9ff4e9e094'
    }

    /**
     *  The current Ethereum receipts.
     */
    get asV1(): EthereumCurrentReceiptsStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The current Ethereum receipts.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '3808105e37ff881e09dab58654e60755cf8107d16545835652272971b001adf7'
    }

    /**
     *  The current Ethereum receipts.
     */
    get asV9(): EthereumCurrentReceiptsStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  The current Ethereum receipts.
 */
export interface EthereumCurrentReceiptsStorageV1 {
    get(): Promise<(v1.Receipt[] | undefined)>
}

/**
 *  The current Ethereum receipts.
 */
export interface EthereumCurrentReceiptsStorageV9 {
    get(): Promise<(v9.ReceiptV3[] | undefined)>
}

export class EthereumCurrentTransactionStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentTransactionStatuses'
    }

    /**
     *  The current transaction statuses.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'e42d9c1a7dbca2e4e0301367b0c021b885fe9bf9ce8eadadb8b48112a96cf49e'
    }

    /**
     *  The current transaction statuses.
     */
    get asV1(): EthereumCurrentTransactionStatusesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV1 {
    get(): Promise<(v1.TransactionStatus[] | undefined)>
}

export class EthereumPendingStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'Pending'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '6ebd3f4fccb67af169d169b874b4c35acdeab35995748ea77676054df8f04d39'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get asV1(): EthereumPendingStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '00020cc0b6f1b30cefcbc71a9c5abcba50c851f7263cf484aa6fd41c577e5a1f'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get asV9(): EthereumPendingStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  Current building block's transactions and receipts.
 */
export interface EthereumPendingStorageV1 {
    get(): Promise<[v1.LegacyTransaction, v1.TransactionStatus, v1.Receipt][]>
}

/**
 *  Current building block's transactions and receipts.
 */
export interface EthereumPendingStorageV9 {
    get(): Promise<[v9.TransactionV2, v9.TransactionStatus, v9.ReceiptV3][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV1(): IdentityIdentityOfStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV1 {
    get(key: Uint8Array): Promise<(v1.Registration | undefined)>
    getAll(): Promise<v1.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v1.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV1(): IdentityRegistrarsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV1 {
    get(): Promise<(v1.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV1(): IdentitySubsOfStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV1 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV1(): IdentitySuperOfStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV1 {
    get(key: Uint8Array): Promise<([Uint8Array, v1.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v1.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v1.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v1.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v1.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v1.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v1.Data]][]>
}

export class InflationActiveInflationConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Inflation'
    }

    protected getName() {
        return 'ActiveInflationConfig'
    }

    /**
     *  Active inflation configuration parameters.
     *  They describe current rewards, when inflation needs to be recalculated, etc.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '8bb8ab98793059dd73bdd38a82682ec2352a40ee30699b95ecc2cedfd049fae0'
    }

    /**
     *  Active inflation configuration parameters.
     *  They describe current rewards, when inflation needs to be recalculated, etc.
     */
    get asV79(): InflationActiveInflationConfigStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Active inflation configuration parameters.
 *  They describe current rewards, when inflation needs to be recalculated, etc.
 */
export interface InflationActiveInflationConfigStorageV79 {
    get(): Promise<v79.InflationConfiguration>
}

export class InflationDoRecalculationStorage extends StorageBase {
    protected getPrefix() {
        return 'Inflation'
    }

    protected getName() {
        return 'DoRecalculation'
    }

    /**
     *  Flag indicating whether on the first possible opportunity, recalculation of the inflation config should be done.
     */
    get isV79(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Flag indicating whether on the first possible opportunity, recalculation of the inflation config should be done.
     */
    get asV79(): InflationDoRecalculationStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Flag indicating whether on the first possible opportunity, recalculation of the inflation config should be done.
 */
export interface InflationDoRecalculationStorageV79 {
    get(): Promise<(number | undefined)>
}

export class InflationInflationParamsStorage extends StorageBase {
    protected getPrefix() {
        return 'Inflation'
    }

    protected getName() {
        return 'InflationParams'
    }

    /**
     *  Static inflation parameters - used to calculate active inflation configuration at certain points in time.
     */
    get isV79(): boolean {
        return this.getTypeHash() === 'e943881d3399cf67208e7438cc3c122fe4bf3df1a7a1dcfaa0afb474a4259437'
    }

    /**
     *  Static inflation parameters - used to calculate active inflation configuration at certain points in time.
     */
    get asV79(): InflationInflationParamsStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Static inflation parameters - used to calculate active inflation configuration at certain points in time.
 */
export interface InflationInflationParamsStorageV79 {
    get(): Promise<v79.InflationParameters>
}

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV1(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV1(): MultisigCallsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface MultisigCallsStorageV1 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV1(): MultisigMultisigsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV1 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1.Multisig | undefined)>
    getAll(): Promise<v1.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1.Multisig][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV1(): ParachainInfoParachainIdStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageV1 {
    get(): Promise<number>
}

export class ParachainSystemAggregatedUnincludedSegmentStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AggregatedUnincludedSegment'
    }

    /**
     *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
     *  latest the latest HRMP watermark. Used for limiting the acceptance of new blocks with
     *  respect to relay chain constraints.
     */
    get isV82(): boolean {
        return this.getTypeHash() === 'b42b4d4f99a6a22ecfe5ecab9a484f2917195633637a901c8f3d9de093daed42'
    }

    /**
     *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
     *  latest the latest HRMP watermark. Used for limiting the acceptance of new blocks with
     *  respect to relay chain constraints.
     */
    get asV82(): ParachainSystemAggregatedUnincludedSegmentStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
 *  latest the latest HRMP watermark. Used for limiting the acceptance of new blocks with
 *  respect to relay chain constraints.
 */
export interface ParachainSystemAggregatedUnincludedSegmentStorageV82 {
    get(): Promise<(v82.SegmentTracker | undefined)>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asV1(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV1 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV1(): ParachainSystemAuthorizedUpgradeStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV64(): ParachainSystemAuthorizedUpgradeStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV1 {
    get(): Promise<(Uint8Array | undefined)>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV64 {
    get(): Promise<(v64.CodeUpgradeAuthorization | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asV9(): ParachainSystemCustomValidationHeadDataStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageV9 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asV1(): ParachainSystemDidSetValidationCodeStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageV1 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'e7770235be9d14ed134fc6d0effb398cdedbf1010adc4f3555004a1d10de49d3'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV1(): ParachainSystemHostConfigurationStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV9(): ParachainSystemHostConfigurationStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV82(): boolean {
        return this.getTypeHash() === 'de486fae549b1abd5e532e2a83c0a9d6791f4055844fe3ce9c8a5636406ca73f'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV82(): ParachainSystemHostConfigurationStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV1 {
    get(): Promise<(v1.V1AbridgedHostConfiguration | undefined)>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV9 {
    get(): Promise<(v9.V1AbridgedHostConfiguration | undefined)>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV82 {
    get(): Promise<(v82.V5AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV1(): ParachainSystemHrmpOutboundMessagesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageV1 {
    get(): Promise<v1.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV1(): ParachainSystemHrmpWatermarkStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageV1 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV1(): ParachainSystemLastDmqMqcHeadStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageV1 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV1(): ParachainSystemLastHrmpMqcHeadsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageV1 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asV30(): ParachainSystemLastRelayChainBlockNumberStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageV30 {
    get(): Promise<number>
}

export class ParachainSystemLastUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastUpgrade'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get asV1(): ParachainSystemLastUpgradeStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The last relay parent block number at which we signalled the code upgrade.
 */
export interface ParachainSystemLastUpgradeStorageV1 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asV1(): ParachainSystemNewValidationCodeStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  New validation code that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageV1 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingRelayChainBlockNumber'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get asV1(): ParachainSystemPendingRelayChainBlockNumberStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  We need to store the new validation function for the span between
 *  setting it and applying it. If it has a
 *  value, then [`PendingValidationCode`] must have a real value, and
 *  together will coordinate the block number where the upgrade will happen.
 */
export interface ParachainSystemPendingRelayChainBlockNumberStorageV1 {
    get(): Promise<(number | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asV1(): ParachainSystemPendingUpwardMessagesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageV1 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get asV1(): ParachainSystemPendingValidationCodeStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The new validation function we will upgrade to when the relay chain
 *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
 *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
 */
export interface ParachainSystemPendingValidationCodeStorageV1 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV1(): ParachainSystemProcessedDownwardMessagesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageV1 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV15(): ParachainSystemRelayStateProofStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageV15 {
    get(): Promise<(v15.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV1(): ParachainSystemRelevantMessagingStateStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '2e08e09c21eea176bfd53411112b867efc3c3d71f51431e11288adfb3e3ede6f'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV64(): ParachainSystemRelevantMessagingStateStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV82(): boolean {
        return this.getTypeHash() === '81e28f1379e57efb7246becb4c95d73a976456a56b1027ee86a610cad3d6002c'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV82(): ParachainSystemRelevantMessagingStateStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV1 {
    get(): Promise<(v1.MessagingStateSnapshot | undefined)>
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV64 {
    get(): Promise<(v64.MessagingStateSnapshot | undefined)>
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV82 {
    get(): Promise<(v82.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV1(): ParachainSystemReservedDmpWeightOverrideStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV43(): ParachainSystemReservedDmpWeightOverrideStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV49(): ParachainSystemReservedDmpWeightOverrideStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV1 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV43 {
    get(): Promise<(v43.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV49 {
    get(): Promise<(v49.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV1(): ParachainSystemReservedXcmpWeightOverrideStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV43(): ParachainSystemReservedXcmpWeightOverrideStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV49(): ParachainSystemReservedXcmpWeightOverrideStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV1 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV43 {
    get(): Promise<(v43.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV49 {
    get(): Promise<(v49.Weight | undefined)>
}

export class ParachainSystemUnincludedSegmentStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UnincludedSegment'
    }

    /**
     *  Latest included block descendants the runtime accepted. In other words, these are
     *  ancestors of the currently executing block which have not been included in the observed
     *  relay-chain state.
     * 
     *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
     *  in the pallet.
     */
    get isV82(): boolean {
        return this.getTypeHash() === 'ea57093aeaa7f055a1dbbbbd84914e43fd65f64ecc240c5666db9e5ae35608e1'
    }

    /**
     *  Latest included block descendants the runtime accepted. In other words, these are
     *  ancestors of the currently executing block which have not been included in the observed
     *  relay-chain state.
     * 
     *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
     *  in the pallet.
     */
    get asV82(): ParachainSystemUnincludedSegmentStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  Latest included block descendants the runtime accepted. In other words, these are
 *  ancestors of the currently executing block which have not been included in the observed
 *  relay-chain state.
 * 
 *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
 *  in the pallet.
 */
export interface ParachainSystemUnincludedSegmentStorageV82 {
    get(): Promise<v82.Ancestor[]>
}

export class ParachainSystemUpgradeGoAheadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeGoAhead'
    }

    /**
     *  Optional upgrade go-ahead signal from the relay-chain.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isV82(): boolean {
        return this.getTypeHash() === '4a89f2b5bc0fb569d8b46a1f4c765acce685ac5ee6a83c7bb9943010422461fb'
    }

    /**
     *  Optional upgrade go-ahead signal from the relay-chain.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asV82(): ParachainSystemUpgradeGoAheadStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  Optional upgrade go-ahead signal from the relay-chain.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeGoAheadStorageV82 {
    get(): Promise<(v82.V5UpgradeGoAhead | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isV3(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asV3(): ParachainSystemUpgradeRestrictionSignalStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageV3 {
    get(): Promise<(v3.V1UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV1(): ParachainSystemUpwardMessagesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageV1 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get asV1(): ParachainSystemValidationDataStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 */
export interface ParachainSystemValidationDataStorageV1 {
    get(): Promise<(v1.V1PersistedValidationData | undefined)>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV15(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV15(): PolkadotXcmAssetTrapsStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageV15 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV15(): PolkadotXcmCurrentMigrationStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageV15 {
    get(): Promise<(v15.VersionMigrationStage | undefined)>
}

export class PolkadotXcmLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV61(): PolkadotXcmLockedFungiblesStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageV61 {
    get(key: Uint8Array): Promise<([bigint, v61.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v61.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v61.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v61.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v61.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v61.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v61.VersionedMultiLocation][]][]>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV15(): PolkadotXcmQueriesStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'd10dd933536b6a509757649a144befe6c924fc7ec281f36a7bd0d258223921f2'
    }

    /**
     *  The ongoing queries.
     */
    get asV52(): PolkadotXcmQueriesStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV61(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV61(): PolkadotXcmQueriesStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV15 {
    get(key: bigint): Promise<(v15.QueryStatus | undefined)>
    getAll(): Promise<v15.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v15.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v15.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v15.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v15.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v15.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV52 {
    get(key: bigint): Promise<(v52.QueryStatus | undefined)>
    getAll(): Promise<v52.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v52.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV61 {
    get(key: bigint): Promise<(v61.QueryStatus | undefined)>
    getAll(): Promise<v61.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v61.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v61.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v61.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v61.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v61.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV15(): PolkadotXcmQueryCounterStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageV15 {
    get(): Promise<bigint>
}

export class PolkadotXcmRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV61(): PolkadotXcmRemoteLockedFungiblesStorageV61 {
        assert(this.isV61)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV68(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV68(): PolkadotXcmRemoteLockedFungiblesStorageV68 {
        assert(this.isV68)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV61 {
    get(key1: number, key2: Uint8Array, key3: v61.VersionedAssetId): Promise<(v61.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v61.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v61.VersionedAssetId][]): Promise<(v61.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v61.VersionedAssetId): Promise<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v61.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v61.VersionedAssetId): AsyncIterable<[number, Uint8Array, v61.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v61.VersionedAssetId): Promise<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v61.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v61.VersionedAssetId], v: v61.RemoteLockedFungibleRecord][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV68 {
    get(key1: number, key2: Uint8Array, key3: v68.VersionedAssetId): Promise<(v68.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v68.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v68.VersionedAssetId][]): Promise<(v68.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v68.VersionedAssetId): Promise<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v68.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v68.VersionedAssetId): AsyncIterable<[number, Uint8Array, v68.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v68.VersionedAssetId): Promise<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v68.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v68.VersionedAssetId], v: v68.RemoteLockedFungibleRecord][]>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV15(): PolkadotXcmSafeXcmVersionStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageV15 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV15(): PolkadotXcmSupportedVersionStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '523e16bf5eab0fa24d391969017bb7ba96a0ccf8c757f474e1305f6fb2ca4c56'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV52(): PolkadotXcmSupportedVersionStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV61(): PolkadotXcmSupportedVersionStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV15 {
    get(key1: number, key2: v15.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v15.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v15.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v15.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v15.VersionedMultiLocation): Promise<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v15.VersionedMultiLocation): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v15.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v15.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v15.VersionedMultiLocation): Promise<[k: [number, v15.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v15.VersionedMultiLocation): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV52 {
    get(key1: number, key2: v52.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v52.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v52.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v52.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v52.VersionedMultiLocation): Promise<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v52.VersionedMultiLocation): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v52.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v52.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v52.VersionedMultiLocation): Promise<[k: [number, v52.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v52.VersionedMultiLocation): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV61 {
    get(key1: number, key2: v61.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v61.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v61.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v61.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v61.VersionedMultiLocation): Promise<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v61.VersionedMultiLocation): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v61.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v61.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v61.VersionedMultiLocation): Promise<[k: [number, v61.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v61.VersionedMultiLocation): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV15(): PolkadotXcmVersionDiscoveryQueueStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'c083fea4cf1195adcbfad7e0e32371a867d5ee11c67b4620ec6977d399fd1aee'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV52(): PolkadotXcmVersionDiscoveryQueueStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV61(): PolkadotXcmVersionDiscoveryQueueStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV15 {
    get(): Promise<[v15.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV52 {
    get(): Promise<[v52.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV61 {
    get(): Promise<[v61.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV15(): PolkadotXcmVersionNotifiersStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'b91f3dac7afb55835a6f5f37431cda7a2fb7722283e5e5ad9feea7b84cffdc7a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV52(): PolkadotXcmVersionNotifiersStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV61(): PolkadotXcmVersionNotifiersStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV15 {
    get(key1: number, key2: v15.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v15.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v15.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v15.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v15.VersionedMultiLocation): Promise<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v15.VersionedMultiLocation): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v15.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v15.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v15.VersionedMultiLocation): Promise<[k: [number, v15.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v15.VersionedMultiLocation): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV52 {
    get(key1: number, key2: v52.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v52.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v52.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v52.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v52.VersionedMultiLocation): Promise<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v52.VersionedMultiLocation): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v52.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v52.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v52.VersionedMultiLocation): Promise<[k: [number, v52.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v52.VersionedMultiLocation): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV61 {
    get(key1: number, key2: v61.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v61.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v61.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v61.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v61.VersionedMultiLocation): Promise<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v61.VersionedMultiLocation): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v61.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v61.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v61.VersionedMultiLocation): Promise<[k: [number, v61.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v61.VersionedMultiLocation): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV15(): PolkadotXcmVersionNotifyTargetsStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '0366789a1c94a7567fc5a8d256e5cd0721b84138187c2fffb75e3528ebb47078'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV52(): PolkadotXcmVersionNotifyTargetsStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV61(): PolkadotXcmVersionNotifyTargetsStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV15 {
    get(key1: number, key2: v15.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v15.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v15.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v15.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v15.VersionedMultiLocation): Promise<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v15.VersionedMultiLocation): AsyncIterable<[number, v15.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v15.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v15.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v15.VersionedMultiLocation): Promise<[k: [number, v15.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v15.VersionedMultiLocation): AsyncIterable<[k: [number, v15.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV52 {
    get(key1: number, key2: v52.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v52.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v52.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v52.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v52.VersionedMultiLocation): Promise<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v52.VersionedMultiLocation): AsyncIterable<[number, v52.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v52.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v52.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v52.VersionedMultiLocation): Promise<[k: [number, v52.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v52.VersionedMultiLocation): AsyncIterable<[k: [number, v52.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV61 {
    get(key1: number, key2: v61.VersionedMultiLocation): Promise<([bigint, v61.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v61.Weight, number][]>
    getMany(keys: [number, v61.VersionedMultiLocation][]): Promise<([bigint, v61.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v61.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v61.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v61.VersionedMultiLocation): Promise<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v61.VersionedMultiLocation): AsyncIterable<[number, v61.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v61.VersionedMultiLocation], v: [bigint, v61.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v61.VersionedMultiLocation], v: [bigint, v61.Weight, number]][]>
    getPairs(key1: number, key2: v61.VersionedMultiLocation): Promise<[k: [number, v61.VersionedMultiLocation], v: [bigint, v61.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: [bigint, v61.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: [bigint, v61.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v61.VersionedMultiLocation): AsyncIterable<[k: [number, v61.VersionedMultiLocation], v: [bigint, v61.Weight, number]][]>
}

export class PolkadotXcmXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asV64(): PolkadotXcmXcmExecutionSuspendedStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface PolkadotXcmXcmExecutionSuspendedStorageV64 {
    get(): Promise<boolean>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV61(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV61(): ProxyAnnouncementsStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV61 {
    get(key: Uint8Array): Promise<[v61.Announcement[], bigint]>
    getAll(): Promise<[v61.Announcement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v61.Announcement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v61.Announcement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v61.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v61.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v61.Announcement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '8683fcd2cf69554750e1024cf69a9e4fe5f828536d7ea56a3b5f2aa3fe47ab0c'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV61(): ProxyProxiesStorageV61 {
        assert(this.isV61)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '598c68401dc03cd7da4c4a7831670356fb2f02a24e13fdfada8f518d5585731b'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV79(): ProxyProxiesStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV61 {
    get(key: Uint8Array): Promise<[v61.ProxyDefinition[], bigint]>
    getAll(): Promise<[v61.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v61.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v61.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v61.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v61.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v61.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV79 {
    get(key: Uint8Array): Promise<[v79.ProxyDefinition[], bigint]>
    getAll(): Promise<[v79.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v79.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v79.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v79.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v79.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v79.ProxyDefinition[], bigint]][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV1(): SessionCurrentIndexStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV1 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get asV1(): SessionDisabledValidatorsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV1 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV1(): SessionKeyOwnerStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV1 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '631bdf50943dc1aa6eef0e538bc5f8db41fca7120b2bae11b9c7ad84ada29964'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV1(): SessionNextKeysStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV1 {
    get(key: Uint8Array): Promise<(v1.SessionKeys | undefined)>
    getAll(): Promise<v1.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v1.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV1(): SessionQueuedChangedStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV1 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '88cd205a98ff7b5562f0d030266b07e3566fdf283e05e6bd4c2405710a6a3b90'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV1(): SessionQueuedKeysStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV1 {
    get(): Promise<[Uint8Array, v1.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV1(): SessionValidatorsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV1 {
    get(): Promise<Uint8Array[]>
}

export class StateTrieMigrationAutoLimitsStorage extends StorageBase {
    protected getPrefix() {
        return 'StateTrieMigration'
    }

    protected getName() {
        return 'AutoLimits'
    }

    /**
     *  The limits that are imposed on automatic migrations.
     * 
     *  If set to None, then no automatic migration happens.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '3eaf472033cc14766167423d9fb44d1202eff611c3fc5885336f9eae94a2a7b7'
    }

    /**
     *  The limits that are imposed on automatic migrations.
     * 
     *  If set to None, then no automatic migration happens.
     */
    get asV61(): StateTrieMigrationAutoLimitsStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  The limits that are imposed on automatic migrations.
 * 
 *  If set to None, then no automatic migration happens.
 */
export interface StateTrieMigrationAutoLimitsStorageV61 {
    get(): Promise<(v61.MigrationLimits | undefined)>
}

export class StateTrieMigrationMigrationProcessStorage extends StorageBase {
    protected getPrefix() {
        return 'StateTrieMigration'
    }

    protected getName() {
        return 'MigrationProcess'
    }

    /**
     *  Migration progress.
     * 
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '1ce4b92753031b4db00767108ab5592b867c62019896dc3acc0f59a422d45e13'
    }

    /**
     *  Migration progress.
     * 
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    get asV61(): StateTrieMigrationMigrationProcessStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  Migration progress.
 * 
 *  This stores the snapshot of the last migrated keys. It can be set into motion and move
 *  forward by any of the means provided by this pallet.
 */
export interface StateTrieMigrationMigrationProcessStorageV61 {
    get(): Promise<v61.MigrationTask>
}

export class StateTrieMigrationSignedMigrationMaxLimitsStorage extends StorageBase {
    protected getPrefix() {
        return 'StateTrieMigration'
    }

    protected getName() {
        return 'SignedMigrationMaxLimits'
    }

    /**
     *  The maximum limits that the signed migration could use.
     * 
     *  If not set, no signed submission is allowed.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '78aa4791340649f5a0be1bc83a67d027e49c6aa0eaa5395fa8f9c2c64c781a61'
    }

    /**
     *  The maximum limits that the signed migration could use.
     * 
     *  If not set, no signed submission is allowed.
     */
    get asV61(): StateTrieMigrationSignedMigrationMaxLimitsStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  The maximum limits that the signed migration could use.
 * 
 *  If not set, no signed submission is allowed.
 */
export interface StateTrieMigrationSignedMigrationMaxLimitsStorageV61 {
    get(): Promise<(v61.MigrationLimits | undefined)>
}

export class StaticPriceProviderActivePriceStorage extends StorageBase {
    protected getPrefix() {
        return 'StaticPriceProvider'
    }

    protected getName() {
        return 'ActivePrice'
    }

    /**
     *  Current active native currency price.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current active native currency price.
     */
    get asV79(): StaticPriceProviderActivePriceStorageV79 {
        assert(this.isV79)
        return this as any
    }
}

/**
 *  Current active native currency price.
 */
export interface StaticPriceProviderActivePriceStorageV79 {
    get(): Promise<bigint>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV1(): SudoKeyStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV9(): SudoKeyStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV1 {
    get(): Promise<Uint8Array>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV9 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1(): SystemAccountStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV64(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV64(): SystemAccountStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1 {
    get(key: Uint8Array): Promise<v1.AccountInfo>
    getAll(): Promise<v1.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV64 {
    get(key: Uint8Array): Promise<v64.AccountInfo>
    getAll(): Promise<v64.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v64.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV1(): SystemAllExtrinsicsLenStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV1 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV1(): SystemBlockHashStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV1 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV1(): SystemBlockWeightStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asV43(): SystemBlockWeightStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV49(): SystemBlockWeightStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV1 {
    get(): Promise<v1.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV43 {
    get(): Promise<v43.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV49 {
    get(): Promise<v49.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV1(): SystemDigestStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV3(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV3(): SystemDigestStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV1 {
    get(): Promise<v1.Digest>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV3 {
    get(): Promise<v3.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV1(): SystemEventCountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV1 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV1(): SystemEventTopicsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV1 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '634684e65aeaef597570537b165a1416c3e1e9d85d87f78ea029881f06135eef'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1(): SystemEventsStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV3(): boolean {
        return this.getTypeHash() === 'd7cf1c3ae69bb6e0ded4a2dc545f646c17d4624eaae7dc9e8ecbea45003600d1'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV3(): SystemEventsStorageV3 {
        assert(this.isV3)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV4(): boolean {
        return this.getTypeHash() === '10d5f6a0f11d8200e33c130b904063a93d895a5ea4e39e52150a3747facb13c8'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV4(): SystemEventsStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '248a04b2b53e0e8eb5f50613c2132caa36c185db93117cebc72c34f3956b6cf1'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9(): SystemEventsStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV12(): boolean {
        return this.getTypeHash() === '68c5bbe8a6811c66eb809d5f91d8cecc8f0b1ddd5e325a081824c353c2212ba5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV12(): SystemEventsStorageV12 {
        assert(this.isV12)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '8c7bc844f8ecfb30700bc3c926c59d6d8b260ad283b1a88e7940f55f40ca5d3c'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV15(): SystemEventsStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'ae1b1ad94664a5bd159e7f25957ff46e7384a1d32c4d6a2b5f1b143fee4587f1'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV16(): SystemEventsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV17(): boolean {
        return this.getTypeHash() === '4949cea41fc66cde38a36637b3c8a7c17656bec907f69676a93ebf8aff2946b9'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV17(): SystemEventsStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV23(): boolean {
        return this.getTypeHash() === 'bb62bcda2d40e80c3ba1f402fa610ff3755b150cf3135239df3e10ec3bf28f4b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV23(): SystemEventsStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '71e638da6483870185e9cdfe46e573a62f2e606d63a298c57a116aec4fdb6483'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV30(): SystemEventsStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '6b9e447e529eeba5ab4659dd67a211c7bb05c6cae0fcd5d30cc890d5c1396d08'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV33(): SystemEventsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '91518951e13d1598e29247d28ec24db6d66b4e149554867cf8cfe44760ca81ed'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV43(): SystemEventsStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f19fc9bdcd7807d3ecc83613e60baddc0cb34497de4ae8e8e4103ffb665dfb9b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV49(): SystemEventsStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '70c9f2f2bf16ec9a65409d67bd4c5186ab7f52e92dbace702c430127ec958168'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV52(): SystemEventsStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'fa40c2954afd6b7a7dca31b4c42371ee3ac4c6873a0b3118e6ec8bc8894216fc'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV55(): SystemEventsStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV61(): boolean {
        return this.getTypeHash() === 'f46bfb4dd880f938c89ff2c216bf08c60c307340ebe94579e7756988f63f701c'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV61(): SystemEventsStorageV61 {
        assert(this.isV61)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '4df386e1cd5fb705d6178df1c626abf118777fe9242e16480ff25f858e13d319'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV64(): SystemEventsStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV66(): boolean {
        return this.getTypeHash() === 'bfc43c777a3afd25d38bab4d5c20237d59f5b8ec1df09b01963546c6194ae0bd'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV66(): SystemEventsStorageV66 {
        assert(this.isV66)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV68(): boolean {
        return this.getTypeHash() === '89c911227c2fcaa7f80650e5eb82072564faedbbf138b01889f0815c9c7f12a8'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV68(): SystemEventsStorageV68 {
        assert(this.isV68)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV70(): boolean {
        return this.getTypeHash() === 'ee6b6a8186b43663b617cadf1bb5c517310ca169c6c19ab7b77c6781c7dd24c5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV70(): SystemEventsStorageV70 {
        assert(this.isV70)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV72(): boolean {
        return this.getTypeHash() === 'dc82c2a72cd8ef3f7c20f8c2d25221cea4b5107a532204247d2b483c3451a756'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV72(): SystemEventsStorageV72 {
        assert(this.isV72)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV74(): boolean {
        return this.getTypeHash() === '5418762b451a669f5839c53ca07c4e8e043adf53f1f9eaa7dc86ab46b1eeca80'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV74(): SystemEventsStorageV74 {
        assert(this.isV74)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV77(): boolean {
        return this.getTypeHash() === 'fa3751d2b658c032f26caca41272d903255f43e104a97b368d8c4769fa73e5b1'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV77(): SystemEventsStorageV77 {
        assert(this.isV77)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV79(): boolean {
        return this.getTypeHash() === '9e8e4bcfe380b6641487b39c9ebc3c0481fcbf6c09987e3fca660780daa21ac0'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV79(): SystemEventsStorageV79 {
        assert(this.isV79)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV82(): boolean {
        return this.getTypeHash() === '6fc7c9a0be9e439e073b7762d309f1069c1bdd3a754fa45cf45cd03cc7b095c6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV82(): SystemEventsStorageV82 {
        assert(this.isV82)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1 {
    get(): Promise<v1.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV3 {
    get(): Promise<v3.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV4 {
    get(): Promise<v4.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9 {
    get(): Promise<v9.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV12 {
    get(): Promise<v12.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV15 {
    get(): Promise<v15.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV16 {
    get(): Promise<v16.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV17 {
    get(): Promise<v17.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV23 {
    get(): Promise<v23.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV30 {
    get(): Promise<v30.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV33 {
    get(): Promise<v33.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV43 {
    get(): Promise<v43.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV49 {
    get(): Promise<v49.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV52 {
    get(): Promise<v52.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV55 {
    get(): Promise<v55.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV61 {
    get(): Promise<v61.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV64 {
    get(): Promise<v64.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV66 {
    get(): Promise<v66.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV68 {
    get(): Promise<v68.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV70 {
    get(): Promise<v70.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV72 {
    get(): Promise<v72.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV74 {
    get(): Promise<v74.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV77 {
    get(): Promise<v77.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV79 {
    get(): Promise<v79.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV82 {
    get(): Promise<v82.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV1(): SystemExecutionPhaseStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV1 {
    get(): Promise<(v1.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV1(): SystemExtrinsicCountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV1 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV1(): SystemExtrinsicDataStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV1 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV1(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV1(): SystemLastRuntimeUpgradeStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV1 {
    get(): Promise<(v1.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV1(): SystemNumberStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV1 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV1(): SystemParentHashStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV1 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV1(): SystemUpgradedToTripleRefCountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV1 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV1(): SystemUpgradedToU32RefCountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV1 {
    get(): Promise<boolean>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV1(): TimestampDidUpdateStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV1 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV1(): TimestampNowStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV1 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV1(): TransactionPaymentNextFeeMultiplierStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV1 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV1(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV1(): TransactionPaymentStorageVersionStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV1 {
    get(): Promise<v1.Releases>
}

export class VestingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '5370c514276f3735e13df7db1f1bbacaba918c365a3ed949597f7ce091eeb77e'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get asV1(): VestingStorageVersionStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with latest version, as determined by the genesis build.
 */
export interface VestingStorageVersionStorageV1 {
    get(): Promise<v1.Type_212>
}

export class VestingVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV1(): boolean {
        return this.getTypeHash() === '22ac0db91087ba9b3f5dee769d5e3398f8c8c045cabf7f6585992df66dba74db'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV1(): VestingVestingStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingVestingStorageV1 {
    get(key: Uint8Array): Promise<(v1.VestingInfo[] | undefined)>
    getAll(): Promise<v1.VestingInfo[][]>
    getMany(keys: Uint8Array[]): Promise<(v1.VestingInfo[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.VestingInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.VestingInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.VestingInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.VestingInfo[]][]>
}

export class XcAssetConfigAssetIdToLocationStorage extends StorageBase {
    protected getPrefix() {
        return 'XcAssetConfig'
    }

    protected getName() {
        return 'AssetIdToLocation'
    }

    /**
     *  Mapping from an asset id to asset type.
     *  Can be used when receiving transaction specifying an asset directly,
     *  like transferring an asset from this chain to another.
     */
    get isV23(): boolean {
        return this.getTypeHash() === 'a1c1aa171f67154cf8144d0b483785ad0af5084df10e42e1c60b16d30f4a8937'
    }

    /**
     *  Mapping from an asset id to asset type.
     *  Can be used when receiving transaction specifying an asset directly,
     *  like transferring an asset from this chain to another.
     */
    get asV23(): XcAssetConfigAssetIdToLocationStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Mapping from an asset id to asset type.
     *  Can be used when receiving transaction specifying an asset directly,
     *  like transferring an asset from this chain to another.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '136ef0ce040129f7666e726f1e58cd743782a2d224b4f06f6a1f7d84fdb74ec7'
    }

    /**
     *  Mapping from an asset id to asset type.
     *  Can be used when receiving transaction specifying an asset directly,
     *  like transferring an asset from this chain to another.
     */
    get asV52(): XcAssetConfigAssetIdToLocationStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Mapping from an asset id to asset type.
     *  Can be used when receiving transaction specifying an asset directly,
     *  like transferring an asset from this chain to another.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '4e5e966ec07ecbfd6011b50daf7768966f3ad804c4c6722cfded27911d030be5'
    }

    /**
     *  Mapping from an asset id to asset type.
     *  Can be used when receiving transaction specifying an asset directly,
     *  like transferring an asset from this chain to another.
     */
    get asV61(): XcAssetConfigAssetIdToLocationStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  Mapping from an asset id to asset type.
 *  Can be used when receiving transaction specifying an asset directly,
 *  like transferring an asset from this chain to another.
 */
export interface XcAssetConfigAssetIdToLocationStorageV23 {
    get(key: bigint): Promise<(v23.VersionedMultiLocation | undefined)>
    getAll(): Promise<v23.VersionedMultiLocation[]>
    getMany(keys: bigint[]): Promise<(v23.VersionedMultiLocation | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v23.VersionedMultiLocation][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v23.VersionedMultiLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v23.VersionedMultiLocation][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v23.VersionedMultiLocation][]>
}

/**
 *  Mapping from an asset id to asset type.
 *  Can be used when receiving transaction specifying an asset directly,
 *  like transferring an asset from this chain to another.
 */
export interface XcAssetConfigAssetIdToLocationStorageV52 {
    get(key: bigint): Promise<(v52.VersionedMultiLocation | undefined)>
    getAll(): Promise<v52.VersionedMultiLocation[]>
    getMany(keys: bigint[]): Promise<(v52.VersionedMultiLocation | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.VersionedMultiLocation][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.VersionedMultiLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.VersionedMultiLocation][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.VersionedMultiLocation][]>
}

/**
 *  Mapping from an asset id to asset type.
 *  Can be used when receiving transaction specifying an asset directly,
 *  like transferring an asset from this chain to another.
 */
export interface XcAssetConfigAssetIdToLocationStorageV61 {
    get(key: bigint): Promise<(v61.VersionedMultiLocation | undefined)>
    getAll(): Promise<v61.VersionedMultiLocation[]>
    getMany(keys: bigint[]): Promise<(v61.VersionedMultiLocation | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v61.VersionedMultiLocation][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v61.VersionedMultiLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v61.VersionedMultiLocation][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v61.VersionedMultiLocation][]>
}

export class XcAssetConfigAssetLocationToIdStorage extends StorageBase {
    protected getPrefix() {
        return 'XcAssetConfig'
    }

    protected getName() {
        return 'AssetLocationToId'
    }

    /**
     *  Mapping from an asset type to an asset id.
     *  Can be used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '6a011a0854202bc5085b2a040d7e0f5c10c9e95690a51c6c6772bb22d013515c'
    }

    /**
     *  Mapping from an asset type to an asset id.
     *  Can be used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get asV23(): XcAssetConfigAssetLocationToIdStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Mapping from an asset type to an asset id.
     *  Can be used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'c8408d4b52a02efe2576c71ec1b7322d535135baca21f512ae81874c4e85874c'
    }

    /**
     *  Mapping from an asset type to an asset id.
     *  Can be used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get asV52(): XcAssetConfigAssetLocationToIdStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Mapping from an asset type to an asset id.
     *  Can be used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '8066224e1a8529f4d194bac8a89f5ba16f884b4283963e630784208c9cea83bd'
    }

    /**
     *  Mapping from an asset type to an asset id.
     *  Can be used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get asV61(): XcAssetConfigAssetLocationToIdStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  Mapping from an asset type to an asset id.
 *  Can be used when receiving a multilocation XCM message to retrieve
 *  the corresponding asset in which tokens should me minted.
 */
export interface XcAssetConfigAssetLocationToIdStorageV23 {
    get(key: v23.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v23.VersionedMultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v23.VersionedMultiLocation[]>
    getKeys(key: v23.VersionedMultiLocation): Promise<v23.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v23.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number, key: v23.VersionedMultiLocation): AsyncIterable<v23.VersionedMultiLocation[]>
    getPairs(): Promise<[k: v23.VersionedMultiLocation, v: bigint][]>
    getPairs(key: v23.VersionedMultiLocation): Promise<[k: v23.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v23.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v23.VersionedMultiLocation): AsyncIterable<[k: v23.VersionedMultiLocation, v: bigint][]>
}

/**
 *  Mapping from an asset type to an asset id.
 *  Can be used when receiving a multilocation XCM message to retrieve
 *  the corresponding asset in which tokens should me minted.
 */
export interface XcAssetConfigAssetLocationToIdStorageV52 {
    get(key: v52.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v52.VersionedMultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v52.VersionedMultiLocation[]>
    getKeys(key: v52.VersionedMultiLocation): Promise<v52.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number, key: v52.VersionedMultiLocation): AsyncIterable<v52.VersionedMultiLocation[]>
    getPairs(): Promise<[k: v52.VersionedMultiLocation, v: bigint][]>
    getPairs(key: v52.VersionedMultiLocation): Promise<[k: v52.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v52.VersionedMultiLocation): AsyncIterable<[k: v52.VersionedMultiLocation, v: bigint][]>
}

/**
 *  Mapping from an asset type to an asset id.
 *  Can be used when receiving a multilocation XCM message to retrieve
 *  the corresponding asset in which tokens should me minted.
 */
export interface XcAssetConfigAssetLocationToIdStorageV61 {
    get(key: v61.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v61.VersionedMultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v61.VersionedMultiLocation[]>
    getKeys(key: v61.VersionedMultiLocation): Promise<v61.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v61.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number, key: v61.VersionedMultiLocation): AsyncIterable<v61.VersionedMultiLocation[]>
    getPairs(): Promise<[k: v61.VersionedMultiLocation, v: bigint][]>
    getPairs(key: v61.VersionedMultiLocation): Promise<[k: v61.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v61.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v61.VersionedMultiLocation): AsyncIterable<[k: v61.VersionedMultiLocation, v: bigint][]>
}

export class XcAssetConfigAssetLocationUnitsPerSecondStorage extends StorageBase {
    protected getPrefix() {
        return 'XcAssetConfig'
    }

    protected getName() {
        return 'AssetLocationUnitsPerSecond'
    }

    /**
     *  Stores the units per second for local execution for a AssetLocation.
     *  This is used to know how to charge for XCM execution in a particular asset.
     * 
     *  Not all asset types are supported for payment. If value exists here, it means it is supported.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '6a011a0854202bc5085b2a040d7e0f5c10c9e95690a51c6c6772bb22d013515c'
    }

    /**
     *  Stores the units per second for local execution for a AssetLocation.
     *  This is used to know how to charge for XCM execution in a particular asset.
     * 
     *  Not all asset types are supported for payment. If value exists here, it means it is supported.
     */
    get asV23(): XcAssetConfigAssetLocationUnitsPerSecondStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Stores the units per second for local execution for a AssetLocation.
     *  This is used to know how to charge for XCM execution in a particular asset.
     * 
     *  Not all asset types are supported for payment. If value exists here, it means it is supported.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'c8408d4b52a02efe2576c71ec1b7322d535135baca21f512ae81874c4e85874c'
    }

    /**
     *  Stores the units per second for local execution for a AssetLocation.
     *  This is used to know how to charge for XCM execution in a particular asset.
     * 
     *  Not all asset types are supported for payment. If value exists here, it means it is supported.
     */
    get asV52(): XcAssetConfigAssetLocationUnitsPerSecondStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Stores the units per second for local execution for a AssetLocation.
     *  This is used to know how to charge for XCM execution in a particular asset.
     * 
     *  Not all asset types are supported for payment. If value exists here, it means it is supported.
     */
    get isV61(): boolean {
        return this.getTypeHash() === '8066224e1a8529f4d194bac8a89f5ba16f884b4283963e630784208c9cea83bd'
    }

    /**
     *  Stores the units per second for local execution for a AssetLocation.
     *  This is used to know how to charge for XCM execution in a particular asset.
     * 
     *  Not all asset types are supported for payment. If value exists here, it means it is supported.
     */
    get asV61(): XcAssetConfigAssetLocationUnitsPerSecondStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 *  Stores the units per second for local execution for a AssetLocation.
 *  This is used to know how to charge for XCM execution in a particular asset.
 * 
 *  Not all asset types are supported for payment. If value exists here, it means it is supported.
 */
export interface XcAssetConfigAssetLocationUnitsPerSecondStorageV23 {
    get(key: v23.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v23.VersionedMultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v23.VersionedMultiLocation[]>
    getKeys(key: v23.VersionedMultiLocation): Promise<v23.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v23.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number, key: v23.VersionedMultiLocation): AsyncIterable<v23.VersionedMultiLocation[]>
    getPairs(): Promise<[k: v23.VersionedMultiLocation, v: bigint][]>
    getPairs(key: v23.VersionedMultiLocation): Promise<[k: v23.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v23.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v23.VersionedMultiLocation): AsyncIterable<[k: v23.VersionedMultiLocation, v: bigint][]>
}

/**
 *  Stores the units per second for local execution for a AssetLocation.
 *  This is used to know how to charge for XCM execution in a particular asset.
 * 
 *  Not all asset types are supported for payment. If value exists here, it means it is supported.
 */
export interface XcAssetConfigAssetLocationUnitsPerSecondStorageV52 {
    get(key: v52.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v52.VersionedMultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v52.VersionedMultiLocation[]>
    getKeys(key: v52.VersionedMultiLocation): Promise<v52.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number, key: v52.VersionedMultiLocation): AsyncIterable<v52.VersionedMultiLocation[]>
    getPairs(): Promise<[k: v52.VersionedMultiLocation, v: bigint][]>
    getPairs(key: v52.VersionedMultiLocation): Promise<[k: v52.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v52.VersionedMultiLocation): AsyncIterable<[k: v52.VersionedMultiLocation, v: bigint][]>
}

/**
 *  Stores the units per second for local execution for a AssetLocation.
 *  This is used to know how to charge for XCM execution in a particular asset.
 * 
 *  Not all asset types are supported for payment. If value exists here, it means it is supported.
 */
export interface XcAssetConfigAssetLocationUnitsPerSecondStorageV61 {
    get(key: v61.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v61.VersionedMultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v61.VersionedMultiLocation[]>
    getKeys(key: v61.VersionedMultiLocation): Promise<v61.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v61.VersionedMultiLocation[]>
    getKeysPaged(pageSize: number, key: v61.VersionedMultiLocation): AsyncIterable<v61.VersionedMultiLocation[]>
    getPairs(): Promise<[k: v61.VersionedMultiLocation, v: bigint][]>
    getPairs(key: v61.VersionedMultiLocation): Promise<[k: v61.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v61.VersionedMultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v61.VersionedMultiLocation): AsyncIterable<[k: v61.VersionedMultiLocation, v: bigint][]>
}

export class XcmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV61(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV61(): XcmpQueueCounterForOverweightStorageV61 {
        assert(this.isV61)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageV61 {
    get(): Promise<number>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asV15(): XcmpQueueInboundXcmpMessagesStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageV15 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV15(): XcmpQueueInboundXcmpStatusStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV15 {
    get(): Promise<v15.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asV15(): XcmpQueueOutboundXcmpMessagesStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageV15 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asV15(): XcmpQueueOutboundXcmpStatusStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageV15 {
    get(): Promise<v15.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asV15(): XcmpQueueOverweightStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageV15 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asV15(): XcmpQueueOverweightCountStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageV15 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV15(): XcmpQueueQueueConfigStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'b9e7fe75fd5e16e066448c0d0a704aec5c90e5e751ca04108c2b35ab00764560'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV43(): XcmpQueueQueueConfigStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV49(): XcmpQueueQueueConfigStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV15 {
    get(): Promise<v15.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV43 {
    get(): Promise<v43.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV49 {
    get(): Promise<v49.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asV15(): XcmpQueueQueueSuspendedStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageV15 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asV15(): XcmpQueueSignalMessagesStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageV15 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
