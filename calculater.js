let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

function log() {
  try {
    display.value = Math.log10(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function sin() {
  try {
    display.value = Math.sin(toRadians(eval(display.value)));
  } catch {
    display.value = "Error";
  }
}

function cos() {
  try {
    display.value = Math.cos(toRadians(eval(display.value)));
  } catch {
    display.value = "Error";
  }
}

function tan() {
  try {
    display.value = Math.tan(toRadians(eval(display.value)));
  } catch {
    display.value = "Error";
  }
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}
