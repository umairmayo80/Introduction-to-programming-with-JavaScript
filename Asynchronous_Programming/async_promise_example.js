
const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            // console.log(request, request.readyState);
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


getData('https://jsonplaceholder.typicode.com/todos/1sdfgsdfg').then(
    (data)=>{
        console.log("Promise resolved:\n"+data)
    }
).catch((err) =>{
    console.log('Promise rejected:\n'+err)
})