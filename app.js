var btnTranslate = document.querySelector("#btnTranslate");
var textInput = document.querySelector("#textInput");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {

    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occurred", error)
    alert("Something wrong with server! try again after some time")
}

function callHandler() {

    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", callHandler)