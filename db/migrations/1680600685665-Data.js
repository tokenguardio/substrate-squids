module.exports = class Data1680600685665 {
    name = 'Data1680600685665'

    async up(db) {
        await db.query(`CREATE TABLE "address_mapping" ("id" character varying NOT NULL, "ss58" text NOT NULL, CONSTRAINT "PK_8611a631b9c1187979a08ecb53f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3a046999bc4c3e7c38468ddf80" ON "address_mapping" ("ss58") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "address_mapping"`)
        await db.query(`DROP INDEX "public"."IDX_3a046999bc4c3e7c38468ddf80"`)
    }
}
