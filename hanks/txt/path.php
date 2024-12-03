<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>PATH</title>
</head>

<body>
<?php
$dir = dirname(__FILE__);
echo "<p>Full path to this dir: " . $dir . "</p>";
echo "<p>Full path to a .htpasswd file in this dir: " . $dir . "/.htpasswd" . "</p>";
?>
</body>
</html>