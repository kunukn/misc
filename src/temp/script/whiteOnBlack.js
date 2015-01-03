(function(d){
	var allElements = d.body.getElementsByTagName('*');
	var length = allElements.length;
	for (var i = 0; i < length; i++) {
		var element = allElements[i];
		element.style.setProperty('color', 'white', 'important');
		element.style.setProperty('background-color', 'black', 'important');
	}
})(document)
 