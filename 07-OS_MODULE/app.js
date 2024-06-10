const os = require('os');
// console.log(os);
// console.log(os.totalmem());     // 내 컴퓨터의 토탈 메모리

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`total memory : ${totalMemory}`);
console.log(`free memory : ${freeMemory}`);
