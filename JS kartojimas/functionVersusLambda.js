// 'use strict';
const myConsole = require('./myConsole');

/*
 2015 metai, su ECMA 5 standartu buvo išleista 'lambda' išraiška.
 Dažniausiai ji yra naudojama tam, kad trumpiau aprašyti kodą.
 Vykdant vieną komandą, nereikia rašyti vykdomojo bloko skliaustų.
    Svarbu pastebėti! kad jeigu vykdote vieną komandą su lambda išraiška
    tos komandos rezultatas yra suvokiamas kaip išraiškos grąžinimas:
*/

myConsole.log('Lambda išraiškos automatinis grąžinimas rašant vieną komandą', () => {
  const sum = (x, y) => x + y;
  // const sum = (x, y) => { return x + y; };
  const sumResult = sum(3, 5);
  console.log(sumResult);
  const printSum = (x, y) => console.log(x + y);
  const printSumResult = printSum(3, 5);
  console.log(printSumResult);
});

/*
  Daug svarbesnis skirtumas negu patogus užrašymas yra nuorodos <this> priskyrimas.
    Funkcija nuorodą <this> traktuoja pagal tai kokiam objektui ji yra priskirta.
      SVARBU: deklaruojant funkcijas nepriskiriant objektui:
        * funkcika nuorodą <this> prisiskiria pagal tą apliką, kurioje buvo sukurta.
        * nurodžius 'use strict' pirmoje failo eilutėje, nuoroda <this> bus undefined
          * class {...} aplinka visuomet vykdoma 'use strict' rėžimu.   
    Funkcija taip pat gali nurodyti savo nuorodos <this> reikšmę naudojant metodus:
      * Function.prototype.bind
      * Function.prototype.call
      * Function.prototype.apply
    Daugiau apie šiuos metodus galite paskaityti faile './functionThisBinding.js'

    Lambda išraiška VISADA naudos nuorodos <this> reikšmę pagal tai, kur buvo sukurta.
    Jeigu ji nėra priskirta prie jokio objekto, tuomet nuoroda <this> bus tuščias objektas
    Nuorodos <this> pakeisti, neįmanoma. Tai alternatyvu metodui Function.prototype.bind.
    Todėl praktikoje, kuomet norima pririšti funkcionalumą prie aplinkos kuriame jis yra kuriamas
    dažniausiai naudojamos lambda išraiškos. 
*/
class Teacher {
  constructor(subjects) {
    this.subjects = subjects;
  }

  printSubjects() {
    console.table(this.subjects)
  }

  printSubjectsLambda = () => {
    console.table(this.subjects)
  }

  tellStudentToSaySubjects(student) {
    student.doWhatNeeded(this.printSubjects);
  }

  tellStudentToSaySubjectsLambda() {
    student.doWhatNeeded(this.printSubjectsLambda);
  }
}

class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  doWhatNeeded(whatToDo) {
    try {
      whatToDo();
    }
    catch (ex) {
      console.log('Sorry, i can\'t, be couse:');
      console.log(ex.message);
    }
  }
}

const mathTeacher = new Teacher(['Algebra', 'Trygonometry', 'Statistics']);
const student = new Student('Germantas', 'Pauliukaitis');
mathTeacher.tellStudentToSaySubjects(student);
mathTeacher.tellStudentToSaySubjectsLambda(student);





