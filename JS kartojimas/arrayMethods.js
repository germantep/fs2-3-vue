const productData = require('./productData');

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

productData.products.forEach(increaseProductInEurCount);
productData.products.forEach(appendProductsInEurPrice);
productData.products.forEach(function (product) { console.log(product.price + product.currencySign) });
productData.products.forEach((product) => console.log(`${product.id}:  ${product.title}`) );

console.log({
  productsInEur,
  productsInEurSum
})

// Array.prototype.filter - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir jeigu perduotoji
// funkcija grąžina 'true', pridedą VISĄ elementą į naują masyvą, kurį grąžins metodas <Array.prototype.filter>
// Kviečiamai funkcijai perduodami tokie argumentai
// 1 argumentas - iteruojamasis elementas
// 2 argumentas - iteruojamojo elemento indeksas
// 3 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: Array, su tais elementais, su kuriais kviečiant funkciją, buvo gauta 'true' reikšmę

// Array.prototype.map - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir perduotosios
// funkcijos rezultatą įdeda į naują masyvą, kurį grąžins metodas <Array.prototype.map>
// Kviečiamai funkcijai perduodami tokie argumentai
// 1 argumentas - iteruojamasis elementas
// 2 argumentas - iteruojamojo elemento indeksas
// 3 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: Array, su perduotos funkcijos grąžintais elementais

// Array.prototype.reduce - vykdo parametru perduotą funkciją su kiekvienu masyvo elementu ir funkcijos
// grąžinamą rezultatą deda į kaupiamajį kintamajį
// Kviečiamai funkcijai perduodami tokie argumentai
// 1 argumentas - kaupiamasis kintamasis
// 2 argumentas - iteruojamasis elementas
// 3 argumentas - iteruojamojo elemento indeksas
// 4 argumentas - masyvas, per kurį yra iteruojama
// Grąžinimas: kaupiamoji reikšmė, kuri pus perduota į sekančios iteracijos kaupiamajį kintamajį

