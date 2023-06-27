module.exports = class Data1687791985860 {
    name = 'Data1687791985860'

    async up(db) {
        await db.query(`ALTER TABLE "substrate_transaction" ALTER COLUMN "from" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "substrate_transaction" ALTER COLUMN "from" SET NOT NULL`)
    }
}
