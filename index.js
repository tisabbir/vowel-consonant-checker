var letter = prompt("Enter a letter: ");
letter = letter.toLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
document.write("The letter " + letter + " is a <b> vowel </b>.");
else
document.write("The letter " + letter + " is a <b> constant </b>.");