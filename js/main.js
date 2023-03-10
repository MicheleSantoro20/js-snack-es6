/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */


//Snack 1


const bici = [
    {
        nome: 'Torpado',
        peso: 18
    },
    {
        nome: 'Atala',
        peso: 20
    },
    {
        nome: 'Belelli',
        peso: 19
    }
];


const risultato =  Math.min.apply(null, bici.map(bici => bici.peso));
console.log(risultato)


bici.forEach (bici => {
    if (bici.peso ==  risultato) {
        console.log (`La bici ${bici.nome} pesa ${bici.peso} ed è quella che tra tutte le biciclette elencate pesa meno`)
    }
});


//Snack 2

const squadre = [
    {
        nome: 'Sampdoria',
        falli: 0,
        puntiFatti: 0
    },
    {
        nome: 'Milan',
        falli: 0,
        puntiFatti: 0,
    },
    {
        nome: 'Siena',
        falli: 0,
        puntiFatti: 0,    
    }
];

const squadreAggiornate = []

squadre.forEach(element => {
    squadre.falli = generateRandomNumber (1, 25);
    squadre.puntiFatti = generateRandomNumber (1, 10);

    const {nome, falli, puntiFatti} = squadre;
    squadreAggiornate.push({nome, falli, puntiFatti});
})

console.log(squadreAggiornate)

function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}



