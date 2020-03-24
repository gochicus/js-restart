let text = document.querySelector("text").innerHTML;
let change = new RegExp("\"", "gi");
let newText = text.replace("/.?\'/", (match, change) => match.replace(change));

function Replacing() {
    return newText;
}
document.querySelector("text").innerHTML = newText;

Replacing(text);

// Для второго задания регулярное выражение /.?'/B /