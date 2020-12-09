var btnTranslate = document.querySelector("#btnTranslate");
var textInput = document.querySelector("#textInput");

console.log(textInput)

function callHandler() {
    console.log("Clicked");
    console.log("input", textInput.value);
}

btnTranslate.addEventListener("click", callHandler)