module.exports = class Data1696953214924 {
    name = 'Data1696953214924'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "hash" text NOT NULL, "type" character varying(7) NOT NULL, "label" character varying(15) NOT NULL, "from" text NOT NULL, "to" text, "fee" numeric NOT NULL, "value" numeric NOT NULL, "input" text NOT NULL, "deployed_address" text, "success" boolean, "sighash" text, "transaction_index" integer NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_87f2932d4a558d44a2915f849a" ON "transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_19b57c8c3e5a0126c781b2923f" ON "transaction" ("label") `)
        await db.query(`CREATE TABLE "trace" ("id" character varying NOT NULL, "transaction_index" integer, "type" character varying(7), "subtraces" integer, "error" text, "action" jsonb, "result" jsonb, "transaction_id" character varying, CONSTRAINT "PK_d55e3146ed1a9769069a83a8044" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_32ac5e9db3720f2a69b517ef5e" ON "trace" ("transaction_id") `)
        await db.query(`ALTER TABLE "trace" ADD CONSTRAINT "FK_32ac5e9db3720f2a69b517ef5e6" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_87f2932d4a558d44a2915f849a"`)
        await db.query(`DROP INDEX "public"."IDX_19b57c8c3e5a0126c781b2923f"`)
        await db.query(`DROP TABLE "trace"`)
        await db.query(`DROP INDEX "public"."IDX_32ac5e9db3720f2a69b517ef5e"`)
        await db.query(`ALTER TABLE "trace" DROP CONSTRAINT "FK_32ac5e9db3720f2a69b517ef5e6"`)
    }
}
