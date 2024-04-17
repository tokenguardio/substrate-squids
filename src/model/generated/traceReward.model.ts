import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"

@Entity_()
export class TraceReward {
    constructor(props?: Partial<TraceReward>) {
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

    @Column_("bool", {nullable: true})
    parentHasError!: boolean | undefined | null

    @Column_("text", {nullable: true})
    author!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    value!: bigint | undefined | null

    @Column_("text", {nullable: true})
    rewardType!: string | undefined | null
}
