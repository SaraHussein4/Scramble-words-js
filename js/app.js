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
    scoreDiv.innerHTML = "The Score is " + score.length;
    scoreDiv.style.display = "block"
    playAgain.style.display = "block";
    newLevel.style.display = "block"
    checkWord.style.display = "none";
    refreshWord.style.display = "none";
    inputWord.style.display="none";
    notRight.style.display ="none";
    right.style.display ="none";
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
  timer.innerHTML = 15;
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
//  const result = document.getElementById("result");
const right = document.getElementById("right");
const notRight = document.getElementById("notRight");
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
        notRight.style.display ="none";
        right.style.display ="none";

      });
    }


    if (checkWord) {

    
      checkWord.addEventListener("click", (e) => {
        e.preventDefault();
        inputWord1 = inputWord.value;
        if (inputWord1.toLowerCase().trim() === unscrambledWord.toLowerCase()) {
          // alert("Congratulations!");
          right.style.display ="block"
          notRight.style.display ="none"
          // result.innerHTML="right"
          clearInterval(myInterval); // Clear the interval
          nextWord(easyWords);
          conTimer();
          score.push(inputWord1);
          scoreDiv.innerHTML = "score =" + score.length;
          scoreDiv.style.display="block"
        } else {
          conTimer()
          // result.innerHTML="not right"
          right.style.display ="none"
          notRight.style.display="block"
          // alert("Nope! Try again.");
          
        }
        document.getElementById("inputWord").value = "";
      });
    
 
  }
if(playAgain){
  playAgain.addEventListener("click" , ()=>{ 
    pageInitialization(easyWords);
    document.getElementById("inputWord").value = "";
    clearInterval(myInterval);
    startTimer();
    score = [];
    notRight.style.display ="none";
      right.style.display ="none";   
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
        notRight.style.display ="none";
        right.style.display ="none";
      });
    }

    if (checkWord) {
      checkWord.addEventListener("click", (e) => {
        e.preventDefault();
        let inputWord = document.getElementById("inputWord").value;
        if (inputWord.toLowerCase().trim() === unscrambledWord.toLowerCase()) {
          right.style.display ="block"
          notRight.style.display ="none"
          clearInterval(myInterval); 
          nextWord(hardwords);
          conTimer();
          score.push(inputWord);
          scoreDiv.innerHTML = "score =" + score.length;
          scoreDiv.style.display="block";
        } else {
          conTimer()
          right.style.display ="none"
          notRight.style.display="block"
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
    notRight.style.display ="none";
    right.style.display ="none";
    document.getElementById("inputWord").value = "";
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