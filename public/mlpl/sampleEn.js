/* eslint-env browser */

(function initsample(root) {
  const englishSampleCode = `
# Sample program in MLPL language - computes factorial #
  
write 'Enter positive number';
read x; # input an integer #
if 0 < x then # don't compute if x <= 0 #
  factorial := 1;
  repeat
    factorial := factorial * x;
    x := x - 1;
  until x = 0
  write 'Factorial for entered number is';
  write factorial;  # output factorial of x #
else
  write 'You entered non-positive number';
end
write 'Program exited';
`;

  root.mlpl.sample = englishSampleCode; //eslint-disable-line
  root.mlpl.greetings = 'MLPL Interpreter'; //eslint-disable-line
  root.mlpl.name = 'mlpl_demo'; //eslint-disable-line
  root.mlpl.prompt = 'mlpl> '; //eslint-disable-line
}(window));
