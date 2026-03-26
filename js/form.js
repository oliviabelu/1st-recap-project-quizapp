const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

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

console.log(document.body);
