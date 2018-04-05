// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .taskQueues('WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .realTimeStatistics()
  .fetch()
  .then(task_queue_real_time_statistics => console.log(task_queue_real_time_statistics.accountSid))
  .done();