myLayers = Framer.Importer.load("imported/MainNav@1x")

var scroll = new ScrollComponent({
	width: 1200,
	height: 400,
	scrollHorizontal: false,
	mouseWheelEnabled: true
});

scroll.onScroll( function() {
	if(scroll.scrollY > 50) {
		minNav();
	} else {
		maxNav();
	}
});

for (layerName in myLayers) {
	var layer = myLayers[layerName]

	layer.superLayer = scroll.content;
}

/*
==============================================================
	Hide small components
==============================================================
*/

myLayers['SmallNavBar'].y = -50;
myLayers['SmallLogo'].y = -50;
myLayers['MenuIcon'].y = -50;

/*
==============================================================
	Min and Max Nav
==============================================================
*/

var maxNav = function() {
	showLogo();
	showLinks();
	hideSmallMenu();
	hideSmallLogo();
	hideMenuIcon();
}

var minNav = function() {
	hideLogo();
	hideLinks();
	showSmallMenu();
	showSmallLogo();
	showMenuIcon();
}


/*
==============================================================
	Show and Hide Logo
==============================================================
*/
var hideLogo = function() {
	myLayers['Logo'].animate({
		properties: {
			x: -400
		},
		time: .02
	});
}

var showLogo = function() {
	myLayers['Logo'].animate({
		properties: {
			x: 10
		},
		time: .07
	});
}


/*
==============================================================
	Show and Hide Small Menu
==============================================================
*/
var hideSmallMenu = function() {
	myLayers['SmallNavBar'].animate({
		properties: {
			y: -100
		},
		time: .1
	});
}

var showSmallMenu = function() {
	myLayers['SmallNavBar'].animate({
		properties: {
			y: scroll.scrollY
		},
		time: .1
	});
}

/*
==============================================================
	Show and Hide Small Logo
==============================================================
*/
var hideSmallLogo = function() {
	myLayers['SmallLogo'].animate({
		properties: {
			y: -100
		},
		time: .02
	});
}

var showSmallLogo = function() {
	myLayers['SmallLogo'].animate({
		properties: {
			y: scroll.scrollY
		},
		time: .1
	});
}

/*
==============================================================
	Show and Hide Menu Icon
==============================================================
*/
var hideMenuIcon = function() {
	myLayers['MenuIcon'].animate({
		properties: {
			y: scroll.scrollY+10,
			x: 1300
		},
		time: .02
	});
}

var showMenuIcon = function() {
	myLayers['MenuIcon'].animate({
		properties: {
			y: scroll.scrollY+10,
			x: 1150
		},
		time: .06
	});
}

/*
==============================================================
	1. Show and Hide Links
	2. Animate Links
==============================================================
*/


//	1. Show hide Links


var showLinks = function() {
	var w = 188;
	animateLink('Nav1', 450);
	animateLink('Nav2', 450 + (w*1));
	animateLink('Nav3', 450 + (w*2));
	animateLink('Nav4', 450 + (w*3));
}

var hideLinks = function() {
	animateLink('Nav1', 1700);
	animateLink('Nav2', 1700);
	animateLink('Nav3', 1700);
	animateLink('Nav4', 1700);
}

//	2. Animate Links

var animateLink = function(layer, pos) {
	myLayers[layer].animate({
		properties: {
			x: pos
		},
		time: .09
	})
}