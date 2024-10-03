const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({'message': 'resolved success!'});
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('error: rejected failure!'));
      }, 500);
    });
  };
  
  resolvedPromise()
    .then(result => console.log(result)) // Output: {message: 'resolved success!'}
    .catch(error => console.error(error));
  
  rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message)); // Output: error: rejected failure!
  
