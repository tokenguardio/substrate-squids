import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Event} from "./event.model"
import {Address} from "./address.model"

@Entity_()
export class StakingPallet {
    constructor(props?: Partial<StakingPallet>) {
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

    @Column_("int4", {nullable: true})
    eraIndex!: number | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    validatorPayout!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    remainder!: bigint | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    stash!: Address | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amount!: bigint | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    staker!: Address | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    validator!: Address | undefined | null

    @Column_("int4", {nullable: true})
    slashEra!: number | undefined | null

    @Column_("text", {nullable: true})
    fraction!: string | undefined | null

    @Column_("int4", {nullable: true})
    sessionIndex!: number | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    nominator!: Address | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    validatorStash!: Address | undefined | null

    @Column_("text", {nullable: true})
    prefs!: string | undefined | null

    @Column_("text", {nullable: true})
    mode!: string | undefined | null
}
