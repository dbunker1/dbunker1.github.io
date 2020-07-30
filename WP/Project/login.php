<?php
ob_start();
session_start();
$msg = '';

    if (isset($_POST['login']) && !empty($_POST['usernameinput']) && !empty($_POST['password'])) {
       if ($_POST['username'] == 'aaron' && $_POST['pass'] == 'password') {
         $_SESSION['valid'] = true;
         $_SESSION['timeout'] = time();
         $_SESSION['usernameinput'] = 'aaron';
         header("../USERHOME/siuserhome.html");
       }

       else {
         $msg = 'Wrong username or password';
       }
   }
?>
