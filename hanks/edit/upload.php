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
        $target_dir = "../images/uploads/";
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                // echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "<h3 style=\"color: red;\">File is not an image.</h3>";
                $uploadOk = 0;
            }
        }
        // Check if file already exists
        if (file_exists($target_file)) {
            echo "<h3 style=\"color: red;\">Sorry, file already exists.</h3>";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 5000000) {
            echo "<h3 style=\"color: red;\">Sorry, your file is too large. 5MB MAX PLEASE.</h3>";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "JPG" && $imageFileType != "png" && $imageFileType != "PNG" && $imageFileType != "jpeg"
        && $imageFileType != "JPEG" && $imageFileType != "gif" && $imageFileType != "GIF" ) {
            echo "<h3 style=\"color: red;\">Sorry, only JPG, JPEG, PNG & GIF files are allowed.<?h3>";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "<h3 style=\"color: red;\">Sorry, your file was not uploaded.</h3>";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                echo "<h3 style=\"color: green; text-align: center;\">The file " .
				basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.</h3>";
				
				$filename = "filelist.txt";
				$input = "<h3 style=\"text-align: center;\">/images/uploads/" .
					basename( $_FILES["fileToUpload"]["name"]) .
					"</h3>" . "\r\n" . "<img style=\"width: 150px;\" src=\"../images/uploads/" .
					basename( $_FILES["fileToUpload"]["name"]) . "\" />" . "<br/>" .
					"\r\n";
				$fp = fopen($filename , "a");
				fwrite($fp, $input);
				fclose($fp);			
            } else {
                echo "<h3 style=\"color: red;\">Sorry, there was an error uploading your file.</h3>";
            }
        }
		?>

        <h1>Image Preview:</h1>
		<p>
        <?php 
		echo "<img style=\"width: 250px;\" src=\"../images/uploads/" . basename( $_FILES["fileToUpload"]["name"]) . "\" />";
		?>
        </p>
        <h3 style="color: green; text-align: center;">PAGE WILL AUTO-RELOAD<BR /><a href="images.php">[OR CLICK HERE]</a></h3>
        </section>
          <script type="text/JavaScript">
             setTimeout("location.href = 'images.php';", 5000);
         </script>

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