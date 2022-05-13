// Start with some exploratory queries
import { request, gql } from "graphql-request";
//const gqlr = require("graphql-request");

let beethoven_graph_node =
  "https://graph-node.beets-ftm-node.com/subgraphs/name/beethovenx";

// Set up tokens FTM for LQDR
let token_address = {
  FTM: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
  SPIRIT: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B",
  LQDR: "0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9"
};

var lqdr_address = token_address["LQDR"];
var ftm_address = token_address["FTM"];

// Identify pool using the Graph
const PRICE = gql`
 query MyQuery {
  tokenPrices(
    where: {asset: "0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9", poolId: "0x5e02ab5699549675a6d3beeb92a62782712d0509000200000000000000000138"}
    first: 100
    orderBy: block
    orderDirection: desc
  ) {
    block
    priceUSD
    poolId {
      symbol
      id
    }
  }
}
`;

async function getQuery() {
  try {
    let data = await request(beethoven_graph_node, PRICE);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  var price = await getQuery();
 // console.log(price);
  //console.log(typeof price );
 // console.log(Object.keys(price));
  let values = Object.values(price[Object.keys(price)[0]]);
  //let bpt = values.filter(i => i.poolId.sybol === "BPT-LQDR");
  //console.log(bpt);
//console.log(ftms.map((i) => i.token0));
//console.log(
//console.log(ftms.map((i) => i.token0));
//console.log(token_data.filter(obj => obj.token0 =="FTM").length);
 // console.log(typeof values);
 // console.log(values);
// let priceArr = Object.entries(values);
 let arr = values.map((item) => {
   console.log(item);
   return([item.block,item.priceUSD]);
 //     console.log("log");
    //console.log(item.tokens);
 });
 console.log(arr);
}

//Object();
main();

// Then trade

// Load up the Vault contract

// 1. Simple trade

// 2. Batch swap

// 3. Use the SOR
