# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

phone_number = @client.lookups.phone_numbers('+15017122661')
  .fetch(add_ons: 'payfone_tcpa_compliance', add_ons_data: {
       "payfone_tcpa_compliance.right_party_contacted_date" => "20160101"
   })

puts phone_number.caller_name