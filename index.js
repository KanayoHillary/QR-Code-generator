var button = document.querySelector('.button');
var content = document.querySelector('.container');
var message = document.querySelector('#message');
var size = document.querySelector('#size');
function change() {
    //Check for empty inputs
    if (message.value == '') {
        alert("Enter a text");
    }
    else {
        // display QR code
        content.style.display = "flex";
        content.style.alignItems = "center";
        content.style.justifyContent = "center";
        content.innerHTML = "<img src= \"https://chart.googleapis.com/chart?cht=qr&chs=".concat(size.value, "x").concat(size.value, "&chl=").concat(message.value, "\"> ");
    }
}
