/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let sentence = [];

  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      sentence[i] = Math.floor(Math.random() * who.length);
    }
    if (i === 1) {
      sentence[i] = Math.floor(Math.random() * action.length);
    }
    if (i === 2) {
      sentence[i] = Math.floor(Math.random() * what.length);
    }
    if (i === 3) {
      sentence[i] = Math.floor(Math.random() * when.length);
    }
  }

  let fullSentence =
    who[sentence[0]] +
    " " +
    action[sentence[1]] +
    " " +
    what[sentence[2]] +
    " " +
    when[sentence[3]];

  document.getElementById("excuse").innerHTML = fullSentence;
};
