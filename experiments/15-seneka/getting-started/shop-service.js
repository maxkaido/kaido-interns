require("seneca")()
  .use("entity")
  .use("shop")
  .listen({ host: "dev6.kaido.team", port: 9002, pin: "role:shop" })
  .client({
    host: "dev7.kaido.team",
    port: 9003,
    pin: "role:shop,info:purchase",
  });
