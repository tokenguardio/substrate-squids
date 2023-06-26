module.exports = class Data1687266260877 {
    name = 'Data1687266260877'

    async up(db) {
        await db.query(`CREATE TABLE "evm_transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "args" jsonb, "transaction_type" character varying(7) NOT NULL, "label" character varying(15) NOT NULL, "fee" numeric, "from" text NOT NULL, "to" text NOT NULL, "transaction_hash" text NOT NULL, CONSTRAINT "PK_5cb059f05ba72ac04ac1cfb3775" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_58aa8d4df7202e469c5835995d" ON "evm_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_60f34f19dc91dfd04f346eacba" ON "evm_transaction" ("transaction_type") `)
        await db.query(`CREATE INDEX "IDX_23b482462473bf231da30e843f" ON "evm_transaction" ("label") `)
        await db.query(`CREATE TABLE "substrate_transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "args" jsonb, "label" character varying(15) NOT NULL, "fee" numeric, "tip" numeric, "from" text NOT NULL, CONSTRAINT "PK_34de898449e2832c9db92960c1f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_043968eb757e5722239a3c0be2" ON "substrate_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_677b4a05fa2e22da71eba05a9c" ON "substrate_transaction" ("name") `)
        await db.query(`CREATE INDEX "IDX_9f087038b728637fceb8c37774" ON "substrate_transaction" ("label") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "evm_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_58aa8d4df7202e469c5835995d"`)
        await db.query(`DROP INDEX "public"."IDX_60f34f19dc91dfd04f346eacba"`)
        await db.query(`DROP INDEX "public"."IDX_23b482462473bf231da30e843f"`)
        await db.query(`DROP TABLE "substrate_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_043968eb757e5722239a3c0be2"`)
        await db.query(`DROP INDEX "public"."IDX_677b4a05fa2e22da71eba05a9c"`)
        await db.query(`DROP INDEX "public"."IDX_9f087038b728637fceb8c37774"`)
    }
}
