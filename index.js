import { configDotenv } from "dotenv"
configDotenv()

// console.log(process.env.TOKEN)

import { Client, GatewayIntentBits, Events } from "discord.js"

const client = new Client({ intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]})

client.on('ready', () => {
  console.log("Conectado com o Discord")
})

client.on(Events.MessageCreate, msg => {
  if(msg.content == ">criar_agenda"){
    msg.reply("Ei, estou em fase de contrução")
  }

  //console.log(msg.content)
})

client.login(process.env.TOKEN)

//console.log(client)