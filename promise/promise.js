const myFirstPromise = new Promise((resolve, reject) => {
    // выполняется асинхронная операция, которая в итоге вызовет:
    //
    //   resolve(someValue); // успешное завершение
    // или
    //   reject("failure reason"); // неудача
});

let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function(){
    resolve("Success!"); // Ура! Всё прошло хорошо!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
});


//! Чтобы снабдить функцию функциональностью промисов, нужно просто вернуть в ней объект Promise:

function delay(ms) {
  return promise = new Promise( resolve => setTimeout(() => resolve(ms), ms) );
}
delay(1000).then(  value => console.log('Done with ' + value));


function getResolvedPromise(value) {
  return new Promise ( resolve => {
    if (value <= 300) {
      resolve(value)
    } else {
      throw new Error('Ошибка')
    }
  })
}
(getResolvedPromise(300))
  .then(value => console.log('Value = ', value))
  .catch((err) => console.log(err))
  .finally(() => console.log('This is Finally!'))
