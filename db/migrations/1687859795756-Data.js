module.exports = class Data1687859795756 {
    name = 'Data1687859795756'

    async up(db) {
        await db.query(`ALTER TABLE "evm_contract" ADD "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL`)
        await db.query(`CREATE INDEX "IDX_04aca6dd92e1bd36287d55b819" ON "evm_contract" ("timestamp") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "evm_contract" DROP COLUMN "timestamp"`)
        await db.query(`DROP INDEX "public"."IDX_04aca6dd92e1bd36287d55b819"`)
    }
}
