// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.applications
      .create({
         friendlyName: 'Phone Me',
         voiceMethod: 'GET',
         voiceUrl: 'http://demo.twilio.com/docs/voice.xml'
       })
      .then(application => console.log(application.sid))
      .done();