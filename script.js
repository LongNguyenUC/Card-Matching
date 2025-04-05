let musicOn = true;
const musicButton = document.querySelector(".music");
const icon = musicButton.querySelector("i");
const backgroundNoise = document.querySelector("#backgroundNoise");
const cardContainer = document.querySelector(".card-container");
let cardArray = [];
let htmlCardArr = [];

let flippedCount = 0;
let flippedIndexes = [];
let locked = false;

musicButton.addEventListener("click",(e)=>{
    
    if(musicOn){
        icon.classList.remove("fa-volume-high");
        icon.classList.add("fa-volume-xmark");
        backgroundNoise.muted = true;

    }else{
        icon.classList.remove("fa-volume-xmark");
        icon.classList.add("fa-volume-high");
        backgroundNoise.muted = false;
    }

    musicOn = !musicOn;
});

//Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

function createCards(){
    for(let i = 1; i <= 5; i++){
        cardArray.push(i);
        cardArray.push(i);
    }
    console.log(cardArray);
    shuffle(cardArray);
    console.log(cardArray);
}

function compareCards(cardOneIndex, cardTwoIndex){
    let one = htmlCardArr[cardOneIndex];
    let two = htmlCardArr[cardTwoIndex];

    console.log(one);
    console.log(two);
    if (one.value === two.value){
        console.log("match!");
        return true;
    }
    else{
        console.log("different!");
        return false;
    }
}

function Card(value, index){
    this.value = value;
    this.index = index;

    this.el = document.createElement("div");
    this.el.textContent ="";
    this.el.classList.add("card", "card-background");
    this.el.addEventListener("click", ()=>{
        if(locked == false){
            console.log(`Pressed Card has a value of ${this.value} at index ${this.index}`);
            this.el.textContent = this.value;
            this.el.classList.remove("card-background");
        
            this.el.style.pointerEvents = "none";

            flippedIndexes[flippedCount] = this.index;
            flippedCount++;
            if (flippedCount == 2){
                locked = true;
                cardContainer.style.pointerEvents = "none";
                console.log("Two cards have been flipped");
                cardOne = htmlCardArr[flippedIndexes[0]];
                cardTwo = htmlCardArr[flippedIndexes[1]];

                let match = compareCards(flippedIndexes[0], flippedIndexes[1]);

                setTimeout(()=>{
                    cardOne.el.textContent = "";
                    cardOne.el.classList.add("card-background");
                    cardOne.el.style.pointerEvents = "auto";

                    cardTwo.el.textContent = "";
                    cardTwo.el.classList.add("card-background");
                    cardTwo.el.style.pointerEvents = "auto";

                    if (match){
                        cardOne.el.style.visibility = "hidden";
                        cardTwo.el.style.visibility = "hidden";
                    }

                    
                    }, 500);  
                setTimeout(()=>{cardContainer.style.pointerEvents = "auto";flippedCount = 0;locked = false;}, 520)
                
            }
        }
    })
    
}

function displayCards(){
    for(let i = 0; i < 10; i++){
        let card = new Card(cardArray[i], i);
        htmlCardArr.push(card);
        cardContainer.append(card.el);
    }
}

createCards();
displayCards();
