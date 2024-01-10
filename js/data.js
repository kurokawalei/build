//完成
const data = [
  {
    id: 0,
    images: "./images/cause/list_1.jpg",
    buildName: "豐興鋼鐵條線行政大樓",
    smbuildName: "企業廠辦",
    url: "",
  },
  {
    id: 1,
    images: "./images/cause/list_2.jpg",
    buildName: "三菱重工台中分公司 ",
    smbuildName: "企業廠辦",

    url: "",
  },
  {
    id: 2,
    images: "./images/cause/list_3.jpg",
    buildName: "崇佑護理之家 ",
    smbuildName: "企業廠辦",
    url: "",
  },
  {
    id: 3,
    images: "./images/cause/list_4.jpg",
    buildName: "高雄崇恩集團護理之家",
    smbuildName: "長照機構",
    url: "",
  },
  {
    id: 4,
    images: "./images/cause/list_5.jpg",
    buildName: "印月東方宴餐廳",
    smbuildName: "商業空間",
    url: "",
  },
  {
    id: 5,
    images: "./images/cause/list_6.jpg",
    buildName: "法月法式餐廳",
    smbuildName: "商業空間",
    url: "",
  },
  {
    id: 6,
    images: "./images/cause/list_7.jpg",
    buildName: "Sobdeal",
    smbuildName: "商業空間",
    url: "",
  },
  {
    id: 7,
    images: "./images/cause/list_8.jpg",
    buildName: "大里杙",
    smbuildName: "住宅規劃",
    url: "",
  },
];

//在建
const dataing = [
  {
    id: 0,
    images: "./images/cause/ing_list_1.jpg",
    buildName: "綠川",
    smbuildName: "企業廠辦",
  },
  {
    id: 1,
    images: "./images/cause/ing_list_2.jpg",
    buildName: "世本企業廠辦",
    smbuildName: "企業廠辦",
  },
];

let nowcurrentPage = 0; // 目前頁碼
const perPage = 3; // 每頁顯示筆數

function displayData(page) {
  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;
  const pageData = data.slice(startIndex, endIndex);

  const pageDataing = dataing.slice(startIndex, endIndex);

  const dataContainer = document.getElementById("data-container");
  const dataingContainer = document.getElementById("data-ing-container");
  //完成
  if (dataContainer) {
    dataContainer.innerHTML = ""; // 清空容器

    let str = "";

    pageData.forEach((item) => {
      str += `<li>
      <div class="box">
      <div class="d-flex">
      <div class="col-md-9">
        <div class="buildName">${item.buildName}</div>
        <div class="smbuildName">${item.smbuildName}</div>
      </div>
      <div class="col-md-3">
      <a href="javascript:;" onclick="goto( this,'${item.buildName}')"> <img src='${item.images}' class="img-fluid" /></a>
      </div>
      </div>
      </div>
      <div class="showBox">
      <div class="d-flex">
      <div class="col-md-6">
      <div class="buildName">豐興鋼鐵條線行政大樓</div>
      <div class="smbuildName">企業廠辦</div>
      <div class="addressInfo">
        <ul>
          <li>地點<span>｜</span>台中市后里區</li>
          <li>竣工日期<span>｜</span>2022.12</li>
          <li>建築師<span>｜</span>張巽堯建築師事務所</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="caseList">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <img src="./images/cause/s1.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s2.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s3.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s4.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s5.jpg" class="img-fluid" width="978" height="733" />
          </div>
        </div>
    </div></div>
     
      </div>          
                    
    </li>`;

      dataContainer.innerHTML = str;
    });
  }

  //在建
  if (dataingContainer) {
    dataingContainer.innerHTML = ""; // 清空容器

    let str = "";

    pageDataing.forEach((item) => {
      str += `<li>
      <div class="box">
      <div class="d-flex">
      <div class="col-md-9">
        <div class="buildName">${item.buildName}</div>
        <div class="smbuildName">${item.smbuildName}</div>
      </div>
      <div class="col-md-3">
      <a href="javascript:;" onclick="goto( this,'${item.buildName}')"> <img src='${item.images}' class="img-fluid" /></a>
      </div>
      </div>
      </div>
      <div class="showBox">
      <div class="d-flex">
      <div class="col-md-6">
      <div class="buildName">豐興鋼鐵條線行政大樓</div>
      <div class="smbuildName">企業廠辦</div>
      <div class="addressInfo">
        <ul>
          <li>地點<span>｜</span>台中市后里區</li>
          <li>竣工日期<span>｜</span>2022.12</li>
          <li>建築師<span>｜</span>張巽堯建築師事務所</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="caseList">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <img src="./images/cause/s1.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s2.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s3.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s4.jpg" class="img-fluid" width="978" height="733" />
          </div>
          <div class="item">
            <img src="./images/cause/s5.jpg" class="img-fluid" width="978" height="733" />
          </div>
        </div>
    </div></div>
     
      </div>          
                    
    </li>`;

      dataingContainer.innerHTML = str;
    });
  }
}

function prevPage() {
  if (nowcurrentPage > 0) {
    nowcurrentPage--;
    displayData(nowcurrentPage);
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
}

function nextPage() {
  const maxPage = Math.ceil(data.length / perPage);
  if (nowcurrentPage < maxPage - 1) {
    nowcurrentPage++;
    displayData(nowcurrentPage);
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
}

displayData(nowcurrentPage);

function goto(element) {
  const parentBox = element.closest(".box");
  const infoBox = parentBox.nextElementSibling;

  parentBox.classList.add("animate__animated", "animate__fadeOut");

  parentBox.style.display = "none";

  infoBox.classList.add("animate__animated", "animate__fadeIn");
  infoBox.style.display = "block";
}
