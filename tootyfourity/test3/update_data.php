<?php
include('db.php');
if(isSet($_POST['content']))
{
$content=$_POST['content'];
mysql_query("insert into messages2(msg) values ('$content')");
$sql_in= mysql_query("SELECT msg,msg_id FROM messages order by msg_id desc");
$r=mysql_fetch_array($sql_in);
$msg=$r['msg'];
$msg_id=$r['msg_id'];
}

?>


<li class="bar<?php echo $msg_id; ?>">
<div align="left">
<span style=" padding:10px"><?php echo $msg; ?> </span>
<span class="delete_button"><a href="#" id="<?php echo $msg_id; ?>" class="delete_update">X</a></span>
</div>
</li>