function numbPrompt() {
    let givenNumber = Number(prompt('saisissez un nombre'));
    return givenNumber ;
}

function didWin(givenNumber) {
    if (givenNumber > 22) {
        alert("Plus grand");
    } else if (givenNumber < 22) {
        alert("Plus petit");
    } else {
        alert("Bravo ! Vous avez deviné le nombre");
    }
}

console.log(didWin(numbPrompt()));