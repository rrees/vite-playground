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

function resolveDrinkPotion(character) {
	if(character.potions < 1) {
		return 'No potions available';
	}

	character.potions -= 1;
	const potionRoll = d(6);

	character.health = Math.min(character.health + potionRoll, character.maxHealth)

	return `Healed ${potionRoll} health`
}

function resolveScroll(character) {
	if(character.scrolls < 1) {
		return 'No scrolls available';
	}

	character.scrolls -= 1;

	const damageRoll = d(6);

	return `Cast a spell causing ${damageRoll + character.intellect} damage`
}

export {
	resolveCombat,
	resolveMovement,
	resolveDiceRoll,
	resolveDrinkPotion,
	resolveScroll,
}