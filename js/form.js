const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');

const remCharQuest = document.querySelector('[data-js="rem-char-quest"]');
const remCharAns = document.querySelector('[data-js="rem-char-ans"]');

//---clear input fields, when charging the page---
if (questionInput.value != "") {
  questionInput.value = "";
}
if (answerInput.value != "") {
  answerInput.value = "";
}
//---remaining characters count---
function getRemainingChars(charMax, event) {
  return charMax - event.target.value.length;
}

questionInput.addEventListener("input", (event) => {
  remCharQuest.textContent = getRemainingChars(questionInput.maxLength, event);
});

answerInput.addEventListener("input", (event) => {
  remCharAns.textContent = getRemainingChars(answerInput.maxLength, event);
});

//---fill in new form---
let newQuestion = "";
let newAnswer = "";
let newTag = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData);
  //   console.log("test");
  //   console.log(data);

  const formElements = event.target.elements;

  newQuestion = formElements.question.value;
  newAnswer = formElements.answer.value;
  newTag = formElements.tag.value;

  if (newQuestion === "" || newAnswer === "") {
    alert("Please type Question and Answer");
    return;
  }

  const newCard = document.createElement("section");
  newCard.classList.add("card");
  newCard.classList.add("card-slide");

  newCard.innerHTML = `<!--Button: Bookmark-->
        <button class="card__bookmark" data-js="bookmark">
          <img
            src="./pics/bookmark-fav.png"
            alt="Bookmark"
            aria-describedby="Bookmark Symbol: unchecked"
            height="40vh"
            width="40vh"
            data-js="bookmarkIcon"
          />
        </button>

        <!--Question-->
        <p class="card__question">
          ${newQuestion}
        </p>

        <!--Answer (hidden option)-->
        <p
          class="card__answer card__answer--hide"
          aria-describedby="Answer"
          data-js="answer"
        >
          ${newAnswer}
        </p>

        <!--Button: Show Answer / Hide Answer-->
        <button class="card__show-answer" type="button" data-js="answerbutton">
          Show Answer
        </button>
        <!--categories as tags-->

        <div class="card__tags" aria-describedby="Tags regarding the question">
          <p class="card__tag tag--1">${newTag}</p>
        </div>`;

  main.append(newCard);

  //---reset fill in mask---
  event.target.reset();
  event.target.elements.question.focus();

  //---add event listeners to new card button and bookmark
  const answer = newCard.querySelector('[data-js="answer"]');
  const showAnswerButton = newCard.querySelector('[data-js="answerbutton"]');

  const bookmark = newCard.querySelector('[data-js="bookmark"]');
  const bookmarkIcon = newCard.querySelector('[data-js="bookmarkIcon"]');

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
});
