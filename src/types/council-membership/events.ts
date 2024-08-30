import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const memberAdded =  {
    name: 'CouncilMembership.MemberAdded',
    /**
     * The given member was added; see the transaction for who.
     */
    v950: new EventType(
        'CouncilMembership.MemberAdded',
        sts.unit()
    ),
}

export const memberRemoved =  {
    name: 'CouncilMembership.MemberRemoved',
    /**
     * The given member was removed; see the transaction for who.
     */
    v950: new EventType(
        'CouncilMembership.MemberRemoved',
        sts.unit()
    ),
}

export const membersSwapped =  {
    name: 'CouncilMembership.MembersSwapped',
    /**
     * Two members were swapped; see the transaction for who.
     */
    v950: new EventType(
        'CouncilMembership.MembersSwapped',
        sts.unit()
    ),
}

export const membersReset =  {
    name: 'CouncilMembership.MembersReset',
    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    v950: new EventType(
        'CouncilMembership.MembersReset',
        sts.unit()
    ),
}

export const keyChanged =  {
    name: 'CouncilMembership.KeyChanged',
    /**
     * One of the members' keys changed.
     */
    v950: new EventType(
        'CouncilMembership.KeyChanged',
        sts.unit()
    ),
}

export const dummy =  {
    name: 'CouncilMembership.Dummy',
    /**
     * Phantom member, never used.
     */
    v950: new EventType(
        'CouncilMembership.Dummy',
        sts.unit()
    ),
}
