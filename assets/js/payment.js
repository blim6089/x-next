$(document).ready(function () {
  $(".flag-item").click(function () {
    $(".flag-item").removeClass("active");
    $(this).addClass("active");
    $(".flag-content").removeClass("show");
    $("#" + $(this).attr("target")).addClass("show");
  });
});
