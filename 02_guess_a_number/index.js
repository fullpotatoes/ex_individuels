const askNumber = () => {
    const INPUT = window.prompt("Donnez un nombre");
    const number = Number(INPUT)
    return number
}

const didIWin = (givenNumber) => {
    const targetNumber = 22
    if (givenNumber < targetNumber) {
        alert("Plus grand");
        return false;
    } else if (givenNumber > targetNumber) {
        alert("Plus petit");
        return false;
    } else {
        alert("Bravo vous avez deviné le nombre");
        return true;
    }
}

const gameplay = () => {
    const givenNumber = askNumber()
    // on transforme la valeur retournée par la fonction didWin en booléen true/false et on la stocke dans une constante.
    const win = didIWin(givenNumber)

    if (!win) {
        gameplay()
    } else {
        alert("fin du jeu.")
    }
}

gameplay()