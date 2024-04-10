import { nominationPools } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeNominationPoolsCallsArgs(call: Call): any {
  switch (call.name) {
    case nominationPools.bondExtra.name:
      if (nominationPools.bondExtra.v39.is(call)) {
        return nominationPools.bondExtra.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.bondExtraOther.name:
      if (nominationPools.bondExtraOther.v68.is(call)) {
        return nominationPools.bondExtraOther.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.chill.name:
      if (nominationPools.chill.v39.is(call)) {
        return nominationPools.chill.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.claimCommission.name:
      if (nominationPools.claimCommission.v68.is(call)) {
        return nominationPools.claimCommission.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.claimPayout.name:
      if (nominationPools.claimPayout.v39.is(call)) {
        return nominationPools.claimPayout.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.claimPayoutOther.name:
      if (nominationPools.claimPayoutOther.v68.is(call)) {
        return nominationPools.claimPayoutOther.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.create.name:
      if (nominationPools.create.v39.is(call)) {
        return nominationPools.create.v39.decode(call);
      } else if (nominationPools.create.v58.is(call)) {
        return nominationPools.create.v58.decode(call);
      } else if (nominationPools.create.v68.is(call)) {
        return nominationPools.create.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.createWithPoolId.name:
      if (nominationPools.createWithPoolId.v59.is(call)) {
        return nominationPools.createWithPoolId.v59.decode(call);
      } else if (nominationPools.createWithPoolId.v68.is(call)) {
        return nominationPools.createWithPoolId.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.join.name:
      if (nominationPools.join.v39.is(call)) {
        return nominationPools.join.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.nominate.name:
      if (nominationPools.nominate.v39.is(call)) {
        return nominationPools.nominate.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.poolWithdrawUnbonded.name:
      if (nominationPools.poolWithdrawUnbonded.v39.is(call)) {
        return nominationPools.poolWithdrawUnbonded.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setClaimPermission.name:
      if (nominationPools.setClaimPermission.v68.is(call)) {
        return nominationPools.setClaimPermission.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setCommission.name:
      if (nominationPools.setCommission.v68.is(call)) {
        return nominationPools.setCommission.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setCommissionChangeRate.name:
      if (nominationPools.setCommissionChangeRate.v68.is(call)) {
        return nominationPools.setCommissionChangeRate.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setCommissionMax.name:
      if (nominationPools.setCommissionMax.v68.is(call)) {
        return nominationPools.setCommissionMax.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setConfigs.name:
      if (nominationPools.setConfigs.v39.is(call)) {
        return nominationPools.setConfigs.v39.decode(call);
      } else if (nominationPools.setConfigs.v68.is(call)) {
        return nominationPools.setConfigs.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setMetadata.name:
      if (nominationPools.setMetadata.v39.is(call)) {
        return nominationPools.setMetadata.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.setState.name:
      if (nominationPools.setState.v39.is(call)) {
        return nominationPools.setState.v39.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.unbond.name:
      if (nominationPools.unbond.v39.is(call)) {
        return nominationPools.unbond.v39.decode(call);
      } else if (nominationPools.unbond.v58.is(call)) {
        return nominationPools.unbond.v58.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.updateRoles.name:
      if (nominationPools.updateRoles.v39.is(call)) {
        return nominationPools.updateRoles.v39.decode(call);
      } else if (nominationPools.updateRoles.v68.is(call)) {
        return nominationPools.updateRoles.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case nominationPools.withdrawUnbonded.name:
      if (nominationPools.withdrawUnbonded.v39.is(call)) {
        return nominationPools.withdrawUnbonded.v39.decode(call);
      } else if (nominationPools.withdrawUnbonded.v58.is(call)) {
        return nominationPools.withdrawUnbonded.v58.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
