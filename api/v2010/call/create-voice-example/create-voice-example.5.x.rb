# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

call = @client.calls
  .create(
     from: '+14158141829',
     to: '+16518675310',
     url: 'http://twimlets.com/message?Message%5B0%5D=Hello%20from%20your%20subaccount'
   )

puts call.sid