# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_map_permission = client.preview.sync \
                            .services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                            .sync_maps("MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                            .sync_map_permissions("identity") \
                            .update(read=True, write=True, manage=True)

print(sync_map_permission.account_sid)