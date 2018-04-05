# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

binding = @client.notify.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        .bindings
                        .create(
                           address: 'device_token',
                           binding_type: 'apn',
                           identity: '00000001',
                           endpoint: 'endpoint_id',
                           tag: 'new user'
                         )

puts binding.sid