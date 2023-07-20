document.getElementById("contact").addEventListener("submit", function(thong_bao) {
    thong_bao.preventDefault();

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

if (name && email && phone) {
    document.getElementById("thong_bao").innerHTML += "Chúc mừng bạn " + name +  " đã đăng ký thành công và là tân sinh viên năm 2099 của FPT Aptech.<br/>";
    document.getElementById("thong_bao").innerHTML += "Chúng tôi sẽ thông tin chi tiết cho bạn tại email " + email + "." +"<br/>";
    document.getElementById("thong_bao").innerHTML += "Mọi thông tin bổ sung chúng tôi sẽ liên lạc cho bạn tại số điện thoại " + phone + "."; 
    document.getElementById("contact").reset();
}
});