# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

outgoing_caller_id = client \
    .outgoing_caller_ids('PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .fetch()

print(outgoing_caller_id.friendly_name)
