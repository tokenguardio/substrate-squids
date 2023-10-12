module.exports = class Data1697120307077 {
    name = 'Data1697120307077'

    async up(db) {
        await db.query(`CREATE TABLE "event_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "extrinsic_success" boolean, CONSTRAINT "PK_d33300243feb4679ec112a74a03" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_9399a1351b92b17b633f2a4d88" ON "event_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_815deac0945f896227f308f346" ON "event_norm" ("name") `)
        await db.query(`CREATE TABLE "call_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "success" boolean, "origin" jsonb, CONSTRAINT "PK_e6dee5a463d3dd8993668fb913e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5fc3745dc44160b5563cf88307" ON "call_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d069b0512be986815a0a41e601" ON "call_norm" ("name") `)
        await db.query(`CREATE TABLE "address_mapping" ("id" character varying NOT NULL, "ss58" text, CONSTRAINT "PK_8611a631b9c1187979a08ecb53f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "hash" text NOT NULL, "type" character varying(7) NOT NULL, "label" character varying(15) NOT NULL, "from" text NOT NULL, "to" text, "fee" numeric NOT NULL, "value" numeric NOT NULL, "input" text NOT NULL, "deployed_address" text, "success" boolean, "sighash" text, "transaction_index" integer NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_87f2932d4a558d44a2915f849a" ON "transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_cce9f3db01ff7df5db4d337869" ON "transaction" ("type") `)
        await db.query(`CREATE INDEX "IDX_19b57c8c3e5a0126c781b2923f" ON "transaction" ("label") `)
        await db.query(`CREATE INDEX "IDX_c5244d23a9f09b2e02af18c88c" ON "transaction" ("success") `)
        await db.query(`CREATE TABLE "trace" ("id" character varying NOT NULL, "transaction_index" integer, "type" character varying(7), "subtraces" integer, "error" text, "action" jsonb, "result" jsonb, "transaction_id" character varying, CONSTRAINT "PK_d55e3146ed1a9769069a83a8044" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_32ac5e9db3720f2a69b517ef5e" ON "trace" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_5f22bba058a6a9cdcfd84428e7" ON "trace" ("type") `)
        await db.query(`CREATE TABLE "contract" ("id" character varying NOT NULL, "created_by" text, "transaction_hash" text, "created_timestamp" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c0d4af2370d759adf35f234e28" ON "contract" ("created_by") `)
        await db.query(`CREATE INDEX "IDX_e1fcf2c763cbb978ad6b1f789b" ON "contract" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_7e30a7062d6d02aa37795fae4d" ON "contract" ("created_timestamp") `)
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
        await db.query(`DROP INDEX "public"."IDX_cce9f3db01ff7df5db4d337869"`)
        await db.query(`DROP INDEX "public"."IDX_19b57c8c3e5a0126c781b2923f"`)
        await db.query(`DROP INDEX "public"."IDX_c5244d23a9f09b2e02af18c88c"`)
        await db.query(`DROP TABLE "trace"`)
        await db.query(`DROP INDEX "public"."IDX_32ac5e9db3720f2a69b517ef5e"`)
        await db.query(`DROP INDEX "public"."IDX_5f22bba058a6a9cdcfd84428e7"`)
        await db.query(`DROP TABLE "contract"`)
        await db.query(`DROP INDEX "public"."IDX_c0d4af2370d759adf35f234e28"`)
        await db.query(`DROP INDEX "public"."IDX_e1fcf2c763cbb978ad6b1f789b"`)
        await db.query(`DROP INDEX "public"."IDX_7e30a7062d6d02aa37795fae4d"`)
        await db.query(`ALTER TABLE "trace" DROP CONSTRAINT "FK_32ac5e9db3720f2a69b517ef5e6"`)
    }
}
