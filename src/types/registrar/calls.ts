import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9340 from '../v9340'

export const registerPara =  {
    name: 'Registrar.register_para',
    /**
     *  Register a parachain with given code. Must be called by root.
     *  Fails if given ID is already used.
     * 
     *  Unlike the `Registrar` trait function of the same name, this
     *  checks the code and head data against size limits.
     */
    v0: new CallType(
        'Registrar.register_para',
        sts.struct({
            id: sts.number(),
            info: v0.ParaInfo,
            code: v0.ValidationCode,
            initialHeadData: v0.HeadData,
        })
    ),
}

export const deregisterPara =  {
    name: 'Registrar.deregister_para',
    /**
     *  Deregister a parachain with given id
     */
    v0: new CallType(
        'Registrar.deregister_para',
        sts.struct({
            id: sts.number(),
        })
    ),
}

export const setThreadCount =  {
    name: 'Registrar.set_thread_count',
    /**
     *  Reset the number of parathreads that can pay to be scheduled in a single block.
     * 
     *  - `count`: The number of parathreads.
     * 
     *  Must be called from Root origin.
     */
    v0: new CallType(
        'Registrar.set_thread_count',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const registerParathread =  {
    name: 'Registrar.register_parathread',
    /**
     *  Register a parathread for immediate use.
     * 
     *  Must be sent from a Signed origin that is able to have ParathreadDeposit reserved.
     *  `code` and `initial_head_data` are used to initialize the parathread's state.
     * 
     *  Unlike `register_para`, this function does check that the maximum code size
     *  and head data size are respected, as parathread registration is an atomic
     *  action.
     */
    v0: new CallType(
        'Registrar.register_parathread',
        sts.struct({
            code: v0.ValidationCode,
            initialHeadData: v0.HeadData,
        })
    ),
}

export const selectParathread =  {
    name: 'Registrar.select_parathread',
    /**
     *  Place a bid for a parathread to be progressed in the next block.
     * 
     *  This is a kind of special transaction that should be heavily prioritized in the
     *  transaction pool according to the `value`; only `ThreadCount` of them may be presented
     *  in any single block.
     */
    v0: new CallType(
        'Registrar.select_parathread',
        sts.struct({
            id: sts.number(),
            collator: v0.CollatorId,
            headHash: v0.Hash,
        })
    ),
}

export const deregisterParathread =  {
    name: 'Registrar.deregister_parathread',
    /**
     *  Deregister a parathread and retrieve the deposit.
     * 
     *  Must be sent from a `Parachain` origin which is currently a parathread.
     * 
     *  Ensure that before calling this that any funds you want emptied from the parathread's
     *  account is moved out; after this it will be impossible to retrieve them (without
     *  governance intervention).
     */
    v0: new CallType(
        'Registrar.deregister_parathread',
        sts.unit()
    ),
}

export const swap =  {
    name: 'Registrar.swap',
    /**
     *  Swap a parachain with another parachain or parathread. The origin must be a `Parachain`.
     *  The swap will happen only if there is already an opposite swap pending. If there is not,
     *  the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
     * 
     *  The `ParaId`s remain mapped to the same head data and code so external code can rely on
     *  `ParaId` to be a long-term identifier of a notional "parachain". However, their
     *  scheduling info (i.e. whether they're a parathread or parachain), auction information
     *  and the auction deposit are switched.
     */
    v0: new CallType(
        'Registrar.swap',
        sts.struct({
            other: sts.number(),
        })
    ),
    /**
     * Swap a parachain with another parachain or parathread.
     * 
     * The origin must be Root, the `para` owner, or the `para` itself.
     * 
     * The swap will happen only if there is already an opposite swap pending. If there is not,
     * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
     * 
     * The `ParaId`s remain mapped to the same head data and code so external code can rely on
     * `ParaId` to be a long-term identifier of a notional "parachain". However, their
     * scheduling info (i.e. whether they're a parathread or parachain), auction information
     * and the auction deposit are switched.
     */
    v9110: new CallType(
        'Registrar.swap',
        sts.struct({
            id: v9110.Id,
            other: v9110.Id,
        })
    ),
}

export const register =  {
    name: 'Registrar.register',
    /**
     * Register head data and validation code for a reserved Para Id.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin.
     * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
     * - `genesis_head`: The genesis head data of the parachain/thread.
     * - `validation_code`: The initial validation code of the parachain/thread.
     * 
     * ## Deposits/Fees
     * The origin signed account must reserve a corresponding deposit for the registration. Anything already
     * reserved previously for this para ID is accounted for.
     * 
     * ## Events
     * The `Registered` event is emitted in case of success.
     */
    v9110: new CallType(
        'Registrar.register',
        sts.struct({
            id: v9110.Id,
            genesisHead: v9110.HeadData,
            validationCode: v9110.ValidationCode,
        })
    ),
}

export const forceRegister =  {
    name: 'Registrar.force_register',
    /**
     * Force the registration of a Para Id on the relay chain.
     * 
     * This function must be called by a Root origin.
     * 
     * The deposit taken can be specified for this registration. Any `ParaId`
     * can be registered, including sub-1000 IDs which are System Parachains.
     */
    v9110: new CallType(
        'Registrar.force_register',
        sts.struct({
            who: v9110.AccountId32,
            deposit: sts.bigint(),
            id: v9110.Id,
            genesisHead: v9110.HeadData,
            validationCode: v9110.ValidationCode,
        })
    ),
}

export const deregister =  {
    name: 'Registrar.deregister',
    /**
     * Deregister a Para Id, freeing all data and returning any deposit.
     * 
     * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
     */
    v9110: new CallType(
        'Registrar.deregister',
        sts.struct({
            id: v9110.Id,
        })
    ),
}

export const forceRemoveLock =  {
    name: 'Registrar.force_remove_lock',
    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin.
     */
    v9110: new CallType(
        'Registrar.force_remove_lock',
        sts.struct({
            para: v9110.Id,
        })
    ),
}

export const reserve =  {
    name: 'Registrar.reserve',
    /**
     * Reserve a Para Id on the relay chain.
     * 
     * This function will reserve a new Para Id to be owned/managed by the origin account.
     * The origin account is able to register head data and validation code using `register` to create
     * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
     * 
     * ## Deposits/Fees
     * The origin must reserve a deposit of `ParaDeposit` for the registration.
     * 
     * ## Events
     * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
     */
    v9110: new CallType(
        'Registrar.reserve',
        sts.unit()
    ),
}

export const removeLock =  {
    name: 'Registrar.remove_lock',
    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin or the parachain.
     */
    v9340: new CallType(
        'Registrar.remove_lock',
        sts.struct({
            para: v9340.Id,
        })
    ),
}

export const addLock =  {
    name: 'Registrar.add_lock',
    /**
     * Add a manager lock from a para. This will prevent the manager of a
     * para to deregister or swap a para.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    v9340: new CallType(
        'Registrar.add_lock',
        sts.struct({
            para: v9340.Id,
        })
    ),
}

export const scheduleCodeUpgrade =  {
    name: 'Registrar.schedule_code_upgrade',
    /**
     * Schedule a parachain upgrade.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    v9340: new CallType(
        'Registrar.schedule_code_upgrade',
        sts.struct({
            para: v9340.Id,
            newCode: v9340.ValidationCode,
        })
    ),
}

export const setCurrentHead =  {
    name: 'Registrar.set_current_head',
    /**
     * Set the parachain's current head.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    v9340: new CallType(
        'Registrar.set_current_head',
        sts.struct({
            para: v9340.Id,
            newHead: v9340.HeadData,
        })
    ),
}
