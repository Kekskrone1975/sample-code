// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.hosted_numbers.authorizationDocuments
      .create({
         hostedNumberOrderSids: ['hostedNumberOrderSids'],
         addressSid: 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
         email: 'email'
       })
      .then(authorization_document => console.log(authorization_document.sid))
      .done();