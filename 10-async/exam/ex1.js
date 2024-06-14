function call(name, cb) {
    setTimeout(function() {
        console.log(name);
        cb(name);
    }, 1000);
}

function back(cb) {
    setTimeout(function() {
        console.log('back');
        cb('back');
    }, 1000)
}

function hell(cb) {
    setTimeout(function() {
        cb('callback hell');
    }, 1000);
}

call('kim', function (name) {
    console.log(name + '반가워');
    back(function (txt) {
        console.log(txt + '을 실행했구나');
        hell(function (message) {
            console.log('여기는' + message);
        });
    });
});

function call(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(back);
            resolve();
        }, 1000);
    })
}


async function exec(){
    try{
        
    }catch(err){
        
    }
}

exec();