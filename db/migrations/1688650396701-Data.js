module.exports = class Data1688650396701 {
    name = 'Data1688650396701'

    async up(db) {
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "from" DROP NOT NULL`)
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "to" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "from" SET NOT NULL`)
        await db.query(`ALTER TABLE "ft_transfer" ALTER COLUMN "to" SET NOT NULL`)
    }
}
