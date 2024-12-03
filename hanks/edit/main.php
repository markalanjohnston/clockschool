<!doctype html>
<html>
<head>
<link href="/css/main.css" rel="stylesheet" type="text/css" />
<link href="/css/form.css" rel="stylesheet" type="text/css" />

<script type='text/javascript' src='../script/jquery-1.11.2.min.js'></script>
<script type='text/javascript' src='../ckeditor/ckeditor.js'></script>

</head>

<body>
<div class="container">
<div id="banner" class="header">
<h1 id="mainTitle">Clock</h1>
<h3 style="color: red; text-align: center; margin: 0; padding: 0;">****** ADMIN AREA ******</h3>
</div>
<div id="middle">
  <div id="sidebar">
    <div id="links">
      <h3>Links</h3>
      <ul>
        <li><a href="/bknd/main.php" target="_self">Home [edit]</a></li>
        <li><a href="/bknd/services.php" target="_self">Services [edit]</a></li>
      </ul>
    </div>

    <div id="sideinfo">
      <h3>Contact</h3>
    </div>

  </div>

  <div class="content">

  <section>
        <form action="postupdate.php" method="post" class="bootstrap-frm">
            <h1>Site Editor | Home Page
            <span>Modify your site instantly with the editor below!</span>
            </h1>
            
            <label style="text-align: center;">
            <textarea class="ckeditor" name="input">
            <?php echo file_get_contents("../txt/main.txt"); ?>
            </textarea>
            </label>
            
            <label style="text-align: center;">
            <input type="submit" class="button" value="Save Changes" />
        	</label>
            
            <input type="hidden" name="filename" value="../txt/main.txt">              
        </form>
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
</div>
<!--Footer --> 
</body>
<!-- InstanceEnd --></html>