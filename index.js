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
 function input() {
  DOMselectors.display.insertAdjacentHTML("beforeend"),
    (
      <div class="display-card">
        <img class="display-img" src=${DOMselectors.url.value} />
        <h2 class="display-artist">${DOMselectors.artist.value}</h2>
        <h3 class="display-album">${DOMselectors.album.value}</h3>
        <button class="remove btn"></button>
      </div>
    );
});
