import { myFunction } from "./script.js?v=20230705.1";

const element = document.getElementById("cityCode");
element.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myFunction();
    navigator.vibrate(30);
  }
});

document.getElementById("searchButton").addEventListener("click", myFunction);
