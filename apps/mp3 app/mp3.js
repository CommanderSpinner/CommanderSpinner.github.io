console.log("MP3 player script is loaded");

const fileInput = document.getElementById('files');
const audioPlayer = document.getElementById('audioPlayer');
const backButton = document.getElementById('backButton');
const forButton = document.getElementById('forButton');

let currentFileIndex = 0;
let audioFiles = [];

// Handle file upload
fileInput.addEventListener('change', () => {
    audioFiles = Array.from(fileInput.files);
    if (audioFiles.length > 0) {
        currentFileIndex = 0;
        loadAudioFile(audioFiles[currentFileIndex]);
        updateButtons();
        audioPlayer.play();
    } else {
        console.error("No file selected");
        backButton.disabled = true;
        forButton.disabled = true;
    }
});

// Load and set audio file
function loadAudioFile(file) {
    const objectURL = URL.createObjectURL(file);
    audioPlayer.src = objectURL;
}

// Forward button
forButton.addEventListener('click', () => {
    if (currentFileIndex < audioFiles.length - 1) {
        currentFileIndex++;
        loadAudioFile(audioFiles[currentFileIndex]);
        audioPlayer.play();
        updateButtons();
    }
});

// Back button
backButton.addEventListener('click', () => {
    if (currentFileIndex > 0) {
        currentFileIndex--;
        loadAudioFile(audioFiles[currentFileIndex]);
        audioPlayer.play();
        updateButtons();
    }
});

// Auto-play next track when current ends
audioPlayer.addEventListener('ended', () => {
    if (currentFileIndex < audioFiles.length - 1) {
        currentFileIndex++;
        loadAudioFile(audioFiles[currentFileIndex]);
        audioPlayer.play();
        updateButtons();
    }
});

// Enable/disable buttons based on current track
function updateButtons() {
    backButton.disabled = currentFileIndex === 0;
    forButton.disabled = currentFileIndex === audioFiles.length - 1;
}
