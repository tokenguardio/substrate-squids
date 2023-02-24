module.exports = class Data1677254417985 {
    name = 'Data1677254417985'

    async up(db) {
        await db.query(`CREATE TABLE "event_norm" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "extrinsic_success" boolean, CONSTRAINT "PK_d33300243feb4679ec112a74a03" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_9399a1351b92b17b633f2a4d88" ON "event_norm" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_815deac0945f896227f308f346" ON "event_norm" ("name") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "event_norm"`)
        await db.query(`DROP INDEX "public"."IDX_9399a1351b92b17b633f2a4d88"`)
        await db.query(`DROP INDEX "public"."IDX_815deac0945f896227f308f346"`)
    }
}
