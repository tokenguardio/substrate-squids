import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WasmContractAbi {
    constructor(props?: Partial<WasmContractAbi>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    dappName!: string

    @Column_("jsonb", {nullable: false})
    abi!: unknown

    @Column_("text", {nullable: true})
    label!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fromBlock!: bigint | undefined | null

    @Column_("text", {nullable: true})
    addedBy!: string | undefined | null
}
