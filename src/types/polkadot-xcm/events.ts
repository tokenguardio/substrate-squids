import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v968 from '../v968'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const attempted =  {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v932: new EventType(
        'PolkadotXcm.Attempted',
        v932.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v972: new EventType(
        'PolkadotXcm.Attempted',
        v972.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v990: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: v990.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v11000: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: v11000.V4Outcome,
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
    v932: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v932.V1MultiLocation, v932.V1MultiLocation, sts.array(() => v932.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v970: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v970.V1MultiLocation, v970.V1MultiLocation, sts.array(() => v970.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v972: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v972.V3MultiLocation, v972.V3MultiLocation, sts.array(() => v972.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    v990: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v990.V3MultiLocation,
            destination: v990.V3MultiLocation,
            message: sts.array(() => v990.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v10000: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v10000.V3MultiLocation,
            destination: v10000.V3MultiLocation,
            message: sts.array(() => v10000.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v11000: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v11000.V4Location,
            destination: v11000.V4Location,
            message: sts.array(() => v11000.V4Instruction),
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
    v932: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v932.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v970: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v970.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v972: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v972.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v990: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v990.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v10000: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v10000.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v11000: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v11000.V4Location,
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
    v932: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v932.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v970: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v970.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v972: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v972.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v990: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v990.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v10000: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v11000: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v11000.V4Response,
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
    v932: new EventType(
        'PolkadotXcm.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v990: new EventType(
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
    v932: new EventType(
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
    v968: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v968.Weight, v968.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v990: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: v990.Weight,
            maxBudgetedWeight: v990.Weight,
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
    v932: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v990: new EventType(
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
    v932: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v990: new EventType(
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
    v932: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v932.V1MultiLocation, sts.bigint(), sts.option(() => v932.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v970: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v970.V1MultiLocation, sts.bigint(), sts.option(() => v970.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v972: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v972.V3MultiLocation, sts.bigint(), sts.option(() => v972.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v990: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v990.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v990.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v10000: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v10000.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v10000.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v11000: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v11000.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v11000.V4Location),
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
    v932: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v932.V1MultiLocation, sts.bigint()])
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
    v970: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v970.V1MultiLocation, sts.bigint()])
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
    v972: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v972.V3MultiLocation, sts.bigint()])
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
    v990: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v990.V3MultiLocation,
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
    v10000: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v10000.V3MultiLocation,
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
    v11000: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v11000.V4Location,
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
    v932: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    v990: new EventType(
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
    v932: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v932.H256, v932.V1MultiLocation, v932.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v970: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v970.H256, v970.V1MultiLocation, v970.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v972: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v972.H256, v972.V3MultiLocation, v972.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v990: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v990.H256,
            origin: v990.V3MultiLocation,
            assets: v990.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v10000: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v10000.H256,
            origin: v10000.V3MultiLocation,
            assets: v10000.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v11000: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v11000.H256,
            origin: v11000.V4Location,
            assets: v11000.VersionedAssets,
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
    v932: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v932.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v970: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v970.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    v972: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v972.V3MultiLocation, sts.number(), sts.array(() => v972.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v990: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v990.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v990.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v10000: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v10000.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v10000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v11000: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v11000.V4Location,
            result: sts.number(),
            cost: sts.array(() => v11000.V4Asset),
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
    v932: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v932.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v970: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v970.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v972: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v972.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v990: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v990.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v10000: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v10000.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v11000: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v11000.V4Location,
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
    v932: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v932.V1MultiLocation, sts.bigint(), v932.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v970: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v970.V1MultiLocation, sts.bigint(), v970.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v972: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v972.V3MultiLocation, sts.bigint(), v972.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v990: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v990.V3MultiLocation,
            queryId: sts.bigint(),
            error: v990.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v10000: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v10000.V3MultiLocation,
            queryId: sts.bigint(),
            error: v10000.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v11000: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v11000.V4Location,
            queryId: sts.bigint(),
            error: v11000.V3Error,
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
    v932: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v932.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v970: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v970.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v972: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v972.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v990: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v990.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v10000: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v10000.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v11000: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v11000.VersionedLocation,
            queryId: sts.bigint(),
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
    v968: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([v968.H256, v968.V1MultiLocation, v968.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v970: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([v970.H256, v970.V1MultiLocation, v970.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v972: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([v972.H256, v972.V3MultiLocation, v972.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v990: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v990.H256,
            origin: v990.V3MultiLocation,
            assets: v990.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v10000: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v10000.H256,
            origin: v10000.V3MultiLocation,
            assets: v10000.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v11000: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v11000.H256,
            origin: v11000.V4Location,
            assets: v11000.VersionedAssets,
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
    v972: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([v972.V3MultiLocation, sts.bigint()])
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
    v990: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v990.V3MultiLocation,
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
    v10000: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v10000.V3MultiLocation,
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
    v11000: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v11000.V4Location,
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
    v972: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([v972.V3MultiLocation, sts.bigint(), v972.V3MultiLocation, sts.option(() => v972.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v990: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v990.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v990.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v990.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v10000: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v10000.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v10000.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v10000.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v11000: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v11000.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: v11000.V4Location,
            maybeActualQuerier: sts.option(() => v11000.V4Location),
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
    v972: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([v972.V3MultiLocation, sts.array(() => v972.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v990: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v990.V3MultiLocation,
            cost: sts.array(() => v990.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v10000: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v10000.V3MultiLocation,
            cost: sts.array(() => v10000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v11000: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v11000.V4Location,
            cost: sts.array(() => v11000.V4Asset),
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
    v972: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([v972.V3MultiLocation, sts.array(() => v972.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v990: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v990.V3MultiLocation,
            cost: sts.array(() => v990.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v10000: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v10000.V3MultiLocation,
            cost: sts.array(() => v10000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v11000: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v11000.V4Location,
            cost: sts.array(() => v11000.V4Asset),
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
    v972: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([v972.V3MultiLocation, sts.array(() => v972.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v990: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v990.V3MultiLocation,
            cost: sts.array(() => v990.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v10000: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v10000.V3MultiLocation,
            cost: sts.array(() => v10000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v11000: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v11000.V4Location,
            cost: sts.array(() => v11000.V4Asset),
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
    v972: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([v972.V3MultiLocation, sts.array(() => v972.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v990: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v990.V3MultiLocation,
            fees: sts.array(() => v990.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v10000: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v10000.V3MultiLocation,
            fees: sts.array(() => v10000.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v11000: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v11000.V4Location,
            fees: sts.array(() => v11000.V4Asset),
        })
    ),
}

export const versionMigrationFinished =  {
    name: 'PolkadotXcm.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    v11000: new EventType(
        'PolkadotXcm.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}
