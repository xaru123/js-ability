// Object
const person = {
  name: 'Xaru123',
  age: 18,
  job: 'gamer',
};
const op = new Proxy(person, {
  get(target, prop) {
    console.log('getting prop', prop);
    if (!(prop in target)) {
      return  prop.split('_').map(str=>target[str]).join(' ')
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error('there is no this prop');
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop);
  },
  deleteProperty(target, prop) {
    console.log('Deleting ', prop);
    delete target[prop];
    return true;
  },
});

// function
const log = text => `Log ${text}`;
const fp = new Proxy(log, {
  apply(target, thisArg, argArray) {
    console.log('apply');
    return target.apply(thisArg, argArray).toLowerCase();
  },
});

// class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const pp = new Proxy(Person, {
  construct(target, argArray) {
    console.log('construct');

    return new Proxy(new target(...argArray), {
      set(target, prop, value) {
        if (prop in target) {
          target[prop] = value;
        } else {
          throw new Error('there is no this prop');
        }
      },
    });
  },
});

const p = new pp('2', 222);