/* ============================================
   DAY 2 CODE (UNCHANGED)
============================================ */

const buttons = document.querySelectorAll(".habit-card button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("completed");

    btn.innerText = btn.innerText === "Done" ? "Completed ✓" : "Done";
  });
});

/* ============================================
   DAY 3 SOLUTION
============================================ */

/* ========= SELECT ELEMENTS ========= */

const habitForm = document.getElementById("habitForm");
const habitInput = document.getElementById("habitInput");
const habitFrequency = document.getElementById("habitFrequency");
const habitsContainer = document.getElementById("habitsContainer");

const totalHabitsText = document.getElementById("totalHabits");
const completedTodayText = document.getElementById("completedToday");

/* ========= STATE ========= */

let totalHabits = document.querySelectorAll(".habit-card").length;
let completedToday = document.querySelectorAll(".habit-card.completed").length;

/* ========= FORM SUBMISSION ========= */

habitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const habitName = habitInput.value.trim();
  if (habitName === "") return;

  /* ========= CREATE CARD ========= */

  const habitCard = document.createElement("div");
  habitCard.classList.add("habit-card");

  habitCard.innerHTML = `
    <h3>${habitName}</h3>
    <p>Streak: 0 days</p>
    <button>Done</button>
  `;

  /* ========= BUTTON LOGIC ========= */

  const button = habitCard.querySelector("button");

  button.addEventListener("click", function () {
    habitCard.classList.toggle("completed");

    if (button.innerText === "Done") {
      button.innerText = "Completed ✓";
      completedToday++;
    } else {
      button.innerText = "Done";
      completedToday--;
    }

    completedTodayText.innerText = `Completed Today: ${completedToday}`;
  });

  /* ========= APPEND & UPDATE ========= */

  habitsContainer.appendChild(habitCard);

  totalHabits++;
  totalHabitsText.innerText = `Total Habits: ${totalHabits}`;

  habitInput.value = "";
});
