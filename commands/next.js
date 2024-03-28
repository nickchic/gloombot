import { read } from '../utils.js'

const next = async (message) => {
    const next = await read('next')

    if(!next) {
        message.channel.send("No gloom currently scheduled.")
        return
    }

    const next_date = new Date(next)
    const today = new Date()

    const diff = dateDiffInDays(next_date, today)
    const date_format = new Date(next).toLocaleDateString('en', {timeZone: 'America/New_York'})

    if(today > next_date) {
        message.channel.send("Next gloom scheduled for " + date_format + ". Thats already passed. Did you play? Log you result with **!gloomResult**") 
        return
    }

    message.channel.send("Next gloom scheduled for " + date_format + ". Only " + diff + " days away.") 
}


function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
  
    return Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY))
  }

export default next
