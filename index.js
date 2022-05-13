import { tidymain } from "./src/tidy.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
var eta = require("eta");
require("dotenv").config();

const app = express();
app.set("view engine", "eta");

//console.log("Config:", process.env.CONFIG_WEB);
//const cfg = require(process.env.CONFIG_WEB);
//console.log("Config id:", cfg.id);
const port = 8080;
var indexTemplate = `
<!DOCTYPE html>
<head><!-- Include Plotly.js --><script src="https://cdn.plot.ly/plotly-latest.min.js"></script></head>
<body>
<h1>Analytics Playground</h1>
<p>Welcome to my world of analysis</p>
<% it.xp %>
<% it.links.forEach(function(item){ %>
  <a href=" <%= item %> "><%= item %> </a>
<% }) %>
<p>end</p>
<a href="https://pbeshai.github.io/tidy/">[external-tidy.js]</a>
</body>
`;

app.get("/", (req, res) => {
  res.send(
    eta.render(indexTemplate, {
      xp: "input text",
      links: ["tidy"]
    })
  );
});

app.get("/tidy", (req, res) => {
  let data = tidymain();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  //var conn = dexes.get_connection();
});
