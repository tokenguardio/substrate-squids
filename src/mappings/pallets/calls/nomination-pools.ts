import {
  NominationPoolsBondExtraCall,
  NominationPoolsBondExtraOtherCall,
  NominationPoolsChillCall,
  NominationPoolsClaimCommissionCall,
  NominationPoolsClaimPayoutCall,
  NominationPoolsClaimPayoutOtherCall,
  NominationPoolsCreateCall,
  NominationPoolsCreateWithPoolIdCall,
  NominationPoolsJoinCall,
  NominationPoolsNominateCall,
  NominationPoolsPoolWithdrawUnbondedCall,
  NominationPoolsSetClaimPermissionCall,
  NominationPoolsSetCommissionCall,
  NominationPoolsSetCommissionChangeRateCall,
  NominationPoolsSetCommissionMaxCall,
  NominationPoolsSetConfigsCall,
  NominationPoolsSetMetadataCall,
  NominationPoolsSetStateCall,
  NominationPoolsUnbondCall,
  NominationPoolsUpdateRolesCall,
  NominationPoolsWithdrawUnbondedCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeNominationPoolsCallsArgs(
  ctx: ChainContext,
  call: Call
) {
  let e;
  switch (call.name) {
    case "NominationPools.bond_extra":
      e = new NominationPoolsBondExtraCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.chill":
      e = new NominationPoolsChillCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.claim_payout":
      e = new NominationPoolsClaimPayoutCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.create":
      e = new NominationPoolsCreateCall(ctx, call);
      if (e.isV9280) {
        return { ...call.args, bouncer: null };
      } else if (e.isV9291) {
        return { ...call.args, bouncer: null };
      } else if (e.isV9420) {
        return { ...call.args, stateToggler: null };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.create_with_pool_id":
      e = new NominationPoolsCreateWithPoolIdCall(ctx, call);
      if (e.isV9340) {
        return { ...call.args, bouncer: null };
      } else if (e.isV9420) {
        return { ...call.args, stateToggler: null };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.join":
      e = new NominationPoolsJoinCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.nominate":
      e = new NominationPoolsNominateCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.pool_withdraw_unbonded":
      e = new NominationPoolsPoolWithdrawUnbondedCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_configs":
      e = new NominationPoolsSetConfigsCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_metadata":
      e = new NominationPoolsSetMetadataCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_state":
      e = new NominationPoolsSetStateCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.unbond":
      e = new NominationPoolsUnbondCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else if (e.isV9291) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.update_roles":
      e = new NominationPoolsUpdateRolesCall(ctx, call);
      if (e.isV9280) {
        return { ...call.args, newBouncer: null };
      } else if (e.isV9420) {
        return { ...call.args, newStateToggler: null };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.withdraw_unbonded":
      e = new NominationPoolsWithdrawUnbondedCall(ctx, call);
      if (e.isV9280) {
        return call.args;
      } else if (e.isV9291) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.bond_extra_other":
      e = new NominationPoolsBondExtraOtherCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.claim_commission":
      e = new NominationPoolsClaimCommissionCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.claim_payout_other":
      e = new NominationPoolsClaimPayoutOtherCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_claim_permission":
      e = new NominationPoolsSetClaimPermissionCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_commission":
      e = new NominationPoolsSetCommissionCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_commission_change_rate":
      e = new NominationPoolsSetCommissionChangeRateCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "NominationPools.set_commission_max":
      e = new NominationPoolsSetCommissionMaxCall(ctx, call);
      if (e.isV9420) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
