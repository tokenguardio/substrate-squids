import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'
import * as v244 from '../v244'

export const attempted =  {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v108: new EventType(
        'PolkadotXcm.Attempted',
        v108.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v160: new EventType(
        'PolkadotXcm.Attempted',
        v160.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v205: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: v205.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v244: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: v244.V4Outcome,
        })
    ),
}

export const sent =  {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v108: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v108.V1MultiLocation, v108.V1MultiLocation, sts.array(() => v108.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v160: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v160.V3MultiLocation, v160.V3MultiLocation, sts.array(() => v160.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    v205: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v205.V3MultiLocation,
            destination: v205.V3MultiLocation,
            message: sts.array(() => v205.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v244: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v244.V4Location,
            destination: v244.V4Location,
            message: sts.array(() => v244.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse =  {
    name: 'PolkadotXcm.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v108: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v108.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v160: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v160.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v205: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v205.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v244: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v244.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady =  {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v108: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v108.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v160: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v160.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v205: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v205.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v244: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v244.V4Response,
        })
    ),
}

export const notified =  {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    v108: new EventType(
        'PolkadotXcm.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v205: new EventType(
        'PolkadotXcm.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight =  {
    name: 'PolkadotXcm.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v108: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v115: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v115.Weight, v115.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v160: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v160.Weight, v160.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v205: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: v205.Weight,
            maxBudgetedWeight: v205.Weight,
        })
    ),
}

export const notifyDispatchError =  {
    name: 'PolkadotXcm.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    v108: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v205: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed =  {
    name: 'PolkadotXcm.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    v108: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v205: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder =  {
    name: 'PolkadotXcm.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v108: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v108.V1MultiLocation, sts.bigint(), sts.option(() => v108.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v160: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v160.V3MultiLocation, sts.bigint(), sts.option(() => v160.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v205: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v205.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v205.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v244: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v244.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v244.V4Location),
        })
    ),
}

export const invalidResponderVersion =  {
    name: 'PolkadotXcm.InvalidResponderVersion',
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v108: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v108.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v160: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v160.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    v205: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v205.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    v244: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v244.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken =  {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    v108: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    v205: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped =  {
    name: 'PolkadotXcm.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v108: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v108.H256, v108.V1MultiLocation, v108.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v160: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v160.H256, v160.V3MultiLocation, v160.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v205: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v205.H256,
            origin: v205.V3MultiLocation,
            assets: v205.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v244: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v244.H256,
            origin: v244.V4Location,
            assets: v244.VersionedAssets,
        })
    ),
}

export const versionChangeNotified =  {
    name: 'PolkadotXcm.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v108: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v108.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    v160: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v160.V3MultiLocation, sts.number(), sts.array(() => v160.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v205: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v205.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v205.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v244: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v244.V4Location,
            result: sts.number(),
            cost: sts.array(() => v244.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged =  {
    name: 'PolkadotXcm.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v108: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v108.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v160: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v160.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v205: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v205.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v244: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v244.V4Location,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail =  {
    name: 'PolkadotXcm.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v108: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v108.V1MultiLocation, sts.bigint(), v108.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v160: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v160.V3MultiLocation, sts.bigint(), v160.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v205: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v205.V3MultiLocation,
            queryId: sts.bigint(),
            error: v205.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v244: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v244.V4Location,
            queryId: sts.bigint(),
            error: v244.V3Error,
        })
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'PolkadotXcm.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v108: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v108.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v160: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v160.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v205: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v205.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v244: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v244.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerierVersion =  {
    name: 'PolkadotXcm.InvalidQuerierVersion',
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v160: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([v160.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    v205: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v205.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    v244: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v244.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier =  {
    name: 'PolkadotXcm.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v160: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([v160.V3MultiLocation, sts.bigint(), v160.V3MultiLocation, sts.option(() => v160.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v205: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v205.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v205.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v205.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v244: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v244.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: v244.V4Location,
            maybeActualQuerier: sts.option(() => v244.V4Location),
        })
    ),
}

export const versionNotifyStarted =  {
    name: 'PolkadotXcm.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    v160: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([v160.V3MultiLocation, sts.array(() => v160.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v205: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v205.V3MultiLocation,
            cost: sts.array(() => v205.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v244: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v244.V4Location,
            cost: sts.array(() => v244.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested =  {
    name: 'PolkadotXcm.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v160: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([v160.V3MultiLocation, sts.array(() => v160.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v205: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v205.V3MultiLocation,
            cost: sts.array(() => v205.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v244: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v244.V4Location,
            cost: sts.array(() => v244.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested =  {
    name: 'PolkadotXcm.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v160: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([v160.V3MultiLocation, sts.array(() => v160.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v205: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v205.V3MultiLocation,
            cost: sts.array(() => v205.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v244: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v244.V4Location,
            cost: sts.array(() => v244.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid =  {
    name: 'PolkadotXcm.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    v160: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([v160.V3MultiLocation, sts.array(() => v160.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v205: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v205.V3MultiLocation,
            fees: sts.array(() => v205.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v244: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v244.V4Location,
            fees: sts.array(() => v244.V4Asset),
        })
    ),
}

export const assetsClaimed =  {
    name: 'PolkadotXcm.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v160: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([v160.H256, v160.V3MultiLocation, v160.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v205: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v205.H256,
            origin: v205.V3MultiLocation,
            assets: v205.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v244: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v244.H256,
            origin: v244.V4Location,
            assets: v244.VersionedAssets,
        })
    ),
}

export const versionMigrationFinished =  {
    name: 'PolkadotXcm.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    v244: new EventType(
        'PolkadotXcm.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}
