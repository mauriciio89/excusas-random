const who = ["mi perro", "mi abuela", "mi jirafa", "mi dinosaurio"];
const what = ["murio", "se cago encima", "se rompio el cuello", "se extinguió"];
const when = [
  "cuando iba al baño",
  "cuando rezaba",
  "cuando corría",
  "cuando estaba almorzando",
  "cuando perseguía a mi oruga",
];

const getRandomInt = (max) => {
  const x = Math.floor(Math.random() * (max - 1));
  return x;
};

window.addEventListener("DOMContentLoaded", () => {
  const excuse =
    who[getRandomInt(who.length)] +
    " " +
    what[getRandomInt(what.length)] +
    " " +
    when[getRandomInt(when.length)];
  document.getElementById("excuse").innerText = excuse;
});
