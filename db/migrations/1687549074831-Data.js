module.exports = class Data1687549074831 {
    name = 'Data1687549074831'

    async up(db) {
        await db.query(`CREATE TABLE "evm_contract" ("id" character varying NOT NULL, "creator" text NOT NULL, "transaction_hash" text NOT NULL, CONSTRAINT "PK_b96d2e55892972f43bab117bf13" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2e3832559a984f397b0881e9ab" ON "evm_contract" ("creator") `)
        await db.query(`CREATE INDEX "IDX_8572af99585f9c25ef881a5496" ON "evm_contract" ("transaction_hash") `)
        await db.query(`ALTER TABLE "evm_transaction" ALTER COLUMN "fee" SET NOT NULL`)
    }

    async down(db) {
        await db.query(`DROP TABLE "evm_contract"`)
        await db.query(`DROP INDEX "public"."IDX_2e3832559a984f397b0881e9ab"`)
        await db.query(`DROP INDEX "public"."IDX_8572af99585f9c25ef881a5496"`)
        await db.query(`ALTER TABLE "evm_transaction" ALTER COLUMN "fee" DROP NOT NULL`)
    }
}
