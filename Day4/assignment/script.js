/* ============================================
   DAY 2 CODE (DO NOT MODIFY)
   --------------------------------------------
   This code handles:
   - Marking habits as completed
   - Toggling UI state
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
   DAY 3 ASSIGNMENT STARTS HERE
   --------------------------------------------
   RULES:
   - DO NOT remove or break Day 2 functionality
   - All new logic must be written below
============================================ */

/* ========= TASK 1: SELECT ELEMENTS ========= */

// TODO:
// Select the following elements:
// - form
// - input field
// - select dropdown
// - habits container
// - stats elements

/* ========= TASK 2: STATE VARIABLES ========= */

// TODO:
// Create variables to track:
// - total number of habits
// - number of habits completed today

/* ========= TASK 3: FORM SUBMISSION ========= */

// TODO:
// Add submit event listener to the form
// - prevent page refresh
// - read input value
// - ignore empty input

/* ========= TASK 4: CREATE HABIT CARD ========= */

// TODO:
// When form is submitted:
// - create a new habit card
// - same structure as existing cards
// - include a "Done" button

/* ========= TASK 5: BUTTON BEHAVIOR ========= */

// TODO:
// Ensure new habit buttons:
// - toggle completed state
// - update button text
// - update completed count

/* ========= TASK 6: UPDATE STATS ========= */

// TODO:
// Dynamically update:
// - Total Habits
// - Completed Today

/* ========= BONUS (OPTIONAL) ========= */

// - Prevent duplicate habits
// - Add delete button
// - Persist habits using localStorage
