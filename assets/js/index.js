var modal = document.getElementById("modal");

initialize();

function initialize() {
  document.getElementById("tip").addEventListener("click", function (event) {
    event.preventDefault();
    modalOpen();
  });

  document.getElementById("close").addEventListener("click", function () {
    modalClose();
  });
}

function modalOpen() {
  modal.classList.add("show");
}

function modalClose() {
  modal.classList.remove("show");
}
