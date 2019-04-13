<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 

<html lang="en">
<head>
<title>Charles Sampson Web page</title>
<link href="styles/layout.css" rel="StyleSheet" type="text/css">
<link href="styles/Menu.css" rel="StyleSheet" type="text/css">
<SCRIPT language=JavaScript type=text/javascript src="styles/dropdown.js"> </SCRIPT>
<link href="styles/tbstyle.css" rel="StyleSheet" type="text/css">
<SCRIPT language=JavaScript type=text/javascript src="styles/tbscript.js"> </SCRIPT>
</head>
<body>

<?php include("left_header.php"); ?>

<td class="content">
<h3> Grants </h3>

<?php
chdir("Files");
$file = 'grants.txt';
$fileHandle = fopen($file, 'r');
$fileData = file_get_contents($file);
$dataArray = explode("\n\n", $fileData);
$formatLine = '<tr align = "left" >';
$formatField = '<td> %s </td>';
$formatLineEnd = '</tr>' ;


echo '<div class="widget_tableDiv">';
echo '<table id="myTable">';
echo '<tbody class="scrollingContent">';

$amount = 0;

function strtflt($str) {
	$il = strlen($str);
	$flt = "";
	$cstr = "";
	for($i=0;$i<$il;$i++) {
		$cstr = substr($str, $i, 1);
		if(is_numeric($cstr) || $cstr == ".")
		$flt = $flt.$cstr;
	}
	return $flt;
}

foreach($dataArray as $eachDataArray) 
{ 
	$tabvar = 0;
	printf($formatLine);
	$eachLine = explode("\t", $eachDataArray);
	foreach($eachLine as $eachField) 
	{ 
		$tabvar++;
		$html = htmlspecialchars($eachField);
		printf($formatField, $html);
		if($tabvar == 3)
			$amount += floatval(strtflt($html));
	}
	printf($formatLineEnd);
	
} 

echo '<thead>';
echo '<tr>';
echo '<td>Title</td>';
echo '<td>Agency</td>';
echo '<td>Amount '."($".$amount.')</td>';
echo '<td>Direct Cost</td>';
echo '<td>Indirect Cost</td>';
echo '<td>Credit %</td>';
echo '<td>Role</td>';
echo '<td>Grant Status</td>';
echo '<td>Start Date</td>';
echo '<td>End Date</td>';
echo '</tr>';
echo '</thead>';
echo '</table>'; 
echo '</div>';

fclose($fileHandle);
?>

<script type="text/javascript">
// Calling function that creates the table widget
// Input parameters: 
//	* id of table
//	* width of table(examples: 500, 99%)
//	* Height of table 
//  * Array of sortable columns ('S' = String, 'N' = numeric, false = no sort )
initTableWidget('myTable',525,450,Array('S','S','N','N', 'N', 'N','S', 'S', false,false));
</script>
<BR/><BR/>
</td>

<?php include("right_footer.php"); ?>

</body>
</html>
