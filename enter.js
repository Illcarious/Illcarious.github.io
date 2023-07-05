import { myFunction } from "./script.js";

const element = document.getElementById("cityCode");
element.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myFunction();
    navigator.vibrate(30);
  }
});

document.getElementById("searchButton").addEventListener("click", myFunction);
