import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import {WasmContractObjectType} from "./_wasmContractObjectType"

@Entity_()
export class WasmContractDecodingError {
    constructor(props?: Partial<WasmContractDecodingError>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Column_("varchar", {length: 11, nullable: false})
    type!: WasmContractObjectType

    @Column_("text", {nullable: false})
    errorMessage!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("jsonb", {nullable: true})
    args!: unknown | undefined | null
}
