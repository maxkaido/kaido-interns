var SenecaWeb = require("seneca-web");
var Express = require("express");
var Router = Express.Router;
var context = new Router();

var senecaWebConfig = {
  context: context,
  adapter: require("seneca-web-adapter-express"),
  options: { parseBody: false }, // so we can use body-parser
};

var app = Express()
  .use(require("body-parser").json())
  .use(context)
  .listen(5000);

var seneca = require("seneca")()
  .use(SenecaWeb, senecaWebConfig)
  .use("entity")
  .use("api-all")
  .client({ host: "dev7.kaido.team", type: "tcp", pin: "role:math" })
  .client({ host: "seneca1.kaido.team", port: 80, pin: "role:shop" });

// create a dummy product
seneca.act(
  "role:shop,add:product",
  { data: { name: "Apple", price: 1.99 } },
  console.log
);
