const button = document.querySelector('.button');
const content= document.querySelector('.container');
const message = document.querySelector('#message');
const size = document.querySelector('#size');


function change(){
    //Check for empty inputs
    if(message.value ==''){
        alert("Enter a text");
    }else{
        // display QR code
        content.style.display = "flex";
        content.style.alignItems = "center";
        content.style.justifyContent = "center";
        content.innerHTML = `<img src= "https://chart.googleapis.com/chart?cht=qr&chs=${size.value}x${size.value}&chl=${message.value}"> `;
    }
}


button.addEventListener('click', change)