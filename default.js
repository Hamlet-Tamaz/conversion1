var body = document.body;
var nav = document.querySelector('nav ul')


// nav.addEventListener('mouseover', hover)
// nav.addEventListener('mouseout', hoverStop)

body.addEventListener('click', clear)

function clear(e) {
	var tabs = document.querySelectorAll('.drop, .drop2')
	debugger

	tabs.forEach(function(el, i) {
		el.style.display = 'none';
	})


}



nav.addEventListener('click', drop, true)

function drop(e) {
	var drop = e.target.nextElementSibling;
	var tabs = document.querySelectorAll('.drop, .drop2');
	debugger
	if (!nav.contains(e.target)  ) {
		debugger
		clear(this);
	}

	if (e.target.nodeName == "A") {	
		if (drop.style.display=='block') {
			drop.style.display = 'none';
		}
		else {
			drop.style.display = 'block';		
		}
	}
	else {
		tabs.forEach(function(el, i) {
			el.style.display = 'none';
		})
	}

}