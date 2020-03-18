var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var form = document.querySelector("form");
var start = popup.querySelector("[name=trip-start]");
var over = popup.querySelector("[name=trip-over]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");

button.addEventListener("click", function(evt){
 evt.preventDefault();
 popup.classList.toggle("search-form-close");
});

form.addEventListener("submit", function(){
  if (!start.value || !over.value || !adults.value || !kids.value) {
     evt.preventDefault();
     console.log("Enter value!");
    }
 })