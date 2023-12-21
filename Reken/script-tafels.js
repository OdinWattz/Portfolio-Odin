function displaytafel()
{
let tafelvan = document.getElementById("inputTafelVan").value
let tafellengte = document.getElementById("inputTafelLengte").value
let tafeltekst = "" //een lege string
// let teller = 1 //die bij gaat houden 1 x 7 2 x 7 etc.
let uitkomst = 0 //de uitkomst van onze berekeningen

// while (teller <= tafellengte)
for (let teller = 1; teller <= tafellengte; teller++)
{
   uitkomst = teller * tafelvan
   tafeltekst += teller + " x " + tafelvan + "=" + uitkomst + "<br>"
   //Hier moet iets komen als: als de teller 10, 20, 30 etc. is dan moet er een <br> komen
   //Je gaat een if statement maken die checkt of de teller deelbaar is door 10
   if (teller % 10 == 0)
    {
      tafeltekst += "<br>"
    }
   //  teller++ //de teller wordt groter dan 1 aan het einde van de lus
}

document.getElementById("tafel").innerHTML = tafeltekst
document.getElementById("tafelheader").innerHTML = "Tafel van " + tafelvan
}
