// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .taskQueues
      .create({
         assignmentActivitySid: 'WA21d51f4c72583766988f9860de3e130a',
         friendlyName: 'English',
         reservationActivitySid: 'WAea296a56ebce4bfbff0e99abadf16934',
         targetWorkers: `languages HAS "english"`
       })
      .then(task_queue => console.log(task_queue.sid))
      .done();