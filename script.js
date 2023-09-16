let btn = document.getElementById("btn");
let wordFixer = document.getElementById("wordFixer");
let result = document.getElementById("result");
let wordStyle = (wordFixer.style.textTransform = "capitalize");
btn.addEventListener("click", function () {
  wordFixer.select();
  wordFixer.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(wordFixer.value);
  wordFixer.value = "";
});
