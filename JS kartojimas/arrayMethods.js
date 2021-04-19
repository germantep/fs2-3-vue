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

// Array.prototype.reduce - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir funkcijos
// grąžinamą rezultatą deda į kaupiamajį kintamajį
// Kviečiamai funkcijai perduodami tokie argumentai:
// 1 argumentas - kaupiamasis kintamasis
// 2 argumentas - iteruojamasis elementas
// 3 argumentas - iteruojamojo elemento indeksas
// 4 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: kaupiamoji reikšmė, kuri pus perduota į sekančios iteracijos kaupiamajį kintamajį

