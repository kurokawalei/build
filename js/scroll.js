//滑鼠滾動相關
function handleWheel(event) {
  //不能滾動
  if (window.location.hash === "#about" || window.location.hash === "#case") {
    return;
  }

  if (!scrolling) {
    scrolling = true;

    if (event.deltaY > 30 && currentPage < 5) {
      currentPage++;
      showPage(currentPage);
      updateMenuClass(currentPage);
    } else if (event.deltaY < -30 && currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      updateMenuClass(currentPage);
    }

    setTimeout(() => {
      scrolling = false;
    }, 1000); // 限制滾動每次間隔至少為 1000 毫秒
  }
}

document.body.addEventListener("wheel", handleWheel);
