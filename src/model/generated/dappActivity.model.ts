import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {DappActivityType} from "./_dappActivityType"
import { assertNotNull } from "@subsquid/substrate-processor";

const dappId = assertNotNull(process.env.DAPP_ID);

@Entity_({ name: `dapp_analytics_${dappId}` })
export class DappActivity {
    constructor(props?: Partial<DappActivity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    callId!: string

    @Column_("text", {nullable: false})
    extrinsicHash!: string

    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    dappId!: string

    @Index_()
    @Column_("text", {nullable: true})
    caller!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Index_()
    @Column_("bool", {nullable: true})
    success!: boolean | undefined | null

    @Column_("varchar", {length: 5, nullable: false})
    type!: DappActivityType

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    value!: bigint | undefined | null

    @Column_("jsonb", {nullable: true})
    decodedArgs!: unknown | undefined | null
}
