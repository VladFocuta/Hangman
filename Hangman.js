let searchInput = document.getElementById("searchBar");
let guessedLetters = [];

let searchTerm = ["portocale", "banane", "mere"], wordLength = 0, randomNumber, guessedWord;

function randomWord() {
   randomNumber = Math.floor(Math.random() * searchTerm.length);
   guessedWord = searchTerm[randomNumber];
}

function termLetters() {
   randomWord();
   for (let i = 0; i < guessedWord.length; ++i) {
      ++wordLength;
      guessedLetters.push(guessedWord[i]);
   }
}

let lives = 7;

function startTheGame() {
   termLetters();
   let startMessage = document.getElementById("messageContainer");
   startMessage.innerHTML = "Word's length is " + wordLength + " ";
   for (let i = 0; i < guessedWord.length; ++i) {
      let message = document.createElement("message");
      message.id = "messages" + i;
      message.innerHTML = "__" + " ";
      messageContainer.appendChild(message);
   }
}

let rightGuesses = 0;

function checkLetters() {
   let letter = searchInput.value;
   for (let i = 0; i < guessedWord.length; ++i) {
      if (guessedLetters[i] === letter) {
         let message = document.getElementById("messages" + i)
         message.innerHTML = letter + " ";
         ++rightGuesses;
      }
   }
   if (!guessedLetters.includes(letter)) {
      --lives;
      let message = document.createElement("message");
      message.innerHTML = "You have " + lives + " " + "lives left.";
      messageContainer.appendChild(message);
      if (lives === 0) {
         let message = document.createElement("message");
         message.innerHTML = " " + "Game Over -> You lost!";
         messageContainer.appendChild(message);
         document.getElementById("searchBar").disabled = true;
         document.getElementById("enterButton").disabled = true;
         document.getElementById("startButton").disabled = true;
         return;
      } else if (lives > 0) {
         setTimeout(() => {
            message.remove();
         }, 1000)
      }
   }
   if (rightGuesses === guessedWord.length) {
      let message = document.createElement("message");
      message.innerHTML = "You have won!";
      messageContainer.appendChild(message);
   }
}
