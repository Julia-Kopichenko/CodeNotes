//! ОШИБКИ

//Пример: выбрасывание обычной ошибки
/**
 * Обычно, вы создаёте объект Error с намерением возбудить ошибку с помощью ключевого слова throw. Вы можете обработать ошибку с помощью конструкции try...catch:
 */
try {
  throw new Error('Уупс!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

// в представленном ниже примере для fetch указана неправильная ссылка (сайт не существует), и .catch перехватывает ошибку

fetch('https://no-such-server.blabla') // ошибка
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (текст может отличаться)

//! Неявный try…catch
/**
 * Вокруг функции промиса и обработчиков находится "невидимый try..catch".
 * Если происходит исключение, то оно перехватывается, и промис считается отклонённым с этой ошибкой
 * Например, этот код:
*/
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(alert); // Error: Ошибка!

/**
 * …Работает так же, как и этот:
*/
new Promise((resolve, reject) => {
reject(new Error("Ошибка!"));
}).catch(alert); // Error: Ошибка!

//Мы можем иметь столько обработчиков .then, сколько мы хотим, и затем использовать один .catch в конце, чтобы перехватить ошибки из всех обработчиков.
