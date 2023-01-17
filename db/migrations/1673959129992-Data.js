module.exports = class Data1673959129992 {
    name = 'Data1673959129992'

    async up(db) {
        await db.query(`ALTER TABLE "balances_pallet" DROP CONSTRAINT "FK_0675fff82fe581dad3d7a4ab908"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP CONSTRAINT "FK_3b1548b39e6e0e93a1345d0fe68"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP CONSTRAINT "FK_4b3252806a160752b5816ad528e"`)
        await db.query(`DROP INDEX "public"."IDX_0675fff82fe581dad3d7a4ab90"`)
        await db.query(`DROP INDEX "public"."IDX_3b1548b39e6e0e93a1345d0fe6"`)
        await db.query(`DROP INDEX "public"."IDX_4b3252806a160752b5816ad528"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "index_in_block"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "phase"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "pos"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "block_id"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "extrinsic_id"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "call_id"`)
        await db.query(`ALTER TABLE "balances_pallet" ADD "event_id" character varying`)
        await db.query(`CREATE INDEX "IDX_bbd6c876d85483e0055c931088" ON "balances_pallet" ("event_id") `)
        await db.query(`ALTER TABLE "balances_pallet" ADD CONSTRAINT "FK_bbd6c876d85483e0055c9310885" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "balances_pallet" ADD CONSTRAINT "FK_0675fff82fe581dad3d7a4ab908" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "balances_pallet" ADD CONSTRAINT "FK_3b1548b39e6e0e93a1345d0fe68" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "balances_pallet" ADD CONSTRAINT "FK_4b3252806a160752b5816ad528e" FOREIGN KEY ("call_id") REFERENCES "call"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`CREATE INDEX "IDX_0675fff82fe581dad3d7a4ab90" ON "balances_pallet" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_3b1548b39e6e0e93a1345d0fe6" ON "balances_pallet" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_4b3252806a160752b5816ad528" ON "balances_pallet" ("call_id") `)
        await db.query(`ALTER TABLE "balances_pallet" ADD "index_in_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "balances_pallet" ADD "phase" text NOT NULL`)
        await db.query(`ALTER TABLE "balances_pallet" ADD "pos" integer NOT NULL`)
        await db.query(`ALTER TABLE "balances_pallet" ADD "block_id" character varying`)
        await db.query(`ALTER TABLE "balances_pallet" ADD "extrinsic_id" character varying`)
        await db.query(`ALTER TABLE "balances_pallet" ADD "call_id" character varying`)
        await db.query(`ALTER TABLE "balances_pallet" DROP COLUMN "event_id"`)
        await db.query(`DROP INDEX "public"."IDX_bbd6c876d85483e0055c931088"`)
        await db.query(`ALTER TABLE "balances_pallet" DROP CONSTRAINT "FK_bbd6c876d85483e0055c9310885"`)
    }
}
