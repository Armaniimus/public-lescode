const highscoreEl = document.getElementById("highscore");

function zetHighScore(score) {
	/* Opdracht 1 highscore lokaal opslaan*/
	/* 1.1 check of de highscore kleiner is dan de huidige score.*/

	/* 1.2 zet de highscore in het highscoreEL naar de nieuwe highscore*/

	/* 1.3 paas verzoek door naar de functie inCookieOpslaan*/
	inCookieOpslaan(score);
}

function inCookieOpslaan(score) {
	/* Opdracht 2. sla highscore in een cookie op.*/
	/* 2.1. Maak een datum 10 dagen vooruit.
		- zoek op js Date.now().
		- zoek op js new Date().*/
	
	/* 2.2. Zet de datum om in een UTCString.
		- zoek op js toUTCString().*/
	
	/* 2.3. Gebruik de utcString om de highscore 10 dagen lang in de cookie op te slaan.
		- zoek op js cookie.*/
}

function cookieOphalen() {
	/* Opdracht 3 cookie ophalen */
	/* 3.1. Split document.cookie.
	  - zoek op js split.*/

	/* 3.2. Loop over de cookies heen.
	 	- zoek op js for.
	 	- zoek op array.*/

	/* 3.3. Split elke cookie.*/

	/* 3.4. Check of de cookie naam overeenkomt.*/

	/* 3.5. Retourneer de waarde van de cookie.
	 	- zoek op js functie.*/

	/* Opdracht 4 zet de highscore op de pagina
	  - zie 1.2*/

}


/* added to test cookie buildup*/
for (let i = 0; i < 10; i++) {
	document.cookie = `cookie${i}=${i}`;
}
