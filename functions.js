/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
    return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function getSchool() {
    return "Novi Hogescool"
}

const school = getSchool();

console.log(school);

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function compliment() {
    return "Lekker bezig met die functies, Jef!"
}

const compl = compliment();

console.log(compl)

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades() {
    return [8, 8.5, 6, 7];
}

const grade = getGrades();

console.log(grade);

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails() {
    const studentProfile = {firsname: 'Jef', lastName: 'Bas'};
    return studentProfile
}

const profile = getDetails();

console.log(profile);

//test

function getDetails2() {
    return {firsname: 'Jef!', lastName: 'Bas!'};
}

const profile2 = getDetails2();

console.log(profile2);