// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const stateURL = `${baseServerURL}/states`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// state
let stateNameInput = document.getElementById("state-Name");
let stateImageInput = document.getElementById("state-image");
let statecapitalInput = document.getElementById("state-capital");
let statepopulationInput = document.getElementById("state-population");
let statelanguageInput = document.getElementById("state-language");
let stateGDPRankingInput = document.getElementById("state-GDPRanking");
let stateRegionInput = document.getElementById("state-region");
let statetourismPlacesInput = document.getElementById("state-tourismPlaces");
let stateCreateBtn = document.getElementById("add-state");

// Update state
let updateStateIdInput = document.getElementById("update-state-id");
let updatestateNameInput = document.getElementById("update-state-Name");
let updateStateImageInput = document.getElementById("update-state-image");
let updateStatecapitalInput = document.getElementById("update-state-capital");
let updateStatepopulationInput = document.getElementById(
  "update-state-population"
);
let updateStatelanguageInput = document.getElementById("update-state-language");
let updateStateGDPRankingInput = document.getElementById(
  "update-state-GDPRanking"
);
let updateStateRegionInput = document.getElementById("update-state-region");

let updateStatetourismPlacesInput = document.getElementById(
  "update-state-tourismPlaces"
);
let updateStateBtn = document.getElementById("update-state");

//Update GDPRanking
let updateGDPStateId = document.getElementById("update-GDP-state-id");
let updateGDPRankingStateGDPRanking = document.getElementById(
  "update-GDP-state-GDPRanking"
);
let updateGDPRankingStateBtn = document.getElementById("update-GDP-stateBtn");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterNortheast = document.getElementById("filter-North-East-India");
let filterWest = document.getElementById("filter-West-India");
let filterNorth = document.getElementById("filter-North-India");

//Search by name/language
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//States Data
let statesData = [];
let queryParamString = null;
let pageNumber = 1;


// my code 

function start(URL,query,pnum) {
  fetch(`${URL}?${query || ""}_page=${pnum || 1}&_limit=5`) 
  .then((res) => {
    let totalPost = res.headers.get("X-Total-Count");
    console.log(totalPost);
    let totalButton = Math.ceil(totalPost/5);
    createButtons(totalButton,query)

    return res.json();
  })
  .then(data =>  {
   console.log(data);
    display(data)
  })
}
start(stateURL);


function display(data) {
  mainSection.innerHTML = "";
  let list = document.createElement("div");
  list.className = "card-list";
data.forEach((item,i) => {
  let card = createCard(item,i);
list.append(card);
})
mainSection.append(list);
}

function createCard(data,i) {
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id",`${i+1}`);

  let card_img = document.createElement("div");
  card_img.className = "card-img";

  let pic = document.createElement("img");
  pic.src = data.image;
  pic.alt = "state";
  
  let body = document.createElement("div");
  body.className = "card-body";

  let name = document.createElement("h5");
  name.className = "card-stateName";
  name.textContent = data.stateName;

  let capital = document.createElement("p");
  capital.className = "card-capital";
  capital.textContent = data.capital;

  let population = document.createElement("p");
  population.className = "card-population";
  population.textContent = data.population;

  let region = document.createElement("p");
  region.className = "card-region";
  region.textContent = data.region;

  let language = document.createElement("p");
  language.className = "card-language";
  language.textContent = data.language;

  let gdp = document.createElement("p");
  gdp.className = "card-GDPRanking";
  gdp.textContent = data.GDPRanking ;

  let places = document.createElement("p");
  places.className = "card-tourismPlaces";
  places.textContent = data.tourismPlaces;

  let edit = document.createElement("a");
  edit.className = "card-link";
  edit.textContent = "Edit";
  edit.href = "#";
  edit.addEventListener('click',(e)=> {
    e.preventDefault();
    populateDetails(data);
  })
  edit.setAttribute("data-id",`${i+1}`);

  let btn = document.createElement("button");
  btn.className = "card-button";
  btn.textContent = "Delete";
  btn.setAttribute("data-id",`${i+1}`);
  btn.addEventListener('click',(e)=> {
    deleteReq(data);
  })

  card_img.append(pic);
  body.append(name,capital,population,region,language,gdp,places,edit,btn);

  card.append(card_img,body);
 return card;
}

function createButtons(totalButton,quer) {
  paginationWrapper.innerHTML = "";
  for(let ind = 1; ind<=totalButton; ind++) {
    let pagebutton = document.createElement("button");
    pagebutton.className = "pagination-button";
    pagebutton.textContent = ind;

    pagebutton.addEventListener('click',(e)=> {
      start(stateURL,quer,ind)
    })
    paginationWrapper.append(pagebutton);
  }
}

// sorting query 
sortAtoZBtn.addEventListener('click',(e)=> {
start(stateURL,"_sort=GDPRanking&_order=asc&")
})
sortZtoABtn.addEventListener('click',(e)=> {
  start(stateURL,"_sort=GDPRanking&_order=desc&")
})
filterNortheast.addEventListener('click',(e)=> {
  start(stateURL,"region=North East India&")
})
filterWest.addEventListener('click',(e)=> {
  start(stateURL,"region=West India&")
})
filterNorth.addEventListener('click',(e)=> {
  start(stateURL,"region=North India&")
})
searchByButton.addEventListener('click',(e)=> {
  start(stateURL,`${searchBySelect.value}=${searchByInput.value}&`)
})

function populateDetails(data) {
  updateStateIdInput.value = data.id;
  updatestateNameInput.value = data.name;
  updateStateImageInput.value = data.image;
  updateStatepopulationInput.value = data.population;
  updateStateGDPRankingInput.value = data.GDPRanking;
  updateStatelanguageInput.value = data.language;
  updateStatecapitalInput.value = data.capital;
  updateStateRegionInput.value = data.region;
  updateStatetourismPlacesInput.value = data.tourismPlaces;

  updateGDPStateId.value = data.id;
  updateGDPRankingStateGDPRanking.value = data.GDPRanking;
}

stateCreateBtn.addEventListener('click',(e)=> {
  postReq();
})

async function postReq() {
let res = await fetch(stateURL,{
  method : "POST",
  headers : {"Content-Type" : "application/json"},
  body : JSON.stringify({
    "stateName": stateNameInput.value,
    "population": statepopulationInput.value,
    "GDPRanking": stateGDPRankingInput.value,
    "image": stateImageInput.value,
    "language": statelanguageInput.value,
    "capital": statecapitalInput.value,
    "region": stateRegionInput.value,
    "tourismPlaces": [
      statetourismPlacesInput.value
    ]
  })
})
let data = await res.json();
start(stateURL);
}

updateStateBtn.addEventListener('click',(e)=> {
patchAll();
})

updateGDPRankingStateBtn.addEventListener('click',(e)=> {
patchGDP();
})

async function patchAll() {
  let res = await fetch(`${stateURL}/${updateStateIdInput.value}`,{
    method : "PATCH",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
      "id" : updateStateIdInput.value,
      "stateName": updatestateNameInput.value,
      "population": updateStatepopulationInput.value,
      "GDPRanking": updateStateGDPRankingInput.value,
      "image": updateStateImageInput.value,
      "language": updateStatelanguageInput.value,
      "capital": updateStatecapitalInput.value,
      "region": updateStateRegionInput.value,
      "tourismPlaces": [
        updateStatetourismPlacesInput.value
      ]
    })
  })
  let data = await res.json();
  start(stateURL);
}
async function patchGDP() {
  let res = await fetch(`${stateURL}/${updateGDPStateId.value}`,{
    method : "PATCH",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
      "id" : updateGDPStateId.value,
      "GDPRanking": updateGDPRankingStateGDPRanking.value,
    })
  })
  let data = await res.json();
  start(stateURL);
}

async function deleteReq(obj) {
  let res = await fetch(`${stateURL}/${obj.id}`,{
    method : "DELETE",
    headers : {"Content-Type" : "application/json"},
    
  })
  start(stateURL);
}