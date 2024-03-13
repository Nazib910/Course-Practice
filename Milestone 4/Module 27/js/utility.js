function hideElementById(e) {
  const element = document.getElementById(e);
  element.classList.add("hidden");
}

function showElementById(e) {
  const element = document.getElementById(e);
  element.classList.remove("hidden");
}

function colorChange(e){
    const elem = document.getElementById(e);
    elem.classList.add('bg-orange-600');
}
function colorChangeOff(e){
    const elem = document.getElementById(e);
    elem.classList.remove('bg-orange-600');
}

function getTextElementValueById(ElementID){
  const element = document.getElementById(ElementID);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementById(Elementid, value){
  const element = document.getElementById(Elementid);
  element.innerText = value;
}

function getElementTextById (ElementId){
  const element = document.getElementById(ElementId);
  const text = element.innerText;
  return text;
}


function getARandomAlphabet() {
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const alphaArray = alphaString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphaArray[index];
  return alphabet;
}
