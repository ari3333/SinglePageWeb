var student = {
  name: "",
  type: "student"
};

/* tenemos esta aplicación donde básicamente cuando ingresas tu nombre aquí,
 y mientras escribes te dirá el valor numérico de tu base de nombre en los valores
  de caracteres ASCII que ingrese. Y a medida que borra básicamente puede presionar
   cualquier tecla, el valor se actualizará. */
document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  // Insert result into page
  var output = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
