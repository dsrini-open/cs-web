<html lang="en">
<head>
<title>Charles Sampson Web page</title>
<link href="styles/layout.css" rel="StyleSheet" type="text/css">
<link href="styles/Menu.css" rel="StyleSheet" type="text/css">
<SCRIPT language=JavaScript type=text/javascript src="styles/dropdown.js"> </SCRIPT>

</head>
<body>

<?php include("left_header.php"); ?>

<td class="content">
<h3> Personal </h3>
<?php
chdir("Files");
$file = 'intro.txt';
$fileHandle = fopen($file, 'r');
$data = file_get_contents($file);
$dataArray = explode("\n\n", $data);
$format = '<tr><td align = "justify"> %s </td></tr><tr><td height=10px></td></tr>' ;

echo '<table width=600>';
//echo '<caption> About Charles Sampson </caption>';

foreach($dataArray as $eachDataArray) 
{ 
	//$html = substr_replace($eachDataArray,'\n',strlen($eachDataArray));
	printf($format,$eachDataArray);// $html); 
} 
echo '</table>'; 
echo '<br/>';
fclose($fileHandle);
?>
</td>

<?php include("right_footer.php"); ?>

</body>
</html>