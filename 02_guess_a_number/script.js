function askNumber() {
    let givenNumber = Number(prompt('saisissez un nombre'));
    return givenNumber ;
}

function didWin(givenNumber) {
    if (givenNumber > 22) {
        alert("Plus petit");
        return false;
    } else if (givenNumber < 22) {
        alert("Plus grand");
        return false;
    } else {
        alert("Bravo ! Vous avez deviné le nombre");
        return true;
    }
}

function gameplay() {
    let win = false;
    while (!win) {
        const givenNumber = askNumber();
        win = didWin(givenNumber);
    }
}

gameplay();