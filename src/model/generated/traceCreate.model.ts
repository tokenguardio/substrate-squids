import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"
import {AddressType} from "./_addressType"

@Entity_()
export class TraceCreate {
    constructor(props?: Partial<TraceCreate>) {
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

    @Index_()
    @Column_("text", {nullable: false})
    from!: string

    @Column_("varchar", {length: 8, nullable: true})
    fromType!: AddressType | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    value!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gas!: bigint | undefined | null

    @Column_("text", {nullable: true})
    init!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gasUsed!: bigint | undefined | null

    @Column_("text", {nullable: true})
    code!: string | undefined | null

    @Column_("text", {nullable: true})
    address!: string | undefined | null
}
