const fs = require("fs");
let horizontal = 0;
let depth = 0;
let aim = 0;

fs.readFile("./day_02_input.txt", (err, data) => {
  if (err) throw err;

  const formatted_data = data.toString();
  const input_array = formatted_data.split("\n");

  for (let item of input_array) {
    const item_data = item.split(" ");
    if (item_data[0] === "forward") {
      (horizontal += parseInt(item_data[1])) &&
        (depth += parseInt(item_data[1]) * aim);
    } else if (item_data[0] === "down") {
      aim += parseInt(item_data[1]);
    } else if (item_data[0] === "up") {
      aim -= parseInt(item_data[1]);
    }
  }

  let final_result = Math.abs(horizontal) * Math.abs(depth);
  console.log("🚀 Total:", final_result);
});
