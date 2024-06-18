const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994408891201";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_50_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhac01pcEJQNlowcDZwbW1jVk5VVStVRS9IT01yYlJiM21NY1BSWVJCb2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTQ3MDMxMDU1ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBODQ5NDhCMjM2N0IzQUMxMjRFN0Q5REE2RjVFODY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY4OTgyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE0NzAzMTA1NTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMjIwMzA3MEU2QTNGRDU2QUIyNDhDRTE1RTFERUNGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2ODk4MjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSndkbERYb1FSSnFFUEhxYUNJcmhMQVwiLFxuICBcInBob25lSWRcIjogXCJlYTBmZmUzNy0xNWY3LTQ1ZDAtODk4Ni03MGU5MGUwMDM4ODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTQ3LFxuICAgICAgMTU5LFxuICAgICAgMTM5LFxuICAgICAgMTExLFxuICAgICAgNzEsXG4gICAgICAyMzEsXG4gICAgICAyMyxcbiAgICAgIDIwNyxcbiAgICAgIDIyLFxuICAgICAgNjksXG4gICAgICAxODcsXG4gICAgICAxOTcsXG4gICAgICAxODEsXG4gICAgICA0LFxuICAgICAgMjE1LFxuICAgICAgMjIzLFxuICAgICAgMjI1LFxuICAgICAgMTA0LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAxMixcbiAgICAgIDU2LFxuICAgICAgMTc1LFxuICAgICAgNjEsXG4gICAgICA4NSxcbiAgICAgIDEwMyxcbiAgICAgIDI4LFxuICAgICAgMzcsXG4gICAgICA2MyxcbiAgICAgIDgzLFxuICAgICAgOTIsXG4gICAgICAyMyxcbiAgICAgIDIzOCxcbiAgICAgIDEyMyxcbiAgICAgIDE1NixcbiAgICAgIDEzMyxcbiAgICAgIDE0MyxcbiAgICAgIDE1MSxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3lPMnBNRUVKakF4TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrVGdJbzFnaWxURVBMdldDTVcxWXhudE1VTVh2OWs0M2VvZXZMWTk2L2lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZJYkZOckRhTG5KTGJUY3BIWEpRUkVERyt1VnBlTmVKV2IwMU5LMnhrcmxGM2VYaExUMlhpR3QrU0hudEJjTkFhaGZEL3lMSGtHMnJQSFhIQTFjU0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlhZFpuVFpHek1oUy9TN09BekFiTjBsTjZWZWJ4SjdTd1RKU1RWVzVWNVEydFhaY1h6UEZRZ0ZGWG85TmEyUWMramU4UzNWN2lXK25CTWdQR2U2c0J3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTQ3MDMxMDU1ODk6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3OTM3MTAyMTE4MTAyOToyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLbmlnaHQgQm90XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNDcwMzEwNTU4OToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Njg5ODE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3VhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqV0FRSmF5bEczaGoxSGxtaldBWHJpbUZyUXpMTGdNZGVZM3JqQzdFNGJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTUwNjQxMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODY4OTgyMDE4MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
