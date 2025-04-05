let musicOn = true;
const musicButton = document.querySelector(".music");
const icon = musicButton.querySelector("i");
const backgroundNoise = document.querySelector("#backgroundNoise");
const cardContainer = document.querySelector(".card-container");

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

function Card(value){
    this.value = value;

}

function displayCards(){
    for(let i = 0; i < 10; i++){
        let tmp = document.createElement("div");
        tmp.classList.add("card");
        tmp.textContent = i;
        cardContainer.appendChild(tmp);
    }
}

displayCards();