export default $("#menuIcon").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("momo");

  if ($(this).hasClass("momo")) {
    $("#menu").addClass("vis");

    $(this).find("i").removeClass("bi bi-list").addClass("bi bi-x");
  } else {
    $("#menu").removeClass("vis");
    $(this).find("i").removeClass("bi bi-x").addClass("bi bi-list");
  }
});

const menuLinks = document.getElementById("menu");

menuLinks.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName === "SPAN") {
    const pageNumber = event.target.dataset.page;

    $("#menu").removeClass("vis");
    $("#menuIcon").removeClass("momo");

    $("#menuIcon").find("i").removeClass("bi bi-x").addClass("bi bi-list");

    showPage(pageNumber, "menu");
  }
});

//選單
$("#nav")
  .find("li")
  .hover(function () {
    $(this).find("ul").stop().fadeToggle(350);
  });
