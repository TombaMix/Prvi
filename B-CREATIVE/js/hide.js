document.getElementById("prvi-btn").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    element.style.visibility = "visible";
  }
});

document.getElementById("drugi-btn").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    if (!element.classList.contains("logo-dizajn")) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }
});

document.getElementById("treci-btn").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    if (!element.classList.contains("web-dizajn")) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }
});

document.getElementById("cetvrti-btn").addEventListener("click", () => {
  let elements = document.querySelectorAll(".grid-item");
  for (let element of elements) {
    if (!element.classList.contains("development")) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }
});
