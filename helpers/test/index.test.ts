import consola from "consola";
import chai from "chai";

chai.should();
const { assert } = chai;

const { getBlockNumber } = require("../../");

describe("helpers", function () {
  it("getBlockNumber", async function () {
    const highestBlockNumber = await getBlockNumber();
    // consola.info(highestBlockNumber);
    assert.isAbove(highestBlockNumber, 12000000);
  });
});
