import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const memberAdded =  {
    name: 'OracleMembership.MemberAdded',
    /**
     * The given member was added; see the transaction for who.
     */
    v990: new EventType(
        'OracleMembership.MemberAdded',
        sts.unit()
    ),
}

export const memberRemoved =  {
    name: 'OracleMembership.MemberRemoved',
    /**
     * The given member was removed; see the transaction for who.
     */
    v990: new EventType(
        'OracleMembership.MemberRemoved',
        sts.unit()
    ),
}

export const membersSwapped =  {
    name: 'OracleMembership.MembersSwapped',
    /**
     * Two members were swapped; see the transaction for who.
     */
    v990: new EventType(
        'OracleMembership.MembersSwapped',
        sts.unit()
    ),
}

export const membersReset =  {
    name: 'OracleMembership.MembersReset',
    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    v990: new EventType(
        'OracleMembership.MembersReset',
        sts.unit()
    ),
}

export const keyChanged =  {
    name: 'OracleMembership.KeyChanged',
    /**
     * One of the members' keys changed.
     */
    v990: new EventType(
        'OracleMembership.KeyChanged',
        sts.unit()
    ),
}

export const dummy =  {
    name: 'OracleMembership.Dummy',
    /**
     * Phantom member, never used.
     */
    v990: new EventType(
        'OracleMembership.Dummy',
        sts.unit()
    ),
}
