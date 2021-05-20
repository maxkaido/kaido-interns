var Express = require("express");
var Router = Express.Router;
var context = new Router();

require("seneca")()

  .use("math")

  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({ host: "0.0.0.0", type: "tcp", port: 5001, pin: "role:math" });

var context = new Router();
var app = Express()
  .use(require("body-parser").json())
  .use(context)
  .listen(5000);
