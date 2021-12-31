
function vaxTrail(persons) {
    let vaccineBooths = {
        A: [],
        B: [],
        C: [],
        D: [],
    }
  let arrayA = [];
  let arrayB = [];
  let arrayC = [];
  let arrayD = [];
    for (let i = 0; i < persons.length; i++) { 
      let person = persons[i];
      if (person.age <= 30 && person.age >= 20 && person.temperature < 100) {
        arrayA.push(person);
      }
      else if (person.age <= 40 && person.age >= 31 && person.temperature < 100) {
        arrayB.push(person);
      }
      else if (person.age <= 50 && person.age >= 41 && person.temperature < 100) {
        arrayC.push(person);
      }
      else {
        arrayD.push(person);
      }
  }
  arrayA.sort(function (a, b) {
    if (a.age % 2 == 0)
      return -1;
    if (b.age % 2 != 0)
      return 1;
  })
  arrayB.sort(function (a, b) {
    if (a.age % 2 == 0)
      return -1;
    if (b.age % 2 != 0)
      return 1;
  })
  arrayC.sort(function (a, b) {
    if (a.age % 2 == 0)
      return -1;
    if (b.age % 2 != 0)
      return 1;
  })
  arrayD.sort(function (a, b) {
    if (a.age % 2 == 0)
      return -1;
    if (b.age % 2 != 0)
      return 1;
  })
  vaccineBooths.A.push(...arrayA);
  vaccineBooths.B.push(...arrayB);
  vaccineBooths.C.push(...arrayC);
  vaccineBooths.D.push(...arrayD);

  return vaccineBooths;
}
    





let persons = [
  { name: "sunil", age: 24, temperature: 98 },
  { name: "Biplap", age: 23, temperature: 98 },
  { name: "Kabir", age: 35, temperature: 99 },
  { name: "Rahul", age: 39, temperature: 99 },
  { name: "Paul", age: 45, temperature: 98 },
  { name: "Kat", age: 44, temperature: 98 },
  { name: "Nayem", age: 55, temperature: 100 },
  { name: "Suvrow", age: 58, temperature: 100 },
  { name: "Sabnaj", age: 57, temperature: 101 },
];

console.log(vaxTrail(persons));