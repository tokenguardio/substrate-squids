module.exports = class Data1700824631133 {
    name = 'Data1700824631133'

    async up(db) {
        await db.query(`CREATE TABLE "f_token" ("id" character varying NOT NULL, "name" text, "symbol" text, "decimals" integer, CONSTRAINT "PK_da896c08df3022e579355d781b9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_603b3fbd2a6038c5ae2fb820f1" ON "f_token" ("name") `)
        await db.query(`CREATE INDEX "IDX_797b629af41b1005b30650f3fb" ON "f_token" ("symbol") `)
        await db.query(`CREATE TABLE "ft_transfer" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "event_index" integer, "from" text NOT NULL, "to" text NOT NULL, "value" numeric NOT NULL, "transfer_type" character varying(8), "transaction_id" character varying, "token_id" character varying, CONSTRAINT "PK_9197e98e6e5fc3ead382a4b80a3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_a473676829fc0b71efbd7238ba" ON "ft_transfer" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_cdf2e8551012ab2cf3278d3f97" ON "ft_transfer" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_3e5419abdad65174942130f982" ON "ft_transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_2930aa3cebc52be311927fc78d" ON "ft_transfer" ("to") `)
        await db.query(`CREATE INDEX "IDX_3cc72d0b19c7e85d0e64c6da7a" ON "ft_transfer" ("transfer_type") `)
        await db.query(`CREATE INDEX "IDX_41d6913b279f70b31c534bdcc7" ON "ft_transfer" ("token_id") `)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`ALTER TABLE "ft_transfer" ADD CONSTRAINT "FK_a473676829fc0b71efbd7238ba7" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ft_transfer" ADD CONSTRAINT "FK_41d6913b279f70b31c534bdcc75" FOREIGN KEY ("token_id") REFERENCES "f_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "f_token"`)
        await db.query(`DROP INDEX "public"."IDX_603b3fbd2a6038c5ae2fb820f1"`)
        await db.query(`DROP INDEX "public"."IDX_797b629af41b1005b30650f3fb"`)
        await db.query(`DROP TABLE "ft_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_a473676829fc0b71efbd7238ba"`)
        await db.query(`DROP INDEX "public"."IDX_cdf2e8551012ab2cf3278d3f97"`)
        await db.query(`DROP INDEX "public"."IDX_3e5419abdad65174942130f982"`)
        await db.query(`DROP INDEX "public"."IDX_2930aa3cebc52be311927fc78d"`)
        await db.query(`DROP INDEX "public"."IDX_3cc72d0b19c7e85d0e64c6da7a"`)
        await db.query(`DROP INDEX "public"."IDX_41d6913b279f70b31c534bdcc7"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`ALTER TABLE "ft_transfer" DROP CONSTRAINT "FK_a473676829fc0b71efbd7238ba7"`)
        await db.query(`ALTER TABLE "ft_transfer" DROP CONSTRAINT "FK_41d6913b279f70b31c534bdcc75"`)
    }
}
