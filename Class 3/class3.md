# JavaScript Fetch API and CRUD Operations using Vanilla JavaScript

The JavaScript Fetch API provides an interface for fetching resources. It allows us to make HTTP requests like GET, POST, PUT, DELETE, etc. to retrieve or manipulate data from a remote server. In this tutorial, we'll learn how to perform CRUD (Create, Read, Update, and Delete) operations using the Fetch API and Vanilla JavaScript.

Let's start with a simple GET request example to retrieve data from an API endpoint.


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


In the above code, we are fetching data from a sample API endpoint https://jsonplaceholder.typicode.com/posts that returns a list of posts. The fetch method returns a Promise that resolves to the Response object representing the response to the request. The .json() method on the response object is used to parse the response as JSON.

Now let's move on to creating a new resource using the POST request.


const postData = {
  title: 'My New Post',
  body: 'This is the body of my new post',
  userId: 1
};


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


In the above code, we are creating a new post by making a POST request to the API endpoint https://jsonplaceholder.typicode.com/posts. The method property of the options object is set to 'POST' to indicate that we want to create a new resource. The headers property is set to include the Content-Type header with a value of 'application/json' to indicate that we are sending JSON data in the request body. The request body is created using JSON.stringify method, which takes a JavaScript object and converts it to a JSON string.

Next, let's see how to update an existing resource using the PUT request.

const postData = {
  id: 1,
  title: 'Updated Post Title',
  body: 'This is the updated body of the post',
  userId: 1
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postData.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

In the above code, we are updating an existing post by making a PUT request to the API endpoint https://jsonplaceholder.typicode.com/posts/{id}. The id of the post



is passed as a template literal in the URL, allowing us to dynamically update a post with a specific ID. The rest of the code is similar to the previous POST request example, with the only difference being that the method property is set to 'PUT' to indicate that we want to update an existing resource.

Finally, let's see how to delete a resource using the DELETE request.

fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
In the above code, we are deleting a post with ID 1 by making a DELETE request to the API endpoint https://jsonplaceholder.typicode.com/posts/1. The method property is set to 'DELETE' to indicate that we want to delete a resource. Since DELETE requests typically don't have a request body, we don't need to set the headers or body properties.

This concludes our tutorial on CRUD operations using the Fetch API and Vanilla JavaScript. With this knowledge, you should be able to retrieve and manipulate data from remote APIs in your projects.