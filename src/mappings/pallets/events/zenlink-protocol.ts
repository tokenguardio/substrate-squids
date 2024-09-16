import { zenlinkProtocol } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeZenlinkProtocolEventsArgs(event: Event): any {
  switch (event.name) {
    case zenlinkProtocol.transferred.name:
      if (zenlinkProtocol.transferred.v954.is(event)) {
        const [assetId, owner, target, amount] =
          zenlinkProtocol.transferred.v954.decode(event);
        return { assetId, owner, target, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.burned.name:
      if (zenlinkProtocol.burned.v954.is(event)) {
        const [assetId, owner, amount] =
          zenlinkProtocol.burned.v954.decode(event);
        return { assetId, owner, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.minted.name:
      if (zenlinkProtocol.minted.v954.is(event)) {
        const [assetId, owner, amount] =
          zenlinkProtocol.minted.v954.decode(event);
        return { assetId, owner, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.pairCreated.name:
      if (zenlinkProtocol.pairCreated.v954.is(event)) {
        const [asset0, asset1] = zenlinkProtocol.pairCreated.v954.decode(event);
        return { asset0, asset1 };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.liquidityAdded.name:
      if (zenlinkProtocol.liquidityAdded.v954.is(event)) {
        const [owner, asset0, asset1, addBalance0, addBalance1, mintBalanceLp] =
          zenlinkProtocol.liquidityAdded.v954.decode(event);
        return {
          owner,
          asset0,
          asset1,
          addBalance0,
          addBalance1,
          mintBalanceLp,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.liquidityRemoved.name:
      if (zenlinkProtocol.liquidityRemoved.v954.is(event)) {
        const [
          owner,
          recipient,
          asset0,
          asset1,
          rmBalance0,
          rmBalance1,
          burnBalanceLp,
        ] = zenlinkProtocol.liquidityRemoved.v954.decode(event);
        return {
          owner,
          recipient,
          asset0,
          asset1,
          rmBalance0,
          rmBalance1,
          burnBalanceLp,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.assetSwap.name:
      if (zenlinkProtocol.assetSwap.v954.is(event)) {
        const [owner, recipient, swapPath, balances] =
          zenlinkProtocol.assetSwap.v954.decode(event);
        return { owner, recipient, swapPath, balances };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.transferredToParachain.name:
      if (zenlinkProtocol.transferredToParachain.v954.is(event)) {
        const [assetId, src, paraId, dest, amount, usedWeight] =
          zenlinkProtocol.transferredToParachain.v954.decode(event);
        return { assetId, src, paraId, dest, amount, usedWeight };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.bootstrapContribute.name:
      if (zenlinkProtocol.bootstrapContribute.v954.is(event)) {
        const [who, asset0, asset0Contribute, asset1, asset1Contribute] =
          zenlinkProtocol.bootstrapContribute.v954.decode(event);
        return { who, asset0, asset0Contribute, asset1, asset1Contribute };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.bootstrapEnd.name:
      if (zenlinkProtocol.bootstrapEnd.v954.is(event)) {
        const [asset0, asset1, asset0Amount, asset1Amount, totalLpSupply] =
          zenlinkProtocol.bootstrapEnd.v954.decode(event);
        return { asset0, asset1, asset0Amount, asset1Amount, totalLpSupply };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.bootstrapCreated.name:
      if (zenlinkProtocol.bootstrapCreated.v954.is(event)) {
        const [
          bootstrapPairAccount,
          asset0,
          asset1,
          totalSupply0,
          totalSupply1,
          capacitySupply0,
          capacitySupply1,
          end,
        ] = zenlinkProtocol.bootstrapCreated.v954.decode(event);
        return {
          bootstrapPairAccount,
          asset0,
          asset1,
          totalSupply0,
          totalSupply1,
          capacitySupply0,
          capacitySupply1,
          end,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.bootstrapClaim.name:
      if (zenlinkProtocol.bootstrapClaim.v954.is(event)) {
        const [
          bootstrapPairAccount,
          claimer,
          receiver,
          asset0,
          asset1,
          asset0Refund,
          asset1Refund,
          lpAmount,
        ] = zenlinkProtocol.bootstrapClaim.v954.decode(event);
        return {
          bootstrapPairAccount,
          claimer,
          receiver,
          asset0,
          asset1,
          asset0Refund,
          asset1Refund,
          lpAmount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.bootstrapUpdate.name:
      if (zenlinkProtocol.bootstrapUpdate.v954.is(event)) {
        const [
          caller,
          asset0,
          asset1,
          totalSupply0,
          totalSupply1,
          capacitySupply0,
          capacitySupply1,
        ] = zenlinkProtocol.bootstrapUpdate.v954.decode(event);
        return {
          caller,
          asset0,
          asset1,
          totalSupply0,
          totalSupply1,
          capacitySupply0,
          capacitySupply1,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.bootstrapRefund.name:
      if (zenlinkProtocol.bootstrapRefund.v954.is(event)) {
        const [
          bootstrapPairAccount,
          caller,
          asset0,
          asset1,
          asset0Refund,
          asset1Refund,
        ] = zenlinkProtocol.bootstrapRefund.v954.decode(event);
        return {
          bootstrapPairAccount,
          caller,
          asset0,
          asset1,
          asset0Refund,
          asset1Refund,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.distributeReward.name:
      if (zenlinkProtocol.distributeReward.v954.is(event)) {
        const [asset0, asset1, who, rewards] =
          zenlinkProtocol.distributeReward.v954.decode(event);
        return { asset0, asset1, who, rewards };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.chargeReward.name:
      if (zenlinkProtocol.chargeReward.v954.is(event)) {
        const [asset0, asset1, who, rewards] =
          zenlinkProtocol.chargeReward.v954.decode(event);
        return { asset0, asset1, who, rewards };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case zenlinkProtocol.withdrawReward.name:
      if (zenlinkProtocol.withdrawReward.v954.is(event)) {
        const [asset0, asset1, who] =
          zenlinkProtocol.withdrawReward.v954.decode(event);
        return { asset0, asset1, who };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
