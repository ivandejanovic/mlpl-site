/* eslint-env browser */

(function initsample(root) {
  const englishSampleCode = `
# Primer programa u MLPL jeziku - izracunava faktorijel #
ispisi "Unesite pozitivan broj";
procitaj x; # procitaj broj #
ako 0 < x onda # ne racunaj ako je x <= 0 #
  faktorijel := 1;
  ponovi
    faktorijel := faktorijel * x;
    x := x - 1;
  do x = 0
  ispisi "Faktorijel za uneti broj je";
  ispisi faktorijel;  # ispisi faktorijel od x #
inace
  ispisi "Niste uneli pozitivan broj";
kraj
ispisi "Kraj programa";
`;

  root.mlpl.sample = englishSampleCode; //eslint-disable-line
  root.mlpl.greetings = 'MLPL Interpreter'; //eslint-disable-line
  root.mlpl.name = 'mlpl_demo'; //eslint-disable-line
  root.mlpl.prompt = 'mlpl> '; //eslint-disable-line
}(window));
