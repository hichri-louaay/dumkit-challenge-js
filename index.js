var i=0;
var j=0;
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
        var ButtonsClick = this.innerHTML;
        if ( ButtonsClick === "w"){
            var audio = new Audio("sounds/crash.mp3");
            return audio.play();
        }
        else if ( ButtonsClick === "a"){
            var audio = new Audio("sounds/kick.mp3");
            return audio.play();
        }
        else if ( ButtonsClick === "s"){
            var audio = new Audio("sounds/tom1.mp3");
            return audio.play();
        }
        else if ( ButtonsClick === "d"){
            var audio = new Audio("sounds/tom2.mp3");
            return audio.play();
        }
        else if ( ButtonsClick === "j"){
            var audio = new Audio("sounds/tom3.mp3");
            return audio.play();
        }
        else if ( ButtonsClick === "k"){
            var audio = new Audio("sounds/tom4.mp3");
            return audio.play();
        }
        else if ( ButtonsClick === "l"){
            var audio = new Audio("sounds/snare.mp3");
            return audio.play();
        }
    });
    
    
}

 


