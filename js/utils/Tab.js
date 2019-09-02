
rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.querySelector('tabcontent');
	var i;
	x.addEventListener('click', () => {
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need
})
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	var y = document.querySelector('tabmenu');
	var j;
	y.addEventListener('click', () => {
	for (j = 0; j < y.length; j++) {
		y[j].className = 'tabmenu'; 
	}
	document.getElementById(rudr_tab_id).className = 'tabmenu active';
})
}

module.exports=Tab