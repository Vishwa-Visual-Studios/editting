
function openModal() {
  const modal = document.getElementById("bookingModal");

  modal.classList.add("show");
}


function closeModal() {
  const modal = document.getElementById("bookingModal");

  modal.classList.remove("show");
}


// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {

  const modal = document.getElementById("bookingModal");

  if (event.target === modal) {
    closeModal();
  }

});
