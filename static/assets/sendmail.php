<?php

$to = "lucrenedjoumesi@gmail.com";

if (isset($_POST['name'])) {
    if (isset($_POST['mail'])) {
        if (isset($_POST['message'])) {
            $name = $_POST['name'];
            $mail = $_POST['mail'];
            $message = $_POST['message'];

            $headers = "From: Beacze\r\n".
                "Reply-To: " . $mail . "\r\n'" .
                "X-Mailer: PHP/" . phpversion();


            if (mail($to, $name, $mail, $message, $headers)) {
                echo '<p>Mail envoyé avec Succes!</p>';
            } else {
                echo '<p>Mail non envoyé!</p>';
            }
        }
    }
}

