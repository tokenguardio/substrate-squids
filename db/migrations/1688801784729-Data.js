module.exports = class Data1688801784729 {
    name = 'Data1688801784729'

    async up(db) {
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "event_index" DROP NOT NULL`)
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "txn_hash" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "event_index" SET NOT NULL`)
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "txn_hash" SET NOT NULL`)
    }
}
