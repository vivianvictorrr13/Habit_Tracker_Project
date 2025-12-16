/* ============================================
   DAY 2: JAVASCRIPT BASICS
   Topics:
   - DOM selection
   - Events
   - Class toggle
============================================ */

const buttons = document.querySelectorAll(".habit-card button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;

    // Toggle completed state
    card.classList.toggle("completed");

    // Toggle button text
    btn.innerText =
      btn.innerText === "Done" ? "Completed ✓" : "Done";
  });
});
