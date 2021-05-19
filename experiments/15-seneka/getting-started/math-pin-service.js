require("seneca")()

  .use("math")

  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({ host: "0.0.0.0", type: "tcp", pin: "role:math" });
