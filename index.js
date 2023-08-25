

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};




  function run (horse){
    const time = getRandomTime(1500, 2500);
    return new Promise(resolve=>{
      setTimeout(
        ()=>{
        resolve({horse, time})
      },
      time)
    })
  }
let x = 0
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
refs.startBtn.addEventListener('click', () =>{
    x++
   refs.progressField.innerHTML = 'Заїзд почався';
    const promiseArr = horses.map(horse => run(horse))
    Promise.race(promiseArr).then(({horse,time}) => {
        refs.winnerField.textContent = `🎉 Переможець ${horse}, финишував за ${time}мс часу`
      const tr = `<tr><td>${x}</td><td>${horse}</td><td>${time}</td></tr>`
      refs.tableBody.insertAdjacentHTML("beforeend",tr) 
    })
    Promise.all(promiseArr).then(()=> {
        refs.progressField.innerHTML = 'Заїзд закінчився'
    })
})
