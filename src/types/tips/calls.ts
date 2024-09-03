import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v28 from '../v28'
import * as v9291 from '../v9291'

export const reportAwesome =  {
    name: 'Tips.report_awesome',
    /**
     *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where `R` length of `reason`.
     *    - encoding and hashing of 'reason'
     *  - DbReads: `Reasons`, `Tips`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    v28: new CallType(
        'Tips.report_awesome',
        sts.struct({
            reason: sts.bytes(),
            who: v28.AccountId,
        })
    ),
    /**
     * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R)` where `R` length of `reason`.
     *   - encoding and hashing of 'reason'
     * - DbReads: `Reasons`, `Tips`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    v9291: new CallType(
        'Tips.report_awesome',
        sts.struct({
            reason: sts.bytes(),
            who: v9291.MultiAddress,
        })
    ),
}

export const retractTip =  {
    name: 'Tips.retract_tip',
    /**
     *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     *  If successful, the original deposit will be unreserved.
     * 
     *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     *  must have been reported by the signing account through `report_awesome` (and not
     *  through `tip_new`).
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  Emits `TipRetracted` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    - Depends on the length of `T::Hash` which is fixed.
     *  - DbReads: `Tips`, `origin account`
     *  - DbWrites: `Reasons`, `Tips`, `origin account`
     *  # </weight>
     */
    v28: new CallType(
        'Tips.retract_tip',
        sts.struct({
            hash: v28.Hash,
        })
    ),
}

export const tipNew =  {
    name: 'Tips.tip_new',
    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *    - `O(T)`: decoding `Tipper` vec of length `T`
     *      `T` is charged as upper bound given by `ContainsLengthBound`.
     *      The actual cost depends on the implementation of `T::Tippers`.
     *    - `O(R)`: hashing and encoding of reason of length `R`
     *  - DbReads: `Tippers`, `Reasons`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    v28: new CallType(
        'Tips.tip_new',
        sts.struct({
            reason: sts.bytes(),
            who: v28.AccountId,
            tipValue: sts.bigint(),
        })
    ),
    /**
     * Give a tip for something new; no finder's fee will be taken.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
     *     `ContainsLengthBound`. The actual cost depends on the implementation of
     *     `T::Tippers`.
     *   - `O(R)`: hashing and encoding of reason of length `R`
     * - DbReads: `Tippers`, `Reasons`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    v9291: new CallType(
        'Tips.tip_new',
        sts.struct({
            reason: sts.bytes(),
            who: v9291.MultiAddress,
            tipValue: sts.bigint(),
        })
    ),
}

export const tip =  {
    name: 'Tips.tip',
    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    v28: new CallType(
        'Tips.tip',
        sts.struct({
            hash: v28.Hash,
            tipValue: sts.bigint(),
        })
    ),
}

export const closeTip =  {
    name: 'Tips.close_tip',
    /**
     *  Close and payout a tip.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  The tip identified by `hash` must have finished its countdown period.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`.
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  - DbReads: `Tips`, `Tippers`, `tip finder`
     *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     *  # </weight>
     */
    v28: new CallType(
        'Tips.close_tip',
        sts.struct({
            hash: v28.Hash,
        })
    ),
}

export const slashTip =  {
    name: 'Tips.slash_tip',
    /**
     *  Remove and slash an already-open tip.
     * 
     *  May only be called from `T::RejectOrigin`.
     * 
     *  As a result, the finder is slashed and the deposits are lost.
     * 
     *  Emits `TipSlashed` if successful.
     * 
     *  # <weight>
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  # </weight>
     */
    v28: new CallType(
        'Tips.slash_tip',
        sts.struct({
            hash: v28.Hash,
        })
    ),
}
