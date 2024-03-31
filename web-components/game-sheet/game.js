import { d } from './random.js';

function resolveCombat() {
	const playerScore = d(6);
	const enemyScore = d(6);

	if( playerScore === enemyScore) {
		return resolveCombat();
	}

	return `Player ${playerScore} - Enemy ${enemyScore}`;
}

function resolveMovement() {
	return `Move forward ${d(3)} rooms`;
}


function resolveDiceRoll() {
	return `Result: ${d(6)}`;
}

export {
	resolveCombat,
	resolveMovement,
	resolveDiceRoll,
}