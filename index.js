var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "urdetail",
assets : {
large_image : "image",
large_text : "iamgeinfo" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "button1" , url : "buttonlink"},{label : "button2",url : "buttonlink"}]
}
})
})
client.login({ clientId: "applicationid" }).catch(console.error);