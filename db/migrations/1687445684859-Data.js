module.exports = class Data1687445684859 {
    name = 'Data1687445684859'

    async up(db) {
        await db.query(`ALTER TABLE "evm_transaction" ADD "status" text NOT NULL`)
        await db.query(`ALTER TABLE "evm_transaction" ADD "status_reason" text NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "evm_transaction" DROP COLUMN "status"`)
        await db.query(`ALTER TABLE "evm_transaction" DROP COLUMN "status_reason"`)
    }
}
