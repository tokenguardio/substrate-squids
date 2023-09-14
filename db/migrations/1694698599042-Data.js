module.exports = class Data1694698599042 {
    name = 'Data1694698599042'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "transaction_index" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "from" text NOT NULL, "to" text, "hash" text NOT NULL, "gas" numeric NOT NULL, "gas_price" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "input" text NOT NULL, "nonce" integer NOT NULL, "value" numeric NOT NULL, "v" numeric, "r" text, "s" text, "y_parity" integer, "chain_id" integer, "gas_used" numeric, "cumulative_gas_used" numeric, "effective_gas_price" numeric, "contract_address" text, "type" integer, "status" integer, "sighash" text, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_87f2932d4a558d44a2915f849a" ON "transaction" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_87f2932d4a558d44a2915f849a"`)
    }
}
