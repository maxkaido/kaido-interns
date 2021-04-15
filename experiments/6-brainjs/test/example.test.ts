import consola from "consola";

require("chai").should();

import { A } from "../src";

it.skip("test A should be A", function () {
  A.should.equal("A");
});

import brain from "brain.js";
// provide optional config object (or undefined). Defaults shown.
const config: any = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};
const net = new brain.NeuralNetwork(config);
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
]);
const output = net.run([1, 0]);

it("should approximate XOR", function () {
  Math.abs(1 - output[0]).should.lte(0.07);
});
