//#region webPage initialization
let randomWord;
let unscrambledWord; 
let score = [];
const scoreDiv = document.getElementById("score");
let inputWord = document.getElementById("inputWord");
let pageInitialization = (list) => {
  let randomIndex = Math.floor(Math.random() * 23);
  randomWord = list[randomIndex];
  unscrambledWord = randomWord.word; 
  scrambleWord.innerHTML = randomWord.word;
  hint.innerHTML = randomWord.hint;
  startTimer();
  scrambleWordFun();
  playAgain.style.display = "none";
  checkWord.style.display = "block";
    refreshWord.style.display = "block";
    Easy.style.display = "none";
    Hard.style.display = "none";
    newLevel.style.display = "none";
    inputWord.style.display="block";
    scrambleWord.style.display="block";
    scoreDiv.style.display = "none"
};
//#endregion




let myInterval;


//#region function for decrementing the timer value
let changeTimer = () => {
  let lblTimer = parseInt(timer.innerHTML);
  if (lblTimer <= 0) {
    clearInterval(myInterval);
    scoreDiv.innerHTML = "your score is " + score.length;
    scoreDiv.style.display = "block"
    playAgain.style.display = "block";
    newLevel.style.display = "block"
    checkWord.style.display = "none";
    refreshWord.style.display = "none";
    inputWord.style.display="none";
  
  } else {
    timer.innerHTML = lblTimer - 1;
  }
 
};
//#endregion

let nextWord = (list) => {
  let randomIndex = Math.floor(Math.random() * 23);
  let randomWord = list[randomIndex];
  unscrambledWord = randomWord.word; 
  scrambleWord.innerHTML = randomWord.word;
  hint.innerHTML = randomWord.hint;
  scrambleWordFun();

};

//#region start a countdown
let startTimer = () => {
  clearInterval(myInterval); 
  timer.innerHTML = 60;
  myInterval = setInterval(changeTimer, 1000);
};
//#endregion

//#region continous a countdown
let conTimer = () => {
  clearInterval(myInterval); // Clear any existing intervals
  myInterval = setInterval(changeTimer, 1000);
};
//#endregion



window.addEventListener("DOMContentLoaded", () => {
  const scrambleWord = document.getElementById("scrambleWord");
  const hint = document.getElementById("hint");
  const timer = document.getElementById("timer");
  const checkWord = document.getElementById("checkWord");
  const refreshWord = document.getElementById("refreshWord");
 const playAgain = document.getElementById("playAgain");
 const newLevel = document.getElementById("newLevel");
 const Easy = document.getElementById("Easy");
 const Hard = document.getElementById("Hard");
 const inputWord = document.getElementById("inputWord");
 const hintParagraph = document.getElementById("hintParagraph");
 const timeParagraph = document.getElementById("timeParagraph");
 const chooseLevel = document.getElementById("chooseLevel");
 refreshWord.style.display ="none"
 checkWord.style.display="none"
  
if(Easy){
  Easy.addEventListener("click" , ()=>{
    pageInitialization(easyWords);
    hintParagraph.style.display="block";
    timeParagraph.style.display="block";
    chooseLevel.style.display="none";
    if (refreshWord) {
      refreshWord.addEventListener("click", () => {
        clearInterval(myInterval);
        conTimer();
        nextWord(easyWords);
        document.getElementById("inputWord").value = "";

      });
    }


    if (checkWord) {

      let fun =() =>{
      checkWord.addEventListener("click", (e) => {
        e.preventDefault();
        inputWord1 = inputWord.value;
        if (inputWord1.toLowerCase() === unscrambledWord.toLowerCase()) {
          alert("Congratulations!");
          clearInterval(myInterval); // Clear the interval
          nextWord(easyWords);
          conTimer();
          score.push(inputWord1);
        } else {
          conTimer()
          alert("Nope! Try again.");
        }
        document.getElementById("inputWord").value = "";
      });
    }
    fun()
  }
if(playAgain){
  playAgain.addEventListener("click" , ()=>{
    // scoreDiv.style.display = "block"; 
    pageInitialization(easyWords);
   
    clearInterval(myInterval);
    startTimer();
    score = [];
    // location.reload()
   
  })
}

  });
};

if(Hard){
  Hard.addEventListener("click" , ()=>{
    pageInitialization(hardwords);
    hintParagraph.style.display="block";
    timeParagraph.style.display="block";
    chooseLevel.style.display="none";
    if (refreshWord) {
      refreshWord.addEventListener("click", () => {
        clearInterval(myInterval);
        conTimer();
        nextWord(hardwords);
        document.getElementById("inputWord").value = "";
      });
    }

    if (checkWord) {
      checkWord.addEventListener("click", (e) => {
        e.preventDefault();
        let inputWord = document.getElementById("inputWord").value.toLowerCase();
        if (inputWord === unscrambledWord.toLowerCase()) {
          alert("Congratulations! ");
          clearInterval(myInterval); 
          nextWord(hardwords);
          conTimer();
          score.push(inputWord);
          console.log(score);
        } else {
          conTimer()
          alert("Nope! Try again.");
        }
        document.getElementById("inputWord").value = "";
      });
    }

if(playAgain){
  playAgain.addEventListener("click" , ()=>{
    pageInitialization(hardwords);
    clearInterval(myInterval);
    startTimer();
    score = [];
  })
}


  });
}

if(newLevel){
  newLevel.addEventListener("click",()=>{
    // Easy.style.display="block";
    // Hard.style.display="block";
    // newLevel.style.display = "none";
    // playAgain.style.display = "none";
    // hintParagraph.style.display="none";
    // timeParagraph.style.display="none";
    // chooseLevel.style.display="block";
    // scoreDiv.style.display="none";
    // scrambleWord.style.display="none";
    // document.getElementById("inputWord").value = "";
    
    location.reload()
   
  })
}

});

//#region
let scrambleWordFun = () => {
  let newArr = [];
  let newWord = "";
  let word = scrambleWord.innerHTML;
  while (word.length > 0) {
    let randomIndex = Math.floor(Math.random() * word.length);
    let randomChar = word[randomIndex];
    newArr.push(randomChar);
    word = word.slice(0, randomIndex) + word.slice(randomIndex + 1);
  }
  newWord = newArr.join("");
  scrambleWord.innerHTML = newWord;
};
//#endregion