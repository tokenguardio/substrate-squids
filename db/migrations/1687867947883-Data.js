module.exports = class Data1687867947883 {
    name = 'Data1687867947883'

    async up(db) {
        await db.query(`ALTER TABLE "evm_transaction" ADD "value" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "evm_transaction" DROP COLUMN "value"`)
    }
}
