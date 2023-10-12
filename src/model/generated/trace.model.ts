import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"
import {TraceType} from "./_traceType"
import {Action, fromJsonAction} from "./_action"
import {Result, fromJsonResult} from "./_result"

@Entity_()
export class Trace {
    constructor(props?: Partial<Trace>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction

    @Column_("int4", {nullable: true})
    transactionIndex!: number | undefined | null

    @Index_()
    @Column_("varchar", {length: 7, nullable: true})
    type!: TraceType | undefined | null

    @Column_("int4", {nullable: true})
    subtraces!: number | undefined | null

    @Column_("text", {nullable: true})
    error!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonAction(obj)}, nullable: true})
    action!: Action | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonResult(obj)}, nullable: true})
    result!: Result | undefined | null
}
