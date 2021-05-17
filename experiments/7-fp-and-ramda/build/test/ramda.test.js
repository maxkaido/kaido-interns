"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consola_1 = __importDefault(require("consola"));
const ramda_1 = require("ramda");
require("chai").should();
const upperAndReverseFirstName = (user) => user.firstName.toUpperCase().split("").reverse().join("");
const upperAndReverseFirstNames = (users) => users.map(upperAndReverseFirstName);
const upperAndReverseFirstNamesFP = ramda_1.map(upperAndReverseFirstName);
describe("ramda", function () {
    it("map", function () {
        const users = [
            {
                firstName: "Bobo",
                lastName: "Flakes",
            },
            {
                firstName: "Lawrence",
                lastName: "Shilling",
            },
            {
                firstName: "Anon",
                lastName: "User",
            },
        ];
        const result = upperAndReverseFirstNames(users);
        consola_1.default.debug({ result });
        const resultFP = upperAndReverseFirstNamesFP(users);
        consola_1.default.debug({ resultFP });
        result.should.deep.equal(resultFP);
    });
    describe("curried and point-free", function () {
        it("description", function () {
            const countBobos = (sentence) => /bobo/gi.test(sentence);
            countBobos("bobob").should.ok;
            countBobos("bbob").should.not.ok;
            const countBobosFP = ramda_1.test(/bobo/gi);
            countBobosFP("bobob").should.ok;
            countBobosFP("bbob").should.not.ok;
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFtZGEudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvcmFtZGEudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixpQ0FBeUM7QUFFekMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXpCLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFNUQsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN0QyxNQUFNLDJCQUEyQixHQUFHLFdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRWxFLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDaEIsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUNSLE1BQU0sS0FBSyxHQUFHO1lBQ1o7Z0JBQ0UsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLFVBQVU7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2FBQ3JCO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2FBQ2pCO1NBQ0YsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELGlCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUUxQixNQUFNLFFBQVEsR0FBRywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxpQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLHdCQUF3QixFQUFFO1FBQ2pDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFJaEIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLFlBQVksR0FBRyxZQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDaEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zb2xhIGZyb20gXCJjb25zb2xhXCI7XG5pbXBvcnQgeyBtYXAsIGN1cnJ5LCB0ZXN0IH0gZnJvbSBcInJhbWRhXCI7XG5cbnJlcXVpcmUoXCJjaGFpXCIpLnNob3VsZCgpO1xuXG5jb25zdCB1cHBlckFuZFJldmVyc2VGaXJzdE5hbWUgPSAodXNlcjogYW55KSA9PlxuICB1c2VyLmZpcnN0TmFtZS50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuXG5jb25zdCB1cHBlckFuZFJldmVyc2VGaXJzdE5hbWVzID0gKHVzZXJzOiBhbnkpID0+XG4gIHVzZXJzLm1hcCh1cHBlckFuZFJldmVyc2VGaXJzdE5hbWUpO1xuY29uc3QgdXBwZXJBbmRSZXZlcnNlRmlyc3ROYW1lc0ZQID0gbWFwKHVwcGVyQW5kUmV2ZXJzZUZpcnN0TmFtZSk7XG5cbmRlc2NyaWJlKFwicmFtZGFcIiwgZnVuY3Rpb24gKCkge1xuICBpdChcIm1hcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGZpcnN0TmFtZTogXCJCb2JvXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIkZsYWtlc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmlyc3ROYW1lOiBcIkxhd3JlbmNlXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIlNoaWxsaW5nXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaXJzdE5hbWU6IFwiQW5vblwiLFxuICAgICAgICBsYXN0TmFtZTogXCJVc2VyXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCByZXN1bHQgPSB1cHBlckFuZFJldmVyc2VGaXJzdE5hbWVzKHVzZXJzKTtcbiAgICBjb25zb2xhLmRlYnVnKHsgcmVzdWx0IH0pO1xuXG4gICAgY29uc3QgcmVzdWx0RlAgPSB1cHBlckFuZFJldmVyc2VGaXJzdE5hbWVzRlAodXNlcnMpO1xuICAgIGNvbnNvbGEuZGVidWcoeyByZXN1bHRGUCB9KTtcblxuICAgIHJlc3VsdC5zaG91bGQuZGVlcC5lcXVhbChyZXN1bHRGUCk7XG4gIH0pO1xuICBkZXNjcmliZShcImN1cnJpZWQgYW5kIHBvaW50LWZyZWVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGl0KFwiZGVzY3JpcHRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVW5jb21tZW50aW5nIHRoaXMgaW1wb3J0IG1heSBoZWxwIDpEXG4gICAgICAvLyBpbXBvcnQgUiBmcm9tICdyYW1kYSc7XG5cbiAgICAgIGNvbnN0IGNvdW50Qm9ib3MgPSAoc2VudGVuY2U6IHN0cmluZykgPT4gL2JvYm8vZ2kudGVzdChzZW50ZW5jZSk7XG4gICAgICBjb3VudEJvYm9zKFwiYm9ib2JcIikuc2hvdWxkLm9rO1xuICAgICAgY291bnRCb2JvcyhcImJib2JcIikuc2hvdWxkLm5vdC5vaztcbiAgICAgIGNvbnN0IGNvdW50Qm9ib3NGUCA9IHRlc3QoL2JvYm8vZ2kpO1xuICAgICAgY291bnRCb2Jvc0ZQKFwiYm9ib2JcIikuc2hvdWxkLm9rO1xuICAgICAgY291bnRCb2Jvc0ZQKFwiYmJvYlwiKS5zaG91bGQubm90Lm9rO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19