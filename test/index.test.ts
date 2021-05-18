import consola from "consola";
import chai from "chai";

chai.should();
const { assert } = chai;

const { getBlockNumber, Kit } = require("../../");

describe("helpers", function () {
  it("getBlockNumber", async function () {
    const highestBlockNumber = await getBlockNumber();
    // consola.info(highestBlockNumber);
    assert.isAbove(highestBlockNumber, 12000000);
  });
});

describe("Kit", function () {
  const kit = new Kit();
  it("getBlockNumber", async function () {
    const highestBlockNumber = await kit.getBlockNumber();
    // consola.info(highestBlockNumber);
    assert.isAbove(highestBlockNumber, 12000000);
  });

  it("onceBlock()", function (done: Function) {
    kit.onceBlock((blockNumber: number) => {
      assert.isAbove(blockNumber, 12000000);
      done();
    });
  });
});
