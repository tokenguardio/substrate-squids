import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Metadata {
    constructor(props?: Partial<Metadata>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    specName!: string

    @Column_("int4", {nullable: true})
    specVersion!: number | undefined | null

    @Column_("int4", {nullable: false})
    blockHeight!: number

    @Column_("text", {nullable: false})
    blockHash!: string

    @Column_("text", {nullable: false})
    hex!: string
}
