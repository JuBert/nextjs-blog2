const functions = require('firebase-functions');

// http request 1
exports.randomNumber = functions.region('europe-west1').https.onRequest((resquest, response) => {
    const number = Math.round(Math.random() * 100);
    response.send(number.toString());
})

// http request 2
exports.toGoogle = functions.region('europe-west1').https.onRequest((resquest, response) => {
    response.redirect('https://google.com');
})

// http callable function
exports.sayHello = functions.region('europe-west1').https.onCall((data, context) => {
    return `hello people`;
})