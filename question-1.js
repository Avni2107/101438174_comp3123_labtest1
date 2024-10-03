function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(arr)) {
        const filteredArray = arr.filter(item => typeof item === 'string')
                                .map(item => item.toLowerCase());
        resolve(filteredArray);
      } else {
        reject('Input must be an array');
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Output: ['pizza', 'wings']
    .catch(error => console.error(error));
  
