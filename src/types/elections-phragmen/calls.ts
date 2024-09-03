import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v28 from '../v28'

export const vote =  {
    name: 'ElectionsPhragmen.vote',
    /**
     *  Vote for a set of candidates for the upcoming round of election. This can be called to
     *  set the initial votes, or update already existing votes.
     * 
     *  Upon initial voting, `value` units of `who`'s balance is locked and a bond amount is
     *  reserved.
     * 
     *  The `votes` should:
     *    - not be empty.
     *    - be less than the number of possible candidates. Note that all current members and
     *      runners-up are also automatically candidates for the next round.
     * 
     *  It is the responsibility of the caller to not place all of their balance into the lock
     *  and keep some for further transactions.
     * 
     *  # <weight>
     *  Base weight: 47.93 µs
     *  State reads:
     *  	- Candidates.len() + Members.len() + RunnersUp.len()
     *  	- Voting (is_voter)
     *  	- [AccountBalance(who) (unreserve + total_balance)]
     *  State writes:
     *  	- Voting
     *  	- Lock
     *  	- [AccountBalance(who) (unreserve -- only when creating a new voter)]
     *  # </weight>
     */
    v0: new CallType(
        'ElectionsPhragmen.vote',
        sts.struct({
            votes: sts.array(() => v0.AccountId),
            value: sts.bigint(),
        })
    ),
}

export const removeVoter =  {
    name: 'ElectionsPhragmen.remove_voter',
    /**
     *  Remove `origin` as a voter. This removes the lock and returns the bond.
     * 
     *  # <weight>
     *  Base weight: 36.8 µs
     *  All state access is from do_remove_voter.
     *  State reads:
     *  	- Voting
     *  	- [AccountData(who)]
     *  State writes:
     *  	- Voting
     *  	- Locks
     *  	- [AccountData(who)]
     *  # </weight>
     */
    v0: new CallType(
        'ElectionsPhragmen.remove_voter',
        sts.unit()
    ),
}

export const reportDefunctVoter =  {
    name: 'ElectionsPhragmen.report_defunct_voter',
    /**
     *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
     *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
     *  their bond is slashed.
     * 
     *  A defunct voter is defined to be:
     *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
     *      longer a candidate nor an active member or a runner-up.
     * 
     * 
     *  The origin must provide the number of current candidates and votes of the reported target
     *  for the purpose of accurate weight calculation.
     * 
     *  # <weight>
     *  No Base weight based on min square analysis.
     *  Complexity of candidate_count: 1.755 µs
     *  Complexity of vote_count: 18.51 µs
     *  State reads:
     *   	- Voting(reporter)
     *   	- Candidate.len()
     *   	- Voting(Target)
     *   	- Candidates, Members, RunnersUp (is_defunct_voter)
     *  State writes:
     *  	- Lock(reporter || target)
     *  	- [AccountBalance(reporter)] + AccountBalance(target)
     *  	- Voting(reporter || target)
     *  Note: the db access is worse with respect to db, which is when the report is correct.
     *  # </weight>
     */
    v0: new CallType(
        'ElectionsPhragmen.report_defunct_voter',
        sts.struct({
            defunct: v0.DefunctVoter,
        })
    ),
}

export const submitCandidacy =  {
    name: 'ElectionsPhragmen.submit_candidacy',
    /**
     *  Submit oneself for candidacy.
     * 
     *  A candidate will either:
     *    - Lose at the end of the term and forfeit their deposit.
     *    - Win and become a member. Members will eventually get their stash back.
     *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
     *      removed.
     * 
     *  # <weight>
     *  Base weight = 33.33 µs
     *  Complexity of candidate_count: 0.375 µs
     *  State reads:
     *  	- Candidates.len()
     *  	- Candidates
     *  	- Members
     *  	- RunnersUp
     *  	- [AccountBalance(who)]
     *  State writes:
     *  	- [AccountBalance(who)]
     *  	- Candidates
     *  # </weight>
     */
    v0: new CallType(
        'ElectionsPhragmen.submit_candidacy',
        sts.struct({
            candidateCount: sts.number(),
        })
    ),
}

export const renounceCandidacy =  {
    name: 'ElectionsPhragmen.renounce_candidacy',
    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     *  - `origin` is a candidate and not elected in any set. In this case, the bond is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner-up. In this case, the bond is unreserved, returned and
     *    origin is removed as a runner-up.
     *  - `origin` is a current member. In this case, the bond is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
     *  <weight>
     *  If a candidate is renouncing:
     *  	Base weight: 17.28 µs
     *  	Complexity of candidate_count: 0.235 µs
     *  	State reads:
     *  		- Candidates
     *  		- [AccountBalance(who) (unreserve)]
     *  	State writes:
     *  		- Candidates
     *  		- [AccountBalance(who) (unreserve)]
     *  If member is renouncing:
     *  	Base weight: 46.25 µs
     *  	State reads:
     *  		- Members, RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  	State writes:
     *  		- Members, RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  If runner is renouncing:
     *  	Base weight: 46.25 µs
     *  	State reads:
     *  		- RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  	State writes:
     *  		- RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     * 
     *  Weight note: The call into changeMembers need to be accounted for.
     *  </weight>
     */
    v0: new CallType(
        'ElectionsPhragmen.renounce_candidacy',
        sts.struct({
            renouncing: v0.Renouncing,
        })
    ),
}

export const removeMember =  {
    name: 'ElectionsPhragmen.remove_member',
    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen round is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement:
     *  	- Base weight: 50.93 µs
     *  	- State reads:
     *  		- RunnersUp.len()
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  	- State writes:
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  Else, since this is a root call and will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    v0: new CallType(
        'ElectionsPhragmen.remove_member',
        sts.struct({
            who: v0.LookupSource,
            hasReplacement: sts.boolean(),
        })
    ),
    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement, we use a small weight. Else, since this is a root call and
     *  will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    v28: new CallType(
        'ElectionsPhragmen.remove_member',
        sts.struct({
            who: v28.LookupSource,
            hasReplacement: sts.boolean(),
        })
    ),
}

export const cleanDefunctVoters =  {
    name: 'ElectionsPhragmen.clean_defunct_voters',
    /**
     *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     *  deposit of the removed voters are returned.
     * 
     *  This is an root function to be used only for cleaning the state.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  # <weight>
     *  The total number of voters and those that are defunct must be provided as witness data.
     *  # </weight>
     */
    v28: new CallType(
        'ElectionsPhragmen.clean_defunct_voters',
        sts.struct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        })
    ),
}
