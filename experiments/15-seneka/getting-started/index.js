require("dotenv").config();

switch (process.env.TYPE) {
  case "shop-service":
    require("./shop-service.js");
    break;
  case "app-all":
    require("./app-all.js");
    break;
  case "math-pin-service":
    require("./math-pin-service.js");
    break;
  case "shop-stats":
    require("./shop-stats.js");
    break;
  default:
    console.log("missing TYPE");
}
