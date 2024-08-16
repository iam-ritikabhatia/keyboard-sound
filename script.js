// Load the sounds
const functionKeySound = new Audio('sounds/function-key.mp3');
const alphabetKeySound = new Audio('sounds/alphabet-key.mp3');
const numericKeySound = new Audio('sounds/numeric-key.mp3');

// Listen for keydown events
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key.match(/^[a-zA-Z]$/)) {
        // Alphabet key
        alphabetKeySound.play();
    } else if (key.match(/^[0-9]$/)) {
        // Numeric key
        numericKeySound.play();
    } else if (key.match(/^(F[1-9]|F1[0-2])$/)) {
        // Function key (F1-F12)
        functionKeySound.play();
    }
});
