let html = "";

/* opvolg opdracht1
	maak met een nested loop
	deze nested loop genereert 100(dus 10x10) cellen 
	deze cellen hebben afwisselend de class white of de class black

	black | white | black | etc..
	white | black | white | etc..
	black | white | black | etc..
	etc..
 */

for (let row = 0; row < 10; row++) {
	for (let col = 0; col < 10; col++) {
		// const color = "";
		// html += `<div class="cell ${color}"></div>`;
	}
}

/* opvolg opdracht2
genereer het dambord op basis van de array zoals die staat in
DraughtData.json
*/

// dont change below
document.getElementById("matrix").innerHTML = html;