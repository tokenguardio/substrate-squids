import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Contract {
    constructor(props?: Partial<Contract>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: true})
    createdBy!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    transactionHash!: string | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    createdTimestamp!: Date | undefined | null
}
