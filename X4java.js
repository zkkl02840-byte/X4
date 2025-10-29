function press(value) {
  const display = document.getElementById('display');
  if (value === '√') {
    display.value += 'Math.sqrt(';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    // Add closing parentheses for Math.sqrt if missing
    const fixedValue = display.value.replace(/Math\.sqrt\(([^)]*)$/, 'Math.sqrt($1)');
    display.value = eval(fixedValue);
  } catch {
    display.value = 'Error';
  }
}