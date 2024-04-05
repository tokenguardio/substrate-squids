module.exports = class Data1712332277937 {
    name = 'Data1712332277937'

    async up(db) {
        await db.query(`CREATE TABLE "wasm_contract_abi" ("id" character varying NOT NULL, "dapp_name" text NOT NULL, "abi" jsonb NOT NULL, CONSTRAINT "PK_4a938f3f82d0a85a20877451a4b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "substrate_extrinsic" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "extrinsic_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "fee" numeric NOT NULL, "tip" numeric, "success" boolean NOT NULL, CONSTRAINT "PK_a4c7ce64007d5d29f412c071373" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_edea521b233747ee11ef03662c" ON "substrate_extrinsic" ("timestamp") `)
        await db.query(`CREATE TABLE "dapp_activity" ("id" character varying NOT NULL, "call_id" text NOT NULL, "extrinsic_hash" text NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "dapp_name" text NOT NULL, "caller" text, "contract" text NOT NULL, "success" boolean, "type" character varying(5) NOT NULL, "name" text NOT NULL, "value" numeric, "decoded_args" jsonb, "extrinsic_id" character varying, CONSTRAINT "PK_7fcef44cd298cda4cd2b2f5eca4" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f8e88785ab31a3fe21dcc34ecf" ON "dapp_activity" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_bbc8f48cf193b5360471afeb26" ON "dapp_activity" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d663459b6d7c09a17c79e0259b" ON "dapp_activity" ("dapp_name") `)
        await db.query(`CREATE INDEX "IDX_2eb94a2ea7c9c011b49a732dee" ON "dapp_activity" ("caller") `)
        await db.query(`CREATE INDEX "IDX_15f2bdeffdc6f56ff82467ecec" ON "dapp_activity" ("contract") `)
        await db.query(`CREATE INDEX "IDX_0a9c6012b64aedc512d172f98e" ON "dapp_activity" ("success") `)
        await db.query(`CREATE INDEX "IDX_39706366cdb320780fb0aec102" ON "dapp_activity" ("name") `)
        await db.query(`ALTER TABLE "dapp_activity" ADD CONSTRAINT "FK_f8e88785ab31a3fe21dcc34ecf4" FOREIGN KEY ("extrinsic_id") REFERENCES "substrate_extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "wasm_contract_abi"`)
        await db.query(`DROP TABLE "substrate_extrinsic"`)
        await db.query(`DROP INDEX "public"."IDX_edea521b233747ee11ef03662c"`)
        await db.query(`DROP TABLE "dapp_activity"`)
        await db.query(`DROP INDEX "public"."IDX_f8e88785ab31a3fe21dcc34ecf"`)
        await db.query(`DROP INDEX "public"."IDX_bbc8f48cf193b5360471afeb26"`)
        await db.query(`DROP INDEX "public"."IDX_d663459b6d7c09a17c79e0259b"`)
        await db.query(`DROP INDEX "public"."IDX_2eb94a2ea7c9c011b49a732dee"`)
        await db.query(`DROP INDEX "public"."IDX_15f2bdeffdc6f56ff82467ecec"`)
        await db.query(`DROP INDEX "public"."IDX_0a9c6012b64aedc512d172f98e"`)
        await db.query(`DROP INDEX "public"."IDX_39706366cdb320780fb0aec102"`)
        await db.query(`ALTER TABLE "dapp_activity" DROP CONSTRAINT "FK_f8e88785ab31a3fe21dcc34ecf4"`)
    }
}
