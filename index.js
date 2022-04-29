const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = process.env.TOKEN
const PREFIX = "!"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


let bot = {
    client,
    prefix:"cal.",
    owners: ["173349186312470528", "812837038411743315"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

module.exports = bot


client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})


client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(channelId).send(`welcome <@${member.id}>`)
})

client.login(TOKEN)