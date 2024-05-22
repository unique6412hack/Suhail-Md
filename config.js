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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_48_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGOG8rclRIZGk5V1F5aGRPRFpWbzhQR0N5WFJrT3p6ZzFUV2c4MFFGQWNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwODg5MTIwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEU2RTdDNzVCODZCODhBNEIzNzM2RTY2M0MxQjdERkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDAzNzE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDA4ODkxMjAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMUExRDMzM0YxRTZGMjUyNzFGMDk0QjkzQzU0OEE5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0MDM3MTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUEdwZU1iZTNRUE9UM2U1dE1aOEc0UVwiLFxuICBcInBob25lSWRcIjogXCI3MDE2OGI4Zi04MmExLTQ3NGMtOWQyZi1hNTI1OGY2NDkzNzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMzYsXG4gICAgICAxNjUsXG4gICAgICAyMzQsXG4gICAgICAxMTQsXG4gICAgICA2MCxcbiAgICAgIDEzOSxcbiAgICAgIDgzLFxuICAgICAgNzksXG4gICAgICAxNDAsXG4gICAgICAyNDMsXG4gICAgICAxNTIsXG4gICAgICAxMzgsXG4gICAgICA0NixcbiAgICAgIDE5OCxcbiAgICAgIDI1MSxcbiAgICAgIDIyNCxcbiAgICAgIDE1MyxcbiAgICAgIDMxLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTAxLFxuICAgICAgMTg4LFxuICAgICAgMjQyLFxuICAgICAgNzQsXG4gICAgICAxOTQsXG4gICAgICAyMjYsXG4gICAgICAyMjQsXG4gICAgICAxNzgsXG4gICAgICA5NyxcbiAgICAgIDIwLFxuICAgICAgMjE0LFxuICAgICAgMTMzLFxuICAgICAgMzAsXG4gICAgICAyNDksXG4gICAgICAxMjQsXG4gICAgICA4MSxcbiAgICAgIDkzLFxuICAgICAgMjQ2LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlZHU0RCUVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwODg5MTIwMToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0OTUzMDk1NDE0MzI6MjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXNzaXN0YW50XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTys0dFljRkVQejd1TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpVVFMeDVjOXd4b0s4VzUxY0xmSENJTmJ4ZWJ4SnFNU1pNUU1tOUVaWkVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9tV2hDRkYwVEV4bE9DckRYYWY2cmx5SmVTNEVnZnVUTU92OTA5TVhUWVFPRXVaL1hNOGdySXhaaVVHT05Hd0pPVW9JYVhtNVUxc2dDMGFRc1F4ZkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdFVThsQzllOU5OTmhHUkZWNFc5Uk1CWDltTm1jK25hK1hYZVhRcWdQS0VnbEdyQkJ2UTlvaEsvT2JoZHExT2VlblhpYUVUdlR0YmdyQ1VtVmljSERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwODg5MTIwMToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NDAzNzExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS21hXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLbWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4ZUxtSXY4Y1IvNDNHNE1ZSnBSRnlpYXF6U3lzdVNReVlMQmdKdHgza3N3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTc3MzI5NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjQwMzcxMjg5NlwifSIKfQ=="  // PUT your SESSION_ID 


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
