import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WasmContractMessage {
    constructor(props?: Partial<WasmContractMessage>) {
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
    @Column_("text", {nullable: true})
    caller!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    methodName!: string

    @Column_("jsonb", {nullable: true})
    messageArgs!: unknown | undefined | null

    @Column_("jsonb", {nullable: false})
    callArgs!: unknown

    @Column_("bool", {nullable: false})
    callSuccess!: boolean
}
