// import functions and grab DOM elements
const catAudio = document.querySelector('.cat-audio');
const dogAudio = document.querySelector('.dog-audio');
const horseAudio = document.querySelector('.horse-audio');
const catImage = document.querySelector('.cat-image');
const dogImage = document.querySelector('.dog-image');
const horseImage = document.querySelector('.horse-image');

// initialize global state

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
catImage.addEventListener('click', () => {
    catAudio.currentTime = 0;
    catAudio.play();
});

dogImage.addEventListener('click', () => {
    dogAudio.currentTime = 0;
    dogAudio.play();
});

horseImage.addEventListener('click', () => {
    horseAudio.currentTime = 0;
    horseAudio.play();
});