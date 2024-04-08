import { nominationPools } from "../../../types/calls";
import { Call } from "./../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeNominationPoolsCallsArgs(call: Call) {
  switch (call.name) {
    case nominationPools.bondExtra.name:
      if (nominationPools.bondExtra.v9280.is(call)) {
        return nominationPools.bondExtra.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.chill.name:
      if (nominationPools.chill.v9280.is(call)) {
        return nominationPools.chill.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.claimPayout.name:
      if (nominationPools.claimPayout.v9280.is(call)) {
        return nominationPools.claimPayout.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.create.name:
      if (nominationPools.create.v9280.is(call)) {
        return { ...nominationPools.create.v9280.decode(call), bouncer: null };
      } else if (nominationPools.create.v9291.is(call)) {
        return { ...nominationPools.create.v9291.decode(call), bouncer: null };
      } else if (nominationPools.create.v9420.is(call)) {
        return {
          ...nominationPools.create.v9420.decode(call),
          stateToggler: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.createWithPoolId.name:
      if (nominationPools.createWithPoolId.v9340.is(call)) {
        return {
          ...nominationPools.createWithPoolId.v9340.decode(call),
          bouncer: null,
        };
      } else if (nominationPools.createWithPoolId.v9420.is(call)) {
        return {
          ...nominationPools.createWithPoolId.v9420.decode(call),
          stateToggler: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.join.name:
      if (nominationPools.join.v9280.is(call)) {
        return nominationPools.join.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.nominate.name:
      if (nominationPools.nominate.v9280.is(call)) {
        return nominationPools.nominate.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.poolWithdrawUnbonded.name:
      if (nominationPools.poolWithdrawUnbonded.v9280.is(call)) {
        return nominationPools.poolWithdrawUnbonded.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setConfigs.name:
      if (nominationPools.setConfigs.v9280.is(call)) {
        return nominationPools.setConfigs.v9280.decode(call);
      } else if (nominationPools.setConfigs.v9420.is(call)) {
        return nominationPools.setConfigs.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case nominationPools.setMetadata.name:
      if (nominationPools.setMetadata.v9280.is(call)) {
        return nominationPools.setMetadata.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setState.name:
      if (nominationPools.setState.v9280.is(call)) {
        return nominationPools.setState.v9280.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.unbond.name:
      if (nominationPools.unbond.v9280.is(call)) {
        return nominationPools.unbond.v9280.decode(call);
      } else if (nominationPools.unbond.v9291.is(call)) {
        return nominationPools.unbond.v9291.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.updateRoles.name:
      if (nominationPools.updateRoles.v9280.is(call)) {
        return {
          ...nominationPools.updateRoles.v9280.decode(call),
          newBouncer: null,
        };
      } else if (nominationPools.updateRoles.v9420.is(call)) {
        return {
          ...nominationPools.updateRoles.v9420.decode(call),
          newStateToggler: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.withdrawUnbonded.name:
      if (nominationPools.withdrawUnbonded.v9280.is(call)) {
        return nominationPools.withdrawUnbonded.v9280.decode(call);
      } else if (nominationPools.withdrawUnbonded.v9291.is(call)) {
        return nominationPools.withdrawUnbonded.v9291.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.bondExtraOther.name:
      if (nominationPools.bondExtraOther.v9420.is(call)) {
        return nominationPools.bondExtraOther.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.claimCommission.name:
      if (nominationPools.claimCommission.v9420.is(call)) {
        return nominationPools.claimCommission.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.claimPayoutOther.name:
      if (nominationPools.claimPayoutOther.v9420.is(call)) {
        return nominationPools.claimPayoutOther.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setClaimPermission.name:
      if (nominationPools.setClaimPermission.v9420.is(call)) {
        return nominationPools.setClaimPermission.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setCommission.name:
      if (nominationPools.setCommission.v9420.is(call)) {
        return nominationPools.setCommission.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setCommissionChangeRate.name:
      if (nominationPools.setCommissionChangeRate.v9420.is(call)) {
        return nominationPools.setCommissionChangeRate.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setCommissionMax.name:
      if (nominationPools.setCommissionMax.v9420.is(call)) {
        return nominationPools.setCommissionMax.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
