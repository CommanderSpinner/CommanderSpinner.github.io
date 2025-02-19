console.log("MP3 player script is loaded");

const fileInput = document.getElementById('files');
const audioPlayer = document.getElementById('audioPlayer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const backButton = document.getElementById('backButton');
const forButton = document.getElementById('forButton');

let currentFileIndex = 0;
let audioFiles = [];

// Handle file upload
fileInput.addEventListener('change', () => {
    audioFiles = Array.from(fileInput.files);
    if (audioFiles.length > 0) {
        loadAudioFile(audioFiles[currentFileIndex]);
        startButton.disabled = false;
        stopButton.disabled = false;
        backButton.disabled = false;
        forButton.disabled = false;
    } else {
        console.error("No file selected");
    }
});

// Load and set audio file
function loadAudioFile(file) {
    const objectURL = URL.createObjectURL(file);
    audioPlayer.src = objectURL;
}

// Skip to the next track
forButton.addEventListener('click', () => {
    currentFileIndex = (currentFileIndex + 1) % audioFiles.length;
    loadAudioFile(audioFiles[currentFileIndex]);
    audioPlayer.play();
});

// Toggle between files when they finish
audioPlayer.addEventListener('ended', () => {
    currentFileIndex = (currentFileIndex + 1) % audioFiles.length;
    loadAudioFile(audioFiles[currentFileIndex]);
    audioPlayer.play();
});
