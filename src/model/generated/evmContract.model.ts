import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class EvmContract {
    constructor(props?: Partial<EvmContract>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    creator!: string

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    createdTimestamp!: Date
}
