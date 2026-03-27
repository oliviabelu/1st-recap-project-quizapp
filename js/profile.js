console.clear();

const darkmodeToggle = document.querySelector('[data-js="darkmode-toggle"]');
const main = document.querySelector('[data-js="main"]');
const aboutMe = document.querySelector('[data-js="about-me"]');
const header = document.querySelector('[data-js="header"]');

darkmodeToggle.addEventListener("change", () => {
  if (darkmodeToggle.checked) {
    main.style.backgroundColor = "var(--shaddow)";
    main.style.color = "var(--tag)";
    //header.style.backgroundColor = "var(--golden-dark)";
  } else {
    main.style.backgroundColor = "var(--tag)";
  }
});
