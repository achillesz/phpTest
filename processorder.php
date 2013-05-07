<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>BOB 的表单</title>
</head>
<body>
<h1>Bob 's Auto Parts </h1>
<h2>Order Results</h2>
<p>Order processed.</p>
<?php
    $tireqty = $_POST['tireqty'];
    $oilqty = $_POST['oilqty'];
    $sparkqty = $_POST['sparkqty'];
   // echo $tireqty.$oilqty.$sparkqty;
    $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
    echo $DOCUMENT_ROOT;
    @ $fp = fopen("orders.txt","ab",true);
    if(!$fp){
        echo 'no open';
        exit;
    }
    $outputstring = "$tireqty $oilqty $sparkqty";
    echo $outputstring;
    echo strlen($outputstring);
    fwrite($fp,$outputstring,strlen($outputstring));
    flock($fp,LOCK_UN);
    fclose($fp);
?>
</body>
</html>