const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
//const newInput = document.querySelector('[data-js="new-input"]');
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
console.log(questionInput);
function getRemainingChars(charMax, event) {
  return charMax - event.target.value.length;
}

questionInput.addEventListener("input", (event) => {
  console.log(questionInput.maxLength);
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

  console.log(newQuestion);
  console.log(newAnswer);
  console.log(newTag);

  if (newQuestion === "" || newAnswer === "") {
    alert("Please type Question and Answer");
    return;
  }

  const newCard = document.createElement("section");
  newCard.classList.add("card");
  newCard.classList.add("card-slide");

  console.log(newQuestion);
  console.log(newAnswer);
  console.log(newTag);

  newCard.innerHTML = `<!--Button: Bookmark-->
        <button class="card__bookmark" data-js="bookmark">
          <img
            src="./pics/bookmark.png"
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
          class="card__answer "
          aria-describedby="Answer"
          data-js="answer"
        >
          ${newAnswer}
        </p>

        <!--Button: Show Answer / Hide Answer-->
        <button class="card__show-answer" type="button" data-js="answerbutton">
          Hide Answer
        </button>
        <!--categories as tags-->

        <div class="card__tags" aria-describedby="Tags regarding the question">
          <p class="card__tag tag--1">${newTag}</p>
        </div>`;

  main.append(newCard);

  event.target.reset();
  event.target.elements.question.focus();
});
