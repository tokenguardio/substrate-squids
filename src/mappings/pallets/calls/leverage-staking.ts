import { leverageStaking } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeLeverageStakingCallsArgs(call: Call): any {
  switch (call.name) {
    case leverageStaking.flashLoanDeposit.name:
      if (leverageStaking.flashLoanDeposit.v990.is(call)) {
        return leverageStaking.flashLoanDeposit.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
