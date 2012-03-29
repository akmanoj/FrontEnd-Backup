<?php
$mysql_hostname = "localhost";
$mysql_user = "root";
$mysql_database = "test2";
$prefix = "";
$bd = mysql_connect($mysql_hostname, $mysql_user) or die("Opps some thing went wrong");
mysql_select_db($mysql_database, $bd) or die("Opps some thing went wrong");
?>