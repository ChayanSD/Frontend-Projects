
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");

function Generator(){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
}