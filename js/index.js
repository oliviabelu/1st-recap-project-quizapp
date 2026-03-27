console.clear();

const answer = document.querySelector('[data-js="answer"]');
const showAnswerButton = document.querySelector('[data-js="answerbutton"]');

const bookmark = document.querySelector('[data-js="bookmark"]');
const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');

let isHidden = false;
let isBookmarked = true;

//---Button Show Answer / Hide Answer ---
showAnswerButton.addEventListener("click", () => {
  isHidden = !isHidden;
  answer.classList.toggle("card__answer--hide");

  showAnswerButton.textContent = isHidden ? "Hide Answer" : "Show Answer";
});

//---Bookmark toggle---
bookmark.addEventListener("click", () => {
  isBookmarked = !isBookmarked;
  bookmarkIcon.src = isBookmarked
    ? "./pics/bookmark-fav.png"
    : "./pics/bookmark-checked.png";
});
