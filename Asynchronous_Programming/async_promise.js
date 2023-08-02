function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function succes (value) {
        myDisplayer(value);
    },
    function handleError (error) {
        myDisplayer(error);
    }
);

// Promise with wait and another way to write then and catch

function fetchData() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000); // Simulate an asynchronous task that takes 2 seconds
    });
}

fetchData()
    .then((result) => {
        console.log(result); // Output: { name: "John", age: 30 }
    })
    .catch((error) => {
        console.log("Error occured");
        console.error(error);
    });
