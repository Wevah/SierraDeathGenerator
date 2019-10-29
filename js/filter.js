'use strict';

function filterGenerators(str) {
	let generators = document.getElementsByClassName('generator-switcher');
	let toKeep;
	let regex;
	
	try {
		regex = new RegExp(str, 'ig');
		toKeep = Array.from(generators).filter(x => regex.test(x.innerText));
	} catch (error) {
		toKeep = generators;
	}
	
	for (let x of generators) {
		x.style.display = 'none';
		resetMatchHighlight(x)
	}
	
	for (let x of toKeep) {
		x.style.display = 'inline-block';
		
		if (regex)
			highlightMatchInElement(regex, x);
	}
}

function resetMatchHighlight(element) {
	element.innerHTML = element.innerText;
}

function highlightMatchInElement(regex, element) {
	let text = element.innerText;
	element.innerHTML = element.innerText.replace(regex, '<span class="filter-highlight">$&</span>');
}

document.addEventListener('DOMContentLoaded', e => {
	document.getElementById('filter-field').addEventListener('input', e => {
		filterGenerators(document.getElementById('filter-field').value);
	});
});
