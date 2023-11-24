export default $("#nav")
  .find("li")
  .hover(
    function () {
      $(this).addClass('on');

      $(this).find("ul").addClass('vis');

      // $(this).find("ul").fadeIn(350);

    },
    function () {
      $(this).removeClass('on');
      $(this).find("ul").removeClass('vis');

      // $(this).find("ul").fadeOut(350);

    }
  );

$(".mobMenu").click(function () {
  $(this).toggleClass("momo");
  if ($(this).hasClass("momo")) {
    $(this).find("i").removeClass("bi bi-filter-left").addClass("bi bi-x-lg");
    $(".navWarp").stop().slideDown(400);
    
  } else {
    $(this).find("i").removeClass("bi bi-x-lg").addClass("bi bi-filter-left");
    $(".navWarp").stop().slideUp(400);
  }
});

// $('.main').hasClass('inside')  ?  $('#logo').find('img').attr('src','../images/logo_b.svg') :console.log('no'); 




