function press(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    let expression = display.value.replace('√', 'Math.sqrt(') + ')';
    let result = eval(expression);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}