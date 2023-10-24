let num = 0;
const allHomes = document.querySelectorAll(".home");
const allX = document.querySelectorAll(".X");
const allO = document.querySelectorAll(".O");
const winText = document.querySelector(".winner");
const table = document.querySelector(".table");
const isFinished = false;
let counter = 0;


// if the counter variable is even, when the user clicks the "O" will appear
// if the counter variable is odd, "X" will appear
// the home is not usable after once clicked
for (const home of allHomes) {
  home.addEventListener("click", function click() {
    num++;
    if (num === 9) {
      winText.innerHTML = "Equal";
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
    if (counter % 2 === 0) {
      for (const O of allO) {
        if (
          O.getAttribute("connect-to-O") === home.getAttribute("connect-to-O")
        ) {
          O.style.display = "block";
          home.removeEventListener("click", click);
          home.style.pointerEvents = "none";
          counter++;
        }
      }
    } else {
      for (const X of allX) {
        if (
          X.getAttribute("connect-to-X") === home.getAttribute("connect-to-X")
        ) {
          X.style.display = "block";
          home.removeEventListener("click", click);
          home.style.pointerEvents = "none";
          counter++;
        }
      }
    }

    
    // difining who is the winner!!
    if (
      allHomes[0].children[0].style.display === "block" &&
      allHomes[1].children[0].style.display === "block" &&
      allHomes[2].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
      allHomes[8];
    } else if (
      allHomes[3].children[0].style.display === "block" &&
      allHomes[4].children[0].style.display === "block" &&
      allHomes[5].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[6].children[0].style.display === "block" &&
      allHomes[7].children[0].style.display === "block" &&
      allHomes[8].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[0].children[0].style.display === "block" &&
      allHomes[3].children[0].style.display === "block" &&
      allHomes[6].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[1].children[0].style.display === "block" &&
      allHomes[4].children[0].style.display === "block" &&
      allHomes[7].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[2].children[0].style.display === "block" &&
      allHomes[5].children[0].style.display === "block" &&
      allHomes[8].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[0].children[0].style.display === "block" &&
      allHomes[4].children[0].style.display === "block" &&
      allHomes[8].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[2].children[0].style.display === "block" &&
      allHomes[4].children[0].style.display === "block" &&
      allHomes[6].children[0].style.display === "block"
    ) {
      winText.innerHTML = "O wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[0].children[1].style.display === "block" &&
      allHomes[1].children[1].style.display === "block" &&
      allHomes[2].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[3].children[1].style.display === "block" &&
      allHomes[4].children[1].style.display === "block" &&
      allHomes[5].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[6].children[1].style.display === "block" &&
      allHomes[7].children[1].style.display === "block" &&
      allHomes[8].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[0].children[1].style.display === "block" &&
      allHomes[3].children[1].style.display === "block" &&
      allHomes[6].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[1].children[1].style.display === "block" &&
      allHomes[4].children[1].style.display === "block" &&
      allHomes[7].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[2].children[1].style.display === "block" &&
      allHomes[5].children[1].style.display === "block" &&
      allHomes[8].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[0].children[1].style.display === "block" &&
      allHomes[4].children[1].style.display === "block" &&
      allHomes[8].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else if (
      allHomes[2].children[1].style.display === "block" &&
      allHomes[4].children[1].style.display === "block" &&
      allHomes[6].children[1].style.display === "block"
    ) {
      winText.innerHTML = "X wins";
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  });
}
