let button = document.querySelector('.button') as HTMLButtonElement;
let content: any = document.querySelector('.container') as HTMLBodyElement;
let message: any = document.querySelector('#message') as HTMLInputElement;
let size: any = document.querySelector('#size') as HTMLSelectElement;

function change(): void {
    //Check for empty inputs
    if (message.value == '') {
        alert("Enter a text");
    } else {
        // display QR code
        content.style.display = "flex";
        content.style.alignItems = "center";
        content.style.justifyContent = "center";
        content.innerHTML = `<img src= "https://chart.googleapis.com/chart?cht=qr&chs=${size.value}x${size.value}&chl=${message.value}"> `;
    }
}
