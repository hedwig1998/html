var bietThu = {
    "VILLA FLC SẦM SƠN LONG CẢNH ĐÔNG": {
        address: "FLC Sầm Sơn Beach & Gold Resort",
        detail: "Villa FLC Sầm Sơn: 16 phòng ngủ, 16 Phòng tắm, 18 giường, 48 người, 478 m",
        price: "16,000,000đ/đêm",
        image: "images/Sam son long canh dong.jpg"
    },
    "VILLA FLC SẦM SƠN NGỌC TRAI 91-92": {
        address: "[LA'Vien Stay] Biệt thự Ngọc Trai 91-92 - FLC Sầm Sơn Beach & Golf Resort",
        detail: "Biệt thự song lập: 15 Phòng tắm, 45 người, 24 người, 290 m",
        price: "15,000,000đ/đêm",
        image: "images/Sam son ngoc trai.jpg"
    },
    "VIILA FLC SẦM SƠN SAO BIỂN 15": {
        address: "[LA'Vien Stay] Biệt thự Sao Biển 15 - FLC Sầm Sơn Beach & Golf Resort",
        detail: "Biệt thự đơn lập: 9 Phòng tắm, 8 giường, 239 m",
        price: "8,000,000đ/đêm",
        image: "images/Sam son sao bien.jpg"
    },
    "MARITIME VILLA SẦM SƠN": {
        address: "[LA'Vien Stay] Biệt thự Ngọc Trai 40-41 - FLC Sầm Sơn Beach & Golf Resort",
        detail: "Biệt thự song lập: 20 Phòng tắm, 22 giường, 54 người, 580 m, ",
        price: "16,000,000đ/đêm",
        image: "images/Sam son Maritime.png"
    }
}

var bietThu2 = {
    "JESSY'S GREEN HOUSE ĐÀ LẠT": {
        address: "Hồ Xuân Hương, Đà Lạt",
        detail: "9 phòng ngủ, 7 Phòng tắm, 18 giường, 30 người, 241 m",
        price: "12,500,000đ/đêm",
        image: "images/Jessy's green Da Lat.webp"
    },
    "THE GREEN HOUSE VILLA": {
        address: "146 Đan Kia, Đà Lạt, Việt Nam",
        detail: "Biệt thự 3 phòng ngủ: 4 giường đôi lớn, 2 giường đơn, 10 người, 150 m",
        price: "7,000,000đ/đêm",
        image: "images/Jessy's green Da Lat.webp"
    },
    "ĐÀ LẠT VILLA 84 HỒ XUÂN HƯƠNG": {
        address: "84 Hồ Xuân Hương, Đà Lạt, Việt Nam",
        detail: "Villa: 2 phòng khách, 7 giường lớn, 15 người, 170 m",
        price: "9,000,000đ/đêm",
        image: "images/84 HSH Da Lat.webp"
    },
    "NHỚ HOUSSE III": {
        address: "10 Đường Mạc Đĩnh Chi, Đà Lạt, Việt Nam",
        detail: "Biệt thự đơn lập: 14 phòng, 28 giường, 50 người, 460 m, ",
        price: "17,000,000đ/đêm",
        image: "images/Nho house III.webp"
    }
}

var bietThu3 = {
    "CASA BLANCA VILLAS": {
        address: "R12 đường Phố Rừng Anh Nguyễn villas, Nha Trang, Việt Nam",
        detail: "5 phòng ngủ, 7 giường, 10 người, 140 m",
        price: "11,000,000đ/đêm",
        image: "images/Casa Blanca Nha Trang.webp"
    },
    "VENITY VILLA NHA TRANG": {
        address: "Anh Nguyen Villa Compound, Phố Biển Street, Vinh Nguyen Ward, Nha Trang, Vietnam",
        detail: "Có hồ bơi trong nhà, 5 giường lớn, 12 người, 180 m",
        price: "9,000,000đ/đêm",
        image: "images/Venity Villa Nha Trang.webp"
    },
    "OCREAN FRONT VILLAS NHA TRANG": {
        address: "Lot B8, khu biệt thự biển và dịch vụ du lịch Anh Nguyen , Nha Trang, Việt Nam",
        detail: "3 phòng khách, 12 phòng ngủ có thể chứa đến 20 người, 210 m",
        price: "10,000,000đ/đêm",
        image: "images/Ocean Front Villa Nha Trang.webp"
    },
    "AN VIEN OCEAN VILLA NHA TRANG": {
        address: "LKUA14 đường 2F khu đô thị biển An Viên, Phường Vĩnh Trường, Nha Trang, Việt Nam",
        detail: "Biệt thự đơn lập: 7 phòng ngủ, 10 giường, 21 người, 600 m",
        price: "14,000,000đ/đêm",
        image: "images/An vien ocean Nha Trang.webp"
    }
}

function createTable1() {
    var listBietthu = document.getElementById("list1");
    var table = document.createElement("table");

    var tableRow = document.createElement("tr");
    for (var villa in bietThu) {
        var image = bietThu[villa].image;

        var tableHeader = document.createElement("th");
        var villaImage = document.createElement("img");
        villaImage.src = image;
        villaImage.alt = villa;

        tableHeader.appendChild(villaImage);
        tableRow.appendChild(tableHeader);
    }
    table.appendChild(tableRow);
    listBietthu.appendChild(table);

    var tableRow2 = document.createElement("tr");
    for (var villa in bietThu) {
        var tableInfo = document.createElement("td");
        var villaName = document.createElement("h2");
        villaName.textContent = villa;
        tableInfo.appendChild(villaName);
        tableRow2.appendChild(tableInfo);
    }
    table.appendChild(tableRow2);
    listBietthu.appendChild(table);

    var tableRow3 = document.createElement("tr");
    for (var villa in bietThu) {
        var address = bietThu[villa].address;
        var tableInfo = document.createElement("td");
        var villaAddress = document.createElement("p");
        villaAddress.textContent = address;
        tableInfo.appendChild(villaAddress);
        tableRow3.appendChild(tableInfo);
    }
    table.appendChild(tableRow3);
    listBietthu.appendChild(table);

    var tableRow4 = document.createElement("tr");
    for (var villa in bietThu) {
        var detail = bietThu[villa].detail;
        var tableInfo = document.createElement("td");
        var villaDetail = document.createElement("p");
        var sup = document.createElement("sup");
        villaDetail.textContent = detail;
        sup.textContent = "2";
        villaDetail.appendChild(sup);
        tableInfo.appendChild(villaDetail);
        tableRow4.appendChild(tableInfo);
    }
    table.appendChild(tableRow4);
    listBietthu.appendChild(table);

    var tableRow5 = document.createElement("tr");
    for (var villa in bietThu) {
        var price = bietThu[villa].price;
        var tableInfo = document.createElement("td");
        var villaPrice = document.createElement("p");
        villaPrice.textContent = price;
        tableInfo.appendChild(villaPrice);
        tableRow5.appendChild(tableInfo);
    }
    table.appendChild(tableRow5);
    listBietthu.appendChild(table);
}

function createTable2() {
    var listBietthu2 = document.getElementById("list2");
    var table = document.createElement("table");

    var tableRow = document.createElement("tr");
    for (var villa in bietThu2) {
        var image = bietThu2[villa].image;

        var tableHeader = document.createElement("th");
        var villaImage = document.createElement("img");
        villaImage.src = image;
        villaImage.alt = villa;

        tableHeader.appendChild(villaImage);
        tableRow.appendChild(tableHeader);
    }
    table.appendChild(tableRow);
    listBietthu2.appendChild(table);

    var tableRow2 = document.createElement("tr");
    for (var villa in bietThu2) {
        var tableInfo = document.createElement("td");
        var villaName = document.createElement("h2");
        villaName.textContent = villa;
        tableInfo.appendChild(villaName);
        tableRow2.appendChild(tableInfo);
    }
    table.appendChild(tableRow2);
    listBietthu2.appendChild(table);

    var tableRow3 = document.createElement("tr");
    for (var villa in bietThu2) {
        var address = bietThu2[villa].address;
        var tableInfo = document.createElement("td");
        var villaAddress = document.createElement("p");
        villaAddress.textContent = address;
        tableInfo.appendChild(villaAddress);
        tableRow3.appendChild(tableInfo);
    }
    table.appendChild(tableRow3);
    listBietthu2.appendChild(table);

    var tableRow4 = document.createElement("tr");
    for (var villa in bietThu2) {
        var detail = bietThu2[villa].detail;
        var tableInfo = document.createElement("td");
        var villaDetail = document.createElement("p");
        var sup = document.createElement("sup");
        villaDetail.textContent = detail;
        sup.textContent = "2";
        villaDetail.appendChild(sup);
        tableInfo.appendChild(villaDetail);
        tableRow4.appendChild(tableInfo);
    }
    table.appendChild(tableRow4);
    listBietthu2.appendChild(table);

    var tableRow5 = document.createElement("tr");
    for (var villa in bietThu2) {
        var price = bietThu2[villa].price;
        var tableInfo = document.createElement("td");
        var villaPrice = document.createElement("p");
        villaPrice.textContent = price;
        tableInfo.appendChild(villaPrice);
        tableRow5.appendChild(tableInfo);
    }
    table.appendChild(tableRow5);
    listBietthu2.appendChild(table);
}

function createTable3() {
    var listBietthu2 = document.getElementById("list3");
    var table = document.createElement("table");

    var tableRow = document.createElement("tr");
    for (var villa in bietThu3) {
        var image = bietThu3[villa].image;

        var tableHeader = document.createElement("th");
        var villaImage = document.createElement("img");
        villaImage.src = image;
        villaImage.alt = villa;

        tableHeader.appendChild(villaImage);
        tableRow.appendChild(tableHeader);
    }
    table.appendChild(tableRow);
    listBietthu2.appendChild(table);

    var tableRow2 = document.createElement("tr");
    for (var villa in bietThu3) {
        var tableInfo = document.createElement("td");
        var villaName = document.createElement("h2");
        villaName.textContent = villa;
        tableInfo.appendChild(villaName);
        tableRow2.appendChild(tableInfo);
    }
    table.appendChild(tableRow2);
    listBietthu2.appendChild(table);

    var tableRow3 = document.createElement("tr");
    for (var villa in bietThu3) {
        var address = bietThu3[villa].address;
        var tableInfo = document.createElement("td");
        var villaAddress = document.createElement("p");
        villaAddress.textContent = address;
        tableInfo.appendChild(villaAddress);
        tableRow3.appendChild(tableInfo);
    }
    table.appendChild(tableRow3);
    listBietthu2.appendChild(table);

    var tableRow4 = document.createElement("tr");
    for (var villa in bietThu3) {
        var detail = bietThu3[villa].detail;
        var tableInfo = document.createElement("td");
        var villaDetail = document.createElement("p");
        var sup = document.createElement("sup");
        villaDetail.textContent = detail;
        sup.textContent = "2";
        villaDetail.appendChild(sup);
        tableInfo.appendChild(villaDetail);
        tableRow4.appendChild(tableInfo);
    }
    table.appendChild(tableRow4);
    listBietthu2.appendChild(table);

    var tableRow5 = document.createElement("tr");
    for (var villa in bietThu3) {
        var price = bietThu3[villa].price;
        var tableInfo = document.createElement("td");
        var villaPrice = document.createElement("p");
        villaPrice.textContent = price;
        tableInfo.appendChild(villaPrice);
        tableRow5.appendChild(tableInfo);
    }
    table.appendChild(tableRow5);
    listBietthu2.appendChild(table);
}
window.onload = createTable1();
window.onload = createTable2();
window.onload = createTable3();
