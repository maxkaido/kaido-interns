"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
require("chai").should();
const chai_1 = require("chai");
describe("aggregate", function () {
    describe("tx with transfers", function () {
        let Tx;
        const TxSchema = new mongoose_1.default.Schema({
            transfers: [{ from: String, usd: Number }],
        });
        before(async function () {
            const mongod = new mongodb_memory_server_1.MongoMemoryServer();
            const uri = await mongod.getUri();
            const mongoOpts = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            };
            const connection = await mongoose_1.default.createConnection(uri, mongoOpts);
            Tx = connection.model("Tx", TxSchema);
        });
        it("should create without transfers", async function () {
            const tx = await Tx.create({});
            chai_1.assert.lengthOf(tx.transfers, 0);
        });
        it("should create with transfers", async function () {
            const tx = await Tx.create({
                transfers: [
                    { from: "abc", usd: 10 },
                    { from: "cde", usd: 20 },
                ],
            });
            chai_1.assert.lengthOf(tx.transfers, 1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2FnZ3JlZ2F0ZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0RBQWdDO0FBQ2hDLGlFQUEwRDtBQUUxRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDekIsK0JBQThCO0FBSzlCLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1FBQzVCLElBQUksRUFBTyxDQUFDO1FBQ1osTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQzNDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxLQUFLO1lBQ1YsTUFBTSxNQUFNLEdBQUcsSUFBSSx5Q0FBaUIsRUFBRSxDQUFDO1lBRXZDLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xDLE1BQU0sU0FBUyxHQUFHO2dCQUNoQixlQUFlLEVBQUUsSUFBSTtnQkFDckIsa0JBQWtCLEVBQUUsSUFBSTthQUd6QixDQUFDO1lBRUYsTUFBTSxVQUFVLEdBQUcsTUFBTSxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNuRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsS0FBSztZQUN6QyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0IsYUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEtBQUs7WUFDdEMsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN6QixTQUFTLEVBQUU7b0JBQ1QsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7b0JBQ3hCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2lCQUN6QjthQUNGLENBQUMsQ0FBQztZQUVILGFBQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uc29sYSBmcm9tIFwiY29uc29sYVwiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgTW9uZ29NZW1vcnlTZXJ2ZXIgfSBmcm9tIFwibW9uZ29kYi1tZW1vcnktc2VydmVyXCI7XG5cbnJlcXVpcmUoXCJjaGFpXCIpLnNob3VsZCgpO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcImNoYWlcIjtcbi8vIGNvbnNvbGEuaW5mbyhhc3NlcnQpO1xuXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uL3NyY1wiO1xuXG5kZXNjcmliZShcImFnZ3JlZ2F0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gIGRlc2NyaWJlKFwidHggd2l0aCB0cmFuc2ZlcnNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBUeDogYW55O1xuICAgIGNvbnN0IFR4U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICB0cmFuc2ZlcnM6IFt7IGZyb206IFN0cmluZywgdXNkOiBOdW1iZXIgfV0sXG4gICAgfSk7XG5cbiAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbW9uZ29kID0gbmV3IE1vbmdvTWVtb3J5U2VydmVyKCk7XG5cbiAgICAgIGNvbnN0IHVyaSA9IGF3YWl0IG1vbmdvZC5nZXRVcmkoKTtcbiAgICAgIGNvbnN0IG1vbmdvT3B0cyA9IHtcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICAgIC8vIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICAvLyB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBtb25nb29zZS5jcmVhdGVDb25uZWN0aW9uKHVyaSwgbW9uZ29PcHRzKTtcbiAgICAgIFR4ID0gY29ubmVjdGlvbi5tb2RlbChcIlR4XCIsIFR4U2NoZW1hKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGNyZWF0ZSB3aXRob3V0IHRyYW5zZmVyc1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IFR4LmNyZWF0ZSh7fSk7XG5cbiAgICAgIGFzc2VydC5sZW5ndGhPZih0eC50cmFuc2ZlcnMsIDApO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgY3JlYXRlIHdpdGggdHJhbnNmZXJzXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgVHguY3JlYXRlKHtcbiAgICAgICAgdHJhbnNmZXJzOiBbXG4gICAgICAgICAgeyBmcm9tOiBcImFiY1wiLCB1c2Q6IDEwIH0sXG4gICAgICAgICAgeyBmcm9tOiBcImNkZVwiLCB1c2Q6IDIwIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0Lmxlbmd0aE9mKHR4LnRyYW5zZmVycywgMSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=