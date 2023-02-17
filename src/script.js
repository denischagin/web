const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".button-open-modal");

openModalButton.addEventListener("click", (e) => modal.classList.add("active"));

modal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal__button-done") ||
    e.target.classList.contains("modal__button-close") ||
    e.target.classList.contains("modal")
  )
    modal.classList.remove("active");
});
