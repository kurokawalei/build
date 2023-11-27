export default 

$("#menuIcon").click(function (e) {
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



function showPage(pageNumber ) {

  const container = document.getElementById('wrap');
  container.style.transform = `translateX(-${(pageNumber - 1) * 100}vw)`;


  //內頁
  if (window.location.hash === "#about"){
    window.location.hash = '';
    $('body').removeClass('about');
    $('#page2').find('.sectionBlock').removeClass('animate__animated animate__fadeOut').css('display', 'block');
    $('.aboutView').removeClass('animate__animated animate__fadeIn').css('display', 'none');

    $('.tips').removeClass('animate__animated animate__fadeInLeft').css('display', 'none');
  }

  if (window.location.hash === "#case"){
    window.location.hash = '';
    $('body').removeClass('about');
    $('#page3').find('.sectionBlock').removeClass('animate__animated animate__fadeOut').css('display', 'block');
    $('.caseBox').removeClass('animate__animated animate__fadeIn').css('display', 'none');

    $('.tips').removeClass('animate__animated animate__fadeInLeft').css('display', 'none');

  }




  if( pageNumber == 2 ){
          $('#page2').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
  }

  if(   pageNumber == 3 ){
    $('#page3').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
    $('#page3').find('.hiddenBlock').removeClass('vis');  
    setTimeout(function(){
      secondFunction();
    },1000)
  }

  if(   pageNumber == 4 ){
    $('#page4').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
  }

  if(   pageNumber == 5 ){
    $('#page5').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
    $('#page5').find('.infoBox').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');      
  }

  console.log(pageNumber);
  
  if(   pageNumber == 6 ){

    
    $('#header').addClass('contant');
    $('#page6').find('.formBlock').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
    $('#page6').find('.contantBox').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');

         }else{
          $('#header').removeClass('contant');
         }
  

}







const menuLinks = document.getElementById('menu');



menuLinks.addEventListener('click', function(event) {


  event.preventDefault();
  
  if (event.target.tagName === 'A') {
    const pageNumber = event.target.dataset.page;
  

    $("#menu").removeClass("vis");
    $("#menuIcon").removeClass("momo");

    $('#menuIcon').find('i').removeClass("bi bi-x").addClass("bi bi-list");
  
    
    showPage(pageNumber, 'menu');
   
  
  }
 

});



