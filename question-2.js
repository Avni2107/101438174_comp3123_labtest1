function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved: Promise has been resolved');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Rejected: Promise has been rejected');
        }, 500);
    });
}

// Test
resolvedPromise().then(message => console.log(message));
rejectedPromise().catch(error => console.log(error));
