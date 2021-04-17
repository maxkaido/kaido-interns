"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consola_1 = __importDefault(require("consola"));
require("chai").should();
const src_1 = require("../src");
const src_2 = require("../src");
it("test A should be A", function () {
    src_1.A.should.equal("A");
});
it("Bot constructor requires botToken", function () {
    const botToken = "botToken";
    const bot = new src_2.Bot(botToken);
    consola_1.default.info(bot);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9leGFtcGxlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFFOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXpCLGdDQUEyQjtBQUMzQixnQ0FBNkI7QUFFN0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFO0lBQ3ZCLE9BQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFO0lBQ3RDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zb2xhIGZyb20gXCJjb25zb2xhXCI7XG5cbnJlcXVpcmUoXCJjaGFpXCIpLnNob3VsZCgpO1xuXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uL3NyY1wiO1xuaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uL3NyY1wiO1xuXG5pdChcInRlc3QgQSBzaG91bGQgYmUgQVwiLCBmdW5jdGlvbiAoKSB7XG4gIEEuc2hvdWxkLmVxdWFsKFwiQVwiKTtcbn0pO1xuXG5pdChcIkJvdCBjb25zdHJ1Y3RvciByZXF1aXJlcyBib3RUb2tlblwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJvdFRva2VuID0gXCJib3RUb2tlblwiO1xuICBjb25zdCBib3QgPSBuZXcgQm90KGJvdFRva2VuKTtcbiAgY29uc29sYS5pbmZvKGJvdCk7XG59KTtcbiJdfQ==