// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.studio.flows('FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .engagements('FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .engagementContext()
      .fetch()
      .then(engagement_context => console.log(engagement_context.accountSid))
      .done();