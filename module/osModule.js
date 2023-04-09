const os=require("os");

const free=os.freemem();
const total=os.totalmem();

console.log({free},{total});