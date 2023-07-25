import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class WasmContractEvent {
    constructor(props?: Partial<WasmContractEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    callId!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    contract!: string

    @Column_("text", {nullable: false})
    eventName!: string

    @Column_("jsonb", {nullable: true})
    eventArgs!: unknown | undefined | null
}
