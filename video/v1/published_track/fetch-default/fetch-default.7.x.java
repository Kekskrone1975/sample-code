// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.video.v1.room.participant.PublishedTrack;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        PublishedTrack publishedTrack = PublishedTrack.fetcher(
                "RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            .fetch();

        System.out.println(publishedTrack.getSid());
    }
}