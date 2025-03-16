// Innanzitutto bisogna fare in modo che js riconosca il lavoro scelto: ad ogni lavoro verrà assegnato il valore numerico assegnatoci.
// Per questa procedura si possono creare un oggetto che ad ogni lavoro dia un valore, oppure funzione if. Ho optato per la seconda.
// Successivamente va inserita la promo: in questo caso ho optato per un oggetto contenente i valori della promo. Qualora i valori vengano inseriti sul
// input inerente, se rispecchiano uno di quelli dell'oggetto verrà dato come risultato 0,25.
// Infine bisogna far partire tutto lo script con il click sul "richiedi preventivo" facendo uscire il risutato nell'apposito spazio.

const selectLavoro = document.getElementById("lavoro");

function price4hour(lavoro) {
    lavoro = parseInt(lavoro);

    if (lavoro === 1) {
        return 20,50;
    } else if (lavoro === 2) {
        return 15,30;
    } else if (lavoro === 3) {
        return 33,60;
    } else if (lavoro === 4) {
        return 12,30;
    } else if (lavoro === 5) {
        return 25,90; 
    } else {
        return alert("seleziona un lavoro")
    }
}

const promo = document.getElementById("promo");
let promObject = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
function promo25 (promo) {
    if (promObject) {
        return 0.25;
    } else {
        return 1;
    }
}
