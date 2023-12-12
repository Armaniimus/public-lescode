const cards = getCards();
const people = getPeople();
let cardsHtml = "";
let peopleHtml = "";


/*****************
 * start hieronder
 */
/*********************
 * don't touch below
 *********************



/**
 * function to generate a cardTitle
 */
	function generateCardTitle(title) {
		return `<h5 class="title">${title}</h5>`;
	}

/**
 * function to generate a cardImg
 */
function generateCardImg(imgLink) {
	return `<img class="img" src="${imgLink}" />`;
}

/**
 * function to generate a cardButton
 */
function generateCardButton(link = "#link", tekst = "Tekst") {
	return `<a class="button" href="${link}">${tekst}</a>`;
}

/**
 * function to generate a cardText.
 */
	function generateCardText(text) {
		return `<p class="text">${text}</p>`;
	}

/** 
 * vervang de inhoud van het element met idcards
 * met de inhoud van cardsHtml.
 */
document.getElementById("cards").innerHTML = cardsHtml;
document.getElementById("people").innerHTML = peopleHtml;


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

/**
 * functie die alle personen als een array terug geeft
 */
function getPeople() {
	return [
		{ "img": "./icon.png", "title": "John Doe", "link": "#link1",  "linkText": "link1", "text": "Runs in weekends" },
		{ "img": "./icon.png", "title": "John Doe", "link": "#link2",  "linkText": "link2", "text": "Swam and downed last week" },
		{ "img": "./icon.png", "title": "Jane Doe", "link": "#link3",  "linkText": "link3", "text": "Painted her nails pink" },
		{ "img": "./icon.png", "title": "Jane Doe", "link": "#link4",  "linkText": "link4", "text": "Did a cuddle workshop" },
		{ "img": "./icon.png", "title": "John Doe", "link": "#link5",  "linkText": "link5", "text": "Loves cats" },
		{ "img": "./icon.png", "title": "John Doe", "link": "#link6",  "linkText": "link6", "text": "Loves Dogs" },
		{ "img": "./icon.png", "title": "Jane Doe", "link": "#link7",  "linkText": "link7", "text": "Ran a 0.001 mile before exaustion" },
		{ "img": "./icon.png", "title": "Jane Doe", "link": "#link8",  "linkText": "link8", "text": "Is celebrating bike day" },
		{ "img": "./icon.png", "title": "John Doe", "link": "#link9",  "linkText": "link9", "text": "Eats grass" },
		{ "img": "./icon.png", "title": "John Doe", "link": "#link10", "linkText": "link10", "text": "Pets snakes" },
		{ "img": "./icon.png", "title": "Jane Doe", "link": "#link11", "linkText": "link11", "text": "Eats naughty students" },
		{ "img": "./icon.png", "title": "Jane Doe", "link": "#link12", "linkText": "link12", "text": "Climbs trees" },
	];
}