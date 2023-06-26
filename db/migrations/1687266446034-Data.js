module.exports = class Data1687266446034 {
    name = 'Data1687266446034'

    async up(db) {
        await db.query(`ALTER TABLE "substrate_transaction" ADD "to" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "substrate_transaction" DROP COLUMN "to"`)
    }
}
