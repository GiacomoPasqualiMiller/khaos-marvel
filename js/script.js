const toggleBtn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");


if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  //Show the light icon
  lightIcon.classList.remove("hidden");
} else {
  darkIcon.classList.remove("hidden");
}

//Listen for toggle button
toggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  //Toggle Icon
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  //If is set in local storage
  if (localStorage.getItem("color-theme")) {
    //if light --> make dark and save in the local storege
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    //if is not in local storage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
