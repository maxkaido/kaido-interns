const cote = require("cote", { broadcast: "95.216.205.117" });
const timeService = new cote.Responder({ name: "Time Service" });

timeService.on("time", (req, cb) => {
  cb(new Date());
});
