import log from '../utils/logs.js';

const whoStinks = async (message) => {
   
    const names = [
        "Nick",
        "Lindsey",
        "Craig",
        "Justin",
        "Emily"
    ]

    const name = names[Math.floor(Math.random()*names.length)];

    message.channel.send(name + "stinks.") 
}

export default whoStinks;