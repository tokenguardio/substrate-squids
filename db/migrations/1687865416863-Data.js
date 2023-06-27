module.exports = class Data1687865416863 {
    name = 'Data1687865416863'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_04aca6dd92e1bd36287d55b819"`)
        await db.query(`ALTER TABLE "evm_contract" RENAME COLUMN "timestamp" TO "created_timestamp"`)
        await db.query(`CREATE INDEX "IDX_3cb5d00f16339ef94ad3e71cd1" ON "evm_contract" ("created_timestamp") `)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_04aca6dd92e1bd36287d55b819" ON "evm_contract" ("timestamp") `)
        await db.query(`ALTER TABLE "evm_contract" RENAME COLUMN "created_timestamp" TO "timestamp"`)
        await db.query(`DROP INDEX "public"."IDX_3cb5d00f16339ef94ad3e71cd1"`)
    }
}
