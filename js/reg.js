let text = document.querySelector(".text").innerHTML;
let change = new RegExp("\"", "gi");
let newText = text.replace(".?\'", (match, change) => match.replace(change));





// Для второго задания регулярное выражение /.?'/B /