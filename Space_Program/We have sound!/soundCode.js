function playStation(){
    mySound=new sound("us-lab-background.mp3");
    mySound.play();
}

function playOddity(){
    mySound=new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
    document.getElementById("pFormat").innerHTML="playing space oddity";
}

function playChief(){
    mySound=new sound("hail_to_the_chief.mp3");
    mysound.play();
}

function sound(src) {
    this.sound=document.createElement("audio");
	this.sound.src=src;
	
        this.play=function() {
	        this.sound.play();
    }
}

