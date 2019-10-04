function InitCalculator() {
    var calculatorBody = '<div class="display"> </div>\
    <table>\
        <tr>\
            <td> <button id="seven" value="7" onclick="InputValue(this)">7</button> </td>\
            <td> <button id="eight" value="8" onclick="InputValue(this)">8</button> </td>\
            <td> <button id="nine" value="9" onclick="InputValue(this)">9</button> </td>\
            <td> <button id="div" value=" / " onclick="InputValue(this)">/</button> </td>\
        </tr>\
        <tr>\
            <td> <button id="four" value="4" onclick="InputValue(this)">4</button> </td>\
            <td> <button id="five" value="5" onclick="InputValue(this)">5</button> </td>\
            <td> <button id="six" value="6" onclick="InputValue(this)">6</button> </td>\
            <td> <button id="mul" value=" * " onclick="InputValue(this)">*</button> </td>\
        </tr>\
        <tr>\
            <td> <button id="three" value="3" onclick="InputValue(this)">3</button> </td>\
            <td> <button id="two" value="2" onclick="InputValue(this)">2</button> </td>\
            <td> <button id="one" value="1" onclick="InputValue(this)">1</button> </td>\
            <td> <button id="sub" value=" - " onclick="InputValue(this)">-</button> </td>\
        </tr>\
        <tr>\
            <td> <button id="zero" value="0" onclick="InputValue(this)">0</button> </td>\
            <td> <button id="decimal" value="." onclick="InputValue(this)">.</button> </td>\
            <td> <button id="equal" value="=" onclick="InputValue(this)">=</button> </td>\
            <td> <button id="add" value=" + " onclick="InputValue(this)">+</button> </td>\
        </tr>\
        <tr>\
          <td> <button id="clear" value="c" onclick="InputValue(this)">C</button> </td>\
        </tr>\
         </table> </div>';
    return calculatorBody;
}


var inputString = "";
var flag = 0;

function InputValue(button) {
    var display = button.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
    console.log(display);
    if (button.value == "=") {
        inputString = eval(inputString);
        ClearDisplay(display);
        DisplayValue(display, inputString);
        inputString = "";
        flag = 1;
    } else if (button.value == "c") {
        ClearDisplay(display);
        inputString = "";
    } else {
        if (flag == 1) {
            ClearDisplay(display);
            flag = 0;
        }
        inputString += button.value;
        DisplayValue(display, button.value);
    }
}

function ClearDisplay(display) {
    display.innerHTML = "";
}

function DisplayValue(display, value) {

    display.insertAdjacentHTML("beforeend", value);
    console.log(inputString);
}

function render(id, element) {
    console.log(element);
    var appView = document.getElementById(id);
    appView.insertAdjacentHTML("beforeend", element);
}

render("calculator", InitCalculator());
render("calculator1", InitCalculator());

render("calculator2", InitCalculator());

// render("calculator2", InitCalculator());