const p = new Promise((resolve, reject) => {
  console.log('Hello');
  setTimeout(() => {
    console.log('Time');
    resolve({ status: 'ok' })
  }, 3000)
});
p
  .then((data) => console.log(data))