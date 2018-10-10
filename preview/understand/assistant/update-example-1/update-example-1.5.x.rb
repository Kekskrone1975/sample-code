# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

assistant = @client.preview
                   .understand
                   .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                   .update(style_sheet: {
                        'say_voice' => 'Polly.Joanna'
                    })

puts assistant.friendly_name
