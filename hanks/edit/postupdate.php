<!doctype html>
<html><!-- InstanceBegin template="/Templates/bknd.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8">
<title>Admin Area | Shannon Sawyer</title>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no; target-densityDpi=device-dpi" />
<link href="/styles/main.css" rel="stylesheet" type="text/css" />
<!-- <link href="/styles/small.css" rel="stylesheet" type="text/css" media="only screen and (max-device-width:414px)" /> -->
<link href="/styles/form.css" rel="stylesheet" type="text/css" />
<!-- favicons -->
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
<!-- web fonts -->
<script src="//use.typekit.net/ncn3zfh.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<!-- jQuery -->
<script type='text/javascript' src='../script/jquery-1.11.2.min.js'></script>
<!-- ckeditor -->
<script type='text/javascript' src='../ckeditor/ckeditor.js'></script>
<!-- InstanceBeginEditable name="head" -->

<!-- InstanceEndEditable -->
</head>

<body>
<!-- Contains the Header and middle section. Footer is outside container -->	
<div class="container">
<!-- Header -->		
<div id="banner" class="header">
<h1 id="mainTitle">Shannon Sawyer</h1>
<h3 style="color: red; text-align: center; margin: 0; padding: 0;">****** ADMIN AREA ******</h3>
</div>
<!-- Middle Section Wrapper -->
<div id="middle">
  <!-- Side Column Wrapper -->
  <div id="sidebar">
    <!-- Navigation Links -->
    <div id="links">
      <h3>Links</h3>
      <ul>
        <li><a href="/bknd/main.php" target="_self">Home [edit]</a></li>
        <li><a href="/bknd/services.php" target="_self">Services [edit]</a></li>
        <li><a href="/bknd/images.php">[Images]</a></li>
        <li><a href="http://www.shannonsawyer.com">[Main Site]</a></li>
      </ul>
    </div>
    <!-- /Navigation Links -->
    <!-- contact information -->
    <div id="sideinfo">
      <h3>Contact</h3>
      <p><a href="mailto:admin@ep3m.com">admin@ep3m.com</a><br />(915) 449-0104</p>
    </div>
    <!-- /contact information -->
  </div>
  <!--/Side Column Wrapper -->
  <!--Content Wrapper -->
  <div class="content">
    <!-- Welcome section -->
    <!-- InstanceBeginEditable name="content" -->
    
        <section>
			<?php
            $filename = $_POST["filename"];
            $input = $_POST["input"];
            if ($fp = fopen($filename , "w")) {
                fwrite($fp, $input);
                fclose($fp);
                echo $input;
				echo "<h3 style=\"text-align: center;\">Your site has been updated!</h3>";
            } else {
                echo "<h3 style=\"text-align: center;\">Oh no, something went wrong.</h3>";
                echo "<p style=\"text-align: center;\">Contact your admin for help.</p>";				
            }
            ?>
			<script>
            function goBack() {
                window.history.back();
            }
            </script>
            <button onclick="goBack()">Go Back</button>
        </section>
        
    <!-- InstanceEndEditable -->
  </div>
  <!--/Content Wrapper -->
</div>
<!-- /Middle Section Wrapper -->
</div>
<!-- /Container -->
<!--Footer --> 
<div class="footer">
<p style="color: red;">This is the admin area! | <a href="http://www.shannonsawyer.com">[go back to public site]</a></p>
</div>
<!--Footer --> 
</body>
<!-- InstanceEnd --></html>