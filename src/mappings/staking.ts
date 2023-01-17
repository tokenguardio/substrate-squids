export function mapStakingArgsToObject(
  eventName: string,
  parameters: string[]
): {
  eraIndex?: number;
  validatorPayout?: any;
  remainder?: any;
  stash?: any;
  amount?: any;
  staker?: any;
  validator?: any;
  slashEra?: number;
  fraction?: any;
  sessionIndex?: number;
  nominator?: any;
  validatorStash?: any;
  prefs?: any;
  mode?: any;
} {
  let obj = {};
  switch (eventName) {
    case "EraPaid":
      obj = {
        eraIndex: parseInt(parameters[0]),
        validatorPayout: parameters[1],
        remainder: parameters[2],
      };
      break;
    case "Rewarded":
      obj = {
        stash: parameters[0],
        amount: parameters[1],
      };
      break;
    case "Slashed":
      obj = {
        staker: parameters[0],
        amount: parameters[1],
      };
      break;
    case "SlashReported":
      obj = {
        validator: parameters[0],
        fraction: parameters[1],
        slashEra: parseInt(parameters[2]),
      };
      break;
    case "OldSlashingReportDiscarded":
      obj = {
        sessionIndex: parseInt(parameters[0]),
      };
      break;
    case "StakersElected":
      obj = {};
      break;
    case "Bonded":
      obj = {
        stash: parameters[0],
        amount: parameters[1],
      };
      break;
    case "Unbonded":
      obj = {
        stash: parameters[0],
        amount: parameters[1],
      };
      break;
    case "Withdrawn":
      obj = {
        stash: parameters[0],
        amount: parameters[1],
      };
      break;
    case "Kicked":
      obj = {
        nominator: parameters[0],
        stash: parameters[1],
      };
      break;
    case "StakingElectionFailed":
      obj = {};
      break;
    case "Chilled":
      obj = {
        stash: parameters[0],
      };
      break;
    case "PayoutStarted":
      obj = {
        eraIndex: parseInt(parameters[0]),
        validatorStash: parameters[1],
      };
      break;
    case "ValidatorPrefsSet":
      obj = {
        stash: parameters[0],
        prefs: parameters[1],
      };
      break;
    case "ForceEra":
      obj = {
        mode: parameters[0],
      };
      break;
    default:
      obj = {};
  }
  return obj;
}
