let count = 0;
let countEl = document.getElementById("count-el");
console.log(countEl);

function acrescenta() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

let countButton = document.getElementById("save-el");

function save() {
  countButton.textContent += count + " - ";
  console.log("O número salvo foi " + countButton);
  countEl.innerText = 0;
  count = 0;
}

// function save() {
//     saveButton.innerText = count;
//     console.log("O número salvo foi " + saveButton);
//   }

// let welcome = document.getElementById("welcome");
// let name = "Felipe";
// let greeting = "Olá, tudo beleza ?";
// welcome.innerText = greeting + " " + name;
