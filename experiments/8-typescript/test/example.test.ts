import consola from "consola";

require("chai").should();

import { A } from "../src";
import { Bot } from "../src";

it("test A should be A", function () {
  A.should.equal("A");
});

it("Bot constructor requires botToken", function () {
  const botToken = "botToken";
  const bot = new Bot(botToken);
  consola.info(bot);
});
