import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {AbiEntry} from "./_abiEntry"

@Entity_()
export class Dapps {
    constructor(props?: Partial<Dapps>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    name!: string

    @StringColumn_({nullable: true})
    logo!: string | undefined | null

    @StringColumn_({nullable: false})
    blockchain!: string

    @StringColumn_({nullable: true})
    website!: string | undefined | null

    @BigIntColumn_({nullable: true})
    fromBlock!: bigint | undefined | null

    @StringColumn_({nullable: true})
    addedBy!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new AbiEntry(undefined, marshal.nonNull(val)))}, nullable: false})
    abis!: (AbiEntry)[]

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
