// Objekto savybių naudojimas, kuomet jas gauname string pavidalu
const kintamasisKuriameYraSavybėsPavadinimas = 'dydis';
const kebabas = {
  dydis: 'xl',
  padazas: 'cesnakinis',
  suStixais: true
};
// Reikšmės gavimas/panaudojimas
{
  console.log(kebabas[kintamasisKuriameYraSavybėsPavadinimas]);
}

// Naujos savybės nustatymas
{
  const naujosSavybėsPavadinimas = 'pristatymoAdresas';
  const naujosSavybėsReikšmė = 'pas mane';

  // kebabas.pristatymoAdresas = 'pas mane';
  kebabas[naujosSavybėsPavadinimas] = naujosSavybėsReikšmė;
}

// Esamos savybės atnaujinimas
{
  /* Savybės atnaujinimas užsirašo taip pat kaip ir savybės kūrimas
    JS kompiliatorius:
      radęs jau egistuojantį savybės pavadinimą, perrašo reiškmę"ant viršaus"
      neradęs savybės ją sukuria
  */
  const jauEgzistuojantisSavybėsPavadinimas = 'dydis';
  kebabas[jauEgzistuojantisSavybėsPavadinimas] = 'sm';
  console.log(kebabas[jauEgzistuojantisSavybėsPavadinimas]);
  // alternatyvos, jeigu savybės pavadinimas būtų tiksliai žinomas:
  {
    console.log(kebabas.dydis);
    console.log(kebabas['dydis']);
  }
}