const productData = require('./productData');
const myConsole = require('./myConsole');

// Array.prototype.forEach - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu
// Kviečiamai funkcijai perduodami tokie argumentai
// 1 argumentas - iteruojamasis elementas
// 2 argumentas - iteruojamojo elemento indeksas
// 3 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: undefined
let productsInEur = 0;
let productsInEurSum = 0;

function increaseProductInEurCount(product) {
  if (product.currency === 'EUR')
    productsInEur += product.count;
}

const appendProductsInEurPrice = (product) => {
  if (product.currency === 'EUR')
    productsInEurSum += product.price * product.count;
}

myConsole.log('products.forEach(increaseProductInEurCount)', () => {
  productData.products.forEach(increaseProductInEurCount);
  console.log({ productsInEur });
});

myConsole.log('products.forEach(appendProductsInEurPrice)', () => {
  productData.products.forEach(appendProductsInEurPrice);
  console.log({ productsInEurSum });
});

myConsole.log('products prices with currency signs', () => {
  productData.products.forEach(function (product) { console.log(product.price + product.currencySign) });
});

myConsole.log('neededCurrencies currencies with currency signs', () => {
  productData.neededCurrencies.forEach((currencyOb) => console.log(`${currencyOb.currency}: ${currencyOb.currencySign}`));
});

// Array.prototype.filter - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir jeigu perduotoji
// funkcija grąžina 'true', pridedą VISĄ elementą į naują masyvą, kurį grąžins metodas <Array.prototype.filter>
// Kviečiamai funkcijai perduodami tokie argumentai:
// 1 argumentas - iteruojamasis elementas
// 2 argumentas - iteruojamojo elemento indeksas
// 3 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: Array, su tais elementais, su kuriais kviečiant funkciją, buvo gauta 'true' reikšmė

function isProductInEUR(product) {
  return product.currency === 'EUR'
}

// Jeigu lambda išraiška vykdo vieną komandą, ji grąžina tos komandos rezultatą!
const isProductInGBP = (product) => product.currency === 'GBP';

myConsole.log('Products in EUR', productData.products.filter(isProductInEUR));
myConsole.log('Products in GBP', productData.products.filter(isProductInGBP));
myConsole.log('Products in USD', productData.products.filter(product => product.currency === 'USD'));
myConsole.log('Products NOT in USD', productData.products.filter(product => product.currency !== 'USD'));
myConsole.log('Products with price higher than 100', productData.products.filter(product => product.price > 100));
myConsole.log('Products with count higher or equal 13', productData.products.filter(product => product.count >= 13));

// Array.prototype.map - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir perduotosios
// funkcijos rezultatą įdeda į naują masyvą, kurį grąžins metodas <Array.prototype.map>
// Kviečiamai funkcijai perduodami tokie argumentai:
// 1 argumentas - iteruojamasis elementas
// 2 argumentas - iteruojamojo elemento indeksas
// 3 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: Array, su perduotos funkcijos grąžintais elementais

myConsole.log('productData.products mapped to title array', productData.products.map(p => p.title));
myConsole.log(
  'productData.products mapped title and total price object',
  productData.products.map(function (p) {
    return {
      title: p.title,
      totalPrice: p.price * p.count + p.currencySign
    }
  })
);
myConsole.log(
  'Shorthand with Destructurization',
  productData.products.map(function ({ title, price, count, currencySign }) {
    return {
      title,
      totalPrice: price * count + currencySign
    }
  })
);
myConsole.log(
  'Lambda that returns an object',
  productData.products.map(({ title, price, count, currencySign }) => ({
    title,
    totalPrice: price * count + currencySign
  }))
);

myConsole.log(
  'Lambda destructuring id prop and mapping it to new array',
                    // 1. ↘()   2.↙{} 3.↙()  ↙4.
  productData.products.map(({ id }) => ({ id }))
  // 1. () - parametrų sąrašo skliaustai
  // 2. {} - destrukturizavimo skliaustai naudojami destrukturizuoti pirmajį parametrą
  // 3. () - grąžinimo skliaustai - naudojami tam, kad {} nebūtų traktuojami kaip funkcijos vykdymo blokas
  // 4. {} - naujo Objekto kūrimo skliaustai
);

myConsole.log(
  'title and id props mapping',
  productData.products.map(({ title, id }) => ({ title, id }))
);



// Array.prototype.reduce - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir funkcijos
// grąžinamą rezultatą deda į kaupiamajį kintamajį
// Kviečiamai funkcijai perduodami tokie argumentai:
// 1 argumentas - kaupiamasis kintamasis
// 2 argumentas - iteruojamasis elementas
// 3 argumentas - iteruojamojo elemento indeksas
// 4 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: kaupiamoji reikšmė, kuri pus perduota į sekančios iteracijos kaupiamajį kintamajį

