import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Event} from "./event.model"
import {Address} from "./address.model"

@Entity_()
export class BalancesPallet {
    constructor(props?: Partial<BalancesPallet>) {
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
    account!: Address | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    freeBalance!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amount!: bigint | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    from!: Address | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    to!: Address | undefined | null

    @Index_()
    @ManyToOne_(() => Address, {nullable: true})
    who!: Address | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    free!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    reserved!: bigint | undefined | null

    @Column_("text", {nullable: true})
    destinationStatus!: string | undefined | null
}
