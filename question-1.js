function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        try {
            const filtered = arr.filter(item => typeof item === 'string');
            const lowerCased = filtered.map(item => item.toLowerCase());
            resolve(lowerCased);
        } catch (error) {
            reject('Error: Unable to process array');
        }
    });
}

// Test
lowerCaseWords([1, 'APPLE', 'bAnAnA', true, 'Orange'])
    .then(result => console.log(result))
    .catch(error => console.log(error));
