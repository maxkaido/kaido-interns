import consola from "consola";
import { map, curry, test } from "ramda";

require("chai").should();

const upperAndReverseFirstName = (user: any) =>
  user.firstName.toUpperCase().split("").reverse().join("");

const upperAndReverseFirstNames = (users: any) =>
  users.map(upperAndReverseFirstName);
const upperAndReverseFirstNamesFP = map(upperAndReverseFirstName);

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
    consola.debug({ result });

    const resultFP = upperAndReverseFirstNamesFP(users);
    consola.debug({ resultFP });

    result.should.deep.equal(resultFP);
  });
  describe("curried and point-free", function () {
    it("description", function () {
      // Uncommenting this import may help :D
      // import R from 'ramda';

      const countBobos = (sentence: string) => /bobo/gi.test(sentence);
      countBobos("bobob").should.ok;
      countBobos("bbob").should.not.ok;
      const countBobosFP = test(/bobo/gi);
      countBobosFP("bobob").should.ok;
      countBobosFP("bbob").should.not.ok;
    });
  });
});
