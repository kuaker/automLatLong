
export function getUserValidData() {
    const userValidData = {
        name: "Fernando",
        surname: "Arroupe",
        email: "arroupe09@gmail.com",
        password: "challengeNewFire"
    }
    return userValidData
}

export function getRandomCity() {
    const states = ["Buenos Aires", "Mar del Plata", "Mendoza", "New York", "Los Angeles", "California"];
    const randomCity = Math.floor(Math.random() * states.length);

    return states[randomCity]
}
