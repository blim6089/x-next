var modal = document.getElementById("modal");

initialize();

function initialize() {
  var tip = document.getElementById("tip");
  if (tip) {
    tip.addEventListener("click", function (event) {
      event.preventDefault();
      modalOpen();
    });
  }

  var close = document.getElementById("close");
  if (close) {
    clos.addEventListener("click", function () {
      modalClose();
    });
  }

  var flagItems = document.getElementsByClassName("flag-item");
  if (flagItems) {
    for (var i = 0; i < flagItems.length; i++) {
      var selectedFlagItem = flagItems[i];
      selectedFlagItem.addEventListener("click", function () {
        var id = this.getAttribute("id");
        var target = this.getAttribute("target");
        document.getElementById("card-payment-tab").classList.remove("active");
        document
          .getElementById("voucher-payment-tab")
          .classList.remove("active");
        document.getElementById(id).classList.add("active");

        document.getElementById("card-payment").classList.remove("show");
        document.getElementById("voucher-payment").classList.remove("show");
        document.getElementById(target).classList.add("show");
      });
    }
  }
}

function modalOpen() {
  modal.classList.add("show");
}

function modalClose() {
  modal.classList.remove("show");
}
