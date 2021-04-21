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
    // Norint funkcijai priskirti nuorodą <this>, pririšame ją prie funkcijos
    this.printSubjects = this.printSubjects.bind(this);
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

/*
 Sukurkite Master and Slave klases
  Master:
    savybės
      pickaxeDurability: Number
      wagon: []
      rocks: []  // Akmenų svoriai
    metodai:
      countRocks() - suskaičiuoja Master objekto akmenis savybėse <wagon> ir <rocks> ir atspausdina į konsolę
      orderSlaveToCountRocks(slave) - perduoda <countRocks> funkciją parametru gautam vergui <slave>

      putRockIntoWagon() - įdeda į Master objekto savybės <wagon> akmenį iš Master objekto savybės <rocks>
      orderSlaveToPutRockIntoWagon(slave) - perduoda <bringRocks> funkciją parametru gautam vergui <slave>

      mineRocks() - į Master objekto savybę <rocks> įdeda akmenį nuo 1 iki 10 svorio, ir priklausomai
        nuo akmens svorio sumažina Master objekto savybę <pickaxeDurability> tokiu dydžiu, kokį akmenį pavyko
        iškasti. Jeigu Master objekto savybė <pickaxeDurability> yra 0 arba mažiau, atspausdina 
        į konsolę, jog sulūžo kirtiklis ir atspausdina Master objekto savybę <pickaxeDurability>;
      orderSlaveToMineRocks(slave) - perduoda <mineRocks> funkciją parametru gautam vergui <slave>

  Slave:
    savybės: 
      name - vergo pseudonimas
    metodai:
      obey(callback) - bando vykdyti parametru perduotą funkciją. Atliekant darbą, atspausdinti konsolėje,
        savo savybę <name> ir darbą, kuris yra atliekamas (Vienoje eilutėje).

  Atlike užduotis:
    1. Sukurti Master objektą

    2. Sukurti masyvą sudarytą iš Slave objektų, kuriems bus nurodyta darbus vykdyti paeiliui, pvz.: 
      Jeigu yra 2 vergai, tai jie atlieka Master objekto komandą kas antrą kartą.
      Jeigu yra 3 vergai, tai jie atlieka Master objekto komandą kas trečią kartą.

    // Alogritmas
    3. Kasti akmenis tol, kol Master objekto savybė <pickaxeDurability> yra didesnė nei 0.
    tuomet...
    4. Naudojant Master objektą, liepti vergui suskaičiuot akmenis 
      wagon - 0
      rocks - 102

    5. Kuomet Master objekto savybė <pickaxeDurability> yra 0 arba mažiau, tuomet dėti akmenis į Master
    objekto savybę wagon, naudojant Master objekto metodą <orderSlaveToBringRocks>

    6. Naudojant Master objektą, liepti vergui suskaičiuot akmenis
      wagon - 102
      rock - 0
*/
class Slave {
  constructor(name) {
    this.name = name;
  }

  obey(callback) {
    if (typeof callback !== 'function') {
      console.err('parameter callback is not a function')
      return;
    }
    try {
      console.log(`I am ${this.name}, I try to ${callback.name}!`)
      callback()
    } catch (ex) {
      console.log('Sorry, I don\'t have Master object context to do that.')
    }
  }
}

class Master {
  constructor(pickaxeDurability) {
    this.pickaxeDurability = pickaxeDurability;
    this.rocks = [];
    this.wagon = [];
  }

  countRocks = () => {
    const rockCount = this.rocks.length;
    const rockCountInWagon = this.wagon.length;
    const rockMass = this.rocks.reduce((sum, mass) => sum + mass, 0);
    const rockMassInWagon = this.wagon.reduce((sum, mass) => sum + mass, 0);
    console.log({
      rockCount,
      rockCountInWagon,
      rockMass,
      rockMassInWagon,
    });
  }

  orderSlaveToCountRocks(slave) {
    slave.obey(this.countRocks);
  }
  // Objekto kūrimo metu (prieš constructor funkciją) objektui yra priskiriami metodai.
  // Nuoroda <this> rodys į objektą, kuriam pirmiausiai buvo priskirta lambda išraiška.
  mineRocks = () => {
    const rockSize = Math.floor(Math.random() * 10) + 1;
    this.rocks.push(rockSize);
    this.pickaxeDurability -= rockSize;
  }

  orderSlaveToMineRocks(slave) {
    slave.obey(this.mineRocks);
  }

  // ...

  // ...

}

// 1.
const master = new Master(100);

// 2.
const slaves = [
  new Slave('Pecker'),
  new Slave('Wobler'),
  new Slave('Mackler')
];
// 3. 
let slaveToOrderIndex = 0;
while (master.pickaxeDurability > 0) {
  master.orderSlaveToMineRocks(slaves[slaveToOrderIndex]);
  slaveToOrderIndex = ++slaveToOrderIndex % slaves.length;
}
// 4.
master.orderSlaveToCountRocks(slaves[slaveToOrderIndex]);
slaveToOrderIndex = ++slaveToOrderIndex % slaves.length;
// 5.
while (master.rocks.length > 0) {
  master.orderSlaveToPutRockIntoWagon(slaves[slaveToOrderIndex]);
  slaveToOrderIndex = ++slaveToOrderIndex % slaves.length;
}

