const myArrayOfPeople = [
  {
    name: "Carlos",
    age: 20,
    profession: "Police",
    country: "Argentina",
  },
  {
    name: "Alberto",
    age: 21,
    profession: "Developer",
    country: "Colombia",
  },
  {
    name: "Juan",
    age: 22,
    profession: "Firefighter",
    country: "EEUU",
  },
  {
    name: "Roberto",
    age: 23,
    profession: "Football Player",
    country: "España",
  },
  {
    name: "Franco",
    age: 24,
    profession: "Engineer",
    country: "Holanda",
  },
  {
    name: "Julieta",
    age: 20,
    profession: "Developer",
    country: "Argentina",
  },
  {
    name: "Carla",
    age: 21,
    profession: "Football Player",
    country: "Colombia",
  },
  {
    name: "Juana",
    age: 22,
    profession: "Police",
    country: "EEUU",
  },
  {
    name: "Roberta",
    age: 23,
    profession: "Engineer",
    country: "España",
  },
  {
    name: "Ayelen",
    age: 24,
    profession: "Engineer",
    country: "Holanda",
  },
];

/* -------------------- */

// Mostrar los que tengan determinada edad:
function showAge(edad, xArray) {
  let theAges = xArray.filter((people) => people.age === edad);
  // Esto me muestra un objeto en consola, pero no puedo acceder a los atributos.
  console.log("las personsas que tienen 20 años son:", theAges);
  // console.log('las personsas que tienen 20 años son:', theAges.name); esto da undefined.
  mostrar = "";
  theAges.forEach((element) => {
    mostrar += `
    <div class="div">${element.name}</div>
    `;
  });
  document.getElementById(
    "for"
  ).innerHTML += `Las personas que tienen ${edad} años son: ${mostrar}`;
  // document.getElementById('for').innerHTML += `Las personas que tienen ${edad} años son: ${mostrar.edad}`; no funciona. ¿Por qué?
}
showAge(20, myArrayOfPeople);
showAge(22, myArrayOfPeople);

/* -------------------- */

// Mostrar los que tengan una profeion:
function showProfession(xProfession, xArray) {
  let theProfessions = xArray.filter(
    (people) => people.profession === xProfession
  );
  console.log(theProfessions);
  mostrar = "";
  theProfessions.forEach((element) => {
    mostrar += `
    <div class="div">${element.name}</div>
    `;
  });
  document.getElementById(
    "for"
  ).innerHTML += `Las personas que tienen ${xProfession} como profesion son: ${mostrar}`;
}
showProfession("Engineer", myArrayOfPeople);
showProfession("Football Player", myArrayOfPeople);

/* -------------------- */

// Mostrar los que vivan en algun pais:
function showCountry(count, xArray) {
  let theCountryes = xArray.filter((people) => people.country === count);
  console.log(theCountryes);
  mostrar = "";
  theCountryes.forEach((element) => {
    mostrar += `
    <div class="div">${element.name}</div>
    `;
  });
  document.getElementById(
    "for"
  ).innerHTML += `Las personas que viven en ${count} como son: ${mostrar}`;
  // ).innerHTML += `Las personas que viven en ${count} como son: ${mostrar.name}`; Si en el div pongo solo el elemento de esta forma no puedo accesder y me muestra undefined
}
showCountry("España", myArrayOfPeople);
showCountry("EEUU", myArrayOfPeople);

/* -------------------- */

// Mostrar todos los nombres del array
function showNames(xArray) {
  let nameOfPeople = xArray.map(() => {
    return xArray.name;
  });
  mostrar = "";
  nameOfPeople.forEach((element) => {
    mostrar += `
    <div class="div">${element}</div>
    `;
  });
  document.getElementById(
    "for"
  ).innerHTML += `Todas las personas del array son: ${nameOfPeople}`;
  // console.log(nameOfPeople); esto da undefined.
}
showNames(myArrayOfPeople);
// No funca como espero.

/* -------------------- */

// Promedio de edades:
let ages;
function ageAverage(xArray) {
  averageAges = 0;
  xArray.forEach((people) => {
    averageAges += people.age;
  });

  ages = averageAges / xArray.length;
  //Hay una forma de hacerlo en una sola linea?
  ages = ages.toFixed(2)

  // agesx.toFixed(2) = averageAges / xArray.length; esto asi no anda


  console.log("La edad promedio es de:", ages);

  document.getElementById(
    "for"
  ).innerHTML += `<div class="div">La edad promedio de las personas es de : ${ages}</div>`;
}

ageAverage(myArrayOfPeople);

/* -------------------- */

// Mostrar todo de todo
function showAll(){
  myArrayOfPeople.forEach((people) => {
    console.log(people.name);
    console.log(people.age);
    console.log(people.profession);
    console.log(people.country);
  })
}
showAll();
// Bien, me muestra todo, pero.. y si ahora le hago un push?

myArrayOfPeople.push({
    name: "Dylan",
    age: 75,
    profession: "Retired",
    country: "Russia",
});

// Y si ahora hago el showAll() ?
showAll();
// Mira que loco, funciona bien jaja.
ageAverage(myArrayOfPeople);
// Y tambien me modifia lo de las demas funciones.

/* -------------------- */

// La funcion mas reutilizable de las reutilizables. Mostrar los que sean "sorpresa" que otro "sorpresa"
function surprise(sorpresa, sorpresa2, xArray) {
  // let theSurprise = xArray.filter((people) => people.age sorpresa sorpresa2)
};
// No funciona, la idea era hacer 
//surprise(<, 20, myArrayOfPeople)
//surprise(>, 21, myArrayOfPeople)
// Pero por lo visto no se puede usar un parametro como simbolo.