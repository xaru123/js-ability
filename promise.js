console.log('Request data');

// setTimeout(() => {
//   console.log('Preparing data');
//
//   const dataFromBackend = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   };
//
//   setTimeout(() => {
//     dataFromBackend.modified = true;
//     console.log('Data received', dataFromBackend);
//   }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data');
//     const dataFromBackend = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     };
//     resolve(dataFromBackend);
//   }, 2000);
// });
//
// p.then((dataFromBackend) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       dataFromBackend.modified = true;
//       // reject('WAS IS DAS ?');
//       resolve(dataFromBackend);
//     }, 2000);
//   });
// }).then((data) => {
//   console.log('Data', data);
//   data.newValue = true;
//   return data;
// }).then((data) => {
//   console.log('Data New', data);
// })
// .catch(err => console.log('ERROR:', err))
// .finally(() => console.log('Fin'));

const sleep = ms => new Promise((resolve, reject) => {
  console.log('sleep ', ms);
  // if (ms > 3 * 1000) {
  //   return reject('FIII')
  // }

  setTimeout(() => {
    console.log('Start sleep ', ms);
    resolve();
  }, ms);
});

// sleep(2000).then(()=> console.log('after 2 s'))
// sleep(3000).then(()=> console.log('after 3 s'))

// Promise.all([sleep(2000), sleep(4000)]).then(() => {
//   console.log('Promise all')
// }).catch(err => console.error('ERROR', err));

Promise.race([sleep(5000), sleep(2000)]).then(() => {
  console.log('Race');
}).catch(err => console.error('ERROR', err));