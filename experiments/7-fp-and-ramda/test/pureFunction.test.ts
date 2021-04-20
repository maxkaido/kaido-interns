// https://www.educative.io/courses/functional-programming-patterns-with-ramdajs/xV9vlmDPJAE
//
describe("pure functions", function function_name() {
  it("test same input - same output", function () {
    let a = 0;
    const impureFunction = (b: number) => {
      a += b;
      return a;
    };

    const pureFunction = (a: number, b: number) => {
      return a + b;
    };
    impureFunction(1).should.equal(1);
    impureFunction(1).should.not.equal(1);

    pureFunction(0, 1).should.equal(1);
    pureFunction(0, 1).should.equal(1);
  });
  it("test No Side Effects");
});
