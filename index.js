const lolo = require("./flower.json");
const brain = require("brain.js");
let data = [];
for (let i = 0; i < lolo.length; i++) {
  data.push({
    input: {
      sepal_length: lolo[i].sepal_length / 10,
      sepal_width: lolo[i].sepal_width / 10,
      petal_length: lolo[i].petal_length / 10,
      petal_width: lolo[i].petal_width / 10
    }
  })
  data[i].output = {};
  data[i].output[lolo[i].species] = 1;
};

const net = new brain.NeuralNetwork({hiddenLayers: [3]});

const stats = net.train(data);

const result = brain.likely(
     { sepal_length: 0.58,
       sepal_width: 0.27,
       petal_length: 0.51,
       petal_width: 0.19 }, net);

console.log("the species of this flower i probably " + result);
