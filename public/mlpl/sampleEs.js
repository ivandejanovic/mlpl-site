/* eslint-env browser */

(function initsample(root) {
  const englishSampleCode = `
# Ejemplo de programa en lenguaje MLPL - calcula el factorial #
escriba "Introduzca un número positivo";
lea x; # lea el número#
si 0 < x entonces # no calcule si x <= 0 #
  factorial := 1;
  repetir
    factorial := factorial * x;
    x := x - 1;
  hasta_que x = 0
  escriba "El factorial del número introducido es";
  escriba factorial;  # escriba el factorial de x #
de_otra_manera
  escriba "El número introducido no es positivo";
fin
escriba "Fin del programa";
`;

  root.mlpl.sample = englishSampleCode; //eslint-disable-line
  root.mlpl.greetings = 'MLPL Interpreter'; //eslint-disable-line
  root.mlpl.name = 'mlpl_demo'; //eslint-disable-line
  root.mlpl.prompt = 'mlpl> '; //eslint-disable-line
}(window));
