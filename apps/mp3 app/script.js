// script.js

console.log("js script loaded");

// show current year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").innerHTML = new Date().getFullYear();
});

// switch to ligth/dark mode
let darkmode = false;
function changeTheme(){
  console.log("theme changed");
  if (!darkmode) {
    darkmode = true;
    document.documentElement.style.setProperty("--background_color", "rgb(48, 48, 48)");
    document.documentElement.style.setProperty("--text_color", "rgb(206, 206, 206)");
    document.documentElement.style.setProperty("--list_background_color", "rgb(48, 48, 48)");
  } else if (darkmode) {
    darkmode = false;
    document.documentElement.style.setProperty("--background_color", "#eaeaea");
    document.documentElement.style.setProperty("--text_color", "rgb(48, 48, 48)");
    document.documentElement.style.setProperty("--list_background_color", "white");
  }
}