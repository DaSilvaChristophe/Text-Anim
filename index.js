const target = document.getElementById("target");

let array = ["développeur", "passionné", "créatif","polyvalent"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2000)
}

// Fonction récursif (qui s'apel toute seule)

const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
        } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800); 
        }
    }, 50)
}

loop();