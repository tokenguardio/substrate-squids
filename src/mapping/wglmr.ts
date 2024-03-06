import {DataHandlerContext} from '@subsquid/evm-processor'
import {Store} from '../db'
import {EntityBuffer} from '../entityBuffer'
import {WglmrEventApproval, WglmrEventTransfer, WglmrEventDeposit, WglmrEventWithdrawal, WglmrFunctionApprove, WglmrFunctionTransferFrom, WglmrFunctionWithdraw, WglmrFunctionTransfer, WglmrFunctionDeposit} from '../model'
import * as spec from '../abi/0xacc15dc74880c9944775448304b263d191c6077f'
import {Log, Transaction} from '../processor'

const address = '0xacc15dc74880c9944775448304b263d191c6077f'


export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    try {
        switch (log.topics[0]) {
            case spec.events['Approval'].topic: {
                let e = spec.events['Approval'].decode(log)
                EntityBuffer.add(
                    new WglmrEventApproval({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'Approval',
                        src: e[0],
                        guy: e[1],
                        wad: e[2],
                    })
                )
                break
            }
            case spec.events['Transfer'].topic: {
                let e = spec.events['Transfer'].decode(log)
                EntityBuffer.add(
                    new WglmrEventTransfer({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'Transfer',
                        src: e[0],
                        dst: e[1],
                        wad: e[2],
                    })
                )
                break
            }
            case spec.events['Deposit'].topic: {
                let e = spec.events['Deposit'].decode(log)
                EntityBuffer.add(
                    new WglmrEventDeposit({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'Deposit',
                        dst: e[0],
                        wad: e[1],
                    })
                )
                break
            }
            case spec.events['Withdrawal'].topic: {
                let e = spec.events['Withdrawal'].decode(log)
                EntityBuffer.add(
                    new WglmrEventWithdrawal({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'Withdrawal',
                        src: e[0],
                        wad: e[1],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: log.block.height, blockHash: log.block.hash, address}, `Unable to decode event "${log.topics[0]}"`)
    }
}

export function parseFunction(ctx: DataHandlerContext<Store>, transaction: Transaction) {
    try {
        switch (transaction.input.slice(0, 10)) {
            case spec.functions['approve'].sighash: {
                let f = spec.functions['approve'].decode(transaction.input)
                EntityBuffer.add(
                    new WglmrFunctionApprove({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'approve',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        guy: f[0],
                        wad: f[1],
                    })
                )
                break
            }
            case spec.functions['transferFrom'].sighash: {
                let f = spec.functions['transferFrom'].decode(transaction.input)
                EntityBuffer.add(
                    new WglmrFunctionTransferFrom({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'transferFrom',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        src: f[0],
                        dst: f[1],
                        wad: f[2],
                    })
                )
                break
            }
            case spec.functions['withdraw'].sighash: {
                let f = spec.functions['withdraw'].decode(transaction.input)
                EntityBuffer.add(
                    new WglmrFunctionWithdraw({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'withdraw',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        wad: f[0],
                    })
                )
                break
            }
            case spec.functions['transfer'].sighash: {
                let f = spec.functions['transfer'].decode(transaction.input)
                EntityBuffer.add(
                    new WglmrFunctionTransfer({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'transfer',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        dst: f[0],
                        wad: f[1],
                    })
                )
                break
            }
            case spec.functions['deposit'].sighash: {
                let f = spec.functions['deposit'].decode(transaction.input)
                EntityBuffer.add(
                    new WglmrFunctionDeposit({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'deposit',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: transaction.block.height, blockHash: transaction.block.hash, address}, `Unable to decode function "${transaction.input.slice(0, 10)}"`)
    }
}
