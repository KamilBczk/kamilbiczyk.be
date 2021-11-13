<?php $CONTACT = "active";?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kamil Biczyk - Fullstack dev.</title>
    <!-- reset.css -->
    <link rel="stylesheet" href="/assets/css/reset.css">
    <!-- style.css -->
    <link rel="stylesheet" href="/assets/css/style.css">
    <!-- header.css -->
    <link rel="stylesheet" href="/assets/css/header.css">
    <!-- footer.css -->
    <link rel="stylesheet" href="/assets/css/footer.css">
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" defer></script>
    <!-- header.js -->
    <script src="/assets/js/header.js" defer></script>
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap" rel="stylesheet">
    <!-- main.js -->
    <script src="/assets/js/main.js" defer></script>
    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/1dda56443c.js" crossorigin="anonymous"></script>
</head>
<body>
    <?php
        include 'assets/php_includes/header.php';
    ?>
    <?php
        include 'assets/php_includes/content-contact-page.html';
    ?>
    <?php
        include 'assets/php_includes/footer.html'
    ?>
</body>
</html>