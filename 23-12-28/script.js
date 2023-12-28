// 1. Gauti veisles
// 2. Atvaizduoti veisles select elemente
// 3. sukurti nuotrauku atvaizdavimo funkcija pagal veisle
// 3.1 susigeneruoti dinamini url, tam kad kreiptis i suns veisles nuotraukas
// 3.2 Kreipiames i serveri pagal dinamini url, norint gauti veisliu nuotraukas
// 3.3 Kai gauname atsakyma, dinamiskai generuoti html code. (dinaminis kodas yra generuojamas pagal gauta nuotrauku masyva)
// 3.4 sugeneruota koda atvaizduoti tame elemente, kuriame norime atvaizduoti nuotrauka
// 4. Prideti event listeneri selektui, kuris kels nuotraukas pagal veisle

const breedSelectElement = document.querySelector("#breeds-select");
const dynamicAlbumElement = document.querySelector("#photo-album");
const breedsArray = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((response) => parseAllBreads(response.message));

function parseAllBreads(breeds) {
  //2
  let dynamicHTML = "";
  console.log(breeds);
  for (let breed in breeds) {
    //breed - veisles pavadinimas
    // masyve esancios reiksmes - sub-veisles
    const subBreeds = breeds[breed];
    if (subBreeds.length === 0) {
      dynamicHTML += `<option>${breed}</option>`;
      breedsArray.push(breed);
    } else {
      for (let subBreed of subBreeds) {
        dynamicHTML += `<option>${subBreed} ${breed}</option>`;
        breedsArray.push(`${subBreed} ${breed}`);
      }
    }
  }
  parseDogImage(breedsArray[5]);
  breedSelectElement.innerHTML = dynamicHTML;
}

function parseDogImage(breed) {
  let dynamicURL = generateDynamicDogPhotosURL(breed); //3.1
  fetch(dynamicURL)
    .then((response) => response.json())
    .then((response) => generateDynamicDogPhotos(response.message));
}

function generateDynamicDogPhotosURL(breed) {
  //3.1
  let finalBreed = breed.split(" ").reverse().join("/");
  let fullURL = `https://dog.ceo/api/breed/${finalBreed}/images`;
  return fullURL;
}

function generateDynamicDogPhotos(photosArray) {
  console.log(photosArray);
  let dynamicHTML = "";
  for (let photo of photosArray) {
    dynamicHTML += `
    <div class="col-4 mx-auto">
<img
          
          src="${photo}"
          style="width: 100%"
        />
        </div>
`;
  }
  dynamicAlbumElement.innerHTML = dynamicHTML;
}

//4
breedSelectElement.addEventListener("change", () => {
  parseDogImage(breedSelectElement.value);
});
