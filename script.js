function sayHello(hour) {
    if (hour <= 18) {
        return "bonjour !"
    } else {
        return "bonsoir !"
    }
}

let firstname = "Beyonce"
let message = `${sayHello(15)} ${firstname}!`

console.log(message)