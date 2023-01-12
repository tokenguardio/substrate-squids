import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Metadata} from "./metadata.model"
import {Event} from "./event.model"
import {Call} from "./call.model"
import {Extrinsic} from "./extrinsic.model"

@Entity_()
export class Block {
    constructor(props?: Partial<Block>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    height!: number

    @Column_("text", {nullable: false})
    hash!: string

    @Column_("text", {nullable: false})
    parentHash!: string

    @Column_("text", {nullable: false})
    stateRoot!: string

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: true})
    extrinsicsRoot!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Metadata, {nullable: true})
    spec!: Metadata | undefined | null

    @Column_("text", {nullable: true})
    validator!: string | undefined | null

    @OneToMany_(() => Event, e => e.block)
    events!: Event[]

    @OneToMany_(() => Call, e => e.block)
    calls!: Call[]

    @OneToMany_(() => Extrinsic, e => e.block)
    extrinsics!: Extrinsic[]
}
