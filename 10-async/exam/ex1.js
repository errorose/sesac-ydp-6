// Promise 사용하기

// function call(name) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(function() {
//             resolve(name);
//         }, 1000);
//     });
// }

// function back(txt) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(function() {
//             resolve(txt);
//         }, 1000);
//     });
// }

// function hell(message) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(function() {
//             resolve(message);
//         }, 1000);
//     }); 
// }

// call('kim')
//     .then((name)=>{
//         console.log(name);
//         console.log(name + '반가워');
//         return back('back');
//     })
//     .then((txt)=>{
//         console.log(txt);
//         console.log(txt + ' 을 실행했구나');
//         return hell('callback hell')
//     })
//     .then((message)=>{
//         console.log('여기는 ' + message);
//     })



// promise로 바꾼 코드를 exec 함수를 만들어 실행하기

function call2(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}

function back2(txt) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log(txt);
            resolve(txt);
        }, 1000);
    });
}

function hell2(message) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log('여기는 ' + message);
            resolve(message);
        }, 1000);
    }); 
}
    
async function exec(){
    try{
        let name = await call2('kim');
        console.log(name + '반가워');
        let back = await back2('back');
        console.log(back + ' 을 실행했구나');
        let msg = await hell2('callback hell');
    }catch(err){
        console.log(err);
    }
}
  
exec();

// 배경색 변경 코드를 Promise를 이용해 변경

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

function bgColor(color){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // document.body.style.backgroundColor = color;
            console.log(`background-color: ${color}`);
            resolve(color);
        }, 1000)
    })
}

async function changeBgColor(){
    try{
        await bgColor('red');
        await bgColor('orange');
        await bgColor('yellow');
        await bgColor('green');
        await bgColor('blue');
    }catch(err){
        console.log(err);
    }
}

changeBgColor();
