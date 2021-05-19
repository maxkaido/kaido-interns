require("seneca")()

  .use("math")

  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({ host: "dev7.kaido.team", type: "tcp", pin: "role:math" });
