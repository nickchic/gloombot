import { read } from '../utils.js'

const last = async (message) => {
    const last = await read('last')
    const last_result = await read('last_result')

    if(!last) {
        message.channel.send("No glooms on record.")
        return
    }

    message.channel.send("Last gloom was " + new Date(last).toLocaleDateString('en', {timeZone: 'America/New_York'}) + " it was a " + last_result)
}

export default last