<div class="header_top">
    <header>
        <div class="logo">
            <a href="index.html">
                <div class="logo_img"></div>
                <div class="logo_text"><h1>Kamil B</h1></div>
                <div class="to_show"><h1>iczyk</h1></div>
                <div class="point"><h1>.</h1></div>
            </a>
        </div>
        <nav class="top_nav">
            <ul>
                <li><a href="index.php" <?php if (isset($INDEX)) {echo "class=active";}?>>accueil</a></li>
                <li><a href="about.php" <?php if (isset($ABOUT)) {echo "class=active";}?>>à propos</a></li>
                <li><a href="#" <?php if (isset($WORKS)) {echo "class=active";}?>>travaux</a></li>
                <li><a href="contact.php" <?php if (isset($CONTACT)) {echo "class=active";}?>>Contact</a></li>
            </ul>
        </nav>
        <div class="blob">
            <div class="blob-btn"></div>
            <div class="blob-btn"></div>
            <div class="blob-btn"></div>
            <div class="blob-btn"></div>
        </div>
        <div class="btn-blob"></div>
    </header>
</div>