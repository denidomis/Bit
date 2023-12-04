function calculatorResult(){

    let selector = document.querySelector(`#selector`).value;

    let num1 = parseFloat(document.querySelector(`#calculatorWindow`).value);
    let num2 = parseFloat(document.querySelector(`#calculatorWindow2`).value);

    let answer;
    if (selector === 'add') answer = num1 + num2;
    else if (selector === 'substract') answer = num1 - num2;
    else if (selector === 'multiply') answer = num1 * num2;
    else if (selector === 'divide') answer = num1 / num2;
    else if (selector === 'square'){
        if (num1 === 0 && num2 <= 0) answer = "Abu skaičiai yra nuliai"
        else answer = num1 ** num2;
    }
    else answer = "Įveskite skaičius ir pasirinkite veiksmą";

    document.querySelector("#atsakymas").innerText = `Atsakymas ${answer}`;
}


