
function myDisplayer(some){
    console.log(some)
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  req.onload = function () {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  req.send();
}

getFile(myDisplayer);



// Implementing above case with promise
let myPromise = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  req.onload = function () {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
