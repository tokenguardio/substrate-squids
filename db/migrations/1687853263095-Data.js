module.exports = class Data1687853263095 {
    name = 'Data1687853263095'

    async up(db) {
        await db.query(`ALTER TABLE "substrate_transaction" ADD "success" boolean NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "substrate_transaction" DROP COLUMN "success"`)
    }
}
