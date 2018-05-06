const config = {
  "ownerID": "349674631260667925",

  "admins": ["292690616285134850"],

  "support": [],


  "defaultSettings" : {
    "prefix": "d.",
    "systemNotice": "true" // This gives a notice when a user tries to run a command that they do not have permission to use.
  },


  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },

    { level: 4,
      name: "Server Owner", 
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },

    { level: 8,
      name: "Bot Support",

      check: (message) => config.support.includes(message.author.id)
    },

    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 10,
      name: "Bot Owner", 
      check: (message) => message.client.config.ownerID === message.author.id
    }
  ]
};

module.exports = config;
