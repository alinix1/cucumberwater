// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTag1 = document.querySelector(".tagline-1");
var coverTag2 = document.querySelector(".tagline-2");

var formView = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var saveCoverSection = document.querySelector(".saved-covers-section");

var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var randomButton = document.querySelector(".random-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var createBookButton = document.querySelector(".create-new-book-button");

var inputCover = document.querySelector("#cover");
var inputTitle = document.querySelector("#title");
var inputDescriptor1 = document.querySelector("#descriptor1");
var inputDescriptor2 = document.querySelector("#descriptor2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
   "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomButton.addEventListener('click', randomizeCover);

makeNewCoverButton.addEventListener('click', displayForm);

viewSavedButton.addEventListener('click', showSaveCovers);

homeButton.addEventListener('click', displayHome);

createBookButton.addEventListener('click', makeCover);

saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇

randomizeCover();
function randomizeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTag1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTag2.innerText = descriptors[getRandomIndex(descriptors)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  currentCover = new Cover(
    coverImage.src,
    coverTitle.innerText,
    coverTag1.innerText,
    coverTag2.innerText,
  )
};

function displayForm() {
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  saveCoverSection.classList.add('hidden');
  savedView.classList.add('hidden');

};

function displaySavedCovers() {
  viewSavedButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formView.classList.add('hidden');

};

function displayHome() {
  homeView.classList.remove('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.add('hidden');

};

function makeCover() {
  event.preventDefault();
  getUserInput();

};

function getUserInput() {
  var userImage = inputCover.value;
  var userTitle = inputTitle.value;
  var userDescriptor1 = inputDescriptor1.value;
  var userDescriptor2 = inputDescriptor2.value;
  saveUserInput(userImage, userTitle, userDescriptor1, userDescriptor2);
};

function saveUserInput(userImage, userTitle, userDescriptor1, userDescriptor2) {
  covers.push(userImage);
  titles.push(userTitle);
  descriptors.push(userDescriptor1, userDescriptor2);
  displayCover(userImage, userTitle, userDescriptor1, userDescriptor2);
};

function displayCover(userImage, userTitle, userDescriptor1, userDescriptor2) {
  currentCover = new Cover(userImage, userTitle, userDescriptor1, userDescriptor2);
  displayHome();
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTag1.innerText = currentCover.tagline1;
  coverTag2.innerText = currentCover.tagline2;

};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  };
};

function showSaveCovers() {
  displaySavedCovers();
  var smallCover = '';
  for (var i = 0; i < savedCovers.length; i++) {
    smallCover = smallCover + `<section class="mini-cover">
        <img class="overlay" src="./assets/overlay.png">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}
        </span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      </section>`
  };
  saveCoverSection.innerHTML = smallCover;
};

// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
