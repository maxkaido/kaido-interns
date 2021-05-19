const cote = require("cote", { multicast: "dev7.kaido.team" });
const timeService = new cote.Responder({ name: "Time Service" });

timeService.on("time", (req, cb) => {
  cb(new Date());
});
