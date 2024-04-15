module.exports = class Data1688646436242 {
    name = 'Data1688646436242'

    async up(db) {
        await db.query(`CREATE TABLE "f_token" ("id" character varying NOT NULL, "name" text, "symbol" text, "decimals" integer, CONSTRAINT "PK_da896c08df3022e579355d781b9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_603b3fbd2a6038c5ae2fb820f1" ON "f_token" ("name") `)
        await db.query(`CREATE INDEX "IDX_797b629af41b1005b30650f3fb" ON "f_token" ("symbol") `)
        await db.query(`CREATE TABLE "ft_transfer" ("id" character varying NOT NULL, "call_id" text, "block_number" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "event_index" integer NOT NULL, "txn_hash" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "amount" numeric, "transfer_type" character varying(8), "token" text NOT NULL, CONSTRAINT "PK_9197e98e6e5fc3ead382a4b80a3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_848de4fc3add5493bf6a57db46" ON "ft_transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_181fe3fdc1858001910caa6a29" ON "ft_transfer" ("amount") `)
        await db.query(`CREATE INDEX "IDX_3cc72d0b19c7e85d0e64c6da7a" ON "ft_transfer" ("transfer_type") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "f_token"`)
        await db.query(`DROP INDEX "public"."IDX_603b3fbd2a6038c5ae2fb820f1"`)
        await db.query(`DROP INDEX "public"."IDX_797b629af41b1005b30650f3fb"`)
        await db.query(`DROP TABLE "ft_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_848de4fc3add5493bf6a57db46"`)
        await db.query(`DROP INDEX "public"."IDX_181fe3fdc1858001910caa6a29"`)
        await db.query(`DROP INDEX "public"."IDX_3cc72d0b19c7e85d0e64c6da7a"`)
    }
}
