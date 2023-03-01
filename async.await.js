const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};
const url = 'https://jsonplaceholder.typicode.com/todos';

//delay(2000).then(() => console.log('After 2 s'));

// function fetchTodos() {
//   console.log('Start fetchTodos');
//   return delay(2000).then(() => fetch(url)).then(response => response.json());
// }
// fetchTodos().then(res => console.log(res)).catch(e => console.error(e));

// await - ждет
async function fetchAsyncTodos() {
  try {
    console.log('Start fetchAsyncTodos');
    await delay(1000);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e)
  } finally {
    console.log('FIN')
  }
}

fetchAsyncTodos();//.then(res => console.log(res)).catch(e => console.error(e));