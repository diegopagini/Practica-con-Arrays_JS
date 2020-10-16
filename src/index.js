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

// Mostrar los que tengan determinada edad:
function showAge(edad, xArray) {
  let theAges = xArray.filter((people) => people.age === edad);
  // Esto me muestra un objeto en consola, pero no puedo acceder a los atributos.
  console.log("las personsas que tienen 20 años son:", theAges);
  // console.log('las personsas que tienen 20 años son:', theAges.name); esto da undefined.
  mostrar = "";
  theAges.forEach((element) => {
    mostrar += `
    <div>${element.name}</div>
    `;
  });
  document.getElementById(
    "for"
  ).innerHTML += `Las personas que tienen ${edad} años son: ${mostrar}`;
  // document.getElementById('for').innerHTML += `Las personas que tienen ${edad} años son: ${mostrar.edad}`; no funciona. ¿Por qué?
}
showAge(20, myArrayOfPeople);
showAge(22, myArrayOfPeople);

// Mostrar los que tengan una profeion:
function showProfession(profession) {
  
}
