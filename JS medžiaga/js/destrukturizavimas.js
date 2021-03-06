//  Objektų destruktūrizavimas
{
  const userSettings = {
    name: 'Bronius',
    surname: 'Kentauras',
    getFullname: () => `${this.name} ${this.surname}`
  }

  /* ...userSettings  =>  name: 'Bronius', 
                      =>  surname: 'Kentauras',
                      =>  getFullname: () => `${this.name} ${this.surname}` */

  //  Destrukturizavimas kopijuojant savybes.
  const allSettings = {
    ...userSettings,
    country: 'Lietuva',
    city: 'Alytus'
  }

  // Destruktūrizavimas ištraukiat reikšmes iš objekto į esamą aplinką (current scope)
  const { name, city } = userSettings;
  // reiškia tą patį kaip:
  {
    const name = userSettings.name;
    const city = userSettings.city;
  }

  // Galima destrukturizuojant keisti pavadinimus:
  const { name: vardas, city: miestas } = userSettings;
  // reiškia tą patį kaip:
  {
    const vardas = userSettings.name;
    const miestas = userSettings.city;
  }

  // Funkcija nedestrūkturizuojant
  {
    function printSettingsInfo(name, surname, country, city) {
      console.log(name, surname, country, city)
    }
    printSettingsInfo(allSettings.name, allSettings.surname, allSettings.country, allSettings.city);
  }
  // Funkcija destruktūrizuojant funkcijos vykdymo bloke
  {
    function printSettingsInfo(info) {
      const { name, surname, country, city } = info;
      console.log(name, surname, country, city);
    }
    printSettingsInfo(allSettings);
  }
  // Funkcija destruktūrizuojant parametrą, kuris turi būt objektas
  {
    function printSettingsInfo({ name, surname, country, city }) {
      console.log(name, surname, country, city);
    }
    printSettingsInfo(allSettings);
  }
}

// Masyvų destruktūrizavimas
const svoriai1 = [7, 10, 9];
const svoriai2 = [11, 5];
// ...svoriai1    =>    7, 10, 9
// ...svoriai2    =>    11, 5
const visiSvoriai = [...svoriai1, ...svoriai2];
visiSvoriai.sort((a, b) => a - b);

//          ↙ pirmas masyvo elementas - index -> 0
const [maziausias, antraPagalMazuma] = visiSvoriai;
//                          ↖ antras masyvo elementas - index -> 1
// Daro tą patį kaip:
{
  const maziausias = visiSvoriai[0];
  const antraPagalMazuma = visiSvoriai[1];
}
console.log(maziausias, antraPagalMazuma);