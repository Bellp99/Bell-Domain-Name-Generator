import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Domain name generator
  //we will be using multiple arrays
  //We want to output every possible permutation using each item in our arrays

let pronoun = ['the', 'our','your', 'my', 'her', 'his']; //outer loop
let adjective = ['great', 'happy','genius', 'silly', 'thoughtful']; //inner loop
let noun = ['cat', 'dog', 'llama', 'iguana', 'horse', 'cow', 'turtle'];
let extension = ['.com', '.net', '.org', '.dev', '.us']



//Loop 
    for(let i=0; i < pronoun.length; ++i) {
      for(let j=0; j < adjective.length; ++j) {
        for(let n=0; n < noun.length; ++n) {
          for(let x=0; x < extension.length; ++x) {
            console.log(pronoun[i] + adjective[j] + noun[n] + extension[x]);
            }
          }
        }
      }
};
