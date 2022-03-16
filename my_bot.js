const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () = {
    console.log("Connected as " + client.user.tag )

    client.user.setActivity("YouTube", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // General channel id: 48844919390050715157

    })

    let generalChannel = client.channels.get("488449193900507157")
    const attachment = new Discord.Attachment("https://www.devdungeon.com/sites/all/themes/devdungeon2/log.pbbg")
    generalChannel.send(attachment)
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return 
    }
    receivedMessage.channel.send("Message received: " + receivedMessage.author.toString()
     + ": " + receivedMessage.content)
})

    receivedMessage.react("👍")
    let customEmoji = receivedMessage.guild.emojis.get("488484480646905856")
    receivedMessage.react(customEmoji)

    if(receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
     }
    })
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split("  ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    }
}


function helpCommand(arguments, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [top]")
    } else {
        receivedMessage.channel.send("It looks like you need help with " + arguments)    
    }
}


client.login("OTUzNjY2NzA2MDEyNzc4NTk2.YjH5VA.-h6Yf6FvsqWhNUXbg3pDqrTGaAM")

