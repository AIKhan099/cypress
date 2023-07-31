// const { reject } = require("cypress/types/bluebird");

let promise = new Promise((resolve, reject) => {
    let i = 1+1;
    if(i==2){
        resolve ("Resolve is being returned")
    }
    else{
        reject("Reject is being returned")
    }

})

promise.then((message)=>{
    console.log(message + ' promise fulfilled')
}).catch((message) =>{
    console.log(message + ' promise neglected')
})