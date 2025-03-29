import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Domain name generator
  //we will be using multiple arrays
  //We want to output every possible permutation using each item in our arrays
//1. Create a set of arrays to make our permutations

let pronoun = ['the', 'our','your', 'my', 'her', 'his']; //outer loop
let adjective = ['great', 'happy','genius', 'silly', 'thoughtful']; //inner loop
let noun = ['cat', 'dog', 'llama', 'iguana', 'horse', 'cow', 'turtle', 'capcom', 'comcast'];
let extension = ['.com', '.net', '.org', '.dev', '.us']

//2. querySelect the  <ul> classname to add a list

let listElements = document.querySelector('.domain')
let lisOfItems = [];

//Loop 
    for(let i=0; i < pronoun.length; ++i) {
      for(let j=0; j < adjective.length; ++j) {
        for(let n=0; n < noun.length; ++n) {
          for(let x=0; x < extension.length; ++x) {


            let temp = document.createElement('li');
            temp.innerHTML = `${pronoun[i]}${adjective[j]}${noun[n]}${extension[x]}`;
            listElements.appendChild(temp);

            // add a condition that checks for the last three chararcters
            //if they are {"com"}, add a dot before it, capcom => cap.com
            if (noun[n].endsWith('com')){

              
              //capcom => cap.com
              result = .com

              //make a new variable

              d = result
            
              //append the firts part of the word
              
              //append a period
              //append 'com'
              //assign it to the console.log
            

              //
            }           
              console.log(pronoun[i] + adjective[j] + noun[n] + extension[x]);
            }
          }
        }
      }
};
