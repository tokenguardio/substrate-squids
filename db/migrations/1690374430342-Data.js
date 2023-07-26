module.exports = class Data1690374430342 {
    name = 'Data1690374430342'

    async up(db) {
        await db.query(`CREATE TABLE "wasm_contract_metadata" ("id" character varying NOT NULL, "metadata" jsonb NOT NULL, CONSTRAINT "PK_3578515fa2a7b6b1ca17ad5db90" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "wasm_contract_event" ("id" character varying NOT NULL, "call_id" text NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "contract" text NOT NULL, "event_name" text NOT NULL, "event_args" jsonb, CONSTRAINT "PK_90b157f269c5a746ae9d790501b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b17866e6a4ed9ec78dce5b1f64" ON "wasm_contract_event" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_a844186a346897f62bd357eb88" ON "wasm_contract_event" ("contract") `)
        await db.query(`CREATE INDEX "IDX_b64887307839013037c849a74b" ON "wasm_contract_event" ("event_name") `)
        await db.query(`CREATE TABLE "wasm_contract_message" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "dest" text NOT NULL, "value" numeric NOT NULL, "method_name" text NOT NULL, "message_args" jsonb, "call_args" jsonb NOT NULL, "call_success" boolean NOT NULL, CONSTRAINT "PK_e2330990de1a0583be7aad43bae" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_904c0ebc6768d7e3fafb54f41d" ON "wasm_contract_message" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_65cde4a7be6843807553ce5347" ON "wasm_contract_message" ("dest") `)
        await db.query(`CREATE INDEX "IDX_7390ba8a41aac2d9dc1093b5ce" ON "wasm_contract_message" ("method_name") `)
        await db.query(`CREATE TABLE "wasm_contract_constructor" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "deployer" text NOT NULL, "contract" text NOT NULL, "value" numeric NOT NULL, "method_name" text NOT NULL, "constructor_args" jsonb, "call_name" text NOT NULL, "call_args" jsonb NOT NULL, "call_success" boolean NOT NULL, CONSTRAINT "PK_bb5954bdd956d90b944bb21173f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1750df1b809a7d284f4b29dc60" ON "wasm_contract_constructor" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_ff21aaf1a07efa3ad0e80786c4" ON "wasm_contract_constructor" ("deployer") `)
        await db.query(`CREATE INDEX "IDX_9539d17d8435a19239285c3e3a" ON "wasm_contract_constructor" ("contract") `)
        await db.query(`CREATE TABLE "wasm_contract_decoding_error" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "contract" text NOT NULL, "type" character varying(11) NOT NULL, "error_message" text NOT NULL, "name" text NOT NULL, "args" jsonb, CONSTRAINT "PK_bab19f16f70956306db64e8c744" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ca14e8f6fef21c7081f34d491b" ON "wasm_contract_decoding_error" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_9d21d43f4d1f9c4d3a77036829" ON "wasm_contract_decoding_error" ("contract") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "wasm_contract_metadata"`)
        await db.query(`DROP TABLE "wasm_contract_event"`)
        await db.query(`DROP INDEX "public"."IDX_b17866e6a4ed9ec78dce5b1f64"`)
        await db.query(`DROP INDEX "public"."IDX_a844186a346897f62bd357eb88"`)
        await db.query(`DROP INDEX "public"."IDX_b64887307839013037c849a74b"`)
        await db.query(`DROP TABLE "wasm_contract_message"`)
        await db.query(`DROP INDEX "public"."IDX_904c0ebc6768d7e3fafb54f41d"`)
        await db.query(`DROP INDEX "public"."IDX_65cde4a7be6843807553ce5347"`)
        await db.query(`DROP INDEX "public"."IDX_7390ba8a41aac2d9dc1093b5ce"`)
        await db.query(`DROP TABLE "wasm_contract_constructor"`)
        await db.query(`DROP INDEX "public"."IDX_1750df1b809a7d284f4b29dc60"`)
        await db.query(`DROP INDEX "public"."IDX_ff21aaf1a07efa3ad0e80786c4"`)
        await db.query(`DROP INDEX "public"."IDX_9539d17d8435a19239285c3e3a"`)
        await db.query(`DROP TABLE "wasm_contract_decoding_error"`)
        await db.query(`DROP INDEX "public"."IDX_ca14e8f6fef21c7081f34d491b"`)
        await db.query(`DROP INDEX "public"."IDX_9d21d43f4d1f9c4d3a77036829"`)
    }
}
