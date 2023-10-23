window.onload = init;

function init() 
{
    document.getElementById("addBtn").onclick = add;

    document.getElementById("subtractBtn").onclick = subtract;

    document.getElementById("multiplyBtn").onclick = multiply;

    document.getElementById("divideBtn").onclick = divide;
}

function add()
{
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);

    const answer = number1 + number2;

    document.getElementById("answerField").value = answer;
}

function subtract()
{
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    
    const answer = number1 - number2;

    document.getElementById("answerField").value = answer;
}

function multiply() 
{
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);

    const answer = number1 * number2

    document.getElementById("answerField").value = answer
}

function divide()
{
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);

    const answer = number1 / number2;

    document.getElementById("answerField").value = answer;
}
    

