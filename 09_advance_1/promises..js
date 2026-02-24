const promise1 = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve();
    }, 1000)
})

promise1.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve();
    }, 1000)
}).then(function(){
    console.log("promise 2 consumed")
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "john", email: "john@example.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "john", email: "john@example.com"})
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))