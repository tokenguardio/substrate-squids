import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v1000001 from '../v1000001'
import * as v1002000 from '../v1002000'

export const attempted =  {
    name: 'XcmPallet.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v9140: new EventType(
        'XcmPallet.Attempted',
        v9140.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v9170: new EventType(
        'XcmPallet.Attempted',
        v9170.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v9420: new EventType(
        'XcmPallet.Attempted',
        v9420.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1000001: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: v1000001.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1002000: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: v1002000.V4Outcome,
        })
    ),
}

export const sent =  {
    name: 'XcmPallet.Sent',
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9140: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9140.V1MultiLocation, v9140.V1MultiLocation, sts.array(() => v9140.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9170: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9170.V1MultiLocation, v9170.V1MultiLocation, sts.array(() => v9170.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9370: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9370.V1MultiLocation, v9370.V1MultiLocation, sts.array(() => v9370.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9420: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9420.V3MultiLocation, v9420.V3MultiLocation, sts.array(() => v9420.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    v1000001: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: v1000001.V3MultiLocation,
            destination: v1000001.V3MultiLocation,
            message: sts.array(() => v1000001.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v1002000: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: v1002000.V4Location,
            destination: v1002000.V4Location,
            message: sts.array(() => v1002000.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse =  {
    name: 'XcmPallet.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v9140: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v9140.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v9370: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v9370.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v9420: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v9420.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1000001: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: v1000001.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1002000: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: v1002000.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady =  {
    name: 'XcmPallet.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9140: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9140.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9170: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9170.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9370: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9370.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9420: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9420.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1000001: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1000001.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1002000: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1002000.V4Response,
        })
    ),
}

export const notified =  {
    name: 'XcmPallet.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    v9140: new EventType(
        'XcmPallet.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v1000001: new EventType(
        'XcmPallet.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight =  {
    name: 'XcmPallet.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v9140: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v9291: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v9291.Weight, v9291.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v9340: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v9340.Weight, v9340.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v1000001: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: v1000001.Weight,
            maxBudgetedWeight: v1000001.Weight,
        })
    ),
}

export const notifyDispatchError =  {
    name: 'XcmPallet.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    v9140: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v1000001: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed =  {
    name: 'XcmPallet.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    v9140: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v1000001: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder =  {
    name: 'XcmPallet.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v9140: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v9140.V1MultiLocation, sts.bigint(), sts.option(() => v9140.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v9370: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v9370.V1MultiLocation, sts.bigint(), sts.option(() => v9370.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v9420: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v9420.V3MultiLocation, sts.bigint(), sts.option(() => v9420.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1000001: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: v1000001.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1000001.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1002000: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: v1002000.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1002000.V4Location),
        })
    ),
}

export const invalidResponderVersion =  {
    name: 'XcmPallet.InvalidResponderVersion',
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
    v9140: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v9140.V1MultiLocation, sts.bigint()])
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
    v9370: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v9370.V1MultiLocation, sts.bigint()])
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
    v9420: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v9420.V3MultiLocation, sts.bigint()])
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
    v1000001: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: v1000001.V3MultiLocation,
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
    v1002000: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: v1002000.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken =  {
    name: 'XcmPallet.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    v9140: new EventType(
        'XcmPallet.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    v1000001: new EventType(
        'XcmPallet.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped =  {
    name: 'XcmPallet.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v9140: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v9140.H256, v9140.V1MultiLocation, v9140.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v9370: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v9370.H256, v9370.V1MultiLocation, v9370.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v9420: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v9420.H256, v9420.V3MultiLocation, v9420.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1000001: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: v1000001.H256,
            origin: v1000001.V3MultiLocation,
            assets: v1000001.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1002000: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: v1002000.H256,
            origin: v1002000.V4Location,
            assets: v1002000.VersionedAssets,
        })
    ),
}

export const versionChangeNotified =  {
    name: 'XcmPallet.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v9140: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v9140.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v9370: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v9370.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    v9420: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v9420.V3MultiLocation, sts.number(), sts.array(() => v9420.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1000001: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: v1000001.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v1000001.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1002000: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: v1002000.V4Location,
            result: sts.number(),
            cost: sts.array(() => v1002000.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged =  {
    name: 'XcmPallet.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v9140: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v9140.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v9370: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v9370.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v9420: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v9420.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1000001: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: v1000001.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1002000: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: v1002000.V4Location,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail =  {
    name: 'XcmPallet.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9140: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9140.V1MultiLocation, sts.bigint(), v9140.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9170: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9170.V1MultiLocation, sts.bigint(), v9170.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9370: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9370.V1MultiLocation, sts.bigint(), v9370.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9420: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9420.V3MultiLocation, sts.bigint(), v9420.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1000001: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: v1000001.V3MultiLocation,
            queryId: sts.bigint(),
            error: v1000001.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1002000: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: v1002000.V4Location,
            queryId: sts.bigint(),
            error: v1002000.V3Error,
        })
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'XcmPallet.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v9140: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v9140.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v9370: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v9370.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v9420: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v9420.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1000001: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: v1000001.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1002000: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: v1002000.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const assetsClaimed =  {
    name: 'XcmPallet.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v9340: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v9340.H256, v9340.V1MultiLocation, v9340.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v9370: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v9370.H256, v9370.V1MultiLocation, v9370.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v9420: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v9420.H256, v9420.V3MultiLocation, v9420.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1000001: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: v1000001.H256,
            origin: v1000001.V3MultiLocation,
            assets: v1000001.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1002000: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: v1002000.H256,
            origin: v1002000.V4Location,
            assets: v1002000.VersionedAssets,
        })
    ),
}

export const invalidQuerierVersion =  {
    name: 'XcmPallet.InvalidQuerierVersion',
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
    v9420: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.tuple([v9420.V3MultiLocation, sts.bigint()])
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
    v1000001: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: v1000001.V3MultiLocation,
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
    v1002000: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: v1002000.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier =  {
    name: 'XcmPallet.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v9420: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.tuple([v9420.V3MultiLocation, sts.bigint(), v9420.V3MultiLocation, sts.option(() => v9420.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1000001: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: v1000001.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v1000001.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v1000001.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1002000: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: v1002000.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: v1002000.V4Location,
            maybeActualQuerier: sts.option(() => v1002000.V4Location),
        })
    ),
}

export const versionNotifyStarted =  {
    name: 'XcmPallet.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    v9420: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.tuple([v9420.V3MultiLocation, sts.array(() => v9420.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1000001: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: v1000001.V3MultiLocation,
            cost: sts.array(() => v1000001.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1002000: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: v1002000.V4Location,
            cost: sts.array(() => v1002000.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested =  {
    name: 'XcmPallet.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v9420: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.tuple([v9420.V3MultiLocation, sts.array(() => v9420.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1000001: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: v1000001.V3MultiLocation,
            cost: sts.array(() => v1000001.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1002000: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: v1002000.V4Location,
            cost: sts.array(() => v1002000.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested =  {
    name: 'XcmPallet.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v9420: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.tuple([v9420.V3MultiLocation, sts.array(() => v9420.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v1000001: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: v1000001.V3MultiLocation,
            cost: sts.array(() => v1000001.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v1002000: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: v1002000.V4Location,
            cost: sts.array(() => v1002000.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid =  {
    name: 'XcmPallet.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    v9420: new EventType(
        'XcmPallet.FeesPaid',
        sts.tuple([v9420.V3MultiLocation, sts.array(() => v9420.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1000001: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: v1000001.V3MultiLocation,
            fees: sts.array(() => v1000001.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1002000: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: v1002000.V4Location,
            fees: sts.array(() => v1002000.V4Asset),
        })
    ),
}

export const versionMigrationFinished =  {
    name: 'XcmPallet.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    v1002000: new EventType(
        'XcmPallet.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}
