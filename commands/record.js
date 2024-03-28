import { read } from '../utils.js'

const record = async (message) => {

    const wins = await read('wins')
    let wins_value = parseInt(wins ? wins : "0")
    const losses = await read('losses')
    let losses_value = parseInt(losses ? losses : "0")

    const reply = "Your record since using Gloom Bot is " + wins_value + "-" + losses_value

    message.channel.send(reply)

}

export default record