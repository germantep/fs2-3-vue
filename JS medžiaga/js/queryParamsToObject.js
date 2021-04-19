function extractParams() {
  console.log(window.location.search);
  /* N.D. 

  Testavimui galite pasirašyti bet kokius parametrus, tiesiog naršyklės URL laukelyje
  <?> žymi parametrų pradžią
  prie lygybe parašytas simboliu darinys, tai objekto savybės pavadinimas
  po lygybės parašytas simboliu darinys, tai objekto savybės reikšmė
  Iš šio string'o padaryti objektą, pvz:
    1.
      ?vardas=jonas&pavarde=kevalas
      {
        vardas: jonas,
        pavarde: kevalas
      }
    2.
      ?screen=SinglePostScreen&postId=8
      {
        screen: SinglePostScreen,
        postId: 8
      }

    * atspausdinti suformuotą objektą
    * grąžinti suformuotą objektą,
  */

  // 1. 
  const data = Array
    .from(new URLSearchParams(window.location.search))
    .reduce((ob, [key, value]) => ({
      ...ob,
      [key]: value
    }), {});
  console.log(data);

  // 2. 
  const data2 = Object.fromEntries(Array
    .from(new URLSearchParams(window.location.search)))
  console.log(data2);

  // 3.
  console.log(JSON.parse('{"' + decodeURI(window.location.search.substr(1).replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}'));
                                    
  // 4.
  const query = window.location.search;
  const res = {};
  let
    isKey = true,
    key = '',
    value = '';
  // ?screen=SinglePostScreen&postId=8&aaa=9&dsfdsf=18
  
  for (let i = 1; i < query.length; i++) {
    if (query[i] === '=') {
      isKey = false;
    }
    else if (query[i] === '&') {
      res[key] = value;
      key = '';
      value = '';
      isKey = true;
    } else if (isKey) {
      key += query[i];
    } else {
      value += query[i];
    }
  }
  res[key] = value;

  console.log(res);
}