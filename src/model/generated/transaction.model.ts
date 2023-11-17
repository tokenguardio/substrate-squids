import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {EvmTransactionType} from "./_evmTransactionType"
import {EvmLabel} from "./_evmLabel"
import {TraceCreate} from "./traceCreate.model"
import {TraceCall} from "./traceCall.model"
import {TraceSuicide} from "./traceSuicide.model"
import {TraceReward} from "./traceReward.model"

@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    hash!: string

    @Column_("varchar", {length: 25, nullable: false})
    type!: EvmTransactionType

    @Index_()
    @Column_("varchar", {length: 15, nullable: false})
    label!: EvmLabel

    @Index_()
    @Column_("text", {nullable: false})
    from!: string

    @Index_()
    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Column_("text", {nullable: false})
    input!: string

    @Column_("text", {nullable: true})
    deployedAddress!: string | undefined | null

    @Index_()
    @Column_("bool", {nullable: true})
    success!: boolean | undefined | null

    @Column_("text", {nullable: true})
    sighash!: string | undefined | null

    @Column_("int4", {nullable: false})
    transactionIndex!: number

    @OneToMany_(() => TraceCreate, e => e.transaction)
    traceCreates!: TraceCreate[]

    @OneToMany_(() => TraceCall, e => e.transaction)
    traceCalls!: TraceCall[]

    @OneToMany_(() => TraceSuicide, e => e.transaction)
    traceSuicides!: TraceSuicide[]

    @OneToMany_(() => TraceReward, e => e.transaction)
    traceRewards!: TraceReward[]
}
