import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WasmContractConstructor {
    constructor(props?: Partial<WasmContractConstructor>) {
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
    deployer!: string

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Column_("text", {nullable: false})
    methodName!: string

    @Column_("jsonb", {nullable: true})
    constructorArgs!: unknown | undefined | null

    @Column_("text", {nullable: false})
    callName!: string

    @Column_("jsonb", {nullable: false})
    callArgs!: unknown

    @Column_("bool", {nullable: false})
    callSuccess!: boolean
}
