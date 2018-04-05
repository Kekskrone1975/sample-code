// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Notification;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Notification notification = 
            Notification.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setBody("Hello Bob")
            .setToBinding(
                Promoter.listOfOne(
                    "{\"binding_type\":\"sms\",\"address\":\"+15555555555\"}"))
            .setIdentity(Promoter.listOfOne("identity"))
            .create();

        System.out.println(notification.getSid());
    }
}