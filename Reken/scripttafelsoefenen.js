let tableof = 2;
let tabletimes = 3;

function DisplayQuestion()
{
  let opgtekst = "";
  let tafeltot = document.getElementById("inputtafellengte").value;
  let tafelvan = document.getElementById("inputtafelvan").value;
  tableof = tafelvan;
  //ik moet een random getal tussen 1 en tafeltot
  let randomnumber = Math.floor(Math.random() * tafeltot) + 1;
  tabletimes = randomnumber;
  // let randomnumber = Math.ceil(Math.random() * tafeltot)
  opgtekst = randomnumber + " x " + tafelvan;
  document.getElementById("inputsom").value = opgtekst;
  document.getElementById("inputantwoord").value = "";
  document.getElementById("inputantwoord").classList.remove("is-valid");
  document.getElementById("inputantwoord").classList.remove("is-invalid");
  document.getElementById("inputantwoord").focus();
}

function CheckAnswer()
{
  let answer = document.getElementById("inputantwoord").value;
  let correctanswer = tableof * tabletimes;
  if (answer == correctanswer) {
    document.getElementById("inputantwoord").classList.remove("is-valid");
    document.getElementById("inputantwoord").classList.remove("is-invalid");
    document.getElementById("inputantwoord").classList.add("is-valid")
    // DisplayQuestion();
  } else {
    document.getElementById("inputantwoord").classList.remove("is-valid");
    document.getElementById("inputantwoord").classList.remove("is-invalid");
    document.getElementById("inputantwoord").classList.add("is-invalid")
  }
}