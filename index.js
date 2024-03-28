import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'
import next from './commands/next.js'
import last from './commands/last.js'
import setnext from './commands/setnext.js'
import result from './commands/result.js'
import record from './commands/record.js'
import setRecord from './commands/setrecord.js'
import gloom from './commands/gloom.js'

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
] });

const CHANNELNAME = "gloomhaven"

client.login(process.env.DISCORD_SDK_KEY)

client.on('ready', () => {
    console.log('Bot ready')
})

client.on('messageCreate', async (message) => {
    const { content = '', author = {}, channel } = message
    const { name: channel_name } = channel
    const { bot = true } = author

    if(channel_name != CHANNELNAME) {
        return
    }

    if(bot) {
        return
    }

    const split_message = content.split(' ')

    if(!split_message.length) {
        return
    }

    switch(split_message[0].toLowerCase()) {
        case "!gloom":
            await gloom(message)
            return
        case "!gloomnext":
            await next(message)
            return
        case "!gloomlast":
            await last(message)
            return
        case "!gloomsetnext":
            await setnext(message)
            return
        case "!gloomresult":
            await result(message)
            return
        case "!gloomrecord":
            await record(message)
            return
        case "!gloomsetrecord":
            await setRecord(message)
            return
    }
 })