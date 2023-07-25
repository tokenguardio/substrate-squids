module.exports = class Data1690295838450 {
    name = 'Data1690295838450'

    async up(db) {
        await db.query(`CREATE TABLE "wasm_contract_metadata" ("id" character varying NOT NULL, "metadata" jsonb NOT NULL, CONSTRAINT "PK_3578515fa2a7b6b1ca17ad5db90" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "wasm_contract_event" ("id" character varying NOT NULL, "call_id" text NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "contract" text NOT NULL, "event_name" text NOT NULL, "event_args" jsonb, CONSTRAINT "PK_90b157f269c5a746ae9d790501b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b17866e6a4ed9ec78dce5b1f64" ON "wasm_contract_event" ("timestamp") `)
        await db.query(`CREATE TABLE "wasm_contract_message" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "call_args" jsonb NOT NULL, "call_success" boolean NOT NULL, "dest" text NOT NULL, "value" numeric NOT NULL, "method_name" text NOT NULL, "message_args" jsonb, CONSTRAINT "PK_e2330990de1a0583be7aad43bae" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_904c0ebc6768d7e3fafb54f41d" ON "wasm_contract_message" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "wasm_contract_metadata"`)
        await db.query(`DROP TABLE "wasm_contract_event"`)
        await db.query(`DROP INDEX "public"."IDX_b17866e6a4ed9ec78dce5b1f64"`)
        await db.query(`DROP TABLE "wasm_contract_message"`)
        await db.query(`DROP INDEX "public"."IDX_904c0ebc6768d7e3fafb54f41d"`)
    }
}
