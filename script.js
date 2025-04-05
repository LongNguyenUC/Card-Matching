let musicOn = true;
const musicButton = document.querySelector(".music");
const icon = musicButton.querySelector("i");
const backgroundNoise = document.querySelector("#backgroundNoise");
const cardContainer = document.querySelector(".card-container");
let cardArray = [];
let htmlCardArr = [];

let flippedCount = 0;
let flippedIndexes = [];

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

function Card(value, index){
    this.value = value;
    this.index = index;

    this.el = document.createElement("div");
    this.el.textContent ="";
    this.el.classList.add("card", "card-background");
    this.el.addEventListener("click", ()=>{
        console.log(`Pressed Card has a value of ${this.value} at index ${this.index}`);
        this.el.textContent = this.value;
        this.el.classList.remove("card-background");

        flippedIndexes[flippedCount] = this.index;
        flippedCount++;
        if (flippedCount == 2){
            flippedCount = 0;
            console.log("Two cards have been flipped");
            
            setTimeout(()=>{
                htmlCardArr[flippedIndexes[0]].el.textContent = "";
                htmlCardArr[flippedIndexes[0]].el.classList.add("card-background");

                htmlCardArr[flippedIndexes[1]].el.textContent = "";
                htmlCardArr[flippedIndexes[1]].el.classList.add("card-background");}, 600);
                
            
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
