const cards = getCards();
let cardsHtml = "";

/*****************
 * start hieronder
 */
 

	/**
		voorbeeld waarmee je 1 kaart kan toevoegen aan cardsHtml
	*/
	cardsHtml += `<div class="card-container">
		<div class="card">
			<h5 class="title">${cards[0].title}</h5>
			<p>${cards[0].text}</p>
		</div>
	</div>`;

/* Opdracht 1.1
	maak een for loop die alle kaarten toont
*/

/* Opdracht 1.2
	Als je de for loop hebt
	sla de 3de kaart over met continue.
	
	als je niet weet hoe je het moet doen zoek dan op 
		"w3schools if" 
		en op "w3schools continue" 
*/

/* Opdracht 2
	maak een while loop die true als conditie heeft.
	stop de while loop met break;

	zoek eventueel op 
		"break w3schools" 
		en op "if w3schools".
*/





/*********************
 * don't touch below
 *********************

/** 
 * vervang de inhoud van het element met idcards
 * met de inhoud van cardsHtml.
 */
document.getElementById("cards").innerHTML = cardsHtml;


/**
 * functie die alle kaarten als een array terug geeft
 */
function getCards() {
	return [
		{ "title": "Card1", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card2", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card3", "text": "wrong card" },
		{ "title": "Card4", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card5", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card6", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card7", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card8", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card9", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card10", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card11", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
		{ "title": "Card12", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut doloremy" },
	];
}