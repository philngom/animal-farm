// import functions and grab DOM elements
const catAudio = document.querySelector('.cat-audio');
const dogAudio = document.querySelector('.dog-audio');
const horseAudio = document.querySelector('.horse-audio');
const catImage = document.querySelector('.cat-image');
const dogImage = document.querySelector('.dog-image');
const horseImage = document.querySelector('.horse-image');
const lastAnimalPlayed = document.getElementById('recent-animal-played');

// initialize global state

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
catImage.addEventListener('click', () => {
    playAnimalSound(catAudio, 'cat');
});

dogImage.addEventListener('click', () => {
    playAnimalSound(dogAudio, 'dog');
});

horseImage.addEventListener('click', () => {
    playAnimalSound(horseAudio, 'horse');
});

function playAnimalSound(sound, animal) {
    sound.currentTime = 0;
    sound.play();
    lastAnimalPlayed.textContent = `You clicked the ${animal} image`;
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'h') {
        playAnimalSound(horseAudio, 'horse');
    } else if (e.key === 'd') {
        playAnimalSound(dogAudio, 'dog');
    } else if (e.key === 'c'){
        playAnimalSound(catAudio, 'cat');
    }
});