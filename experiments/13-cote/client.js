const cote = require("cote", { multicast: "95.216.205.117" });
const client = new cote.Requester({ name: "Client" });

client.send({ type: "time" }, (time) => {
  console.log(time);
});
