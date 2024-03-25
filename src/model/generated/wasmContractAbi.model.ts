import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

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
}
