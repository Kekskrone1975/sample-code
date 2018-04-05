// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Chat.V2.Service.Channel;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var invites = InviteResource.Read(
            pathServiceSid: "ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathChannelSid: "CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );

        foreach(var record in invites) {
           Console.WriteLine(record.Sid);
        }
    }
}