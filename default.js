var body = document.body,
	nav = document.querySelector('nav ul'),
	burger = document.querySelector('#burger');
debugger

nav.addEventListener('click', drop, false)
burger.addEventListener('click', burger)

function clear(e, t) {
	var tabs = document.querySelectorAll('.drop, .drop2');
	// var drops = document.querySelectorAll('nav ul div');

	var inTabs = false,
		disp = false;

	var inNav = nav.contains(e.target)


	tabs.forEach(function(el, i) {
		if (el.contains(e.target)) {
			inTabs = true;
		}
		if (el.style.display != '' && el.style.display != 'none') {
			disp = true;
		}
	})

	if ((!inTabs && disp)  ) {
		tabs.forEach(function(el, i) {
			el.style.display = 'none';
		})	
	}
}



function drop(e) {
	var drop = e.target.nextElementSibling,
		tabs = document.querySelectorAll('.drop, .drop2');

	if (e.target.nodeName == "A") {	
		if (drop.style.display=='block') {
			drop.style.display = 'none';
			body.removeEventListener('click', clear);
		}
		else {
			body.addEventListener('click', clear, false);
			clear(e, this);
			drop.style.display = 'block';	
		}
	}

	e.stopPropagation();
}


function burger(e) {
	debugger
}