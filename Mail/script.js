// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.


// LISTA INVITATI
const invites = ["osazezaboli@gmail.com","christianzaboli@gmail.com","franco.rossi@gmail.com","giovannibianchi@gmail.com", 'aa']
console.log(invites);

// INPUT USER EMAIL

// CHECK CORRISPONDENZA
// for (userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!"); ;) {
//     if (userEmail !== invites[i]) {
//         console.log("Spiacente! questo utente non é nella lista degli invitati");
//         userEmail = prompt("vuoi inserire una una email diversa?")
//     } else {
//         console.log("Congratulazioni! sei nella lista degli invitati");
//         break
//     }
// }
// OUTPUT ESITO
// userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!")

// if (userEmail == invites.) {
//     console.log("Congratulazioni! sei nella lista degli invitati");
// } else if {
//     console.log("Spiacente! questo utente non é nella lista degli invitati, ritenta");
//     userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!");
// } else 

// for (let userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!");
//     invites.indexOf(userEmail) >= 0;
//     userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!")) {
//    if (invites.indexOf(userEmail) === -1) {
//     console.log('b');
//    } else {
//     console.log("a");
//     }
// }

let userEmail = prompt("Inserisci la tua email per scoprire se sei stato invitato!");
for (;;) {
    if (invites.indexOf(userEmail) !== -1) {
        console.log('Congratulazioni! sei nella lista degli invitati');
        break;
    } else {
        console.log("Spiacente! questo utente non é nella lista degli invitati, ritenta")
    }
    userEmail = prompt('Riprova con una diversa email')
}