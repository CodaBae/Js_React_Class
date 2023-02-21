# Short expaination of promises

const promise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  const result = false;

  // If the operation succeeds, fulfill the Promise with the result
  if (result) {
    resolve(result);
  } else {
    // If the operation fails, reject the Promise with a reason
    reject(new Error('Operation failed'));
  }
});

# Next, let's see how to update an existing resource using the PUT request.

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

- In the above code, we are updating an existing post by making a PUT request to the API endpoint https://jsonplaceholder.typicode.com/posts/{id}. The id of the post


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