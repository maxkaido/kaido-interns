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
      dexes: [String],
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

    it("should create tx without transfers", async function () {
      const tx = await Tx.create({});

      assert.lengthOf(tx.transfers, 0);
    });

    it("should create tx with transfers", async function () {
      const tx = await Tx.create({
        transfers: [
          { from: "a", usd: 1 },
          { from: "b", usd: 2 },
        ],
      });

      assert.lengthOf(tx.transfers, 2);
    });

    it("push() should add new transfers to the end", async function () {
      let tx = await Tx.create({
        transfers: [{ from: "a", usd: 1 }],
      });

      tx.transfers.push({ from: "b", usd: 2 });
      await tx.save();
      tx = await Tx.findById(tx.id);
      assert.lengthOf(tx.transfers, 2);
      tx.transfers[0].from.should.equal("a");
      tx.transfers[1].from.should.equal("b");
    });

    it("unshift() should add new transfers to the end", async function () {
      let tx = await Tx.create({
        transfers: [{ from: "a", usd: 1 }],
      });

      tx.transfers.unshift({ from: "b", usd: 2 });
      await tx.save();
      tx = await Tx.findById(tx.id);
      assert.lengthOf(tx.transfers, 2);
      tx.transfers[0].from.should.equal("b");
      tx.transfers[1].from.should.equal("a");
    });

    it("addToSet() should distinct primitives", async function () {
      let tx = await Tx.create({
        dexes: ["dex1"],
      });

      tx.dexes.addToSet("dex1");
      await tx.save();
      tx = await Tx.findById(tx.id);
      assert.lengthOf(tx.dexes, 1);
    });
    it("addToSet() should not distinct objects with props", async function () {
      let tx = await Tx.create({
        transfers: [{ from: "a", usd: 1 }],
      });

      tx.transfers.addToSet({ from: "a", usd: 2 });
      tx.transfers.addToSet({ from: "a", usd: 2 });
      await tx.save();
      tx = await Tx.findById(tx.id);
      assert.lengthOf(tx.transfers, 3);
    });
  });
});
