var calculate = function (x, operator, y) {
  if (operator == "+") {
    answer = x + y;
  } else if (operator == "-") {
    answer = x - y;
  } else if (operator == "*") {
    answer = x * y;
  } else if (operator == "/") {
    answer = x / y;
  } else if (operator == "^") {
    answer = Math.pow(x, y);
  } else if (operator == "√") {
    answer = Math.sqrt(x);
  }
  return answer;
}

window.onload = function () {
  var calc = document.getElementById("calc");
  var answerdiv = document.getElementById("answer");

  calc.addEventListener("submit", function (event) {
    event.preventDefault();
    var x = parseFloat(calc.children.x.value);
    var y = parseFloat(calc.children.y.value);
    var operator = calc.children.operator.value;

    var answer = calculate(x, operator, y);
    calc.children.x.value = answer;
    answerdiv.innerHTML = answer;
  });

  function validate () {
    if (answerdiv === NaN) {
      document.getElementById("error").innerHTML = "Invalid entry.";
    }
  }

  var invert = document.getElementById("invert");
    invert.addEventListener("click", function (event) {
      event.preventDefault();
    calc.children.x.value = answer * -1;
    answerdiv.innerHTML = answer * -1;
    answer = answer * -1
  });

  var clear = document.getElementById("clear");
    clear.addEventListener("click", function (event) {
      event.preventDefault();
    calc.children.x.value = null;
    calc.children.y.value = null;
    answerdiv.innerHTML = 0;
    calc.children.x.focus();
  });
};
