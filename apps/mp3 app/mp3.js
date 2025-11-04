// mp3.js

console.log("MP3 player script is loaded");

document.addEventListener("DOMContentLoaded", () => {

    const fileInput = document.getElementById('files');
    const audioPlayer = document.getElementById('audioPlayer');
    const backButton = document.getElementById('backButton');
    const forButton = document.getElementById('forButton');

    let currentFileIndex = 0;
    let audioFiles = [];

    // Utility: load audio file
    function loadAudioFile(file) {
        if (!file) return;
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        console.log("Loaded file:", file.name);
    }

    // Update button states
    function updateButtons() {
        backButton.disabled = currentFileIndex === 0;
        forButton.disabled = currentFileIndex === audioFiles.length - 1;
    }

    // Play audio safely
    function playAudio() {
        try {
            audioPlayer.play();
        } catch (e) {
            console.warn("Autoplay prevented:", e);
        }
    }

    // Handle file selection
    fileInput.addEventListener('change', () => {
        audioFiles = Array.from(fileInput.files);

        if (audioFiles.length > 0) {
            currentFileIndex = 0;
            loadAudioFile(audioFiles[currentFileIndex]);
            updateButtons();
            playAudio();
        } else {
            console.error("No files selected");
            backButton.disabled = true;
            forButton.disabled = true;
        }
    });

    // Forward button
    forButton.addEventListener('click', () => {
        console.log("forawrd");
        if (currentFileIndex < audioFiles.length - 1) {
            currentFileIndex++;
            loadAudioFile(audioFiles[currentFileIndex]);
            updateButtons();
            playAudio();
        }
    });

    // Back button
    backButton.addEventListener('click', () => {
        if (currentFileIndex > 0) {
            currentFileIndex--;
            loadAudioFile(audioFiles[currentFileIndex]);
            updateButtons();
            playAudio();
        }
    });

    // Auto-play next track when current ends
    audioPlayer.addEventListener('ended', () => {
        if (currentFileIndex < audioFiles.length - 1) {
            currentFileIndex++;
            loadAudioFile(audioFiles[currentFileIndex]);
            updateButtons();
            playAudio();
        }
    });

    // Initial state
    updateButtons();
});
