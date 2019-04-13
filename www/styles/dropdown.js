
function getElemWidth(Elem) {
	return document.getElementById(Elem).offsetWidth;
}

function getElementLeft(Elem) {
	var elem = document.getElementById(Elem);
	xPos = elem.offsetLeft;
	tempEl = elem.offsetParent;
	while (tempEl != null && tempEl.style.position !== "absolute") {
		xPos += tempEl.offsetLeft;
		tempEl = tempEl.offsetParent;
	}
	return xPos;
}

function getElementTop(Elem) {
	var elem = document.getElementById(Elem);
	yPos = elem.offsetTop;
	tempEl = elem.offsetParent;
	while (tempEl != null && tempEl.style.position !== "absolute") {
		yPos += tempEl.offsetTop;
		tempEl = tempEl.offsetParent;
	}
	return yPos;
}

function moveXY(obid, x, y) {
	obj = document.getElementById(obid).style;
	obj.top = y + 'px';
	obj.left = x + 'px';
}

function changeClass(Elem, myClass) {
	document.getElementById(Elem).className = myClass;
}

function changeBGColor(obid, colour) {
	var obj = document.getElementById(obid);
	if (obj) { obj.style.backgroundColor = colour; }
}

function changeBGImage(obid, imageURL) {
	var obj = document.getElementById(obid);
	if (obj && imageURL) { obj.style.backgroundImage = "url("+imageURL+")"; }
}

function changeBGOffset(obid, textureOffsetX, textureOffsetY) {
	var obj = document.getElementById(obid);
	if (obj) { obj.style.backgroundPosition = textureOffsetX+"px "+textureOffsetY+"px"; }
}

function changeBulletImage(target, source) {
	var imageObj;
	imageObj = eval('document.images.' + target);
	if (imageObj) imageObj.src = eval(source).src;
}

function bulletPoint(offURL, onURL) {	
	if (offURL && onURL) {
		this.offImage = new Image();
		this.offImage.src = offURL;
		this.onImage = new Image();
		this.onImage.src = onURL;
		this.URL = String(offURL);
	}
}

function menuOver(RandInt) {
	clearTimeout(timeOn[RandInt]);
}

function menuOut(RandInt, outColor, outTexture, textureOffsetXOut, textureOffsetYOut) {
	timeOn[RandInt] = setTimeout("hideAllMenus("+RandInt+", \""+outColor+"\", \""+outTexture+"\", "+textureOffsetXOut+", "+textureOffsetYOut+")", 500);
}

function showMenu(m_No, RandInt, overColor, overTextureURL, outColor, outTextureURL, textureOffsetXOut, textureOffsetYOut, textureOffsetXOver, textureOffsetYOver) {
	hideAllMenusTier(tier[RandInt][m_No]-1, RandInt, outColor, outTextureURL, textureOffsetXOut, textureOffsetYOut);
	var borderModSize = borderMod[RandInt];
	var borderModSizeIEHack = borderModIEHack[RandInt];
	changeBGColor('labelCell' + RandInt + m_No, overColor);
	changeBGImage('labelCell' + RandInt + m_No, overTextureURL);
	changeBGOffset('labelCell' + RandInt + m_No, textureOffsetXOver, textureOffsetYOver);
	changeClass('menuLink' + RandInt + m_No, onClass[RandInt][m_No]);
	if (labelBulletName[RandInt][m_No] != null) changeBulletImage('menuBullet' + RandInt + m_No, labelBulletName[RandInt][m_No] + '.onImage');
	menuActive[RandInt][m_No] = true;
	if (menuType[RandInt][m_No] != 'blank') {
		labelObj = 'labelCell'+RandInt+m_No;
		x = getElementLeft(labelObj) + borderModSize;
		y = getElementTop(labelObj) + document.getElementById(labelObj).offsetHeight - borderModSizeIEHack;
		if ( eval("menus"+RandInt+"[m_No].align == 'left'")   ) {
			x = x + 0;
		}
		if ( eval("menus"+RandInt+"[m_No].align == 'center'") ) {
			x = x + ((getElemWidth(labelObj)-getElemWidth('menu'+RandInt+m_No))/2);
		}
		if ( eval("menus"+RandInt+"[m_No].align == 'right'")  ) {
			x = x + ((getElemWidth(labelObj)-getElemWidth('menu'+RandInt+m_No)));
		}
		moveXY('menu' + RandInt + m_No, x, y);
		document.getElementById('menu' + RandInt + m_No).style.visibility = 'visible';
		return true;
	}
}

function showMenuSide(m_No, myTier, RandInt, overColor, overTextureURL, outColor, outTextureURL, textureOffsetXOut, textureOffsetYOut, textureOffsetXOver, textureOffsetYOver) {
	hideAllMenusTier(tier[RandInt][m_No]-1, RandInt, outColor, outTextureURL, textureOffsetXOut, textureOffsetYOut);
	var borderModSize = borderMod[RandInt];
	changeBGColor('labelCell' + RandInt + m_No, overColor);
	changeBGImage('labelCell' + RandInt + m_No, overTextureURL);
	changeBGOffset('labelCell' + RandInt + m_No, textureOffsetXOver, textureOffsetYOver);
	changeClass('menuLink' + RandInt + m_No, onClass[RandInt][m_No]);
	if (labelBulletName[RandInt][m_No] != null) changeBulletImage('menuBullet' + RandInt + m_No, labelBulletName[RandInt][m_No] + '.onImage');
	menuActive[RandInt][m_No] = true;
	if (menuType[RandInt][m_No] != 'blank') {
		labelObj = 'labelCell'+RandInt+m_No;
		x = getElementLeft(labelObj) + borderModSize;
		y = getElementTop(labelObj) - borderModSize;
		if ( eval("menus"+RandInt+"[m_No].align=='right'") ) 
			x += getElemWidth(labelObj) - borderModSize;
		else 
			x -= getElemWidth('menu'+ RandInt + m_No);
		moveXY('menu' + RandInt + m_No, x, y);
		document.getElementById('menu' + RandInt + m_No).style.visibility = 'visible';
		return true;
	}
}

function hideAllMenus(RandInt, outColor, outTexture, textureOffsetXOut, textureOffsetYOut) {
	for (var i = 1; i < (currentMenuNo[RandInt]+1); i++) {
		if(menuActive[RandInt][i] == true) hideMenu(i, RandInt, outColor, outTexture, textureOffsetXOut, textureOffsetYOut);
	}
}

function hideAllMenusTier(myTier, RandInt, outColor, outTexture, textureOffsetXOut, textureOffsetYOut) {
	for (var i = 1; i < (currentMenuNo[RandInt]+1); i++) {
		if( tier[RandInt][i] > myTier && menuActive[RandInt][i] == true) hideMenu(i, RandInt, outColor, outTexture, textureOffsetXOut, textureOffsetYOut);
	}
}

function hideMenu(m_No, RandInt, outColor, outTexture, textureOffsetXOut, textureOffsetYOut) {
	changeBGColor('labelCell' + RandInt + m_No, outColor);
	changeBGImage('labelCell' + RandInt + m_No , outTexture);
	changeBGOffset('labelCell' + RandInt + m_No , textureOffsetXOut, textureOffsetYOut);
	changeClass('menuLink' + RandInt + m_No, offClass[RandInt][m_No]);
	if (labelBulletName[RandInt][m_No] != null){
		changeBulletImage('menuBullet' + RandInt + m_No, labelBulletName[RandInt][m_No] + '.offImage');
	}
	menuActive[RandInt][m_No] = false;
	document.getElementById('menu' + RandInt + m_No).style.visibility = 'hidden';
	return true;
}

function pOn() { document.body.style.cursor = "pointer"; }
function pOff() { document.body.style.cursor = "default"; }

function menuBar(barName, orientation, RandInt) {
	this.numLabels = 0;
	this.orientation = orientation;
	this.labelText = new Array();
	this.offClass = 'MenuLabelLink'+RandInt;
	this.onClass = 'MenuLabelLinkOn'+RandInt;
	this.bulletAlign = 'left';

	this.addLabel = function(bullet, labelText, menuNo, bgcolorOut, bgcolorOver, textureURLOut, textureURLOver, textureOffsetXOut, textureOffsetYOut, textureOffsetXOver, textureOffsetYOver, labelURL, align, labelwidth, labelheight, target) {
		this.numLabels += 1;
		labelData = menuLabelData[RandInt][this.numLabels-1];
		tier[RandInt][menuNo] = 0;
		if (menuNo != null) {
			onClass[RandInt][menuNo] = this.onClass;
			offClass[RandInt][menuNo] = this.offClass;
			labelBulletName[RandInt][menuNo] = bullet;
		}
		
		temp = '<td id="labelCell' + RandInt + menuNo + '" bgcolor="' + bgcolorOut + '" style=" ';
		temp += (labelwidth ? 'width:'+labelwidth+'; ' : '') + (labelheight ? 'height:'+labelheight+'; ' : '');
		temp += (textureURLOut ? ' background-image: url('+textureURLOut+'); background-position: '+textureOffsetXOut+'px '+textureOffsetYOut+'px;' : '') + '"';
		
		temp += ' onmouseout="pOff(); menuOut('+RandInt+', \''+bgcolorOut+'\', \''+textureURLOut+'\', '+textureOffsetXOut+', '+textureOffsetYOut+');" ';
		temp += ' onmouseover="pOn(); menuOver('+RandInt+'); ';
		temp += (this.orientation == 'vertical' ? 'return !showMenuSide(' + menuNo + ', tier['+RandInt+'][' + menuNo + '],' : 'return !showMenu(' + menuNo + ', ');
		temp += RandInt+', \''+bgcolorOver+'\', \''+textureURLOver+'\', \''+bgcolorOut+'\', \''+textureURLOut+'\', '+textureOffsetXOut+', '+textureOffsetYOut+', '+textureOffsetXOver+', '+textureOffsetYOver+'); " ';

		if (labelURL) {
			if (target == "new") {
				temp += ' onclick="window.open(\'' + labelURL + '\');"';
			}
			else {
				temp += ' onclick="document.location.href=\'' + labelURL + '\';"';
			}
		}
		temp += '><div style="text-align: '+align+'; " class="' + this.offClass + '" id="menuLink' + RandInt + menuNo +'">' + labelText + '</div></td>';
		this.labelText[this.numLabels] = new String(temp);
	}
	
	this.writeMenuBar = function() {
		menuBarStr =  '<div id="' + barName + RandInt + '">';
		menuBarStr += '<table class="menuLabelTable'+RandInt+'" border="0" cellpadding="0" cellspacing="0">';
		if (this.orientation == 'vertical') {
			for (var i = 0; i < this.numLabels; i++) {
				menuBarStr += "<tr>" + this.labelText[i+1] + "</tr>";
			}
		} else {
			menuBarStr += '<tr>';
			for (var i = 0; i < this.numLabels; i++) {
				menuBarStr += this.labelText[i+1];
			}
			menuBarStr +=  '</tr>';
		}
		menuBarStr += '</table></div>';
		document.write(menuBarStr);
	}
}

function menu(orientation, RandInt) {
	currentMenuNo[RandInt] += 1;
	this.numItems = 0;
	this.itemText = new Array();
	this.align = 'left';
	this.offClass = 'MenuItemLink' + RandInt;
	this.onClass = 'MenuItemLinkOn' + RandInt;
	this.orientation = orientation;
	this.bulletAlign = 'left';

	this.addItem = function(bullet, itemText, menuNo, bgcolorOut, bgcolorOver, textureURLOut, textureURLOver, textureOffsetXOut, textureOffsetYOut, textureOffsetXOver, textureOffsetYOver, itemURL, align, target) {
		this.numItems += 1;
		labelData = menuLabelData[RandInt][currentMenuNo[RandInt]-1];
		var tempId = currentMenuNo[RandInt] + '_' + this.numItems;
		if (menuNo != null) {
			tier[RandInt][menuNo] = tier[RandInt][currentMenuNo[RandInt]] + 1;
			labelBulletName[RandInt][menuNo] = bullet;
		}
		
		temp = '';
		if (menuNo != null) {
			temp += '<td id="labelCell' + RandInt + menuNo + '" bgcolor="' + bgcolorOut + '" valign="middle" ';
		} else {
			temp += '<td id="itemCell' + RandInt + tempId + '" bgcolor="' + bgcolorOut + '" valign="middle" ';
		}
		if (textureURLOut) { temp += 'style="background-image: url('+textureURLOut+'); background-position: '+textureOffsetXOut+'px '+textureOffsetYOut+'px; " '; }

		if (target == "new") {
			temp += ' onclick="window.open(\'' + itemURL + '\');" ';
		} else {
			temp += ' onclick="document.location.href=\'' + itemURL + '\';" ';
		}

		if (menuNo != null) {
			if (this.orientation =='vertical') temp += ' onmouseover="pOn(); menuOver('+RandInt+'); return !showMenuSide(' + menuNo + ', tier['+RandInt+'][' + menuNo + '], '+RandInt+', \''+bgcolorOver+'\', \''+textureURLOver+'\', '+textureOffsetXOut+', '+textureOffsetYOut+', '+textureOffsetXOver+', '+textureOffsetYOver+'); " ';
			else temp += ' onmouseover="pOn(); menuOver('+RandInt+'); return !showMenu(' + menuNo + ', '+RandInt+', \''+bgcolorOver+'\', \''+textureURLOver+'\', \''+textureURLOver+'\', '+textureOffsetXOut+', '+textureOffsetYOut+', '+textureOffsetXOver+', '+textureOffsetYOver+'); " ';
			temp += ' onmouseout="pOff(); menuOut('+RandInt+', \''+labelData[0]+'\', \''+labelData[2]+'\', '+labelData[4]+', '+labelData[5]+'); "';
		} else {
			temp += ' onmouseover="pOn(); changeClass(\'menuLink'+RandInt + tempId + '\',\'' + this.onClass + '\'); hideAllMenusTier(tier['+RandInt+'][' + currentMenuNo[RandInt] + ', '+RandInt+'], '+RandInt+', \''+bgcolorOut+'\', \''+textureURLOut+'\', '+textureOffsetXOut+', '+textureOffsetYOut+'); menuOver('+RandInt+');  changeBGColor(\'itemCell' + RandInt + tempId + '\', \'' + bgcolorOver + '\'); changeBulletImage(\'menuItemBullet' + RandInt + tempId + '\', \'' + bullet + '.onImage\'); changeBGImage(\'itemCell\' + \''+RandInt+'\' + \''+tempId+'\',  \''+textureURLOver+'\'); changeBGOffset(\'itemCell\' + \''+RandInt+'\' + \''+tempId+'\',  '+textureOffsetXOver+', '+textureOffsetYOver+'); " onmouseout="pOff(); menuOut('+RandInt+', \''+labelData[0]+'\', \''+labelData[2]+'\', '+labelData[4]+', '+labelData[5]+'); changeClass(\'menuLink' + RandInt + tempId + '\',\'' + this.offClass + '\'); changeBGColor(\'itemCell' + RandInt + tempId + '\', \'' + bgcolorOut + '\'); changeBulletImage(\'menuItemBullet' + RandInt + tempId + '\', \'' + bullet + '.offImage\'); changeBGImage(\'itemCell\' + \''+RandInt+'\' + \''+tempId+'\',  \''+textureURLOut+'\'); changeBGOffset(\'itemCell\' + \''+RandInt+'\' + \''+tempId+'\',  '+textureOffsetXOut+', '+textureOffsetYOut+'); "';
		}
		temp += '><div style="text-align: '+align+';" class="' + this.offClass + '" id="menuLink' + RandInt + (menuNo != null ? menuNo : tempId) + '">';

		if (bullet) {
			if (menuNo != null) temp += '<nobr><img src="' + eval(bullet + ".URL") + '" border="0" align="' + this.bulletAlign + '" id="menuBullet' + RandInt + menuNo + '" name="menuBullet' + menuNo + '">';
			else temp += '<nobr><img src="' + eval(bullet + ".URL") + '" border="0" align="' + this.bulletAlign + '" id="menuItemBullet' + RandInt + tempId + '" name="menuItemBullet' + tempId + '">';
		}
		temp += itemText + '&nbsp;</nobr></div></td>';		
		this.itemText[this.numItems] = new String(temp);
	}
	
	this.writeMenu = function() {
		if (this.numItems == 0) menuType[RandInt][currentMenuNo[RandInt]] = 'blank';
		else menuType[RandInt][currentMenuNo[RandInt]] = 'default';
		var menuStr = '<div id="menu' + RandInt + currentMenuNo[RandInt] + '" name="menu' + currentMenuNo[RandInt] + '" class="menuDef'+RandInt+'" >';
		menuStr += '<table border="0" cellpadding="0" cellspacing="0" class="menuTable'+RandInt+'" >';
		if (this.orientation == 'vertical') {
			for (var count = 0; count < this.numItems; count++) {
				menuStr += "<tr>" + this.itemText[count+1] + "</tr>";
			}
		} else {
			menuStr += '<tr>';
			for (var count = 0; count < this.numItems; count++) {		
				menuStr += this.itemText[count+1];
			}
			menuStr +=  '</tr>';
		}
		menuStr += '</table></div>';
		document.write(menuStr);
	}
}
