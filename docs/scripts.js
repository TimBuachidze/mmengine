// Все значения в пикселях в комментариях актуальны для монитора, на котором велась разработка!
var temp;
var bodyblockWidth = screen.width - 67;
var pressedButton = 'button-1';
var currentContent = 'about';

temp = document.getElementsByClassName('bodyblock');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.width = bodyblockWidth + "px";
	temp[i].style.marginTop = generateNominalPixels(10);
};

document.getElementById('header').style.height = generateNominalPixels(200);
document.getElementById('header-gear-large').style.width = generateNominalPixels(200);
document.getElementById('header-gear-large').style.height = generateNominalPixels(200);
document.getElementById('header-gear-small').style.width = generateNominalPixels(120);
document.getElementById('header-gear-small').style.height = generateNominalPixels(120);
document.getElementById('header-gear-small').style.marginTop = generateNominalPixels(80);
document.getElementById('header-gear-small').style.marginLeft = generateNominalPixels(110);
document.getElementById('header-text-mm').style.fontSize = generateNominalPixels(80);
document.getElementById('header-text-engine').style.fontSize = generateNominalPixels(40);
document.getElementById('header-text-engine').style.paddingLeft = generateNominalPixels(10);
document.getElementById('header-text-describe').style.fontSize = generateNominalPixels(30);
document.getElementById('header-text-describe').style.paddingLeft = generateNominalPixels(40);
document.getElementById('menuline').style.borderSpacing = generateNominalPixels(10);

temp = document.getElementsByClassName('button');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.height = generateNominalPixels(30);
	temp[i].style.padding = generateNominalPixels(10);
	temp[i].style.fontSize = generateNominalPixels(20);
};

temp = document.getElementsByClassName('transmission');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.paddingTop = generateNominalPixels(15);
	temp[i].style.paddingBottom = generateNominalPixels(15);
	temp[i].style.borderSpacing = generateNominalPixels(20) + ' ' + generateNominalPixels(5);
};

document.getElementById('speaker-peasant').style.height = generateNominalPixels(178);
document.getElementById('speaker-footman').style.height = generateNominalPixels(251);
document.getElementById('speaker-rifleman').style.height = generateNominalPixels(169);
document.getElementById('speaker-jaina').style.height = generateNominalPixels(305);
document.getElementById('speaker-cell-jaina').style.width = generateNominalPixels(250 * 0.8);
document.getElementById('speaker-archmage').style.height = generateNominalPixels(218);
document.getElementById('speaker-cell-archmage').style.width = generateNominalPixels(272 * 0.8);

temp = document.getElementsByClassName('speech-cell');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.fontSize = generateNominalPixels(30);
	temp[i].style.lineHeight = generateNominalPixels(35);
};

temp = document.getElementsByClassName('speechtext');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.paddingTop = generateNominalPixels(15);
	temp[i].style.paddingBottom = generateNominalPixels(15);
};

temp = document.getElementsByClassName('speechtext-left');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.paddingLeft = generateNominalPixels(25);
	temp[i].style.paddingRight = generateNominalPixels(25);
	temp[i].style.borderRadius = generateNominalPixels(35) + ' ' + generateNominalPixels(35) + ' ' + generateNominalPixels(35) + ' ' + '0px';
};


temp = document.getElementsByClassName('speechtext-right');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.paddingLeft = generateNominalPixels(50);
	temp[i].style.paddingRight = generateNominalPixels(25);
	temp[i].style.borderRadius = generateNominalPixels(35) + ' ' + generateNominalPixels(35) + ' ' + '0px' + ' ' + generateNominalPixels(35);
};

temp = document.getElementsByClassName('feature-icon');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.width = generateNominalPixels(30);
	temp[i].style.height = generateNominalPixels(30);
	temp[i].style.marginTop = generateNominalPixels(4);
};

temp = document.getElementsByClassName('feature-text');
for ( i = 0; i < temp.length; i++ ) {
	temp[i].style.fontSize = generateNominalPixels(22);
};

document.getElementById('footer').style.height = generateNominalPixels(200);

function pressButton(whichButton) {
	var buttonName;
	var contentName;
	if (whichButton == 1) {
		buttonName = 'button-1';
		contentName = 'about';
	}
	else if (whichButton == 2) {
		buttonName = 'button-2';
		contentName = 'download';
	}
	else if (whichButton == 3) {
		buttonName = 'button-3';
		contentName = 'manual';
	}
	else if (whichButton == 4) {
		buttonName = 'button-4';
		contentName = 'mods';
	}
	if (buttonName != pressedButton) {
		document.getElementById(pressedButton).classList.remove("button-pressed");
		document.getElementById(buttonName).classList.add("button-pressed");
		document.getElementById(currentContent).style.display = 'none';
		document.getElementById(contentName).style.display = 'block';
		pressedButton = buttonName;
		currentContent = contentName;
		if (pressedButton == 'button-4') {
			document.getElementById('header-text').style.display = 'none';
			document.getElementById('header').style.background = 'url("images/footer-units.png") right bottom/auto 90% no-repeat';
		}
		else {
			document.getElementById('header-text').style.display = 'table-cell';
			document.getElementById('header').style.background = 'url(images/background.png) repeat repeat fixed';
		}
	}
}

function generateNominalPixels(count) {
	return ((bodyblockWidth / 4.85) / (200 / count)) + "px"
}
