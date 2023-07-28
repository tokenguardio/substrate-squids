module.exports = class Data1690543777233 {
    name = 'Data1690543777233'

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
        await db.query(`CREATE TABLE "substrate_transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "label" character varying(15) NOT NULL, "fee" numeric NOT NULL, "tip" numeric, "from" text, "to" text, "success" boolean NOT NULL, CONSTRAINT "PK_34de898449e2832c9db92960c1f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_043968eb757e5722239a3c0be2" ON "substrate_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_677b4a05fa2e22da71eba05a9c" ON "substrate_transaction" ("name") `)
        await db.query(`CREATE INDEX "IDX_9f087038b728637fceb8c37774" ON "substrate_transaction" ("label") `)
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
        await db.query(`DROP TABLE "substrate_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_043968eb757e5722239a3c0be2"`)
        await db.query(`DROP INDEX "public"."IDX_677b4a05fa2e22da71eba05a9c"`)
        await db.query(`DROP INDEX "public"."IDX_9f087038b728637fceb8c37774"`)
        await db.query(`ALTER TABLE "event_norm" DROP CONSTRAINT "FK_eb16d2b5f399577e7dd72cef2a2"`)
    }
}
