import consola from "consola";

require("chai").should();

import { A } from "../src";

import brain from "brain.js";

it("should approximate XOR", function () {
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
  consola.info(output);
  Math.abs(1 - output[0]).should.lte(0.07);
});

it.skip("with optional config", function () {
  // provide optional config object, defaults shown.
  const config = {
    inputSize: 20,
    inputRange: 20,
    hiddenLayers: [20, 20],
    outputSize: 20,
    learningRate: 0.01,
    decayRate: 0.999,
  };

  // create a simple recurrent neural network
  const net = new brain.recurrent.RNN(config);

  net.train(
    [
      { input: [0, 0], output: [0] },
      { input: [0, 1], output: [1] },
      { input: [1, 0], output: [1] },
      { input: [1, 1], output: [0] },
    ],
    config
  );

  let output = net.run([0, 0]); // [0]
  consola.info(output);
  output = net.run([0, 1]); // [1]
  output = net.run([1, 0]); // [1]
  output = net.run([1, 1]); // [0]
});
