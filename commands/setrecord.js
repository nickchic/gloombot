import { write } from '../utils.js'

const setRecord = async (message) => {
    const split_message = message.content.split(' ')
    const record = split_message[1] ?? ""

    const record_split = record.split("-")

    if(!record || record_split.length != 2) {
        message.channel.send('Record not formatted correctly. Try something like 2-1. (W-L)')
        return
    }

    const new_wins = parseInt(record_split[0])
    const new_losses = parseInt(record_split[1])

    if(isNaN(new_wins) || isNaN(new_losses)) {
        message.channel.send('Record not formatted correctly. Try something like 2-1. (W-L)')
        return
    }

    await write("wins", new_wins)
    await write("losses", new_losses)

    message.channel.send("Record updated to " + new_wins + "-" + new_losses)

}


export default setRecord