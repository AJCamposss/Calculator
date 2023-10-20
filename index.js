window.onload = init;

function init() {

    const addBtn = doccument.getElementById("addBtn")
    addBtn.onclick = onAddButtonClicked;
}

function onAddButtonClicked() {
    const numberInput = document.getElementById(+"number1Field");
    const numberInput2 = document.getElementById(+"number2Field");
    let addTheNumbers = userInput1 + UserInput2
    alert(numbersAdded)
}