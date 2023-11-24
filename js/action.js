

$("#header").load("./header.html");
$("footer").load("./footer.html");
$(".topMenu").load("./topMenu.html");

$('select').niceSelect();



  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function firstFunction() {
    return new Promise(resolve => {
      $('#page1').addClass('animate__animated animate__fadeIn').css('opacity', '1');
      $('.loading').css('display', 'none');
      // Simulating some async task completion with delay
      delay(500).then(() => {
               resolve(); // Resolve the promise to indicate function completion
      });
    });
  }
  
  function secondFunction() {
       $('.hiddenBlock').addClass('vis');
  }
  
  // 初始化
  delay(3000)
    .then(() => {
      return firstFunction(); // Run the first function after the delay
    })
    .then(() => {
      secondFunction(); // Run the second function after the first function completes
    });




AOS.init();




let currentPage = 1;

function showPage(pageNumber , place) {

    currentPage = pageNumber;
    const container = document.getElementById('wrap');
    container.style.transform = `translateX(-${(pageNumber - 1) * 100}vw)`;

    //點展開選單後
    if(  place === 'menu' ){
      $('#menuIcon').removeClass();
      $("#menu").removeClass();
      $('#menuIcon').find('i').removeClass("bi bi-x").addClass("bi bi-list");


    }

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

    //聯絡我們
    if( pageNumber === 6  ){
     $('#header').addClass('contant');
    }else{
     $('#header').removeClass('contant');
    }

    //focus線條
    const ulary = document.querySelectorAll('#nav ul li');

    ulary.forEach(item => {
      item.addEventListener('click', function() {
        // 先移除所有 li 的特定 class
        ulary.forEach(li => {
          li.classList.remove('selected');
        });
    
        // 將當前點擊的 li 加上特定的 class
        this.classList.add('selected');
      });
    });


    if( pageNumber === 2 ){
            $('#page2').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
    }

    if(   pageNumber === 3 ){
      $('#page3').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
      $('#page3').find('.hiddenBlock').removeClass('vis');  
      setTimeout(function(){
        secondFunction();

      },1000)

   

    }

    if(   pageNumber === 4 ){
      $('#page4').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
    }

    if(   pageNumber === 5 ){
      $('#page5').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
      $('#page5').find('.infoBox').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');      
    }

    if(   pageNumber === 6 ){
      $('#page6').find('.formBlock').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
      $('#page6').find('.contantBox').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');



      
       
    }
    
  

  

}



//內頁
function insideView(name){
  const href = `${name}`;
  window.location.hash = href;
  console.log(window.location.hash);
  checkHash(); 
}

function checkHash() {
  if (window.location.hash === "#about") {
    $('body').addClass('about');
    $('#page2').find('.sectionBlock').addClass('animate__animated animate__fadeOut').css('display', 'none');
    $('.aboutView').addClass('animate__animated animate__fadeIn').css('display', 'block');
    $('.tips').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
  } 

  //事蹟
  if (window.location.hash === "#case") {
    $('body').addClass('about');
    $('#page3').find('.sectionBlock').addClass('animate__animated animate__fadeOut').css('display', 'none');
    $('.caseBox').addClass('animate__animated animate__fadeIn').css('display', 'block');


    $('.tips').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');

  } 
}




$('.caseList .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    margin:0,
    items: 1,
    mouseDrag: true,
    autoplayTimeout: 5000,
    smartSpeed: 350,
  });




  // const nice = false;

  // nice = $(".sectionBlock").niceScroll();
    

