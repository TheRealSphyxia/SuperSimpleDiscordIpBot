const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.content === "!ip") {
    var http = require("http");

    http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
      resp.on("data", function (ip) {
        //console.log("My public IP  address is: " + ip);
        message.reply(`The server ip is \`${ip}\``);
      });
    });
  }
});

client.login(token);
