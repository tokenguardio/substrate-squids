import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Event} from "./event.model"
import {Address} from "./address.model"

@Entity_()
export class NominationPoolsPallet {
    constructor(props?: Partial<NominationPoolsPallet>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Event, {nullable: true})
    event!: Event

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    depositor!: Address | undefined | null

    @Column_("int4", {nullable: true})
    poolId!: number | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    member!: Address | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    bonded!: bigint | undefined | null

    @Column_("bool", {nullable: true})
    joined!: boolean | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    payout!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    balance!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    points!: bigint | undefined | null

    @Column_("int4", {nullable: true})
    era!: number | undefined | null

    @Column_("text", {nullable: true})
    newState!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    root!: Address | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    stateToggler!: Address | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    nominator!: Address | undefined | null
}
