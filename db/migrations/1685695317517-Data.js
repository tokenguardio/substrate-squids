module.exports = class Data1685695317517 {
    name = 'Data1685695317517'

    async up(db) {
        await db.query(`ALTER TABLE "event_norm" ADD "call_id" character varying`)
        await db.query(`CREATE INDEX "IDX_eb16d2b5f399577e7dd72cef2a" ON "event_norm" ("call_id") `)
        await db.query(`ALTER TABLE "event_norm" ADD CONSTRAINT "FK_eb16d2b5f399577e7dd72cef2a2" FOREIGN KEY ("call_id") REFERENCES "call_norm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "event_norm" DROP COLUMN "call_id"`)
        await db.query(`DROP INDEX "public"."IDX_eb16d2b5f399577e7dd72cef2a"`)
        await db.query(`ALTER TABLE "event_norm" DROP CONSTRAINT "FK_eb16d2b5f399577e7dd72cef2a2"`)
    }
}
