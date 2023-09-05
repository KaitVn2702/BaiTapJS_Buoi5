// Bài Tập 1: QUẢN LÝ TUYỂN SINH
// B1: Khai Báo Biến:
// Gồm các biến nhập: 3 điểm thí sinh thi được, Điểm chuẩn, khu vực ưu tiên và đối tượng ưu tiên
function kiemTra() {
    // B1: Xác Định Input
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var mon1 = parseFloat(document.getElementById("mon1").value);
    var mon2 = parseFloat(document.getElementById("mon2").value);
    var mon3 = parseFloat(document.getElementById("mon3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = parseInt(document.getElementById("doiTuong").value);
    // B2:Hướng Xử Lý
    var diemKhuVuc;
    if (khuVuc == "A") {
        diemKhuVuc = 2;
    } else if (khuVuc == "B") {
        diemKhuVuc = 1;
    } else if (khuVuc == "C") {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }
    var diemDoiTuong;
    if (doiTuong == 1) {
        diemDoiTuong = 2.5;
    } else if (doiTuong == 2) {
        diemDoiTuong = 1.5;
    } else if (doiTuong == 3) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0
    }
    var tongDiem = mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong;
    var result = "";
    if (tongDiem >= diemChuan && mon1 != 0 && mon2 != 0 && mon3 != 0) {
        result += "Thí sinh đậu với tổng số điểm là " + tongDiem;
    } else {
        result += "Thí sinh rớt với tổng số điểm là " + tongDiem;
    }
    // B3: Xuất kết quả
    document.getElementById("result").innerHTML = result;
}
// Bài Tập 2: TÍNH TIỀN ĐIỆN
// B1: Khai Báo Biến:
// Gồm tên khách hàng, số lượng khách tiêu thụ
function tinhTien() {
    // B1: Xác Định Input
    var tenKh = document.getElementById('tenKh').value;
    var soKw = +document.getElementById('soKw').value;
    // B2: Hướng Xử Lý
    var tongTien = "";
    if (soKw <= 50) {
        tongTien = soKw * 500;
    } else if (soKw <= 100) {
        tongTien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    // B3: Xuất kết quả
    document.getElementById("result2").innerHTML = `
     <p>Họ và tên KH: ${tenKh}</p>
     <p>Tổng tiền khách cần thanh toán là: ${tongTien}đ</p>
     `;
}
// Bài Tập 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
// B1: Khai Báo Biến:
// Gồm: Tên người nhập, số lượng người phụ thuộc, tổng thu nhập năm, thu nhập chịu thuế
// B1: Xác Định Input:

function tinhThue() {
    var nameKh = document.getElementById('nameKh').value;
    var totalMoney = +document.getElementById('totalMoney').value;
    var dependents = +document.getElementById('dependents').value;
    var taxThue = totalMoney - 4 - dependents * 1.6;
    var tax;
    // B2: Hướng Xử Lý
    if (taxThue < 0) {
        tax = 0;
    } else if (taxThue > 0 && taxThue <= 60) {
        tax = taxThue * 0.05;
    } else if (taxThue <= 120) {
        tax = 60 * 0.05 + (taxThue - 60) * 0.1;
    } else if (taxThue <= 210) {
        tax = 60 * 0.05 + 60 * 0.1 + (taxThue - 120) * 0.15;
    } else if (taxThue <= 384) {
        tax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (taxThue - 210) * 0.2;
    } else if (taxThue <= 624) {
        tax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (taxThue - 384) * 0.25;
    } else if (taxThue <= 960) {
        tax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (taxThue - 624) * 0.3;
    } else {
        tax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (taxThue - 960) * 0.35;
    }
    // B3: Xuất kết quả
    document.getElementById('result3').innerHTML = 'Thuế thu nhập cá nhân phải trả: ' + new Intl.NumberFormat().format(tax) + ' triệu';
}
// Bài Tập 4: TÍNH TIỀN CÁP
// B1: Khai Báo Biến:
// gồm: Phân loại Khách hàng, Mã khách hàng, Số cổng kết nối và số kênh đăng kí


// B2: Hướng xử lý
// Tính năng chọn ẩn hiện khi chọn đối tượng khách hàng
// Xác Định Input - xử lý khi chọn đối tượng để ẩn/hiện theo đề bài
var connectionsDiv = document.getElementById('connectionsDiv');
customerType.addEventListener('change', () => {
    if (customerType.value === 'doanhNghiep') {
        connectionsDiv.style.display = 'block';
    } else {
        connectionsDiv.style.display = 'none';
    }
});
// Hướng xử lý tính hóa đơn khi khách chọn đối tượng và số lượng đăng ký
function thanhToan() {
    var customerType = document.getElementById('customerType');
    var customerID = document.getElementById('customerID').value;
    var connections = document.getElementById('connections').value;
    var result4 = document.getElementById('result4');
    var total = "";
    var premiumChannels = document.getElementById('premiumChannels').value;
    if (customerType.value === "nhaDan") {
        total = 4.5 + 20.5 + (premiumChannels * 7.5); 1
    } else
        if (connections <= 10) {
            total = 15 + 75 + (premiumChannels * 50);
        } else {
            total = 15 + 75 + ((connections - 10) * 5) + (premiumChannels * 50);
        }
    // B3: Xuất kết quả
    result4.innerHTML = `Mã khách hàng: ${customerID}<br>Tổng tiền cáp: $${total.toFixed(2)}`;
}