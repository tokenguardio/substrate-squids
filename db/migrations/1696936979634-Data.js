module.exports = class Data1696936979634 {
    name = 'Data1696936979634'

    async up(db) {
        await db.query(`CREATE TABLE "event_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "extrinsic_success" boolean, CONSTRAINT "PK_d33300243feb4679ec112a74a03" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_9399a1351b92b17b633f2a4d88" ON "event_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_815deac0945f896227f308f346" ON "event_norm" ("name") `)
        await db.query(`CREATE TABLE "call_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "success" boolean, "origin" jsonb, CONSTRAINT "PK_e6dee5a463d3dd8993668fb913e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5fc3745dc44160b5563cf88307" ON "call_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d069b0512be986815a0a41e601" ON "call_norm" ("name") `)
        await db.query(`CREATE TABLE "address_mapping" ("id" character varying NOT NULL, "ss58" text, CONSTRAINT "PK_8611a631b9c1187979a08ecb53f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "transaction_index" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "from" text NOT NULL, "to" text, "hash" text NOT NULL, "gas" numeric NOT NULL, "gas_price" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "input" text NOT NULL, "nonce" integer NOT NULL, "value" numeric NOT NULL, "chain_id" integer, "gas_used" numeric, "cumulative_gas_used" numeric, "effective_gas_price" numeric, "contract_address" text, "type" integer, "status" integer, "sighash" text, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_87f2932d4a558d44a2915f849a" ON "transaction" ("timestamp") `)
        await db.query(`CREATE TABLE "trace" ("id" character varying NOT NULL, "transaction_index" integer, "type" character varying(7), "subtraces" integer, "error" text, "action" jsonb, "result" jsonb, "transaction_id" character varying, CONSTRAINT "PK_d55e3146ed1a9769069a83a8044" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_32ac5e9db3720f2a69b517ef5e" ON "trace" ("transaction_id") `)
        await db.query(`ALTER TABLE "trace" ADD CONSTRAINT "FK_32ac5e9db3720f2a69b517ef5e6" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "event_norm"`)
        await db.query(`DROP INDEX "public"."IDX_9399a1351b92b17b633f2a4d88"`)
        await db.query(`DROP INDEX "public"."IDX_815deac0945f896227f308f346"`)
        await db.query(`DROP TABLE "call_norm"`)
        await db.query(`DROP INDEX "public"."IDX_5fc3745dc44160b5563cf88307"`)
        await db.query(`DROP INDEX "public"."IDX_d069b0512be986815a0a41e601"`)
        await db.query(`DROP TABLE "address_mapping"`)
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_87f2932d4a558d44a2915f849a"`)
        await db.query(`DROP TABLE "trace"`)
        await db.query(`DROP INDEX "public"."IDX_32ac5e9db3720f2a69b517ef5e"`)
        await db.query(`ALTER TABLE "trace" DROP CONSTRAINT "FK_32ac5e9db3720f2a69b517ef5e6"`)
    }
}
