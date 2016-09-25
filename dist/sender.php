<? 
 //если проблемы с кодировкой файла сохранить его в другой
    $name = $_POST['name']; // пришедшие переменные
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $town = $_POST['town'];
    $company = $_POST['company'];
    $companytype = $_POST['companytype'];
    $worktype = $_POST['worktype'];
    $text = $_POST['text'];
    
    $db = new SQLite3('webinar.db');
    if ($db) {
        $db->exec("INSERT INTO
            Information(Name,Question,Email,Telefon)
            VALUES
            ('$name','$text','$email','$phone')");
    }

    //$to = 'an.kuznetsov@itexpert.ru';
    $to = 'i.sukhov@itexpert.ru,info@itexpert.ru,o.fomina@itexpert.ru,kab@itexpert.ru,a.rybalkin@itexpert.ru';  
    $subject = 'WEBINAR';
    $body = "Mail:<br><br>          
            name: <strong>$name</strong><br>   
            E-mail: <strong>$email</strong><br>
            phone: <strong>$phone</strong><br>  
            town: <strong>$town</strong><br>  
            company: <strong>$company</strong><br>  
            company type: <strong>$companytype</strong><br>  
            worktype type: <strong>$worktype</strong><br>  
            text: <strong>$text</strong><br>  
            ";

    $headers = array(); 
    $headers[] = "MIME-Version: 1.0"; 
    $headers[] = "Content-type: text/html; charset=utf-8"; 
    $headers[] = "Subject: {$subject}"; 
    $headers[] = "From: info@itexpert.ru";  
    $headers[] = "X-Mailer: PHP/".phpversion();

    $user_subject = 'Регистрация на вебинар "Мастерская проектирования ИТ-решений" ';
    $user_body = "     
    <p>Вы успешно зарегистрировались на серию вебинаров 'Мастерская проектирования ИТ-решений'.<br><br>
        Первый вебинар из серии состоится 28 СЕНТЯБРЯ в 17.00. Ссылку для подключению к вебинару мы направим вам за день до вебинара.<br><br>
        По всем вопросам обращайтесь по телефону +7 (495) 981-57-10  или эл. почте info@itexpert.ru.</p>";
       
    mail($to,  $subject, $body, implode("\r\n", $headers));
    mail($email,  $user_subject, $user_body, implode("\r\n", $headers));
   
?>