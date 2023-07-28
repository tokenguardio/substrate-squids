import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {CallNorm} from "./callNorm.model"

@Entity_()
export class EventNorm {
    constructor(props?: Partial<EventNorm>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => CallNorm, {nullable: true})
    call!: CallNorm | undefined | null

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Column_("jsonb", {nullable: true})
    args!: unknown | undefined | null

    @Column_("bool", {nullable: true})
    extrinsicSuccess!: boolean | undefined | null
}
