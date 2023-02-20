// export function mapStakingArgsToObject(
//   eventName: string,
//   args: string[]
// ): {
//   eraIndex?: number;
//   validatorPayout?: bigint;
//   remainder?: bigint;
//   stash?: string;
//   amount?: bigint;
//   staker?: string;
//   validator?: string;
//   slashEra?: number;
//   fraction?: string;
//   sessionIndex?: number;
//   nominator?: string;
//   validatorStash?: string;
//   prefs?: string;
//   mode?: string;
// } {
//   if (!Array.isArray(args)) {
//     args = [args];
//   }
//   let obj = {};
//   switch (eventName) {
//     case "EraPaid":
//       obj = {
//         eraIndex: parseInt(args[0]),
//         validatorPayout: args[1],
//         remainder: args[2],
//       };
//       break;
//     case "Rewarded":
//       obj = {
//         stash: args[0],
//         amount: args[1],
//       };
//       break;
//     case "Slashed":
//       obj = {
//         staker: args[0],
//         amount: args[1],
//       };
//       break;
//     case "SlashReported":
//       obj = {
//         validator: args[0],
//         fraction: args[1],
//         slashEra: parseInt(args[2]),
//       };
//       break;
//     case "OldSlashingReportDiscarded":
//       obj = {
//         sessionIndex: parseInt(args[0]),
//       };
//       break;
//     case "StakersElected":
//       obj = {};
//       break;
//     case "Bonded":
//       obj = {
//         stash: args[0],
//         amount: args[1],
//       };
//       break;
//     case "Unbonded":
//       obj = {
//         stash: args[0],
//         amount: args[1],
//       };
//       break;
//     case "Withdrawn":
//       obj = {
//         stash: args[0],
//         amount: args[1],
//       };
//       break;
//     case "Kicked":
//       obj = {
//         nominator: args[0],
//         stash: args[1],
//       };
//       break;
//     case "StakingElectionFailed":
//       obj = {};
//       break;
//     case "Chilled":
//       obj = {
//         stash: args[0],
//       };
//       break;
//     case "PayoutStarted":
//       obj = {
//         eraIndex: parseInt(args[0]),
//         validatorStash: args[1],
//       };
//       break;
//     case "ValidatorPrefsSet":
//       obj = {
//         stash: args[0],
//         prefs: args[1],
//       };
//       break;
//     case "ForceEra":
//       obj = {
//         mode: args[0],
//       };
//       break;
//     default:
//       obj = {};
//   }
//   return obj;
// }
