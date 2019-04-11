<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "AC7fc616ac71b436d8cbf0cde6cac52a4f";
$token  = "show";
$twilio = new Client($sid, $token);

$phone_number = $twilio->lookups->v1->phoneNumbers("+15108675310")
                                    ->fetch(array("type" => "carrier"));

print($phone_number->carrier);
