import { Event } from "../../../processor";
import { leverageStaking } from "../../../types/events";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeLeverageStakingEventsArgs(event: Event): any {
  switch (event.name) {
    case leverageStaking.flashLoanDeposited.name:
      if (leverageStaking.flashLoanDeposited.v990.is(event)) {
        return leverageStaking.flashLoanDeposited.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
