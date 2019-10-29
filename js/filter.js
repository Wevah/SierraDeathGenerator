'use strict';

function filterGenerators(str) {
	let generators = document.getElementsByClassName('generator-switcher');
	let toKeep;
	let regex;
	
	try {
		regex = new RegExp(str, 'ig');
		toKeep = Array.from(generators).filter(generator => {
			regex.lastIndex = 0;
			return regex.test(generator.innerText);
		});
	} catch (error) {
		toKeep = generators;
	}
	
	for (let generator of generators) {
		generator.style.display = 'none';
		resetMatchHighlight(generator)
	}
	
	for (let generator of toKeep) {
		generator.style.display = 'inline-block';
		
		if (regex)
			highlightMatchInElement(regex, generator);
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
