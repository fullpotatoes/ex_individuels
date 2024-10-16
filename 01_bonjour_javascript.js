function sayHello(firstname, hour) {
    let message
    if (hour <= 18) {
        message = `bonjour ${firstname}!`
    } else {
        message = `bonsoir ${firstname}!`
    }
    console.log(message)
}

sayHello("Beyonce", 15)


