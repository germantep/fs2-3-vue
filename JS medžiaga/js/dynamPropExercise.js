/*
Sukurti funkcija, kuri kuria objektą  su iš anksto nurodytomis savybėmis ir reikšmėmis, naudojant 2 atskirus masyvus
  funkcijos argumentai:
    savybių pavadinimų masyvas
    savybių reikšmių masyvas
  funkcijos grąžinimas
    objektas su suformuotomis savybėmis, pagal funkcijų argumentus
*/

function createObjectFromArrays(propNameArr, propValArr) {
  const
    propCount = propNameArr.length,
    ob = {};

  for (let i = 0; i < propCount; i++) {
    const propName = propNameArr[i];
    const propValue = propValArr[i];
    // Vadovėlinis paaiškinimas
    // Objektui <ob> kuriame naują savybę, pavadinimu tokiu, koks yra tarp laužtinių skliaustų.
    // Kadangi tarp laužtinių skliaustų, yra kintamasis <propName>, tai savybės pavadinimas bus toks, kokia
    // yra tuo kintamuoju išsaugota reikšmė (name, surname, brand, model ir t.t.).
    // Už priskyrimo operatoriaus [=] yra nurodoma, kokia reikšmė bus išsaugota.
    // Šiuo atveju objekto <ob> savybe <propName> reikšmė bus tokia, kokia yra išsaugota kintamajame <propValue>

    // Ūkinis paaiškinimas
    // Objektui <ob> kuriama savybė, kurios pavadinimas yra kintamajame <propName>, o reikšmė <propValue> 
    ob[propName] = propValue;
  }

  // 1. Maksimaliai sutrumpinkite simbolių ir tarpinių veiksmų kiekį viršuje pateiktam algoritmui
  // ARGUMENTŲ PAVADINIMŲ KEISTI NEGALIMA
  {
    const ob = {};
    for (let i = 0; i < propNameArr.length; i++)
      ob[propNameArr[i]] = propValArr[i];
  }

  // 2. Perrašykite algoritmą naudodami Array.forEach
  {
    const ob = {};
    propNameArr.forEach((propName, i) => ob[propName] = propValArr[i]);
  }

  // 3. Perrašykite algoritmą naudodami Array.reduce
  {
    const ob = propNameArr.reduce((obj, propName, i) => {
      obj[propName] = propValArr[i];
      return obj;
    }, {});

    const ob2 = propNameArr.reduce((obj, propName, i) => ({
      ...obj,
      [propName]: propValArr[i]
    }), {});
  }

  return ob;
}

// PIRMIAUSIAI IŠSAUGOME Į KINTAMAJĮ, O VĖLIAU PANAUDOJAME KINTAMAJĮ ATSPAUSDINIMUI
const kintamasisKuriameBusIssaugomasFunkcijosGrazinimas = createObjectFromArrays(['name', 'surname'], ['Kentauras', 'Lopinys']);
/*
  {
    name: 'Kentauras',
    surname: 'Lopinys'
  }
*/
console.log(kintamasisKuriameBusIssaugomasFunkcijosGrazinimas);

// SPAUSDINAMA TIESIOGIAI
console.log(
  createObjectFromArrays(['brand', 'model', 'year', 'damaged'], ['Arklys', 'Baltas', 2012, 'Tik kai prilaka spirito'])
);
/*
  {
    brand: 'Arklys',
    model: 'Baltas',
    year: 2012,
    damaged: 'Tik kai prilaka spirito'
  }
*/
