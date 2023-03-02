//Array
function calcValues(a, b) {
  return [
    a + b,
    undefined,
    a * b,
    a / b,
  ];
}

// const res = calcValues(12,10)
// const sum = res[0]
// const sub = res[1]
// const [sum,,, del] = calcValues(12, 10);
// console.log(sum, del);
// const [sum, , ...other] = calcValues(12, 10);
// console.log(sum, other);
// const [sum, sub = '!', ...other] = calcValues(12, 10);
// console.log(sum, sub, other);

// Object
const person = {
  name: 'Alex',
  age: 18,
  job: 'gamer',
  address: {
    country: 'Russia',
    city: 'Che',
  },
};

// const {name: fi = 'FFF', asss = '!', a, address: {city:FF}} = person;
// console.log(name, fi, asss, a, FF);

const {name, ... info} = person;
console.log(name,info);


function logPerson({name, age}) {
  console.log(name, age)
}
logPerson(person)