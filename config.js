const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Podda-md=hycGFIAR#ATWSTe2ULsTeZvXVzDoYa9f-bGjZJQe7HYWAERL_tqI",
    CAPTION: process.env.CAPTION || "POWERED BY CYBER LOKU ASHUU",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/xdMvP3XZ/In-Shot-20241222-002123636.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "*<<࿐𝐇𝐄𝐋𝐋𝐎𝐖 𝐖𝐄𝐂𝐎𝐌𝐄࿐>>*                                           ɪᴍ ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛɪᴍ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴀʟɪᴠᴇ                                      𝐈 𝐧𝐞𝐞𝐝 𝐭𝐨 𝐝𝐞𝐯𝐨𝐥𝐨𝐩 𝐛𝐲 𝐂𝐲𝐛𝐞𝐫 𝐋𝐨𝐤𝐮 𝐀𝐬𝐡𝐮𝐮                                   Live bot (https://whatsapp.com/channel/0029Vb4HJcD4inowFiwWsY1S)                                       News-i (https://whatsapp.com/channel/0029Vb4HJcD4inowFiwWsY1S)                                        *🌹⃝✥⃟𝐀𝐒𝐇𝐔𝐔 𝐗𝐃 𝐎𝐅𝐂🍃⃟✦⃝🌼᭄᭄̊̊̊̊🙂🤍*                                 *▭▭▭▭▭▭▬▬▬▬▬▬*                  ◆━━━━━◆❃◆━━━━━◆ ",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "➺ᴍʀ ᴅɪɴᴇꜱʜ࿐",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
