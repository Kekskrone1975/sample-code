// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.addresses('ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .update({customerName: 'Customer 456', street: '2 Hasselhoff Lane'})
      .then(address => console.log(address.sid))
      .done();