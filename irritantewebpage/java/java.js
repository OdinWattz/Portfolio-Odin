function getRandomPosition() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let randomX = Math.floor(Math.random() * (screenWidth - 128)); 
    let randomY = Math.floor(Math.random() * (screenHeight - 43));

    return { x: randomX, y: randomY };
}

let section = document.getElementById('section')
let apple = document.getElementById('appleIcon')

function cloneAndPositionButton() {

    let clonedButton = apple.cloneNode(true);


    clonedButton.id = 'clonedButton';

    let randomPosition = getRandomPosition();
    clonedButton.style.left = randomPosition.x + 'px';
    clonedButton.style.top = randomPosition.y + 'px';

    document.body.appendChild(clonedButton);
}


function backgroundChange(){
let i = 1;

if(i = 1){
    section.style.backgroundColor = 'yellow';
    i++;
}else if(i = 2){
    section.style.backgroundColor = 'green';
    i++
}else{
    section.style.backgroundColor = 'white';
    i = 0
}

apple.addEventListener('click', cloneAndPositionButton);

}

function playMusic(){
    var music = new Audio("./audio/460432__jay_you__music-elevator.wav");
    music.play();
    }


let popUp = document.getElementById("cookiePopup");

//Wanneer er dus op accept geklikt wordt, krijg je een cookie in je browser
document.getElementById("acceptCookie").addEventListener("click", () => {
// Hoelang de cookie geldig is: 5 minuten
  let d = new Date();
  d.setMinutes(5 + d.getMinutes());

  //De naam van de cookie en hoelang die geldig is
  document.cookie = "myCookieName=ditismijncookie_Odin_Mohammad; expires = " + d + ";";

  //Hide de popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

// Die checkt of de cookie al bestaat
const checkCookie = () => {
  //De cookie wordt gesplitst op de = en in een array gezet
  let input = document.cookie.split("=");
  //Check voor de cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};


//Checkt of de cookie al bestaat wanneer de pagina laad
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};
