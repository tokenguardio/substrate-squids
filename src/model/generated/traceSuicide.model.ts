import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"

@Entity_()
export class TraceSuicide {
    constructor(props?: Partial<TraceSuicide>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("int4", {nullable: true})
    subtraces!: number | undefined | null

    @Column_("text", {nullable: true})
    error!: string | undefined | null

    @Column_("text", {nullable: true})
    address!: string | undefined | null

    @Column_("text", {nullable: true})
    refundAddress!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    balance!: bigint | undefined | null
}
