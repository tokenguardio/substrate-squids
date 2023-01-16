import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Block} from "./block.model"
import {Call} from "./call.model"

@Entity_()
export class Extrinsic {
    constructor(props?: Partial<Extrinsic>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Block, {nullable: true})
    block!: Block

    @Column_("int4", {nullable: false})
    indexInBlock!: number

    @Column_("int4", {nullable: false})
    version!: number

    @Column_("jsonb", {nullable: true})
    signature!: unknown | undefined | null

    @Column_("bool", {nullable: false})
    success!: boolean

    @Column_("jsonb", {nullable: true})
    error!: unknown | undefined | null

    @Index_()
    @ManyToOne_(() => Call, {nullable: true})
    call!: Call

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fee!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    tip!: bigint | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    hash!: string

    @Column_("int4", {nullable: false})
    pos!: number

    @OneToMany_(() => Call, e => e.extrinsic)
    calls!: Call[]
}
