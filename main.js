let percorrenza = prompt ("quanti chilometri percorri?")
console.log( `km percorsi: ${percorrenza}` );

let età = prompt ("quanti anni hai?")
console.log(`la tua eta è ${età}`);

let  prezzoAlKilometro = 0.21;
const prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
const scritto = "Il prezzo del biglietto è "
const euro = " Euro"
console.log(prezzoBigliettoSenzaSconto);

if (età <= 18) {
    document.getElementById("costo").innerHTML = scritto + ((prezzoBigliettoSenzaSconto / 20) * 100) + euro;
   } else if (età >= 65) {
    document.getElementById("costo").innerHTML = scritto + ((prezzoBigliettoSenzaSconto / 40) * 100) + euro;
   } else {
    document.getElementById("costo").innerHTML = scritto + (prezzoBigliettoSenzaSconto) + euro;
   }