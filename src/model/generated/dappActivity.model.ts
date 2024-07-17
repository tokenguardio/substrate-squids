import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, Index as Index_, BooleanColumn as BooleanColumn_, BigIntColumn as BigIntColumn_, JSONColumn as JSONColumn_} from "@subsquid/typeorm-store"
import {DappActivityType} from "./_dappActivityType"
import { assertNotNull } from "@subsquid/util-internal";

const dappId = assertNotNull(process.env.DAPP_ID);

@Entity_({ name: `dapp_analytics_${dappId}` })
export class DappActivity {
    constructor(props?: Partial<DappActivity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    transactionHash!: string

    @IntColumn_({nullable: false})
    blockNumber!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @StringColumn_({nullable: false})
    dappId!: string

    @Index_()
    @StringColumn_({nullable: true})
    caller!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: false})
    contract!: string

    @Index_()
    @BooleanColumn_({nullable: true})
    success!: boolean | undefined | null

    @Column_("varchar", {length: 5, nullable: false})
    type!: DappActivityType

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @BigIntColumn_({nullable: true})
    value!: bigint | undefined | null

    @JSONColumn_({nullable: true})
    decodedArgs!: unknown | undefined | null
}
