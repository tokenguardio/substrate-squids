import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v10000 from '../v10000'

export const fillBlock =  {
    name: 'System.fill_block',
    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    v932: new CallType(
        'System.fill_block',
        sts.struct({
            ratio: v932.Perbill,
        })
    ),
}

export const remark =  {
    name: 'System.remark',
    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    v932: new CallType(
        'System.remark',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const setHeapPages =  {
    name: 'System.set_heap_pages',
    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    v932: new CallType(
        'System.set_heap_pages',
        sts.struct({
            pages: sts.bigint(),
        })
    ),
}

export const setCode =  {
    name: 'System.set_code',
    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    v932: new CallType(
        'System.set_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setCodeWithoutChecks =  {
    name: 'System.set_code_without_checks',
    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    v932: new CallType(
        'System.set_code_without_checks',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setStorage =  {
    name: 'System.set_storage',
    /**
     * Set some items of storage.
     */
    v932: new CallType(
        'System.set_storage',
        sts.struct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        })
    ),
}

export const killStorage =  {
    name: 'System.kill_storage',
    /**
     * Kill some items from storage.
     */
    v932: new CallType(
        'System.kill_storage',
        sts.struct({
            keys: sts.array(() => sts.bytes()),
        })
    ),
}

export const killPrefix =  {
    name: 'System.kill_prefix',
    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    v932: new CallType(
        'System.kill_prefix',
        sts.struct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        })
    ),
}

export const remarkWithEvent =  {
    name: 'System.remark_with_event',
    /**
     * Make some on-chain remark and emit event.
     */
    v932: new CallType(
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
    v10000: new CallType(
        'System.authorize_upgrade',
        sts.struct({
            codeHash: v10000.H256,
        })
    ),
}

export const authorizeUpgradeWithoutChecks =  {
    name: 'System.authorize_upgrade_without_checks',
    /**
     * See [`Pallet::authorize_upgrade_without_checks`].
     */
    v10000: new CallType(
        'System.authorize_upgrade_without_checks',
        sts.struct({
            codeHash: v10000.H256,
        })
    ),
}

export const applyAuthorizedUpgrade =  {
    name: 'System.apply_authorized_upgrade',
    /**
     * See [`Pallet::apply_authorized_upgrade`].
     */
    v10000: new CallType(
        'System.apply_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
