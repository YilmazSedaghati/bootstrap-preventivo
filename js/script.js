// Innanzitutto bisogna fare in modo che js riconosca il lavoro scelto: ad ogni lavoro verrà assegnato il valore numerico assegnatoci.
// Per questa procedura si possono creare un oggetto che ad ogni lavoro dia un valore, oppure funzione if. Ho optato per la seconda.
// Successivamente va inserita la promo: in questo caso ho optato per un oggetto contenente i valori della promo. Qualora i valori vengano inseriti sul
// input inerente, se rispecchiano uno di quelli dell'oggetto verrà dato come risultato 0,25.
// Infine bisogna far partire lo script con il click sul "richiedi preventivo": tale click farà partire un prompt che chiederà all'utente le ore necessarie di lavoro.
// I dati così inseriti verranno moltiplicati con il tipo di lavoro, dando poi il risutato nell'apposito spazio.

const selectLavoro = document.getElementById("lavoro");
const promoInput = document.getElementById("promo");
const startBtn = document.querySelector(".preventivo");
const finalPriceElement = document.getElementById("final-price");

function price4hour(lavoro) {
    lavoro = parseInt(lavoro);

    if (isNaN(lavoro)) {
        alert("Seleziona un lavoro valido!");
        return 0; 
    }

    if (lavoro === 1) {
        return 20.50;
    } else if (lavoro === 2) {
        return 15.30;
    } else if (lavoro === 3) {
        return 33.60;
    } else if (lavoro === 4) {
        return 12.30;
    } else if (lavoro === 5) {
        return 25.90;
    } else {
        return;
    }
}
console.log(price4hour);


const promoArray = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
function promo25(promo) {
    if (!promo) {
        console.log("non è stato inserito alcun codice: non sarà inserito alcun codice");
        return 0;
    } else if (promoArray.includes(promo)) {
        console.log(`il codice inserito è valido, hai diritto a 25% di sconto`);
        return 0.25;
    } else {
        console.log(`il codice promozionale inserito è sbagliato! Non hai diritto ad alcun sconto`);
        return 0;
    }
}

//const startBtn = document.querySelector(".preventivo");

startBtn.addEventListener('click', function () {
    let lavoroValue = selectLavoro.value;
    let prezzoOrario = price4hour(lavoroValue);

    if (prezzoOrario === 0) return;

    let hLavoro = prompt("Quante ore di lavoro sono necessarie?");
    const hours = parseInt(hLavoro);

    if (isNaN(hours) || hours <= 0) {
        alert("Inserisci un numero valido di ore.");
        return;
    }

    let totalPrice = prezzoOrario * hours

    const promoValue = promoInput.value; 
        if (promoValue) {
            const discountRate = promo25(promoValue);
            if (discountRate > 0) {
                let discount = totalPrice * discountRate;
                totalPrice -= discount;
                alert("Codice promozionale valido! Sconto applicato.");
            } else {
                alert("Codice promozionale non valido. Nessuno sconto applicato.");
            }
        }
    finalPriceElement.textContent = totalPrice.toFixed(2);
})