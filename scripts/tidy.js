import {
  tidy,
  mutate,
  arrange,
  desc,
  summarize,
  groupBy,
  sum
} from "@tidyjs/tidy";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let P = require("../data/arbs4a.json");

//http://35.225.3.28:3000/hourly_shortlist
async function ftch() {
  let response = await fetch("http://35.225.3.28:3000/hourly_shortlist/json");
  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    console.log(response.headers);
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
let json = ftch();
console.log(json);

function toArray(P) {
  const X = Object.entries(P);
  X.forEach(([key, value]) => {
    console.log(key); // 'one'
    console.log(value); // 1
  });
}
//toArray(P);

let X = P.map((x) => ({
  ...x,
  profit: parseFloat(x.output_dollars) - x.input_dollars
}));

let T = tidy(
  X,
  groupBy(["token0", "token1"], [summarize({ total: sum("profit") })])
);

//mutate({ isEven: d => d.foo % 2 })
//let Ti = mutate(T, {
//  pair: (T) => T.token1 + T.token2
//});
let Ti = T.map((x) => ({ ...x, pair: x.token0 + "-" + x.token1 }));

Ti = Ti.map((x) => ({ pair: x.pair, profit: x.total }));

Ti = Object.values(Ti);

console.log(Ti);
//}
//let ftms = token_data.filter((i) => i.token0 == "FTM");
//console.log(ftms.map((i) => i.token0));
//console.log(token_data.filter(obj => obj.token0 =="FTM").length);

//const count = token_data.reduce((accumulator, obj) => {
//  if (obj.token0 == "FTM") {
//    return accumulator + 1;
//  }
//});
//console.log(count);
