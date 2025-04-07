import "./style.css";

const jawaban: Array<string> = [
  "B",
  "A",
  "C",
  "A",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
];
let score = 0;

const form = document.querySelector<HTMLElement>(
  ".quiz-form"
) as HTMLFormElement;
const result = document.querySelector(".result") as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];

  userAnswers.forEach((jawabanUser, index) => {
    if (jawabanUser === jawaban[index]) {
      score += 1;
    }
  });

  result.innerHTML = `<p> selamat kamu benar ${score} 🚀 </p>`;
});
