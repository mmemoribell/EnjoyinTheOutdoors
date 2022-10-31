"use strict";

const mountainB = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");

function loadMountSelect() {
  mountainB.innerHTML = "";
  let option = new Option("Select...", " ");
  mountainB.appendChild(option);
  mountainsArray.forEach((mountain) => {
    let newOption = new Option(mountain.name, mountain.name);
    mountainB.appendChild(newOption);
  });
}

function loadMountainInfo() {
  let selectedValue = mountainB.value;
  mountainsArray.forEach((mountain) => {
    if (selectedValue === mountain.name) {
      buildMountainCard(cardSection, mountain);
    }
  });
}

function buildMountainCard(section, mountain) {
 
  let colDiv = document.createElement("div")
  colDiv.className = "col"


 
  const div = document.createElement("div");
  div.className = "card";
  div.style = "width: 22em;"
  
  section.appendChild(colDiv);
  colDiv.appendChild(div)
  
  
  let cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.alt = mountain.name;
  cardImg.src = "images/" + mountain.img;

  
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = mountain.name;
  
  let desc = document.createElement("p");
  desc.innerText = mountain.desc;
  
  let elevation = document.createElement("p");
  elevation.innerText = `${mountain.elevation} ft`;
  
  let addInfo = document.createElement("p");
  addInfo.innerText = `Effort: ${mountain.effort}
    Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;
  
  let removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-danger";
  removeBtn.innerText = "remove";
 
  function removeCard() {
    colDiv.removeChild(div);
  }

  removeBtn.onclick = removeCard;

  const divBody = document.createElement("div");
  divBody.className = "card-body";
  div.appendChild(cardImg);
  div.appendChild(divBody);
  divBody.append(cardTitle, desc, elevation, addInfo, removeBtn);
}

function clearScreen() {
  let cardSection = document.querySelector("#card-section");

  let cards = document.querySelectorAll("#card-section .col");
  cards.forEach((card) => cardSection.removeChild(card));
}

function displayMounts() {
    mountainsArray.forEach((mountain) => {
        buildMountainCard(cardSection, mountain)
    });
}

window.onload = () => {
  loadMountSelect();
  mountainB.onchange = loadMountainInfo;
  const clearBtn = document.getElementById("clearBtn");

  clearBtn.onclick = clearScreen;
  const displayAllMountsBtn = document.getElementById("displayAllMounts");

  displayAllMountsBtn.onclick = displayMounts;
};