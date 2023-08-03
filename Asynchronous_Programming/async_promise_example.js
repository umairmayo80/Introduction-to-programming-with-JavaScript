const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                //   console.log(request.responseText);
                // callback(undefined, request.responseText);
                resolve(request.responseText)
            } else if (request.readyState === 4) {
                //   console.log("could not fetch the data");
                // callback("could not fetch the data", undefined);
                reject("Error: "+request.status)
            }
        });
        request.open("GET", resource);
        request.send();
    }); 
};


getData('https://jsonplaceholder.typicode.com/todos/1').then(
    (data)=>{
        console.log("Promise resolved:\n"+data)
    }
).catch((err) =>{
    console.log('Promise rejected:\n'+err)
})


console.log(1)
console.log(2)

// promise chaining example

// Let`s suppose our we fetch data and then this data is processed by another data and then the processed data is used by another function
getData('https://jsonplaceholder.typicode.com/todos/1').then(
    (data) => {
        console.log('Promise 1 resolved:', data)
        return getData('https://jsonplaceholder.typicode.com/todos/2')
    }
).then(
    (data) => {
        console.log('Promise 2 resolved:', data)
        return getData('https://jsonplaceholder.typicode.com/todos/3')
    }
).then(
    (data)=> {
        console.log('Promise 3 resolved:', data)
    }
).catch(err =>{
    console.log('Promise Rejected',err)
})

// This single catch is can catch the error from any then



console.log(3)
console.log(4)