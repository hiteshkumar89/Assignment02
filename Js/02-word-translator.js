
let languageCode = prompt("Enter a language code (es, de, en, or fr):").toLowerCase();
let translatedMessage;

if (languageCode === "es") {
    translatedMessage = "Hola Mundo";
} else if (languageCode === "de") {
    translatedMessage = "Hallo Welt";
} else if (languageCode === "fr") {
    translatedMessage = "Bonjour le monde";
} else {
    translatedMessage = "Hello World"; // Default to English for other codes
}

console.log(`Hello World translated in ${languageCode} is: ${translatedMessage}`);
