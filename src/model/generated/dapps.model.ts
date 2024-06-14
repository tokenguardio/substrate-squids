import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {AbiEntry} from "./_abiEntry"

@Entity_()
export class Dapps {
    constructor(props?: Partial<Dapps>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("text", {nullable: true})
    logo!: string | undefined | null

    @Column_("text", {nullable: false})
    blockchain!: string

    @Column_("text", {nullable: true})
    website!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fromBlock!: bigint | undefined | null

    @Column_("text", {nullable: true})
    addedBy!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new AbiEntry(undefined, marshal.nonNull(val)))}, nullable: false})
    abis!: (AbiEntry)[]

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("timestamp with time zone", {nullable: false})
    updatedAt!: Date
}
