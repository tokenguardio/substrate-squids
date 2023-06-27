module.exports = class Data1687866709407 {
    name = 'Data1687866709407'

    async up(db) {
        await db.query(`CREATE TABLE "call_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "success" boolean, "origin" jsonb, CONSTRAINT "PK_e6dee5a463d3dd8993668fb913e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5fc3745dc44160b5563cf88307" ON "call_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d069b0512be986815a0a41e601" ON "call_norm" ("name") `)
        await db.query(`CREATE TABLE "event_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "extrinsic_success" boolean, "call_id" character varying, CONSTRAINT "PK_d33300243feb4679ec112a74a03" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_eb16d2b5f399577e7dd72cef2a" ON "event_norm" ("call_id") `)
        await db.query(`CREATE INDEX "IDX_9399a1351b92b17b633f2a4d88" ON "event_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_815deac0945f896227f308f346" ON "event_norm" ("name") `)
        await db.query(`CREATE TABLE "address_mapping" ("id" character varying NOT NULL, "ss58" text NOT NULL, CONSTRAINT "PK_8611a631b9c1187979a08ecb53f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3a046999bc4c3e7c38468ddf80" ON "address_mapping" ("ss58") `)
        await db.query(`CREATE TABLE "evm_transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "args" jsonb, "transaction_type" character varying(7) NOT NULL, "label" character varying(15) NOT NULL, "fee" numeric NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "value" numeric, "transaction_hash" text NOT NULL, "status" text NOT NULL, "status_reason" text NOT NULL, CONSTRAINT "PK_5cb059f05ba72ac04ac1cfb3775" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_58aa8d4df7202e469c5835995d" ON "evm_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_60f34f19dc91dfd04f346eacba" ON "evm_transaction" ("transaction_type") `)
        await db.query(`CREATE INDEX "IDX_23b482462473bf231da30e843f" ON "evm_transaction" ("label") `)
        await db.query(`CREATE TABLE "substrate_transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "label" character varying(15) NOT NULL, "fee" numeric NOT NULL, "tip" numeric, "from" text, "to" text, "success" boolean NOT NULL, CONSTRAINT "PK_34de898449e2832c9db92960c1f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_043968eb757e5722239a3c0be2" ON "substrate_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_677b4a05fa2e22da71eba05a9c" ON "substrate_transaction" ("name") `)
        await db.query(`CREATE INDEX "IDX_9f087038b728637fceb8c37774" ON "substrate_transaction" ("label") `)
        await db.query(`CREATE TABLE "evm_contract" ("id" character varying NOT NULL, "creator" text NOT NULL, "transaction_hash" text NOT NULL, "created_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_b96d2e55892972f43bab117bf13" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2e3832559a984f397b0881e9ab" ON "evm_contract" ("creator") `)
        await db.query(`CREATE INDEX "IDX_8572af99585f9c25ef881a5496" ON "evm_contract" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_3cb5d00f16339ef94ad3e71cd1" ON "evm_contract" ("created_timestamp") `)
        await db.query(`ALTER TABLE "event_norm" ADD CONSTRAINT "FK_eb16d2b5f399577e7dd72cef2a2" FOREIGN KEY ("call_id") REFERENCES "call_norm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "call_norm"`)
        await db.query(`DROP INDEX "public"."IDX_5fc3745dc44160b5563cf88307"`)
        await db.query(`DROP INDEX "public"."IDX_d069b0512be986815a0a41e601"`)
        await db.query(`DROP TABLE "event_norm"`)
        await db.query(`DROP INDEX "public"."IDX_eb16d2b5f399577e7dd72cef2a"`)
        await db.query(`DROP INDEX "public"."IDX_9399a1351b92b17b633f2a4d88"`)
        await db.query(`DROP INDEX "public"."IDX_815deac0945f896227f308f346"`)
        await db.query(`DROP TABLE "address_mapping"`)
        await db.query(`DROP INDEX "public"."IDX_3a046999bc4c3e7c38468ddf80"`)
        await db.query(`DROP TABLE "evm_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_58aa8d4df7202e469c5835995d"`)
        await db.query(`DROP INDEX "public"."IDX_60f34f19dc91dfd04f346eacba"`)
        await db.query(`DROP INDEX "public"."IDX_23b482462473bf231da30e843f"`)
        await db.query(`DROP TABLE "substrate_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_043968eb757e5722239a3c0be2"`)
        await db.query(`DROP INDEX "public"."IDX_677b4a05fa2e22da71eba05a9c"`)
        await db.query(`DROP INDEX "public"."IDX_9f087038b728637fceb8c37774"`)
        await db.query(`DROP TABLE "evm_contract"`)
        await db.query(`DROP INDEX "public"."IDX_2e3832559a984f397b0881e9ab"`)
        await db.query(`DROP INDEX "public"."IDX_8572af99585f9c25ef881a5496"`)
        await db.query(`DROP INDEX "public"."IDX_3cb5d00f16339ef94ad3e71cd1"`)
        await db.query(`ALTER TABLE "event_norm" DROP CONSTRAINT "FK_eb16d2b5f399577e7dd72cef2a2"`)
    }
}
