const http = require('http');
const express = require('express');
const app = express();
app.get('/', (request, response) => {
  console.log(Date.now() + ' Ping Received');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  client.user
    .setPresence({
      activity: { name: 'SCAR IS GOD', type: 'STREAMING', url: 'twitch url' },
    })
    .catch(console.error);
  console.log(`Logged in as ${client.user.username}`);
});

client.login(process.env.TOKEN);
