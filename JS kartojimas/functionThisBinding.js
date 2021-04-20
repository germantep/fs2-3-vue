const myConsole = require('./myConsole');

// this, tai nuoroda į objekto tipo kintamajį
// Jeigu kviečiama funkcija, kuri pirskirta kaip objekto (ar jo prototipo savybė)
// tuomet this yra tas objekto, kurio savybėje buvo išsaugota funkcija

myConsole.log('Pavyzdys su objektu', () => {
  const car = {
    brand: 'Opel',
    model: 'Astra',
    challengeSound: function () {
      console.log(`${this.brand} ${this.model} goes brummm brummm...`)
    }
  }
  car.challengeSound();
});

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.challengeSound = function (...sounds) {
    console.log(`${this.brand} ${this.model} goes ${sounds.join(' ')}...`)
  }
}

myConsole.log('Pavyzdys su prototipu', () => {
  const car1 = new Car('Subaru', 'Impressa');
  const car2 = new Car('BMW', 'X5');
  [car1, car2].forEach(car => car.challengeSound('ghrrr', 'rrrrugh'));
});

// Jeigu mes objekte aprašytą funkciją iškeliame į kintamjį,
// tuomet ji neturi 'this' konteksto
myConsole.log('Pavyzdys su funkcija be konteksto', () => {
  const car = new Car('Vėžimas', 'su ratais');
  const stolenFunction = car.challengeSound;
  stolenFunction('zzz', 'hhh', 'zzz');
});

// Tokiais atvejais galime naudoti Function.prototype metodus, kad nurodyti,
// į kokį kintamajį rodys nuoroda <this> funkcijos iškvietimo metu
myConsole.log('Pavyzdys su Function.prototype.call', () => {
  const horse = new Car('Arklys', 'Baltas');
  const stolenFunction = horse.challengeSound;
  // Naudojant Function.prototype.call argumentai perduodami 2, 3, ... n parametrais
  // 1 kviečiamos funkcijos parametras bus 2 Function.prototype.call parametras
  // 2 kviečiamos funkcijos parametras bus 3 Function.prototype.call parametras
  //   ...            ...              ...
  // N kviečiamos funkcijos parametras bus N+1 Function.prototype.call parametras
  stolenFunction.call({ brand: 'Asilas', model: 'Juodas' }, 'yyyh', 'ahhhh');
});

myConsole.log('Pavyzdys su Function.prototype.apply', () => {
  const horse = new Car('Karvė', 'Marga');
  const stolenFunction = horse.challengeSound;
  // Naudojant Function.prototype.call argumentai perduodami masyvu
  // 1 kviečiamos funkcijos parametras bus 1 antru parametru perduoto masyvo elementas Function.prototype.call funkcijai
  // 2 kviečiamos funkcijos parametras bus 2 antru parametru perduoto masyvo elementas Function.prototype.call funkcijai
  //   ...            ...              ...
  // 3 kviečiamos funkcijos parametras bus 3 antru parametru perduoto masyvo elementas Function.prototype.call funkcijai
  stolenFunction.apply({ brand: 'Telyčia', model: 'Balkšva' }, ['Mūūū,', 'sakiau', 'mūūūū']);
});

myConsole.log('Pavyzdys su Function.prototype.bind', () => {
  const horse = new Car('Gandras', 'Mandras');
  const stolenFunction = horse.challengeSound.bind({ brand: 'Šarka', model: 'Vagilė' });
  stolenFunction('Kur', 'ten', 'eini?', 'Ar', 'Sūrį', 'turi?');
  // Kuomet naudojame Function.prototype.bind, jūs priskiriate nuorodą <this> visam laikui
  // Pakeisti šios nuorodos neįmanoma 
  myConsole.log('bandymas pakeisti <this> su Function.prototype.call', () => {
    stolenFunction.call({ brand: 'Asilas', model: 'Juodas' }, 'yyyh', 'ahhhh');
  });
});



