//完成

const data = [
  {
    id: 0,
    images: "./images/cause/list_1.jpg",
    buildName: "豐興鋼鐵條線行政大樓",
    smbuildName: "企業廠辦",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
    imgAry: [
      {
        img: "./images/cause/s1.jpg",
      },
      {
        img: "./images/cause/s2.jpg",
      },
      {
        img: "./images/cause/s3.jpg",
      },
      {
        img: "./images/cause/s4.jpg",
      },
      {
        img: "./images/cause/s5.jpg",
      },
    ],
  },
  {
    id: 1,
    images: "./images/cause/list_2.jpg",
    buildName: "三菱重工台中分公司 ",
    smbuildName: "企業廠辦",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 2,
    images: "./images/cause/list_3.jpg",
    buildName: "崇佑護理之家 ",
    smbuildName: "企業廠辦",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 3,
    images: "./images/cause/list_4.jpg",
    buildName: "高雄崇恩集團護理之家",
    smbuildName: "長照機構",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 4,
    images: "./images/cause/list_5.jpg",
    buildName: "印月東方宴餐廳",
    smbuildName: "商業空間",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 5,
    images: "./images/cause/list_6.jpg",
    buildName: "法月法式餐廳",
    smbuildName: "商業空間",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 6,
    images: "./images/cause/list_7.jpg",
    buildName: "Sobdeal",
    smbuildName: "商業空間",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 7,
    images: "./images/cause/list_8.jpg",
    buildName: "大里杙",
    smbuildName: "住宅規劃",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
];
console.log(data);
//在建
const dataing = [
  {
    id: 0,
    images: "./images/cause/ing_list_1.jpg",
    buildName: "蒔穗",
    smbuildName: "住宅規劃",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 1,
    images: "./images/cause/ing_list_2.jpg",
    buildName: "綠川",
    smbuildName: "住宅規劃",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 2,
    images: "./images/cause/ing_list_3.jpg",
    buildName: "禾豐貳",
    smbuildName: "住宅規劃",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
  },
  {
    id: 3,
    images: "./images/cause/ing_list_4.jpg",
    buildName: "完竣工程",
    smbuildName: "住宅規劃",
    address: "台中市后里區",
    builder: "張巽堯建築師事務所",
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
      <div class="col-lg-8 col-md-9 col-12">
        <div class="buildName">${item.buildName}</div>
        <div class="smbuildName">${item.smbuildName}</div>
      </div>
      <div class="col-lg-4 col-md-3 col-12">
      <a href="javascript:;" onclick="goto( this,'${item.buildName}')"> <img src='${item.images}' class="img-fluid" /></a>
      </div>
      </div>
      </div>
      <div class="showBox">
      <div class="d-flex">
      <div class="col-md-6">
      <div class="buildName">${item.buildName}</div>
      <div class="smbuildName">${item.smbuildName}</div>
      <div class="addressInfo">
        <ul>
          <li>地點<span>｜</span>${item.address}}</li>
          <li>竣工日期<span>｜</span>2022.12</li>
          <li>建築師<span>｜</span>${item.builder}</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="caseList">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <a href="./images/cause/s1.jpg" data-toggle="lightbox"><img src="./images/cause/s1.jpg" ></a>
          </div>
          <div class="item">
            <a href="./images/cause/s2.jpg" data-toggle="lightbox"><img src="./images/cause/s2.jpg" ></a>
          </div>
          <div class="item">
    
            <a href="./images/cause/s3.jpg" data-toggle="lightbox"><img src="./images/cause/s3.jpg" ></a>
          </div>
          <div class="item">
          <a href="./images/cause/s4.jpg" data-toggle="lightbox"><img src="./images/cause/s4.jpg" ></a>
          </div>
          <div class="item">
            <a href="./images/cause/s5.jpg" data-toggle="lightbox"><img src="./images/cause/s5.jpg" ></a>
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
      <div class="col-lg-8 col-md-9 col-12">
        <div class="buildName">${item.buildName}</div>
        <div class="smbuildName">${item.smbuildName}</div>
      </div>
      <div class="col-lg-4 col-md-3 col-12">
      <a href="javascript:;" onclick="goto( this,'${item.buildName}')"> <img src='${item.images}' class="img-fluid" /></a>
      </div>
      </div>
      </div>
      <div class="showBox">
      <div class="d-flex">
      <div class="col-md-6">
      <div class="buildName">${item.buildName}</div>
      <div class="smbuildName">${item.smbuildName}</div>
      <div class="addressInfo">
        <ul>
          <li>地點<span>｜</span>${item.address}</li>
          <li>竣工日期<span>｜</span>2022.12</li>
          <li>建築師<span>｜</span>${item.builder}</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="caseList">
      <div class="owl-carousel owl-theme">
      <div class="item">
        <a href="./images/cause/s1.jpg" data-toggle="lightbox"><img src="./images/cause/s1.jpg" ></a>
      </div>
      <div class="item">
        <a href="./images/cause/s2.jpg" data-toggle="lightbox"><img src="./images/cause/s2.jpg" ></a>
      </div>
      <div class="item">

        <a href="./images/cause/s3.jpg" data-toggle="lightbox"><img src="./images/cause/s3.jpg" ></a>
      </div>
      <div class="item">
      <a href="./images/cause/s4.jpg" data-toggle="lightbox"><img src="./images/cause/s4.jpg" ></a>
      </div>
      <div class="item">
        <a href="./images/cause/s5.jpg" data-toggle="lightbox"><img src="./images/cause/s5.jpg" ></a>
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
