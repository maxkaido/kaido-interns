"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
chai_1.default.should();
const { assert } = chai_1.default;
const { getBlockNumber } = require("../../");
describe("helpers", function () {
    it("getBlockNumber", async function () {
        const highestBlockNumber = await getBlockNumber();
        assert.isAbove(highestBlockNumber, 12000000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvaW5kZXgudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdEQUF3QjtBQUV4QixjQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsY0FBSSxDQUFDO0FBRXhCLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFN0MsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNsQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsS0FBSztRQUN4QixNQUFNLGtCQUFrQixHQUFHLE1BQU0sY0FBYyxFQUFFLENBQUM7UUFFbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnNvbGEgZnJvbSBcImNvbnNvbGFcIjtcbmltcG9ydCBjaGFpIGZyb20gXCJjaGFpXCI7XG5cbmNoYWkuc2hvdWxkKCk7XG5jb25zdCB7IGFzc2VydCB9ID0gY2hhaTtcblxuY29uc3QgeyBnZXRCbG9ja051bWJlciB9ID0gcmVxdWlyZShcIi4uLy4uL1wiKTtcblxuZGVzY3JpYmUoXCJoZWxwZXJzXCIsIGZ1bmN0aW9uICgpIHtcbiAgaXQoXCJnZXRCbG9ja051bWJlclwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGlnaGVzdEJsb2NrTnVtYmVyID0gYXdhaXQgZ2V0QmxvY2tOdW1iZXIoKTtcbiAgICAvLyBjb25zb2xhLmluZm8oaGlnaGVzdEJsb2NrTnVtYmVyKTtcbiAgICBhc3NlcnQuaXNBYm92ZShoaWdoZXN0QmxvY2tOdW1iZXIsIDEyMDAwMDAwKTtcbiAgfSk7XG59KTtcbiJdfQ==