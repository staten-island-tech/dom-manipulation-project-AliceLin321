const DOMselectors = {
  form: document.getElementById("form"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  btn: document.getElementById("btn"),
};
function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "bigger red box";
  text.style.fontSize = "40px";
}
DOMselectors.btn.addEventListener("click", function () {
  backgroundAndText(DOMselectors.box, DOMselectors.text);
});
