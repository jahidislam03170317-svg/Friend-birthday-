function go(id){

    document
    .querySelectorAll(".page")
    .forEach(page=>{
        page.classList.remove("active");
    });

    document
    .getElementById(id)
    .classList.add("active");

}


/* HOME */

function openGift(){

    go("giftPage");

}


/* GIFT */

function openCake(){

    go("cakePage");

    makeConfetti(35);

}


/* CAKE */

function showCards(){

    go("cardsPage");

}


/* CARDS */

function showTimeline(){

    go("timelinePage");

}


/* TIMELINE */

function showLetter(){

    go("letterPage");

}


/* LETTER */

function openLetter(){

    go("finalPage");

    makeConfetti(50);

}


/* FINAL */

function celebrate(){

    makeConfetti(180);

}


/* CONFETTI */

function makeConfetti(amount){

    const colors=[
        "#ff4fb8",
        "#ffcc4d",
        "#8c5cff",
        "#55ddff",
        "#ffffff",
        "#6cff8d"
    ];

    for(let i=0;i<amount;i++){

        const piece=
        document.createElement("div");

        piece.className="confettiPiece";

        piece.style.left=
        Math.random()*100+"%";

        piece.style.background=
        colors[
            Math.floor(
                Math.random()*colors.length
            )
        ];

        piece.style.animationDuration=
        (2+Math.random()*3)+"s";

        piece.style.animationDelay=
        Math.random()+"s";

        document
        .getElementById("confetti")
        .appendChild(piece);

        setTimeout(()=>{
            piece.remove();
        },5000);

    }

}


/* MUSIC */

let musicOn=false;
let audio;

function toggleMusic(){

    if(!musicOn){

        startMusic();

        musicOn=true;

    }else{

        if(audio){
            audio.pause();
        }

        musicOn=false;

    }

}


function startMusic(){

    audio=
    new Audio();

    /*
      Browser may block automatic audio.
      User can press the 🔊 button first.
    */

}
