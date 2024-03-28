import { read } from '../utils.js'

const gloom = async (message) => {

    let reply = "I am Gloom Bot. I can help you track your Gloomhaven schedule and record. \n \n" 
    reply += "Try these commands: \n \n"
    reply += "- **!gloomNext**: See your next scheduled Gloomhaven session. \n"
    reply += "- **!gloomLast**: See the date and result of your last Gloomhaven session. \n"
    reply += "- **!gloomSetNext**: Schedule your next Gloomhaven session. Use YYYY-MM-DD date format. Example: \"!gloomSetNext 2025-01-13\" \n"
    reply += "- **!gloomRecord**: View your win/loss record. \n"
    reply += "- **!gloomSetRecord**: Overwrite your record. Example: \"!gloomSetRecord 2-1\" \n"
    reply += "- **!gloomResult**: Logs a win or a loss. Sets your next session to last session. Example: \"!gloomResult win\" \n \n"

    message.channel.send(reply)
}

export default gloom