import consola from "consola";

require("chai").should();

import { Bot } from "../src";

it("test Bot should exist", function () {
  Bot.should.exist;
});
