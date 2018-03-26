/* RULES
- Player must guess a letter between a min and max
- Player gets 5 guesses
- Notify player of guesses remaining
- Notify player the correct answer if they lose
- Let the player choose to play again
*/

// VARIABLE DECLARATION

// GAME VALUES
let   min = 1,
      max = 10,
      minA = "A",
      maxA = "Z",
      letterChosen,
      //winningNum = getRandomNum(min, max),
      winningLetter = randLetter(letterChosen),
      // winningLetter = "R",
      letterWin,
      guessesLeft = 5,
      guessedAlready = [];

// UI ELEMNENTS
const game = document.querySelector('#game'),
      // minNum = document.querySelector('.min-num'),
      // maxNum = document.querySelector('.max-num'),
      minAlpha = document.querySelector('.min-alpha'),
      maxAlpha = document.querySelector('.max-alpha'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      // message = document.querySelector('.message'),
      listMsg = document.querySelector('#special-message'),
      listGuessed = document.querySelector('#list-item-guessed'),
      resetBtn = document.querySelector('#reset-btn');

// ASSIGN UI MIN & MAX
minAlpha.textContent = minA;
maxAlpha.textContent = maxA;

// Listen for Guess
guessBtn.addEventListener('click', function(){
      //e.preventDefault();
      let guess = guessInput.value;
      //guess = guess.toUpperCase;
      console.log(guess);
      // debugger;
      // Validate
      // VALIDATION not working Monday Morning
      if(isNaN(guess) || guess < minA || guess > maxA){
            setMessage(`Please enter a letter between ${minA} and ${maxA}`, 'red');
      }

      // CHECK IF WON
      if(guess === winningLetter){
            
            // Disable input
            //guess.guessInput.disabled = true;
            // Change border color
            // guessInput.style.borderColor = 'green';
            // Declare won
            //setMessage("you won", 'green');
            setMessage(`${winningLetter} is correct, you win!`, 'green');

      } else if(guessesLeft > 1){
            setMessage("try again, " + guessesLeft + " guesses left.", 'blue');
            guessesLeft--;
            guessedAlready.push(guess);

      } else {
            setMessage("Sorry, you didn't win this time", 'blue');
            guessInput.value = "";

      }
});

// PLAY RESET EVENT LISTENER 
// RESET guessesLeft, clear message
// NEED to RESET THE winningNum

resetBtn.addEventListener('click', function(){
      guessesLeft=5;
      setMessage("Game Reset");
      guessInput.value = "";
      

});

// // GENERATE COMPUTER"s GUESS
// function getRandomNum(min, max){
//       return Math.floor(Math.random()*(max-min+1)+min);
//     }

// GENERATE COMPUTER's ALPHA GUESS
function randLetter(letter) {
      var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var letter = letters[Math.floor(Math.random() * letters.length)];
      letter = letter.toUpperCase();
      return letter;
      console.log(letter);
    }
    


// Set Message - buggy, maybe alert, ugh
function setMessage(msg, color){
      listMsg.style.color = color;
      listMsg.textContent = msg;
}

// List what has been guessed - not working
function setGuessed(guessedVal){
      listGuessed.textContent = guessedAlready;
}


 

