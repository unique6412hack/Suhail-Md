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


global.SESSION_ID = process.env.SESSION_ID ||  "lSUHAIL_06_12_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEdnAyeTZxU3R5ditydE4wZjVsa2VBQWFCaUhqVnBqYTVDOXZNTnYxUS8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE0NzAzMTA1NTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRDcyNjVCQ0UzRjM1OUQ2OTBBODA1MDQ1MDdGRTk0OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2OTExNjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDcwMzEwNTU4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzRENTIzNTkwNjE0NDRDMTFBNDM3RkJEQ0FCNDEzN0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NjkxMTYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5INHRZX1ZkUzVxM2lSZnB5WW9KQVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmE4ZWJmOGEtMTdkNC00MzcyLTg3NjgtODNmYWQ4ZmExZTNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDE4MixcbiAgICAgIDMzLFxuICAgICAgMTM0LFxuICAgICAgMjI0LFxuICAgICAgMjMsXG4gICAgICAxOTMsXG4gICAgICAyNTQsXG4gICAgICAxNDYsXG4gICAgICAxODIsXG4gICAgICAyMjgsXG4gICAgICAyMzksXG4gICAgICAxNzUsXG4gICAgICAxODcsXG4gICAgICAxMDQsXG4gICAgICAyNSxcbiAgICAgIDQ3LFxuICAgICAgODEsXG4gICAgICAxMTEsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxNDMsXG4gICAgICAxODEsXG4gICAgICAxMDUsXG4gICAgICAxNTQsXG4gICAgICAxMjksXG4gICAgICAxMzIsXG4gICAgICAyOCxcbiAgICAgIDEzNCxcbiAgICAgIDE4MCxcbiAgICAgIDIyLFxuICAgICAgMjIxLFxuICAgICAgMTA5LFxuICAgICAgMTksXG4gICAgICAxNjYsXG4gICAgICAyOSxcbiAgICAgIDE1MixcbiAgICAgIDExNyxcbiAgICAgIDE4LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJPMnBNRUVOUEt4TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrVGdJbzFnaWxURVBMdldDTVcxWXhudE1VTVh2OWs0M2VvZXZMWTk2L2lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkg1ajFSend3WWdCOTRDcVZ1OTh0eC91aDF4SlFoMUp2TER3RVg1cDBxUU16eHNzNktNcG9pbytVV1ZESGVTUzNpM1hFQU5sWUIybFZTR2w1VGZmd0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInE2b1ExVnpnZW1IbW9IakRKSEM0eWFyWWdtSTBVb01qYVNuTjNQOE95UG9uclBvaWM2WEhPQWp6ZjdRUEJjbUxCd1BRamVXYm1iRTAvTEJ1bEUrN2hnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTQ3MDMxMDU1ODk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3OTM3MTAyMTE4MTAyOTozMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLbmlnaHQgQm90XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNDcwMzEwNTU4OTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjkxMTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3VhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqV0FRSmF5bEczaGoxSGxtaldBWHJpbUZyUXpMTGdNZGVZM3JqQzdFNGJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTUwNjQxMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODY4OTgyMDE4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
