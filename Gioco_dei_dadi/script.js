// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

    // GENERIAMO ALL'USER IL SUO NUMERO
    const userNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Il tuo numero é ' + userNumber);
    
    // GENERIAMO UN NUMERO DAL COMPUTER
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Il numero del pc é ' + pcNumber);
    
    // STABILIAMO UN VINCITORE --- IL PIÚ ALTO
    if (userNumber > pcNumber) {
        console.log('Hai vinto!');
    } else if (pcNumber > userNumber) {
        console.log('Hai perso!');
    } else {
        console.log('Pareggio!');
    }
    console.log('----------------------');
