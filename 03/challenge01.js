const fs = require("fs");

let gamma = "";
let epsilon = "";

fs.readFile("./03_input.txt", (err, data) => {
  if (err) throw err;

  const formatted_data = data.toString();
  const input_array = formatted_data.split("\n");

  for (let i = 0; i < input_array[0].length; i++) {
    let count = [0, 0];
    for (let j = 0; j < input_array.length; j++) {
      if (input_array[j][i] === "0") count[0]++;
      else count[1]++;
    }
    gamma += count[0] > count[1] ? "0" : "1";
    epsilon += count[0] > count[1] ? "1" : "0";
  }

  const decimalGamma = parseInt(gamma, 2);
  const decimalEpsilon = parseInt(epsilon, 2);
  const powerConsumption = decimalGamma * decimalEpsilon;
  console.log(
    "🚀 ~ file: challenge01.js ~ line 34 ~ fs.readFile ~ powerConsumption",
    powerConsumption
  );
});
