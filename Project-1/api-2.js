//fetch()--> has replaced xmlHTTPRequest
//fetch()--> global method for making http request
//2 ways to call --> then, async await
//fetch() returns a promise
//fetch() is supported in all the browsers --->older browsers

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
