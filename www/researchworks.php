<html lang="en">
<head>
<title>Charles Sampson Web page</title>
<link href="styles/layout.css" rel="StyleSheet" type="text/css">
<link href="styles/Menu.css" rel="StyleSheet" type="text/css">
<SCRIPT language=JavaScript type=text/javascript src="styles/dropdown.js"> </SCRIPT>
<SCRIPT language=JavaScript type=text/javascript src="styles/graph.js"> </SCRIPT>
</head>
<body>

<?php include("left_header.php"); ?>

<td class="content">

<h3> Research Works </h3>

<table>
<TR><TD align="center">
<select name="image_selector" onchange="jsDropDown('img_change',this.value)">
<option selected="yes" value="select">(select)</option>
<option value="mayors">Elected black mayors in Municipal Election</option>
<option value="municipalities">Minority Governed Municipalities</option>
</select>
</TD></TR>
<tr><TD height="10">
</TD></tr>
<tr><TD>
<img src="images/dropdown.png" id="img_change" height="400" width="500" />
</TD></tr>
<tr><TD height="10">
</TD></tr>
</table>

</td>

<?php include("right_footer.php"); ?>

</table>
</body>
</html>