// Promise 사용하기

function call(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            resolve(name);
        }, 1000);
    });
}

function back(txt) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            resolve(txt);
        }, 1000);
    });
}

function hell(message) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            resolve(message);
        }, 1000);
    }); 
}

call('kim')
    .then((name)=>{
        console.log(name);
        console.log(name + '반가워');
        return back('back');
    })
    .then((txt)=>{
        console.log(txt);
        console.log(txt + ' 을 실행했구나');
        return hell('callback hell')
    })
    .then((message)=>{
        console.log('여기는 ' + message);
    })
    
    
