require("dotenv").config();

const cote = require("cote");
if (process.env.TYPE === "CLIENT") {
  const client = new cote.Requester({ name: "Client" });

  client.send({ type: "time" }, (time) => {
    console.log(time);
  });
} else {
  const timeService = new cote.Responder({ name: "Time Service" });

  timeService.on("time", (req, cb) => {
    cb(new Date());
  });
}
