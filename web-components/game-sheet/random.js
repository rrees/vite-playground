
function choose(choices) {
	const choice = Math.floor((Math.random() * choices.length));
	return choices[choice];
}

function d(maxValue) {
	return 1 + Math.floor((Math.random()) * maxValue);
}

export { choose, d };