const { assertNotNull } = require("@subsquid/substrate-processor");

const dappId = assertNotNull(process.env.DAPP_ID);

module.exports = class Data {
  name = `Data${Date.now()}`;

  async up(db) {
    await db.query(
      `CREATE TABLE "dapp_analytics_${dappId}" ("id" character varying NOT NULL, "call_id" text NOT NULL, "extrinsic_hash" text NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "dapp_id" text NOT NULL, "caller" text, "contract" text NOT NULL, "success" boolean, "type" character varying(5) NOT NULL, "name" text NOT NULL, "value" numeric, "decoded_args" jsonb, CONSTRAINT "PK_${dappId}" PRIMARY KEY ("id"))`
    );
  }

  async down(db) {
    await db.query(`DROP TABLE "dapp_analytics_${dappId}"`);
  }
};
