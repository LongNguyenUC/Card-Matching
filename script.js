let musicOn = true;
const musicButton = document.querySelector(".music");
let icon = musicButton.querySelector("i");

musicButton.addEventListener("click",(e)=>{
    
    if(musicOn){
        icon.classList.remove("fa-volume-high");
        icon.classList.add("fa-volume-xmark");
    }else{
        icon.classList.remove("fa-volume-xmark");
        icon.classList.add("fa-volume-high");
    }

    musicOn = !musicOn;
});