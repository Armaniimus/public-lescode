const pointCounterEl = document.getElementById("point-counter");
const messageBoxEl = document.getElementById("message-box");
messageBoxEl.innerText = "Druk op get coin om een punt te krijgen";
let score = 0;

function krijgPunt() {
	score++;
	pointCounterEl.innerText = score;

	zetHighScore(score);
	randomAanmoediging();
}

function randomAanmoediging() {
	const messages = [
		"Ja goed zo nog een keer",
		"Killstreak",
		"Bam",
		"Je bent de punten koning",
		"Yes nog een punt erbij",
		"Op na de grootste highscore ever",
		"Meesterlijk",
		"Stack die punten",
		"Nog een keer!",
		"Ga zo door",
		"Op na de sterren en daarvoor bij",
		"Puntje erbij",
		"Nog een punt",
		"Goed zo",
		"Allmachtig"
	];

	const selectedId = Math.floor(Math.random() * messages.length);
	messageBoxEl.innerText = messages[selectedId];
}