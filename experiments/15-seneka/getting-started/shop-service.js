require("seneca")()
  .use("entity")
  .use("shop")
  .listen({ host: "0.0.0.0", port: 5000, pin: "role:shop" })
  .client({
    host: "dev7.kaido.team",
    port: 9003,
    pin: "role:shop,info:purchase",
  });
