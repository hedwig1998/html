document.getElementById("contact").addEventListener("submit", function(thong_bao) {
    thong_bao.preventDefault();

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
if (name && email && message) {
    document.getElementById("thong_bao").innerHTML = "Cảm ơn bạn đã để lại liên hệ, tôi sẽ phản hồi trong thời gian sớm nhất.";
    document.getElementById("contact").reset();
}
});
