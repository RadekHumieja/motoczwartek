<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>motoczwartek</title>
</head>

<body>
    <?php
    $question1Yes = $_POST["answer-yes"];
    $question1No = $_POST["answer-no"];
    $question2Time = $_POST["answer-time"];
    $question2Shame = $_POST["answer-shame"];
    $question2Other = $_POST["answer-other"];
    $question3Very = $_POST["answer-very"];
    $question3Attractive = $_POST["answer-attractive"];
    $question3Neutral = $_POST["answer-neutral"];
    $question3Unattractive = $_POST["answer-unattractive"];
    $message = $_POST["msg"]; // textarea name="msg"

    $subject = "Wiadomość z formularza na stronie motoczwartek.pl";
    $to = "konkursy@motoczwartek.pl"; // adres, na który ma zostać wysłany mail

    $txt = "Czy bierzesz udział w konkursie Duet Doskonały? " 
    . "\r\n"."Tak: " . $question1Yes 
    . "\r\n" . "Nie: " . $question1No 
    ."\r\n"
    ."\r\n"
    . "\r\n" . "Jeśli odpowiedziałeś/aś Nie, czy możesz podzielić się powodem swojej decyzji?" 
    ."\r\n" ."Brak czasu: ".$question2Time
    ."\r\n" ."Wstydzę się: ".$question2Shame
    ."\r\n" ."Inny powód: ".$question2Other
    ."\r\n"
    ."\r\n"
    ."\r\n" ."Jak oceniasz atrakcyjność konkursu Duet Doskonały?"
    ."\r\n" . "Bardzo atrakcyjny: ".$question3Very
    ."\r\n" . "Atrakcyjny: ".$question3Attractive
    ."\r\n" . "Neutralny: ".$question3Neutral
    ."\r\n" . "Nieatrakcyjny: ".$question3Unattractive
    ."\r\n"
    ."\r\n"
    . "Co moglibyśmy poprawić w przyszłych edycjach konkursu?: " 
    ."\r\n"
    . $message;

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