import {
  NominationPoolsBondExtraCall,
  NominationPoolsChillCall,
  NominationPoolsClaimPayoutCall,
  NominationPoolsCreateCall,
  NominationPoolsCreateWithPoolIdCall,
  NominationPoolsJoinCall,
  NominationPoolsNominateCall,
  NominationPoolsPoolWithdrawUnbondedCall,
  NominationPoolsSetConfigsCall,
  NominationPoolsSetMetadataCall,
  NominationPoolsSetStateCall,
  NominationPoolsUnbondCall,
  NominationPoolsUpdateRolesCall,
  NominationPoolsWithdrawUnbondedCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import { UnknownVersionError, UnknownCallError } from "../../../utils/errors";

export function normalizeNominationPoolsCallsArgs(
  ctx: ChainContext,
  call: Call
) {
  let e;
  switch (call.name) {
    case "NominationPools.bond_extra":
      e = new NominationPoolsBondExtraCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.chill":
      e = new NominationPoolsChillCall(ctx, call);
      if (e.isV30) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.claim_payout":
      e = new NominationPoolsClaimPayoutCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.create":
      e = new NominationPoolsCreateCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else if (e.isV45) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.create_with_pool_id":
      e = new NominationPoolsCreateWithPoolIdCall(ctx, call);
      if (e.isV57) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.join":
      e = new NominationPoolsJoinCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.nominate":
      e = new NominationPoolsNominateCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.pool_withdraw_unbonded":
      e = new NominationPoolsPoolWithdrawUnbondedCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.set_configs":
      e = new NominationPoolsSetConfigsCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.set_metadata":
      e = new NominationPoolsSetMetadataCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.set_state":
      e = new NominationPoolsSetStateCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.unbond":
      e = new NominationPoolsUnbondCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else if (e.isV45) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.update_roles":
      e = new NominationPoolsUpdateRolesCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "NominationPools.withdraw_unbonded":
      e = new NominationPoolsWithdrawUnbondedCall(ctx, call);
      if (e.isV20) {
        return call.args;
      } else if (e.isV45) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
