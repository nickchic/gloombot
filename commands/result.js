import { read, write } from '../utils.js'

const result = async (message) => {
    const next = await read('next')
    const next_date = next ? new Date(next) : new Date()

    const split_message = message.content.split(' ')
    const result = split_message[1] || ""

    if(!validResult(result.toLowerCase())) {
        message.channel.send('Result not formatted correctly. "!gloomresult win" or "!gloomresult loss"')
    }

    await write("last", next_date)
    await write("last_result", result.toLowerCase())

    await write("next", "")

    const is_win = result.toLowerCase() == "win"

    //update record
    const wins = await read('wins')
    let wins_value = parseInt(wins ? wins : "0")
    const losses = await read('losses')
    let losses_value = parseInt(losses ? losses : "0")

    if(is_win) {
        wins_value += 1
        await write("wins", wins_value)
    } else {
        losses_value += 1
        await write("losses", losses_value)
    }

    const reply = is_win
        ? "Congrats! Easy game. Results logged. Your record is " + wins_value + "-" + losses_value
        : "This game is too hard, maybe the senerio level is too high?. Results logged. Your record is " + wins_value + "-" + losses_value

    message.channel.send(reply)

}

const validResult = (result) => {
    const valid_results = [
        "win",
        "loss"
    ]

    if(!result || valid_results.indexOf(result) == -1) {
        return false
    }

    return true
}


export default result