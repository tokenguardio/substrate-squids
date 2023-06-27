module.exports = class Data1687790295677 {
    name = 'Data1687790295677'

    async up(db) {
        await db.query(`ALTER TABLE "substrate_transaction" ALTER COLUMN "fee" SET NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "substrate_transaction" ALTER COLUMN "fee" DROP NOT NULL`)
    }
}
