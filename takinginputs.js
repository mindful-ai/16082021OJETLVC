
// npm install prompt
const prompt = require('prompt');

var username, email;

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
    username = result.username;
    email  = result.email;
});

function onErr(err) {
    console.log(err);
    return 1;
}

console.log('You have input: ', username, email);