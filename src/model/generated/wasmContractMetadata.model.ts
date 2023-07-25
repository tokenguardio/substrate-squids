import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class WasmContractMetadata {
    constructor(props?: Partial<WasmContractMetadata>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("jsonb", {nullable: false})
    metadata!: unknown
}
