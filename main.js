const prompt = require("prompt-sync")();

let x = 0;
let y = 0;
let count = 0;

while (count !== 6) {
	let position = prompt(
		"Your coordinates are (" +
			x +
			", " +
			y +
			'). Would you like to go "up", "right", "down", or "left"? '
	);

	if (position === "left") {
		x = x - 1;
	} else if (position === "right") {
		x = x + 1;
	} else if (position === "up") {
		y = y + 1;
	} else if (position === "down") {
		y = y - 1;
	}
	// // TODO: display something to the user

	count = count + 1;
}

console.log("Congratulations You Have Passed!");
