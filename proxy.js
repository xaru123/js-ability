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
      return prop.split('_').map(str => target[str]).join(' ');
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

// Wrapper
const withDefaultValue = (target, defaultV = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => prop in obj ? obj[prop] : defaultV,
  });
};
const pw = withDefaultValue({x: 1}, 2);

// Hidden prop
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiv) => prop in receiv ? obj[prop] : undefined,
  });
};
const ph = withHiddenProps({x: 1, _t: 45});

// Optimization
const IndexedArray = new Proxy(Array, {
  construct(target, [argArray]) {
    let index = {};
    argArray.forEach(item => index[item.id] = item);
    return new Proxy(new target(...argArray), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return item => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case 'findById':
            return id => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});
const pi = new IndexedArray([
  {id: 1, name: 'V1', age: 25},
  {id: 2, name: 'V2', age: 25},
]);