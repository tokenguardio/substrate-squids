import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"
import {TransferType} from "./_transferType"
import {FToken} from "./fToken.model"

@Entity_()
export class FtTransfer {
    constructor(props?: Partial<FtTransfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("int4", {nullable: true})
    eventIndex!: number | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    from!: string

    @Index_()
    @Column_("text", {nullable: false})
    to!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Index_()
    @Column_("varchar", {length: 8, nullable: true})
    transferType!: TransferType | undefined | null

    @Index_()
    @ManyToOne_(() => FToken, {nullable: true})
    token!: FToken | undefined | null
}
