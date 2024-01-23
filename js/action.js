$("#header").load("./header.html");
$("footer").load("./footer.html");
$(".topMenu").load("./topMenu.html");

$("select").niceSelect();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function firstFunction() {
  return new Promise((resolve) => {
    $("#page1").addClass("animate__animated animate__fadeIn").css("opacity", "1");
    $(".loading").css("display", "none");
    // Simulating some async task completion with delay
    delay(500).then(() => {
      resolve(); // Resolve the promise to indicate function completion
    });
  });
}

function secondFunction() {
  $(".hiddenBlock").addClass("vis");
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
let scrolling = false;

//focus線條
function updateMenuClass(pageNumber) {
  const ulary = document.querySelectorAll("#nav ul .li");
  if (ulary) {
    ulary.forEach((li) => {
      li.classList.remove("selected");
    });
    ulary[pageNumber - 2].classList.add("selected");
  }
}

if (window.location.hash === "#2") {
  const container = document.getElementById("wrap");
  setTimeout(function () {
    container.style.transform = `translateX(-${100}vw)`;
  }, 3500);
}

if (window.location.hash === "#3") {
  const container = document.getElementById("wrap");
  setTimeout(function () {
    container.style.transform = `translateX(-${200}vw)`;
  }, 3500);
}

if (window.location.hash === "#4") {
  const container = document.getElementById("wrap");
  setTimeout(function () {
    container.style.transform = `translateX(-${300}vw)`;
  }, 3500);
}

if (window.location.hash === "#5") {
  const container = document.getElementById("wrap");
  setTimeout(function () {
    container.style.transform = `translateX(-${400}vw)`;
    $("#page5").find(".formBlock").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
    $("#page5").find(".contantBox").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
  }, 3500);
}

function showPage(pageNumber) {
  currentPage = pageNumber;

  console.log(currentPage);

  const container = document.getElementById("wrap");

  if (container) {
    container.style.transform = `translateX(-${(pageNumber - 1) * 100}vw)`;
  } else {
    if (pageNumber === 4) {
      window.location.href = "./index.html#4";
    }
    if (pageNumber === 5) {
      window.location.href = "./index.html#5";
    }
    if (pageNumber === 3) {
      window.location.href = "./index.html#3";
    }
    if (pageNumber === 2) {
      window.location.href = "./index.html#2";
    }
  }

  // if (window.location.hash === "#about") {
  //   console.log("在about要去別的耊面");

  //   window.location.hash = "";

  //   $("body").removeClass("about");
  //   //$('#page2').find('.sectionBlock').addClass('animate__animated animate__fadeOut').css('display', 'none');
  //   $(".aboutView").removeClass("animate__animated animate__fadeIn").css("display", "none");
  //   //  $('.tips').removeClass('animate__animated animate__fadeInLeft ').css('display', 'none')
  // }

  // 內頁

  // if (window.location.hash === "#case") {
  //   console.log("在case要去別的耊面");

  //   window.location.hash = "";
  //   $("body").removeClass("about");
  //   $(".caseBox").removeClass("animate__animated animate__fadeIn").css("display", "none");
  //   $(".tips").removeClass("animate__animated animate__fadeInLeft").css("display", "none");
  // }

  //點展開選單後
  // if(  place === 'menu' ){
  //   $('#menuIcon').removeClass();
  //   $("#menu").removeClass();
  //   $('#menuIcon').find('i').removeClass("bi bi-x").addClass("bi bi-list");
  // }

  if (pageNumber === 2) {
    $("#page2").find(".masterTitle").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
  }

  if (pageNumber === 3) {
    $("#page3").find(".masterTitle").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
    $("#page3").find(".hiddenBlock").removeClass("vis");
    setTimeout(function () {
      secondFunction();
    }, 1000);
  }

  // if(   pageNumber === 4 ){
  //   $('#page4').find('.masterTitle').addClass('animate__animated animate__fadeInLeft ').css('display', 'block');
  // }

  if (pageNumber === 4) {
    $("#page4").find(".masterTitle").addClass("animate__animated animate__fadeInLeft ").css("display", "block");

    $("#page4").find(".hiddenBlock").removeClass("vis");
    setTimeout(function () {
      secondFunction();
    }, 1000);
  }

  if (pageNumber === 5) {
    $("#header").addClass("contant");
    $("#page5").find(".formBlock").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
    $("#page5").find(".contantBox").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
  } else {
    $("#header").removeClass("contant");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.getElementById("menuLinks");

  if (menuLinks) {
    menuLinks.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.tagName === "A") {
        const pageNumber = event.target.dataset.page;
        showPage(pageNumber, "menu");
        updateMenuClass(pageNumber);
      }
    });
  }

  //focus線條
  const ulary = document.querySelectorAll("#nav ul .li");

  ulary.forEach((item) => {
    item.addEventListener("click", function () {
      // 先移除所有 li 的特定 class
      ulary.forEach((li) => {
        li.classList.remove("selected");
      });

      // 將當前點擊的 li 加上特定的 class
      this.classList.add("selected");
    });
  });
});

//內頁
function insideView(name) {
  const href = `${name}`;
  window.location.hash = href;
  console.log(window.location.hash);
  checkHash();
}

function checkHash() {
  if (window.location.hash === "#about") {
    $("body").addClass("about");
    $(".aboutView").addClass("animate__animated animate__fadeIn").css("display", "block");
    $(".tips").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
  }

  //事蹟
  if (window.location.hash === "#case") {
    $("body").addClass("about");
    $(".caseBox").addClass("animate__animated animate__fadeIn").css("display", "block");
    $(".tips").addClass("animate__animated animate__fadeInLeft ").css("display", "block");
  }
}

$(".caseList .owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  margin: 0,
  items: 1,
  mouseDrag: true,
  autoplayTimeout: 5000,
  smartSpeed: 350,
});
