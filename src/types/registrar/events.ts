import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9230 from '../v9230'
import * as v9430 from '../v9430'

export const parathreadRegistered =  {
    name: 'Registrar.ParathreadRegistered',
    /**
     *  A parathread was registered; its new ID is supplied.
     */
    v0: new EventType(
        'Registrar.ParathreadRegistered',
        v0.ParaId
    ),
}

export const parathreadDeregistered =  {
    name: 'Registrar.ParathreadDeregistered',
    /**
     *  The parathread of the supplied ID was de-registered.
     */
    v0: new EventType(
        'Registrar.ParathreadDeregistered',
        v0.ParaId
    ),
}

export const registered =  {
    name: 'Registrar.Registered',
    v9110: new EventType(
        'Registrar.Registered',
        sts.tuple([v9110.Id, v9110.AccountId32])
    ),
    v9230: new EventType(
        'Registrar.Registered',
        sts.struct({
            paraId: v9230.Id,
            manager: v9230.AccountId32,
        })
    ),
}

export const deregistered =  {
    name: 'Registrar.Deregistered',
    v9110: new EventType(
        'Registrar.Deregistered',
        v9110.Id
    ),
    v9230: new EventType(
        'Registrar.Deregistered',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const reserved =  {
    name: 'Registrar.Reserved',
    v9110: new EventType(
        'Registrar.Reserved',
        sts.tuple([v9110.Id, v9110.AccountId32])
    ),
    v9230: new EventType(
        'Registrar.Reserved',
        sts.struct({
            paraId: v9230.Id,
            who: v9230.AccountId32,
        })
    ),
}

export const swapped =  {
    name: 'Registrar.Swapped',
    v9430: new EventType(
        'Registrar.Swapped',
        sts.struct({
            paraId: v9430.Id,
            otherId: v9430.Id,
        })
    ),
}
