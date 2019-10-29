'use strict';

function filterGenerators(str) {
	let generators = document.getElementsByClassName('generator-switcher');
	let toKeep;
	
	try {
		let regex = new RegExp(str, 'i');
		toKeep = Array.from(generators).filter(x => regex.test(x.innerText));
	} catch (error) {
		toKeep = generators;
	}
	
	for (let x of generators) {
		x.style.display = 'none';
	}
	
	for (let x of toKeep) {
		x.style.display = 'inline-block';
	}	
}

document.addEventListener('DOMContentLoaded', e => {
	document.getElementById('filter-field').addEventListener('input', e => {
		filterGenerators(document.getElementById('filter-field').value);
	});
});
