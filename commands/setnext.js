import { write } from '../utils.js'

const setNext = async (message) => {
    const split_message = message.content.split(' ')

    const date = new Date(split_message[1]+"T00:00:00.000-06:00")

    if(!isValidDate(date)) {
        message.channel.send("Date not formatted correctly. Try YYYY-MM-DD.")
        return
    }

    await write('next', date)
    message.channel.send("Next Gloom set! See you on " + date.toLocaleDateString('en', {timeZone: 'America/New_York'}))
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

export default setNext