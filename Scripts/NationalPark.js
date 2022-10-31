"strict use";

const stateSelection = document.getElementById("stateSelection");
const locationRB = document.getElementById("locationRB");
const parkRB = document.getElementById("parkRB");
const nationalParkByLocationInfoTableBody = document.getElementById(
  "nationalParkTB"
);
const labelChange = document.getElementById("labelChange");


function loadSearchType() {
  stateSelection.innerHTML = "";
  let option = new Option("Select...", " ");
  stateSelection.appendChild(option);

  if (locationRB.checked) {
    labelChange.innerHTML = "States/Territories";
    locationsArray.forEach((location) => {
      let newOption = new Option(location, location);
      stateSelection.appendChild(newOption);
    });
  } else if (parkRB.checked) {
    labelChange.innerHTML = "Park Type";
    parkTypesArray.forEach((park) => {
      let newOption = new Option(park, park);
      stateSelection.appendChild(newOption);
    });
  }
}

function loadTableBody() {
  let selectedValue = stateSelection.value;
  nationalParkByLocationInfoTableBody.innerHTML = "";

  if (locationRB.checked) {
    nationalParksArray.forEach((park) => {
      if (selectedValue === park.State) {
        buildLocationInfoRow(nationalParkByLocationInfoTableBody, park);
      }
    });
  } else if (parkRB.checked) {
    nationalParksArray.forEach((park) => {
      if (park.LocationName.includes(selectedValue)) {
        buildLocationInfoRow(nationalParkByLocationInfoTableBody, park);
      }
    });
  }
}

function buildLocationInfoRow(tablebody, nationalPark) {
  let row = tablebody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;

  let cell7 = row.insertCell(6);

  if (nationalPark.Visit) {
    const a = document.createElement("a");
    let link = document.createTextNode(nationalPark.Visit);
    a.appendChild(link);
    a.innerText = "Visit";
    a.href = nationalPark.Visit;
    a.target = "_blank";
    cell7.appendChild(a);
  }
}

window.onload = () => {
  loadSearchType();
  onclick = loadSearchType;
  stateSelection.onchange = loadTableBody;
  
};

