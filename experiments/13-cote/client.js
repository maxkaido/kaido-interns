const cote = require("cote", { multicast: "dev7.kaido.team" });
const client = new cote.Requester({ name: "Client" });

client.send({ type: "time" }, (time) => {
  console.log(time);
});
