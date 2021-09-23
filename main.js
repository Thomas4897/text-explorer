const prompt = require("prompt-sync")({ sigint: true });

let x = 0;
let y = 0;

const welcome = console.log(
	"Welcome to the Mystic Forest. Your goal is to find the Golden Keyboard!\n"
);

const position = console.log(
	"You find yourself to a Mystical Forest that is shrouded in fog."
);

const coordinates = console.log("> Your coordinates are (0, 0).\n");

const xNeg1y0 =
	"\nYou go deeper into the dense forest.\n> Your coordinates are (-1, 0).\n";
const xNeg2y0 =
	"\nYou come to huge clearing with the Great Mystic Oak is.\n> Your coordinates are (-2, 0).\n";
const xNeg2y1 =
	"\nYou find a Mystrious Waterfall.\n> Your coordinates are (-2, 1).\n";
const xNeg2y2 =
	"\nYou come to the edge of the forest and find yourself looking down a cliff.\n> Your coordinates are (-2, 2).\n";
const xNeg1y2 =
	"\nYou find a giant snake by a huge lake.\n> Your coordinates are (-1, 2).\n";
const xNeg1y1 =
	"\nYou come to a tree carved in the shape of a Monitor.\n> Your coordinates are (-1, 1).\n";
const x0y1 =
	"\nYou find your lost pocket protector.\n> Your coordinates are (0, 1).\n";
const x0y2 =
	"\nYou move through a less dense part of the forest.\n> Your coordinates are (0, 2).\n";
const x1y2 =
	"\nYou enter a clearing filled grass and wild animals.\n> Your coordinates are (1, 2).\n";
const x1y1 =
	"\nYou walk through hanging vines and find a lost floppy disk.\n> Your coordinates are (1, 1).\n";
const x1y0 = "\nYou find an old altar.\n> Your coordinates are (1, 0).\n";
const x2y0 = "\nYou walk into some bushes.\n> Your coordinates are (2, 0).\n";
const x2y1 =
	"\nYou see an oger and run away.\n> Your coordinates are (2, 1).\n";
const x2y2 = "\nYou find an old altar.\n> Your coordinates are (2, 2).\n";
const x2yNeg1 =
	'\nYou talk to an old Mage and he tells you "What you seek is to the right".\n> Your coordinates are (2, -1).\n';
const x2yNeg2 = "\nYou step into a puddle.\n> Your coordinates are (2, -2).\n";
const x1yNeg2 =
	"\nYou find the Mystic Mouse.\n> Your coordinates are (1, -2).\n";
const x1yNeg1 =
	"\nYou walk through old ruins.\n> Your coordinates are (1, -1).\n";
const x0yNeg1 =
	"\nYou face a small goblin and slay him.\n> Your coordinates are (0, -1).\n";
const x0yNeg2 =
	"\nYou walk past a dragons nest.\n> Your coordinates are (0, -2).\n";
const xNeg1yNeg2 =
	"\nYou walk up a grass hill filled with flowers.\n> Your coordinates are (-1, -2).\n";
const xNeg1yNeg1 =
	"\nYou trip and fall down a hill.\n> Your coordinates are (-1, -1).\n";
const xNeg2yNeg1 =
	"\nYou face a small goblin and slay him.\n> Your coordinates are (-2, -1).\n";
const xNeg2yNeg2 =
	"\nYou enter a secret passage behind a waterfall.\n> Your coordinates are (-2, -2). \n\nIn the middle of the hidden passage you find the Golden Keyboard. \nYou Have Won The Game!!! \n";

const outOfbounds =
	"\n    **** OUT OF BOUNDS! ****\n(You were returned to the Start)";
const x0y0 = "\nYou are at the start.\n> Your coordinates are (0, 0).\n";

while (!(x === -2 && y === -2)) {
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
		console.log("\n***Error: Invalid Input***");
	}

	if (Math.abs(x) === 3 || Math.abs(y) === 3) {
		x = 0;
		y = 0;

		console.log(outOfbounds);
	}

	if (x === -1 && y === 0) {
		console.log(xNeg1y0);
	} else if (x === -2 && y === 0) {
		console.log(xNeg2y0);
	} else if (x === -2 && y === 1) {
		console.log(xNeg2y1);
	} else if (x === -2 && y === 2) {
		console.log(xNeg2y2);
	} else if (x === -1 && y === 2) {
		console.log(xNeg1y2);
	} else if (x === -1 && y === 1) {
		console.log(xNeg1y1);
	} else if (x === 0 && y === 1) {
		console.log(x0y1);
	} else if (x === 0 && y === 2) {
		console.log(x0y2);
	} else if (x === 1 && y === 2) {
		console.log(x1y2);
	} else if (x === 1 && y === 1) {
		console.log(x1y1);
	} else if (x === 1 && y === 0) {
		console.log(x1y0);
	} else if (x === 2 && y === 0) {
		console.log(x2y0);
	} else if (x === 2 && y === 1) {
		console.log(x2y1);
	} else if (x === 2 && y === 2) {
		console.log(x2y2);
	} else if (x === 2 && y === -1) {
		console.log(x2yNeg1);
	} else if (x === 2 && y === -2) {
		console.log(x2yNeg2);
	} else if (x === 1 && y === -2) {
		console.log(x1yNeg2);
	} else if (x === 1 && y === -1) {
		console.log(x1yNeg1);
	} else if (x === 0 && y === -1) {
		console.log(x0yNeg1);
	} else if (x === 0 && y === -2) {
		console.log(x0yNeg2);
	} else if (x === -1 && y === -2) {
		console.log(xNeg1yNeg2);
	} else if (x === -1 && y === -1) {
		console.log(xNeg1yNeg1);
	} else if (x === -2 && y === -1) {
		console.log(xNeg2yNeg1);
	} else if ((x === 0) & (y === 0)) {
		console.log(x0y0);
	} else {
		console.log(
			"\n     !!!!!!!WARNING!!!!!!!\n   > You Are Out Of Bounds <\n> Your coordinates are (" +
				x +
				", " +
				y +
				") <\n     !!!!!!!WARNING!!!!!!!\n"
		);
	}
}

console.log(xNeg2yNeg2);
