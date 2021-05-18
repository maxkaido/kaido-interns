"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
chai_1.default.should();
const { assert } = chai_1.default;
const { getBlockNumber, Kit } = require("../../");
describe("helpers", function () {
    it("getBlockNumber", async function () {
        const highestBlockNumber = await getBlockNumber();
        assert.isAbove(highestBlockNumber, 12000000);
    });
});
describe("Kit", function () {
    const kit = new Kit();
    it("getBlockNumber", async function () {
        const highestBlockNumber = await kit.getBlockNumber();
        assert.isAbove(highestBlockNumber, 12000000);
    });
    it("onceBlock()", function (done) {
        kit.onceBlock((blockNumber) => {
            assert.isAbove(blockNumber, 12000000);
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvaW5kZXgudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdEQUF3QjtBQUV4QixjQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsY0FBSSxDQUFDO0FBRXhCLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWxELFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDbEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEtBQUs7UUFDeEIsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLGNBQWMsRUFBRSxDQUFDO1FBRWxELE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3hCLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxJQUFjO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUU7WUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uc29sYSBmcm9tIFwiY29uc29sYVwiO1xuaW1wb3J0IGNoYWkgZnJvbSBcImNoYWlcIjtcblxuY2hhaS5zaG91bGQoKTtcbmNvbnN0IHsgYXNzZXJ0IH0gPSBjaGFpO1xuXG5jb25zdCB7IGdldEJsb2NrTnVtYmVyLCBLaXQgfSA9IHJlcXVpcmUoXCIuLi8uLi9cIik7XG5cbmRlc2NyaWJlKFwiaGVscGVyc1wiLCBmdW5jdGlvbiAoKSB7XG4gIGl0KFwiZ2V0QmxvY2tOdW1iZXJcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhpZ2hlc3RCbG9ja051bWJlciA9IGF3YWl0IGdldEJsb2NrTnVtYmVyKCk7XG4gICAgLy8gY29uc29sYS5pbmZvKGhpZ2hlc3RCbG9ja051bWJlcik7XG4gICAgYXNzZXJ0LmlzQWJvdmUoaGlnaGVzdEJsb2NrTnVtYmVyLCAxMjAwMDAwMCk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKFwiS2l0XCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qga2l0ID0gbmV3IEtpdCgpO1xuICBpdChcImdldEJsb2NrTnVtYmVyXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoaWdoZXN0QmxvY2tOdW1iZXIgPSBhd2FpdCBraXQuZ2V0QmxvY2tOdW1iZXIoKTtcbiAgICAvLyBjb25zb2xhLmluZm8oaGlnaGVzdEJsb2NrTnVtYmVyKTtcbiAgICBhc3NlcnQuaXNBYm92ZShoaWdoZXN0QmxvY2tOdW1iZXIsIDEyMDAwMDAwKTtcbiAgfSk7XG5cbiAgaXQoXCJvbmNlQmxvY2soKVwiLCBmdW5jdGlvbiAoZG9uZTogRnVuY3Rpb24pIHtcbiAgICBraXQub25jZUJsb2NrKChibG9ja051bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICBhc3NlcnQuaXNBYm92ZShibG9ja051bWJlciwgMTIwMDAwMDApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19