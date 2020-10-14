/* 
Credit: I did not create any of the artwork. Used in accordance with license / permission from the source websites-
Ogre- https://0x72.itch.io/dungeontileset-ii?download
Knight- by rvros https://rvros.itch.io/animated-pixel-knight
Background- by Neoriceisgood https://www.deviantart.com/neoriceisgood/art/Dungeon-BG-175845025

*/
const knight1 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame2.png?v=1602521693095";
const knight2 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame3.png?v=1602521696799";
const knight3 =
      "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame4.png?v=1602521696867";
const knight4 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame5.png?v=1602521700732";
const knight5 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame6.png?v=1602521703623";
const knight6 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame7.png?v=1602521706714";
const knight7 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame8.png?v=1602521709005";
const knight8 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame11.png?v=1602521710833";
const knight9 =
  "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fknight-frame12.png?v=1602521713610";
const ogre1 =
      "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fogre_idle_anim_f0.png?v=1602558658406";
const ogre2 =
      "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fogre_idle_anim_f1.png?v=1602558658656";
const ogre3 = 
      "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fogre_idle_anim_f2.png?v=1602558662186";
const ogre4 =
      "https://cdn.glitch.com/d2e71704-5bbc-4f48-8d58-725619329cf3%2Fogre_idle_anim_f3.png?v=1602558662449";

const regKnight = [knight1, knight2, knight3, knight4];
const strike = [knight5, knight6, knight7, knight8, knight9];
const ogreIdle = [ogre1, ogre2, ogre3, ogre4];
const knight = document.getElementById("knight");
const ogre = document.getElementById("ogre");
let item1HTML = document.getElementById("item1");
let item2HTML = document.getElementById("item2");
let item3HTML = document.getElementById("item3");
let index = 0;
let ogreIndex = 0;
let strikeAnimation;
let startAnimation = setInterval(change, 200);
let ogreAnimation = setInterval(animateOgre, 200);
let welcome = alert("Welcome to the Dungeon of TO-DO! The only way to escape is to complete your top 3 to-do list items. Answer the questions and click on the text when you've completed an item. Good luck!");
let item1 = prompt("What is your highest priority to-do of the day?");
let item2 = prompt("What is the next item on your top 3 to-do list?");
let item3 = prompt("Enter your final to-do item and let the challenge begin!");

item1HTML.innerHTML = "1. " + item1;
item2HTML.innerHTML = "2. " + item2;
item3HTML.innerHTML = "3. " + item3;


let checked = {
  item1: false,
  item2: false,
  item3: false
}

let hearts = {
  heart1:{
    hide: function() {
      document.getElementById("heart1").style.display = "none"
    },
    unHide: function() {
      document.getElementById("heart1").style.display = "inline"
    }
  },
  heart2: {
    hide: function() {
      document.getElementById("heart2").style.display = "none"
    },
    unHide: function() {
      document.getElementById("heart2").style.display = "inline"
    }
  },
  heart3: {
    hide: function() {
      document.getElementById("heart3").style.display = "none"
    },
    unHide: function() {
      document.getElementById("heart3").style.display = "inline"
    }
  }
}

function item1Click() {
  if (!checked.item1){
    item1HTML.innerHTML = "<del>" + item1HTML.innerHTML + "</del>";
    clickChange();
    checked.item1 = true;
    setTimeout(hearts.heart1.hide, 500);
    setTimeout(deadOgre, 500);
    setTimeout(hit,375);
  }
  else {
    item1HTML.innerHTML = "1. " + item1;
    checked.item1 = false;
    hearts.heart1.unHide();
  }
}

function item2Click() {
  if (!checked.item2){
    item2HTML.innerHTML = "<del>" + item2HTML.innerHTML + "</del>";
    clickChange();
    checked.item2 = true;
    setTimeout(hearts.heart2.hide, 500);
    setTimeout(deadOgre, 500);
    setTimeout(hit,375);
  }
  else {
    item2HTML.innerHTML = "2. " + item2;
    checked.item2 = false;
    hearts.heart2.unHide();
  }
}

function item3Click() {
  if (!checked.item3){
    item3HTML.innerHTML = "<del>" + item3HTML.innerHTML + "</del>";
    clickChange();
    checked.item3 = true;
    setTimeout(hearts.heart3.hide, 500);
    setTimeout(deadOgre, 500);
    setTimeout(hit,375);
  }
  else {
    item3HTML.innerHTML = "3. " + item3;
    checked.item3 = false;
    hearts.heart3.unHide();
  }
}


function change() {
    if (index >= 3) {
      knight.src = regKnight[0]
      index = 0;
    }
    else {
      index += 1;
      knight.src = regKnight[index];
    }
  
}

function change2 () {
    if (index >= 4) {
      stopStrike();
      index = 0;
      knight.style.left = "0px";
      startAnimation = setInterval(change, 200);
    }
    else {
      index += 1;
      knight.style.left = "110px";
      knight.src = strike[index];
    }
  
}

const stopAnimation = function() {
  clearInterval(startAnimation);
}

const stopStrike = function() {
  clearInterval(strikeAnimation);
}


function clickChange() {
  stopAnimation();
  index = 0;
  strikeAnimation = setInterval(change2, 200);
}

function animateOgre() {
    if (index >= 3) {
      ogre.src = ogreIdle[0]
      ogreIndex = 0;
    }
    else {
      ogreIndex += 1;
      ogre.src = ogreIdle[index];
    }
  
}

function congrats() {
  alert("Congrats! You have slayed your to-do list. Way to go!");
}

function deadOgre() {
  if (checked.item1 && checked.item2 && checked.item3) {
    ogre.style.display = "none";
    setTimeout(congrats, 1200);
    setTimeout(window.close, 3300);
  }
}

function hit () {
  ogre.style.filter = "grayscale(90%)";
  function recolor() {
    ogre.style.filter = "grayscale(0%)";
  }
  setTimeout(recolor,500);
}

/*  refactor into objects?

let listItems = {
  "1":{
    "checked":false,
    "element":document.getElementById("item1"),
  },
  "2":{
    "checked":false,
    "element":document.getElementById("item2"),
  },
  "3":{
    "checked":false,
    "element":document.getElementById("item3"),
  },
};

let knightObj = {
  "HTMLelement":document.getElementById("knight"),
  "idle":{
    "frames":regKnight,
    "start":function change() {
              if (index >= 3) {
                knight.src = this.frames[0]
                index = 0;
                }
              else {
                index += 1;
                this.HTMLelement.src = this.frames[index];
                }
             },
    "stop": clearInterval(startAnimation)
    },
  "strike":strike,
  "index":index,
  "animate":setInterval(change, 200)
};

let ogreObj = {
  "HTMLelement":document.getElementById("ogre"),
  "idle":ogreIdle,
  "index":ogreIndex
}; */
