import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v6 from '../v6'

export const claim =  {
    name: 'Claims.claim',
    /**
     *  Make a claim to collect your DOTs.
     * 
     *  The dispatch origin for this call must be _None_.
     * 
     *  Unsigned Validation:
     *  A call to claim is deemed valid if the signature provided matches
     *  the expected signed message of:
     * 
     *  > Ethereum Signed Message:
     *  > (configured prefix string)(address)
     * 
     *  and `address` matches the `dest` account.
     * 
     *  Parameters:
     *  - `dest`: The destination account to payout the claim.
     *  - `ethereum_signature`: The signature of an ethereum signed message
     *     matching the format described above.
     * 
     *  <weight>
     *  The weight of this call is invariant over the input parameters.
     *  - One `eth_recover` operation which involves a keccak hash and a
     *    ecdsa recover.
     *  - Three storage reads to check if a claim exists for the user, to
     *    get the current pot size, to see if there exists a vesting schedule.
     *  - Up to one storage write for adding a new vesting schedule.
     *  - One `deposit_creating` Currency call.
     *  - One storage write to update the total.
     *  - Two storage removals for vesting and claims information.
     *  - One deposit event.
     * 
     *  Total Complexity: O(1)
     *  ----------------------------
     *  Base Weight: 269.7 µs
     *  DB Weight:
     *  - Read: Signing, Claims, Total, Claims Vesting, Vesting Vesting, Balance Lock, Account
     *  - Write: Vesting Vesting, Account, Balance Lock, Total, Claim, Claims Vesting, Signing
     *  Validate Unsigned: +188.7 µs
     *  </weight>
     */
    v0: new CallType(
        'Claims.claim',
        sts.struct({
            dest: v0.AccountId,
            ethereumSignature: v0.EcdsaSignature,
        })
    ),
}

export const mintClaim =  {
    name: 'Claims.mint_claim',
    /**
     *  Mint a new claim to collect DOTs.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  Parameters:
     *  - `who`: The Ethereum address allowed to collect this claim.
     *  - `value`: The number of DOTs that will be claimed.
     *  - `vesting_schedule`: An optional vesting schedule for these DOTs.
     * 
     *  <weight>
     *  The weight of this call is invariant over the input parameters.
     *  - One storage mutate to increase the total claims available.
     *  - One storage write to add a new claim.
     *  - Up to one storage write to add a new vesting schedule.
     * 
     *  Total Complexity: O(1)
     *  ---------------------
     *  Base Weight: 10.46 µs
     *  DB Weight:
     *  - Reads: Total
     *  - Writes: Total, Claims
     *  - Maybe Write: Vesting, Statement
     *  </weight>
     */
    v0: new CallType(
        'Claims.mint_claim',
        sts.struct({
            who: v0.EthereumAddress,
            value: v0.BalanceOf,
            vestingSchedule: sts.option(() => sts.tuple(() => [v0.BalanceOf, v0.BalanceOf, v0.BlockNumber])),
            statement: sts.option(() => v0.StatementKind),
        })
    ),
}

export const claimAttest =  {
    name: 'Claims.claim_attest',
    /**
     *  Make a claim to collect your DOTs by signing a statement.
     * 
     *  The dispatch origin for this call must be _None_.
     * 
     *  Unsigned Validation:
     *  A call to `claim_attest` is deemed valid if the signature provided matches
     *  the expected signed message of:
     * 
     *  > Ethereum Signed Message:
     *  > (configured prefix string)(address)(statement)
     * 
     *  and `address` matches the `dest` account; the `statement` must match that which is
     *  expected according to your purchase arrangement.
     * 
     *  Parameters:
     *  - `dest`: The destination account to payout the claim.
     *  - `ethereum_signature`: The signature of an ethereum signed message
     *     matching the format described above.
     *  - `statement`: The identity of the statement which is being attested to in the signature.
     * 
     *  <weight>
     *  The weight of this call is invariant over the input parameters.
     *  - One `eth_recover` operation which involves a keccak hash and a
     *    ecdsa recover.
     *  - Four storage reads to check if a claim exists for the user, to
     *    get the current pot size, to see if there exists a vesting schedule, to get the
     *    required statement.
     *  - Up to one storage write for adding a new vesting schedule.
     *  - One `deposit_creating` Currency call.
     *  - One storage write to update the total.
     *  - Two storage removals for vesting and claims information.
     *  - One deposit event.
     * 
     *  Total Complexity: O(1)
     *  ----------------------------
     *  Base Weight: 270.2 µs
     *  DB Weight:
     *  - Read: Signing, Claims, Total, Claims Vesting, Vesting Vesting, Balance Lock, Account
     *  - Write: Vesting Vesting, Account, Balance Lock, Total, Claim, Claims Vesting, Signing
     *  Validate Unsigned: +190.1 µs
     *  </weight>
     */
    v0: new CallType(
        'Claims.claim_attest',
        sts.struct({
            dest: v0.AccountId,
            ethereumSignature: v0.EcdsaSignature,
            statement: sts.bytes(),
        })
    ),
}

export const attest =  {
    name: 'Claims.attest',
    /**
     *  Attest to a statement, needed to finalize the claims process.
     * 
     *  WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
     * 
     *  Unsigned Validation:
     *  A call to attest is deemed valid if the sender has a `Preclaim` registered
     *  and provides a `statement` which is expected for the account.
     * 
     *  Parameters:
     *  - `statement`: The identity of the statement which is being attested to in the signature.
     * 
     *  <weight>
     *  Total Complexity: O(1)
     *  ----------------------------
     *  Base Weight: 93.3 µs
     *  DB Weight:
     *  - Read: Preclaims, Signing, Claims, Total, Claims Vesting, Vesting Vesting, Balance Lock, Account
     *  - Write: Vesting Vesting, Account, Balance Lock, Total, Claim, Claims Vesting, Signing, Preclaims
     *  Validate PreValidateAttests: +8.631 µs
     *  </weight>
     */
    v0: new CallType(
        'Claims.attest',
        sts.struct({
            statement: sts.bytes(),
        })
    ),
}

export const moveClaim =  {
    name: 'Claims.move_claim',
    v6: new CallType(
        'Claims.move_claim',
        sts.struct({
            old: v6.EthereumAddress,
            new: v6.EthereumAddress,
            maybePreclaim: sts.option(() => v6.AccountId),
        })
    ),
}
