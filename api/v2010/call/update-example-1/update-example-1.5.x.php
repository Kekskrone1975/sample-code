<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$call = $twilio->calls("CAe1644a7eed5088b159577c5802d8be38")
               ->update(array(
                            "method" => "POST",
                            "url" => "http://demo.twilio.com/docs/voice.xml"
                        )
               );

print($call->to);