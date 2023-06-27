import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {EvmTransactionType} from "./_evmTransactionType"
import {EvmLabel} from "./_evmLabel"

@Entity_()
export class EvmTransaction {
    constructor(props?: Partial<EvmTransaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("jsonb", {nullable: true})
    args!: unknown | undefined | null

    @Index_()
    @Column_("varchar", {length: 7, nullable: false})
    transactionType!: EvmTransactionType

    @Index_()
    @Column_("varchar", {length: 15, nullable: false})
    label!: EvmLabel

    @Column_("text", {nullable: false})
    from!: string

    @Column_("text", {nullable: false})
    to!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    value!: bigint | undefined | null

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("text", {nullable: false})
    status!: string

    @Column_("text", {nullable: false})
    statusReason!: string
}
