import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"
import {AddressType} from "./_addressType"

@Entity_()
export class TraceCall {
    constructor(props?: Partial<TraceCall>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("int4", {nullable: true})
    subtraces!: number | undefined | null

    @Column_("text", {nullable: true})
    error!: string | undefined | null

    @Column_("bool", {nullable: true})
    parentHasError!: boolean | undefined | null

    @Column_("text", {nullable: false})
    from!: string

    @Column_("varchar", {length: 8, nullable: true})
    fromType!: AddressType | undefined | null

    @Column_("text", {nullable: false})
    to!: string

    @Column_("varchar", {length: 8, nullable: true})
    toType!: AddressType | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    value!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gas!: bigint | undefined | null

    @Column_("text", {nullable: true})
    sighash!: string | undefined | null

    @Column_("text", {nullable: true})
    input!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gasUsed!: bigint | undefined | null

    @Column_("text", {nullable: true})
    output!: string | undefined | null
}
