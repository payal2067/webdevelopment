document.getElementById("redbox").addEventListener("mouseover", fillRedColor);
document.getElementById("redbox").addEventListener("mouseout", fillbaseColor);

document.getElementById("greenbox").addEventListener("mouseover", fillgreenColor);
document.getElementById("greenbox").addEventListener("mouseout", fillbaseColor);

document.getElementById("bluebox").addEventListener("mouseover", fillblueColor);
document.getElementById("bluebox").addEventListener("mouseout", fillbaseColor);



  function fillRedColor() {
    document.getElementById("bulb1").style.backgroundColor = "red";
}

function fillgreenColor(){
    document.getElementById("bulb1").style.backgroundColor = "green"
}

function fillblueColor(){
    document.getElementById("bulb1").style.backgroundColor = "blue"
}

function fillbaseColor(){
     document.getElementById("bulb1").style.backgroundColor = "white"
}