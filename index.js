// Функція, що повертає проміс з затримкою
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Створення масиву з 5 промісів
const promisesArray1 = [
  delayedPromise('Проміс 1', 2000),
  delayedPromise('Проміс 2', 1000),
  delayedPromise('Проміс 3', 3000),
  delayedPromise('Проміс 4', 1500),
  delayedPromise('Проміс 5', 2500),
];

// Виконання всіх промісів одночасно та обробка результатів
Promise.all(promisesArray1)
  .then((results) => {
    console.log('Результати вирішення промісів:', results);
  })
  .catch((error) => {
    console.error('Сталася помилка:', error);
  });

  // Функція, що повертає проміс з випадковою затримкою
function randomDelay(value) {
  const randomTimeout = Math.random() * (5000 - 1000) + 1000; // Випадкова затримка від 1000 до 5000 мілісекунд
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, randomTimeout);
  });
}

// Створення масиву з 5 промісів
const promisesArray2 = [
  randomDelay('Проміс 1'),
  randomDelay('Проміс 2'),
  randomDelay('Проміс 3'),
  randomDelay('Проміс 4'),
  randomDelay('Проміс 5'),
];

// Виконання всіх промісів одночасно та отримання результату найшвидшого проміса
Promise.race(promisesArray2)
  .then((fastestResult) => {
    console.log('Найшвидший проміс:', fastestResult);
  })
  .catch((error) => {
    console.error('Сталася помилка:', error);
  });
