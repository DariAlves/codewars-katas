/*
    Think of a way to store the languages as a database(eg an object).
    The languages are listed below so you can copy and paste!
    Write a 'welcome' function that takes a parameter 'language'(always a string), 
    and returns a greeting - if you have it in your database.It should default to English
    if the language is not in the database, or in the event of an invalid input
*/

// Fake-database :) 

const languageGreetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
};

function greet(language) {
    // Loop through all elements in object
    for (const key in languageGreetings) {
        if(language == key) {
            return languageGreetings[key];
        }
    }

    return 'Welcome';
}

console.log(greet('spanish'));
