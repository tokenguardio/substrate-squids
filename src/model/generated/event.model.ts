import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Block} from "./block.model"
import {Extrinsic} from "./extrinsic.model"
import {Call} from "./call.model"

@Entity_()
export class Event {
    constructor(props?: Partial<Event>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Block, {nullable: true})
    block!: Block

    @Column_("int4", {nullable: false})
    indexInBlock!: number

    @Column_("text", {nullable: false})
    phase!: string

    @Index_()
    @ManyToOne_(() => Extrinsic, {nullable: true})
    extrinsic!: Extrinsic | undefined | null

    @Index_()
    @ManyToOne_(() => Call, {nullable: true})
    call!: Call | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Column_("jsonb", {nullable: true})
    args!: unknown | undefined | null

    @Column_("int4", {nullable: false})
    pos!: number
}
