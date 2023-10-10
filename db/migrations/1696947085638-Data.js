module.exports = class Data1696947085638 {
    name = 'Data1696947085638'

    async up(db) {
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "gas"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "gas_price"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "max_fee_per_gas"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "max_priority_fee_per_gas"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "nonce"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "chain_id"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "gas_used"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "cumulative_gas_used"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "effective_gas_price"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "status"`)
        await db.query(`ALTER TABLE "transaction" ADD "fee" numeric NOT NULL`)
        await db.query(`ALTER TABLE "transaction" ADD "success" boolean`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "type"`)
        await db.query(`ALTER TABLE "transaction" ADD "type" character varying(7) NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "transaction" ADD "gas" numeric NOT NULL`)
        await db.query(`ALTER TABLE "transaction" ADD "gas_price" numeric NOT NULL`)
        await db.query(`ALTER TABLE "transaction" ADD "max_fee_per_gas" numeric`)
        await db.query(`ALTER TABLE "transaction" ADD "max_priority_fee_per_gas" numeric`)
        await db.query(`ALTER TABLE "transaction" ADD "nonce" integer NOT NULL`)
        await db.query(`ALTER TABLE "transaction" ADD "chain_id" integer`)
        await db.query(`ALTER TABLE "transaction" ADD "gas_used" numeric`)
        await db.query(`ALTER TABLE "transaction" ADD "cumulative_gas_used" numeric`)
        await db.query(`ALTER TABLE "transaction" ADD "effective_gas_price" numeric`)
        await db.query(`ALTER TABLE "transaction" ADD "status" integer`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "fee"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "success"`)
        await db.query(`ALTER TABLE "transaction" ADD "type" integer`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "type"`)
    }
}
