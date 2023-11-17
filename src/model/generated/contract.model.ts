import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {Transaction} from "./transaction.model"

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
    @ManyToOne_(() => Transaction, {nullable: true})
    createTransaction!: Transaction | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    createTimestamp!: Date | undefined | null

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    destroyTransaction!: Transaction | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    destroyTimestamp!: Date | undefined | null
}
