//https://pbeshai.github.io/tidy/docs/examples/moving_average_example
//const tidy = require("tidyjs");
//const fs = require("fs");
// study the output for patterns
import { tidy, mutate, arrange, desc } from "@tidyjs/tidy";
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);


function tidymain() {
  let X = JSON.parse(fs.readFileSync("data/arbs2a.json"));
  //let X = Object.entries(J);
  return X;
}
//dexa
// input_dollars
// output_dollars
function attachProfit() {
  let X = JSON.parse(fs.readFileSync("data/arbs2a.json"));
  //let X = Object.entries(J);
  console.log("wtf");
  let Xp = X.map(
  (x) => ({ ...x, 
    'profit': parseFloat(x.output_dollars) - x.input_dollars
  })
  );
  //Results.map(obj=> ({ ...obj, Active: 'false' }))
  //console.log(profit);
  //X["profit"] = profit
  console.log(Xp);
  return Xp;
}

export { tidymain };




