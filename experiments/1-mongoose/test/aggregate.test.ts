import consola from "consola";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

require("chai").should();
import { assert } from "chai";
// consola.info(assert);

import { A } from "../src";

describe("aggregate", function () {
  describe("tx with transfers", function () {
    let Tx: any;
    const TxSchema = new mongoose.Schema({
      transfers: [{ from: String, usd: Number }],
    });

    before(async function () {
      const mongod = new MongoMemoryServer();

      const uri = await mongod.getUri();
      const mongoOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
      };

      const connection = await mongoose.createConnection(uri, mongoOpts);
      Tx = connection.model("Tx", TxSchema);
    });

    it("should create without transfers", async function () {
      const tx = await Tx.create({});

      assert.lengthOf(tx.transfers, 0);
    });

    it("should create with transfers", async function () {
      const tx = await Tx.create({
        transfers: [
          { from: "abc", usd: 10 },
          { from: "cde", usd: 20 },
        ],
      });

      assert.lengthOf(tx.transfers, 1);
    });
  });
});
