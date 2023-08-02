const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  console.log(request, request.readyState);
  if (request.readyState === 4) {
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
