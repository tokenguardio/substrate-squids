import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v3 from '../v3'
import * as v4 from '../v4'
import * as v9 from '../v9'
import * as v12 from '../v12'
import * as v13 from '../v13'
import * as v15 from '../v15'
import * as v16 from '../v16'
import * as v17 from '../v17'
import * as v23 from '../v23'
import * as v30 from '../v30'
import * as v33 from '../v33'
import * as v43 from '../v43'
import * as v49 from '../v49'
import * as v52 from '../v52'
import * as v55 from '../v55'
import * as v61 from '../v61'
import * as v64 from '../v64'
import * as v66 from '../v66'

export const call =  {
    name: 'EthCall.call',
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v1: new CallType(
        'EthCall.call',
        sts.struct({
            call: v1.Call,
            signer: v1.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v3: new CallType(
        'EthCall.call',
        sts.struct({
            call: v3.Call,
            signer: v3.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v4: new CallType(
        'EthCall.call',
        sts.struct({
            call: v4.Call,
            signer: v4.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v9: new CallType(
        'EthCall.call',
        sts.struct({
            call: v9.Call,
            signer: v9.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v12: new CallType(
        'EthCall.call',
        sts.struct({
            call: v12.Call,
            signer: v12.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v13: new CallType(
        'EthCall.call',
        sts.struct({
            call: v13.Call,
            signer: v13.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v15: new CallType(
        'EthCall.call',
        sts.struct({
            call: v15.Call,
            signer: v15.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v16: new CallType(
        'EthCall.call',
        sts.struct({
            call: v16.Call,
            signer: v16.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v17: new CallType(
        'EthCall.call',
        sts.struct({
            call: v17.Call,
            signer: v17.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v23: new CallType(
        'EthCall.call',
        sts.struct({
            call: v23.Call,
            signer: v23.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v30: new CallType(
        'EthCall.call',
        sts.struct({
            call: v30.Call,
            signer: v30.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v33: new CallType(
        'EthCall.call',
        sts.struct({
            call: v33.Call,
            signer: v33.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v43: new CallType(
        'EthCall.call',
        sts.struct({
            call: v43.Call,
            signer: v43.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    v49: new CallType(
        'EthCall.call',
        sts.struct({
            call: v49.Call,
            signer: v49.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    v52: new CallType(
        'EthCall.call',
        sts.struct({
            call: v52.Call,
            signer: v52.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    v55: new CallType(
        'EthCall.call',
        sts.struct({
            call: v55.Call,
            signer: v55.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    v61: new CallType(
        'EthCall.call',
        sts.struct({
            call: v61.Call,
            signer: v61.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    v64: new CallType(
        'EthCall.call',
        sts.struct({
            call: v64.Call,
            signer: v64.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    v66: new CallType(
        'EthCall.call',
        sts.struct({
            call: v66.Call,
            signer: v66.AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        })
    ),
}
