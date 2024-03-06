import {EvmBatchProcessor, EvmBatchProcessorFields, BlockHeader, Log as _Log, Transaction as _Transaction} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'
import * as wglmrAbi from './abi/0xacc15dc74880c9944775448304b263d191c6077f'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('moonbeam', {type: 'EVM'}),
    })
    .setFields({
            log: {
                topics: true,
                data: true,
                transactionHash: true,
            },
            transaction: {
                hash: true,
                input: true,
                from: true,
                value: true,
                status: true,
        }
    })
    .addLog({
        address: ['0xacc15dc74880c9944775448304b263d191c6077f'],
        topic0: [
            wglmrAbi.events['Approval'].topic,
            wglmrAbi.events['Transfer'].topic,
            wglmrAbi.events['Deposit'].topic,
            wglmrAbi.events['Withdrawal'].topic,
        ],
        range: {
            from: 171209,
        },
    })
    .addTransaction({
        to: ['0xacc15dc74880c9944775448304b263d191c6077f'],
        sighash: [
            wglmrAbi.functions['approve'].sighash,
            wglmrAbi.functions['transferFrom'].sighash,
            wglmrAbi.functions['withdraw'].sighash,
            wglmrAbi.functions['transfer'].sighash,
            wglmrAbi.functions['deposit'].sighash,
        ],
        range: {
            from: 171209,
        },
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
