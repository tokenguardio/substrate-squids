import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v1002000 from '../v1002000'

export const fillBlock =  {
    name: 'System.fill_block',
    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    v0: new CallType(
        'System.fill_block',
        sts.struct({
            ratio: v0.Perbill,
        })
    ),
}

export const remark =  {
    name: 'System.remark',
    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    v0: new CallType(
        'System.remark',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const setHeapPages =  {
    name: 'System.set_heap_pages',
    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write.
     *  - Base Weight: 1.405 µs
     *  - 1 write to HEAP_PAGES
     *  # </weight>
     */
    v0: new CallType(
        'System.set_heap_pages',
        sts.struct({
            pages: sts.bigint(),
        })
    ),
}

export const setCode =  {
    name: 'System.set_code',
    /**
     *  Set the new runtime code.
     * 
     *  # <weight>
     *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime, but generally this is very expensive.
     *  We will treat this as a full block.
     *  # </weight>
     */
    v0: new CallType(
        'System.set_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setCodeWithoutChecks =  {
    name: 'System.set_code_without_checks',
    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     * 
     *  # <weight>
     *  - `O(C)` where `C` length of `code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime. We will treat this as a full block.
     *  # </weight>
     */
    v0: new CallType(
        'System.set_code_without_checks',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setChangesTrieConfig =  {
    name: 'System.set_changes_trie_config',
    /**
     *  Set the new changes trie configuration.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write or delete (codec `O(1)`).
     *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
     *  - Base Weight: 7.218 µs
     *  - DB Weight:
     *      - Writes: Changes Trie, System Digest
     *  # </weight>
     */
    v0: new CallType(
        'System.set_changes_trie_config',
        sts.struct({
            changesTrieConfig: sts.option(() => v0.ChangesTrieConfiguration),
        })
    ),
}

export const setStorage =  {
    name: 'System.set_storage',
    /**
     *  Set some items of storage.
     * 
     *  # <weight>
     *  - `O(I)` where `I` length of `items`
     *  - `I` storage writes (`O(1)`).
     *  - Base Weight: 0.568 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    v0: new CallType(
        'System.set_storage',
        sts.struct({
            items: sts.array(() => v0.KeyValue),
        })
    ),
}

export const killStorage =  {
    name: 'System.kill_storage',
    /**
     *  Kill some items from storage.
     * 
     *  # <weight>
     *  - `O(IK)` where `I` length of `keys` and `K` length of one key
     *  - `I` storage deletions.
     *  - Base Weight: .378 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    v0: new CallType(
        'System.kill_storage',
        sts.struct({
            keys: sts.array(() => v0.Key),
        })
    ),
}

export const killPrefix =  {
    name: 'System.kill_prefix',
    /**
     *  Kill all storage items with a key that starts with the given prefix.
     * 
     *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *  the prefix we are removing to accurately calculate the weight of this function.
     * 
     *  # <weight>
     *  - `O(P)` where `P` amount of keys with prefix `prefix`
     *  - `P` storage deletions.
     *  - Base Weight: 0.834 * P µs
     *  - Writes: Number of subkeys + 1
     *  # </weight>
     */
    v0: new CallType(
        'System.kill_prefix',
        sts.struct({
            prefix: v0.Key,
            subkeys: sts.number(),
        })
    ),
}

export const suicide =  {
    name: 'System.suicide',
    /**
     *  Kill the sending account, assuming there are no references outstanding and the composite
     *  data is equal to its default value.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage read and deletion.
     *  --------------------
     *  Base Weight: 8.626 µs
     *  No DB Read or Write operations because caller is already in overlay
     *  # </weight>
     */
    v0: new CallType(
        'System.suicide',
        sts.unit()
    ),
}

export const remarkWithEvent =  {
    name: 'System.remark_with_event',
    /**
     *  Make some on-chain remark and emit event.
     * 
     *  # <weight>
     *  - `O(b)` where b is the length of the remark.
     *  - 1 event.
     *  # </weight>
     */
    v30: new CallType(
        'System.remark_with_event',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'System.authorize_upgrade',
    /**
     * See [`Pallet::authorize_upgrade`].
     */
    v1002000: new CallType(
        'System.authorize_upgrade',
        sts.struct({
            codeHash: v1002000.H256,
        })
    ),
}

export const authorizeUpgradeWithoutChecks =  {
    name: 'System.authorize_upgrade_without_checks',
    /**
     * See [`Pallet::authorize_upgrade_without_checks`].
     */
    v1002000: new CallType(
        'System.authorize_upgrade_without_checks',
        sts.struct({
            codeHash: v1002000.H256,
        })
    ),
}

export const applyAuthorizedUpgrade =  {
    name: 'System.apply_authorized_upgrade',
    /**
     * See [`Pallet::apply_authorized_upgrade`].
     */
    v1002000: new CallType(
        'System.apply_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
