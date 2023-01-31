import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Address {
    constructor(props?: Partial<Address>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    ss58!: string

    @Column_("text", {nullable: true})
    type!: string | undefined | null

    @Column_("text", {nullable: true})
    label!: string | undefined | null
}
