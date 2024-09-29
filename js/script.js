const luigi = document.querySelector(".luigi");
const fantasma = document.querySelector(".fantasma");

const pulo = () => {
  luigi.classList.add("pulo");

  setTimeout(() => {
    luigi.classList.remove("pulo");
  }, 800);
};

const loop = setInterval(() => {
  const fantasmaPosition = fantasma.offsetLeft;
  const luigiPosition = window.getComputedStyle(luigi).bottom.replace("px", "");

  if (fantasmaPosition <= 110 && fantasmaPosition >= 0 && luigiPosition < 100) {
    fantasma.style.animation = "none";
    fantasma.style.left = `${fantasmaPosition}px`;

    luigi.style.animation = "none";
    luigi.style.bottom = `${luigiPosition}px`;

    luigi.src = "../img/medo.png";
    luigi.style.width = "75px";
  }
}, 10);

document.addEventListener("keydown", pulo);
