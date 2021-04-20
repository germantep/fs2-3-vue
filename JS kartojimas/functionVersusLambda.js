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
})