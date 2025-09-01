// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.


// LISTA INVITATI
const invites = ["osazezaboli@gmail.com","christianzaboli@gmail.com","franco.rossi@gmail.com","giovannibianchi@gmail.com", 'aa']
console.log(invites);

// INPUT USER EMAIL
let userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!");

// INIZIO CICLO FOR
for (;;) {
    if (invites.indexOf(userEmail) !== -1) {
        console.log('Congratulazioni! sei nella lista degli invitati');
        break;   // CHIUSURA CICLO FOR
    } else {
        console.log("Spiacente! questo utente non é nella lista degli invitati, ritenta")
    }
    userEmail = prompt('Riprova con una diversa') // CONTINUO CICLO FINO A RISPOSTA CORRETTA
}