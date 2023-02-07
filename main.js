const inputEl = document.querySelector(".qr-input");
const imgEl = document.querySelector(".img-container");
const img = document.querySelector("#qr-img");
const generatorBtn = document.querySelector(".generator-btn");
const retryBtn = document.querySelector("#retry");

const qrGenerator = function () {
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEl.value}`;
  img.addEventListener("load", function () {
    imgEl.style.maxHeight = "200px";
  });

  // setTimeout(function () {
  // }, 200);

  inputEl.value = ``;
};

generatorBtn.addEventListener("click", qrGenerator);
retryBtn.addEventListener("click", function () {
  setTimeout(function () {
    imgEl.style.maxHeight = "0";
    img.src = ``;
  }, 1000);
});
