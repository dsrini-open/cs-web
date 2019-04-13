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

<h3> Teaching Philosophy </h3>

<?php
chdir("Files");
$file = 'philosophy.txt';
$fileHandle = fopen($file, 'r');
$data = file_get_contents($file);
$dataArray = explode("\n", $data);
$format = '<tr><td> </td><td align = "justify"> %s </td></tr><tr><td height=10px></td></tr>' ;

echo '<table width="600">';

foreach($dataArray as $eachDataArray) 
{ 
	$html = htmlentities($eachDataArray,ENT_QUOTES);
	printf($format, $html); 
} 
echo '</table>'; 
echo '<br />';
fclose($fileHandle);
?>
</td>

<?php include("right_footer.php"); ?>

</table>
</body>
</html>