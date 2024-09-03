import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v7 from '../v7'
import * as v9291 from '../v9291'

export const claim =  {
    name: 'Indices.claim',
    /**
     *  Assign an previously unassigned index.
     * 
     *  Payment: `Deposit` is reserved from the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `index`: the index to be claimed. This must not be in use.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One reserve operation.
     *  - One event.
     *  # </weight>
     */
    v0: new CallType(
        'Indices.claim',
        sts.struct({
            index: v0.AccountIndex,
        })
    ),
}

export const transfer =  {
    name: 'Indices.transfer',
    /**
     *  Assign an index already owned by the sender to another account. The balance reservation
     *  is effectively transferred to the new account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `index`: the index to be re-assigned. This must be owned by the sender.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One transfer operation.
     *  - One event.
     *  # </weight>
     */
    v0: new CallType(
        'Indices.transfer',
        sts.struct({
            new: v0.AccountId,
            index: v0.AccountIndex,
        })
    ),
    /**
     * Assign an index already owned by the sender to another account. The balance reservation
     * is effectively transferred to the new account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be re-assigned. This must be owned by the sender.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One transfer operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (recipient)
     *    - Writes: Indices Accounts, System Account (recipient)
     * # </weight>
     */
    v9291: new CallType(
        'Indices.transfer',
        sts.struct({
            new: v9291.MultiAddress,
            index: sts.number(),
        })
    ),
}

export const free =  {
    name: 'Indices.free',
    /**
     *  Free up an index owned by the sender.
     * 
     *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
     * 
     *  - `index`: the index to be freed. This must be owned by the sender.
     * 
     *  Emits `IndexFreed` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One reserve operation.
     *  - One event.
     *  # </weight>
     */
    v0: new CallType(
        'Indices.free',
        sts.struct({
            index: v0.AccountIndex,
        })
    ),
}

export const forceTransfer =  {
    name: 'Indices.force_transfer',
    /**
     *  Force an index to an account. This doesn't require a deposit. If the index is already
     *  held, then any deposit is reimbursed to its current owner.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `index`: the index to be (re-)assigned.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one reserve operation.
     *  - One event.
     *  # </weight>
     */
    v0: new CallType(
        'Indices.force_transfer',
        sts.struct({
            new: v0.AccountId,
            index: v0.AccountIndex,
        })
    ),
    /**
     *  Force an index to an account. This doesn't require a deposit. If the index is already
     *  held, then any deposit is reimbursed to its current owner.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `index`: the index to be (re-)assigned.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 26.83 µs
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (original owner)
     *     - Writes: Indices Accounts, System Account (original owner)
     *  # </weight>
     */
    v7: new CallType(
        'Indices.force_transfer',
        sts.struct({
            new: v7.AccountId,
            index: v7.AccountIndex,
            freeze: sts.boolean(),
        })
    ),
    /**
     * Force an index to an account. This doesn't require a deposit. If the index is already
     * held, then any deposit is reimbursed to its current owner.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `index`: the index to be (re-)assigned.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one reserve operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (original owner)
     *    - Writes: Indices Accounts, System Account (original owner)
     * # </weight>
     */
    v9291: new CallType(
        'Indices.force_transfer',
        sts.struct({
            new: v9291.MultiAddress,
            index: sts.number(),
            freeze: sts.boolean(),
        })
    ),
}

export const freeze =  {
    name: 'Indices.freeze',
    /**
     *  Freeze an index so it will always point to the sender account. This consumes the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must have a
     *  non-frozen account `index`.
     * 
     *  - `index`: the index to be frozen in place.
     * 
     *  Emits `IndexFrozen` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one slash operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 30.86 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    v7: new CallType(
        'Indices.freeze',
        sts.struct({
            index: v7.AccountIndex,
        })
    ),
}
