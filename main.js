const prompt = require("prompt-sync")({ sigint: true });

let x = 0;
let y = 0;

let position = console.log(
	"You find yourself to a Mystical Forest that is shrouded in fog."
);

('You find yourself to a Mystical Forest that is shrouded in fog. Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"?');
('You go deeper into the dense forest. Your coordinates are (-1, 0). Would you like to go "up", "right", "down", or "left"?');
('You come to huge clearing with the Great Mystic Oak is. Your coordinates are (-2, 0). Would you like to go "up", "right", "down", or "left"?');
('You find a Mystrious Waterfall. Your coordinates are (-2, 1). Would you like to go "up", "right", "down", or "left"?');
('You come to the edge of the forest and find yourself looking down a cliff. Your coordinates are (-2, 2). Would you like to go "up", "right", "down", or "left"?');
('You find a giant snake by a huge lake. Your coordinates are (-1, 2). Would you like to go "up", "right", "down", or "left"?');
('You come to a tree carved in the shape of a Monitor. Your coordinates are (-1, 1). Would you like to go "up", "right", "down", or "left"?');
('You find your lost pocket protector. Your coordinates are (0, 1). Would you like to go "up", "right", "down", or "left"?');
('You move through a less dense part of the forest. Your coordinates are (0, 2). Would you like to go "up", "right", "down", or "left"?');
('You enter a clearing filled grass and wild animals. Your coordinates are (1, 2). Would you like to go "up", "right", "down", or "left"?');
('You walk through hanging vines and find a lost floppy disk. Your coordinates are (1, 1). Would you like to go "up", "right", "down", or "left"?');
('You find an old altar. Your coordinates are (1, 0). Would you like to go "up", "right", "down", or "left"?');
('You walk into some bushes. Your coordinates are (2, 0). Would you like to go "up", "right", "down", or "left"?');
('You see an oger and run away. Your coordinates are (2, 1). Would you like to go "up", "right", "down", or "left"?');
('You find an old altar. Your coordinates are (2, 2). Would you like to go "up", "right", "down", or "left"?');
('You talk to an old Mage and he tells you "What you seek is to the right". Your coordinates are (2, -1). Would you like to go "up", "right", "down", or "left"?');
('You step into a puddle. Your coordinates are (2, -2). Would you like to go "up", "right", "down", or "left"?');
('You find the Mystic Mouse. Your coordinates are (1, -2). Would you like to go "up", "right", "down", or "left"?');
('You walk through old ruins. Your coordinates are (1, -1). Would you like to go "up", "right", "down", or "left"?');
('You face a small goblin and slay him. Your coordinates are (0, -1). Would you like to go "up", "right", "down", or "left"?');
('You walk past a dragons nest. Your coordinates are (0, -2). Would you like to go "up", "right", "down", or "left"?');
('You walk up a grass hill filled with flowers. Your coordinates are (-1, -2). Would you like to go "up", "right", "down", or "left"?');
('You trip and fall down a hill. Your coordinates are (-1, -1). Would you like to go "up", "right", "down", or "left"?');
('You face a small goblin and slay him. Your coordinates are (-2, -1). Would you like to go "up", "right", "down", or "left"?');
('You enter a secret passage behind a waterfall and find The Golden Keyboard. Your coordinates are (-2, -2). Would you like to go "up", "right", "down", or "left"?');

let count = 0;

while (count !== 6) {
	let coordinates = console.log(
		"Your coordinates are " + "(" + x + "," + y + ")."
	);

	let direction = prompt(
		'Would you like to go "up", "right", "down", or "left"? '
	);

	if (direction === "left") {
		x = x - 1;
	} else if (direction === "right") {
		x = x + 1;
	} else if (direction === "up") {
		y = y + 1;
	} else if (direction === "down") {
		y = y - 1;
	} else {
		console.log("Invalid Choice");
	}
	// // TODO: display something to the user

	count = count + 1;
}

console.log("Congratulations You Have Passed!");
