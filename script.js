let musicOn = true;
const musicButton = document.querySelector(".music");
const icon = musicButton.querySelector("i");
const backgroundNoise = document.querySelector("#backgroundNoise");

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