<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>motoczwartek</title>
</head>

<body>
    <?php
$name = $_POST["answer-yes"]; // input name="name"
$from = $_POST["answer-no"]; // input name="email"
$subject = "Wiadomość z formularza na stronie motoczwartek.pl";
$to = "konkursy@motoczwartek.pl"; // adres, na który ma zostać wysłany mail
$message = $_POST["msg"]; // textarea name="msg"

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location:http://localhost:3000/Desktop/nVc/MotoCzwartek/www.motoczwartek.pl/index.html?mail_status=sent"); // jeśli formularz jest na stronie głównej, zmień na index.html
    exit;
} else {
    header("Location:http://localhost:3000/Desktop/nVc/MotoCzwartek/www.motoczwartek.pl/index.html?mail_status=error"); // jeśli formularz jest na stronie głównej, zmień na index.html
    exit;
}

    ?>

</body>

</html>