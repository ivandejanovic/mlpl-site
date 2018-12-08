const common = [
  {
    url: 'index',
    languageLabel: 'english',
    dataLangLabel: 'en',
    image: 'images/flag-united-kingdom.jpg',
    altLabel: 'UK'
  },
  {
    url: 'index_rs',
    languageLabel: 'srpski',
    dataLangLabel: 'sr',
    image: 'images/flag-serbia.jpg',
    altLabel: 'SRB'
  },
  {
    url: 'index_es',
    languageLabel: 'español',
    dataLangLabel: 'es',
    image: 'images/flag-spain.jpg',
    altLabel: 'ES'
  }
];

const en = {
  common,
  mlpl: 'MLPL',
  mlplLong: 'Multilingual Programming Language',
  indexUrl: 'index',
  indexLabel: 'Getting Started',
  docsUrl: 'docs',
  docsLabel: 'Documentation',
  languageLabel: 'english',
  languageImage: 'images/flag-united-kingdom.jpg',
  index: {
    jumbotronH1Label: 'MLPL - Multilingual Programming Language',
    jumbotronH3Label: 'What is MLPL?',
    jumbotronP1Label:
      'A problem with majority of programming languages in use today is that they require some knowledge of an English language and alphabet. Children from non-English speaking countries therefore have a higher barrier for entry than children whose native language is English.',
    jumbotronP2Label:
      "Idea behind MLPL is to create an interpreter for a language with very simple syntax that can be easily localized. A programmer would beside source code file provide a file that contains all the keywords localized to programmer's native language. Thus, children from non-English speaking countries can start programming at much earlier age.",
    h3Label: 'Getting Started',
    windowsP1Label: 'If you are using Windows you can download the package using this',
    windowsUrl: 'files/mlpl_windows_english.zip',
    windowsP2Label: 'MLPL for Windows',
    windowsP3Label:
      'If you are using Windows unpack the content of the package. Start the console and to to the directory to which you unpacked the package. You have a sample program you can run by executing',
    windowsP4Label: 'mlpl.bat sample.mlpl',
    windowsP5Label:
      'in the console. Open any text editor and write your program using the documentation. Save it to the same directory that contains the unpacked package. Run your program by executing',
    windowsP6Label: 'mlpl.bat your_program.mlpl',
    windowsP7Label: 'from the console.',
    linuxP1Label: 'If you are using Linux you can download the package using this',
    linuxUrl: 'files/mlpl_linux_english.zip',
    linuxP2Label: 'MLPL for Linux',
    linuxP3Label:
      'If you are using Linux unpack the content of the package. Start the console and to to the directory to which you unpacked the package. You have a sample program you can run by executing',
    linuxP4Label: './mlpl.sh sample.mlpl',
    linuxP5Label:
      'in the console. Open any text editor and write your program using the documentation. Save it to the same directory that contains the unpacked package. Run your program by executing',
    linuxP6Label: './mlpl.sh your_program.mlpl',
    linuxP7Label: 'from the console.',
    githubLabel: 'MLPL on Github',
    authorLabel: 'MLPL author',
    designerLabel: 'Website design'
  },
  docs: {
    h1Label: 'Documentation',
    strong1Label: 'read',
    p1Label: 'This instruction enables the user to supply an integer for the program to process. The value user supplies is placed in a variable.',
    code1Label: 'read x;',
    p2Label: 'The instruction above read a integer user types on a console and places it into variable x.',
    p3Label: 'This instruction has to be followed by a semicolon.',
    strong2Label: 'write',
    p4Label: ' This instruction enables you to write out a variable, integer or a string to the console.',
    code2Label: 'write x;',
    p5Label: 'The instruction above writes a value of the variable to the console.',
    code3Label: 'write 5;',
    p6Label: 'The instruction above writes a value 5 to the console.',
    code4Label: 'write "message";',
    p7Label: 'The instruction above writes a value message to the console.',
    p8Label: 'This instruction has to be followed by a semicolon.'
  }
};

const rs = {
  common,
  mlpl: 'MLPL',
  mlplLong: 'Višejezički Programski Jezik',
  indexUrl: 'index_rs',
  indexLabel: 'Kako početi',
  docsUrl: 'docs_rs',
  docsLabel: 'Dokumentacija',
  languageLabel: 'srpski',
  languageImage: 'images/flag-serbia.jpg',
  index: {
    jumbotronH1Label: 'MLPL - Višejezički Programski Jezik',
    jumbotronH3Label: 'Šta je MLPL?',
    jumbotronP1Label:
      'Problem sa većinom programskih jezika koji se trenutno koriste je što zahtevaju odredjeno znanje engleskog jezika i pisma. Deci iz zemalja u kojima se ne govori engleski je stoga teže da počnu da koriste neki programski jezik za razliku od dece kojoj je engleski maternji jezik.',
    jumbotronP2Label:
      'Ideja sa MLPL-om je da se napravi interpreter za jezik jednostavne sintakse koja moze lako da se prevede. Programer bi pored fajla koji sadrži program prosledio i fajl koji sadrži sve ključne reči prevedene na programerov maternji jezik. Na taj način bi deca kojoj engleski jezik nije maternji mogla da počnu da programiraju ranije.',
    h3Label: 'Kako Početi',
    windowsP1Label: 'Ako koristite Windows možete preuzeti paket ovde',
    windowsUrl: 'ffiles/mlpl_windows_srpski.zip',
    windowsP2Label: 'MLPL za Windows',
    windowsP3Label:
      'Ako koristite Windows raspakujte sadržaj paketa. Pokrenite konzolu i idite u direktorijum u koji ste raspakovali sadržaj paketa. Tu se nalazi primer programa koji možete pokrenuti komandom',
    windowsP4Label: 'mlpl.bat primer.mlpl',
    windowsP5Label:
      'u terminalu. Otvorite bilo koji tekst editor i napišite program koristeći dokumentaciju. Snimite ga u isti direktorijum koji sadrži raspakovan paket. Pokrenite pogram izvršavajući komandu',
    windowsP6Label: 'mlpl.bat tvoj_program.mlpl',
    windowsP7Label: 'u terminalu.',
    linuxP1Label: 'Ako koristite Linux možete preuzeti paket ovde',
    linuxUrl: 'files/mlpl_linux_srpski.zip',
    linuxP2Label: 'MLPL za Linux',
    linuxP3Label:
      'Ako koristite Linux raspakujte sadržaj paketa. Pokrenite terminal i idite u direktorijum u koji ste raspakovali sadržaj paketa. Tu se nalazi primer programa koji možete pokrenuti komandom',
    linuxP4Label: './mlpl.sh primer.mlpl',
    linuxP5Label:
      'u terminalu. Otvorite bilo koji tekst editor i napišite program koristeći dokumentaciju. Snimite ga u isti direktorijum koji sadrži raspakovan paket. Pokrenite pogram izvršavajući komandu',
    linuxP6Label: './mlpl.sh tvoj_program.mlpl',
    linuxP7Label: 'u terminalu.',
    githubLabel: 'MLPL na Github-u',
    authorLabel: 'Autor MLPL-a',
    designerLabel: 'Dizajn sajta'
  },
  docs: {
    h1Label: 'Dokumentacija',
    strong1Label: 'procitaj',
    p1Label: 'Ova instrukcija omogućava korisniku da unese broj u program radi obrade. Vrednost koju korisnik unese se smesta u promenjivu.',
    code1Label: 'procitaj x;',
    p2Label: 'Gornja instrukcija čita broj koji korisnik unese preko terminala i smešta u promenjivu x.',
    p3Label: 'Posle ove instrukcije mora da sledi tačka-zarez.',
    strong2Label: 'ispisi',
    p4Label: 'Ova instrukcija omogućava da se promenjiva, broj ili string ispiše na terminal.',
    code2Label: 'ispisi x;',
    p5Label: 'Gornja instrukcija ispisuje vrednost promenjive na terminal.',
    code3Label: 'ispisi 5;',
    p6Label: 'Gornja instrukcija vrednost 5 na terminal.',
    code4Label: 'ispisi "poruka";',
    p7Label: 'Gornja instrukcija vrednost poruka na terminal.',
    p8Label: 'Posle ove instrukcije mora da sledi tačka-zarez.'
  }
};

const es = {
  common,
  mlpl: 'MLPL',
  mlplLong: 'Lenguaje de Programación Multilingüe',
  indexUrl: 'index_es',
  indexLabel: 'Página de inicio',
  docsUrl: 'docs_es',
  docsLabel: 'Documentación',
  languageLabel: 'español',
  languageImage: 'images/flag-spain.jpg',
  index: {
    jumbotronH1Label: 'MLPL - Lenguaje de Programación Multilingüe',
    jumbotronH3Label: 'Qué es MLPL?',
    jumbotronP1Label:
      'En la mayoría de lenguajes de programación utilizados hoy en día se require un nivel adecuado de competencia en lengua inglesa y el alfabeto. Por lo tanto, un niño cuya lengua materna no es el ingles habrá más dificultades para utilizar el lenguaje de programación que el niño del país de habla inglesa.',
    jumbotronP2Label:
      'La idea detrás de MLPL es crear un intérprete para un lenguaje con una sintaxis muy simple que se puede traducir fácilmente. Junto al archivo que contiene el programa, el programador le enviaría al usuario un archivo más que contiene todas las palabras clave traducidas a la lengua materna del programador. De este modo, los niños cuya lengua materna no es el inglés podrían comenzar a programar desde una edad muy temprana.',
    h3Label: 'Primeros pasos',
    windowsP1Label: 'Si está utilizando Windows, puede descargar el paquete aquí',
    windowsUrl: 'files/mlpl_windows_espanol.zip',
    windowsP2Label: 'MLPL para Windows',
    windowsP3Label:
      'Si está utilizando Windows, descomprima el contenido del paquete. Inicie la consola y vaya al directorio donde se ha extraído el contenido del paquete. He aquí un ejemplo de programa que se puede iniciar con el comando',
    windowsP4Label: 'mlpl.bat ejemplo.mlpl',
    windowsP5Label:
      'en el terminal. Abra cualquier editor de texto, y escriba un programa utilizando la documentación. Grábelo en el mismo directorio que contiene el paquete descomprimido. Inicie el programa con el comando',
    windowsP6Label: 'mlpl.bat tu_programa.mlpl',
    windowsP7Label: 'en el terminal.',
    linuxP1Label: 'Si está utilizando Linux, puede descargar el paquete aquí',
    linuxUrl: 'files/mlpl_linux_espanol.zip',
    linuxP2Label: 'MLPL para Linux',
    linuxP3Label:
      'Si está utilizando Linux, primero descomprima el contenido del paquete. Inicie el terminal y vaya al directorio donde se ha extraído el contenido del paquete. He aquí un ejemplo de programa que se puede iniciar con el comando',
    linuxP4Label: './mlpl.sh ejemplo.mlpl',
    linuxP5Label:
      'en el terminal. Abra cualquier editor de texto, y escriba un programa utilizando la documentación. Grábelo en el mismo directorio que contiene el paquete descomprimido. Inicie el programa con el comando',
    linuxP6Label: './mlpl.sh tu_programa.mlpl',
    linuxP7Label: 'en el terminal.',
    githubLabel: 'MLPL en Github-u',
    authorLabel: 'Autor del MLPL',
    designerLabel: 'Diseño de Página Web'
  },
  docs: {
    h1Label: 'Documentación',
    strong1Label: 'lea',
    p1Label: 'Esto permite que el usuario introduzca el número para su procesamiento por el programa. El valor que introduce el usuario se guarda en la variable.',
    code1Label: 'lea x;',
    p2Label: 'La instrucción de arriba lee el número que el usuario introduce a través del terminal y se almacena en la variable x.',
    p3Label: 'Esta instrucción debe ir seguida por el punto y coma.',
    strong2Label: 'escriba',
    p4Label: 'Esta instrucción permite que la variable, el número o cadena de caracteres se muestre en el terminal.',
    code2Label: 'escriba x;',
    p5Label: 'La instrucción de arriba escribe el valor final de la variable en el terminal.',
    code3Label: 'escriba 5;',
    p6Label: 'La instrucción de arriba escribe el valor 5 en el terminal.',
    code4Label: 'escriba "mensaje";',
    p7Label: 'La instrucción de arriba escribe los valores de los mensajes en el terminal.',
    p8Label: 'Esta instrucción debe ir seguida por el punto y coma.'
  }
};

module.exports = {
  en,
  rs,
  es
};
