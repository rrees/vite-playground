
function randInt(min, max) {
	return Math.floor(Math.random() * max) + min; 
}

export function roll(poolSize, faceSize, modifier) {
	const result = {
		rolls: [],
		total: 0,
	};

	for(let i=0; i < poolSize; i++) {
		const thisRoll = randInt(1, faceSize) + modifier;
		result.rolls.push(thisRoll);
		result.total += thisRoll;
	}

	return result;
}