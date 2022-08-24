const who = ['the dog','my granma','his turtle','my bird'];
const what = ['eat','pissed','crushed','broked'];
const when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

const getRandomInt = (max) => {
  const x = Math.floor(Math.random() * (max - 1))
  return x;
}

window.addEventListener('DOMContentLoaded', () => {
  const excuse = who[getRandomInt(who.length)] + ' ' + what[getRandomInt(what.length)] + ' ' + when[getRandomInt(when.length)]
  document.getElementById('excuse').innerText = excuse
})