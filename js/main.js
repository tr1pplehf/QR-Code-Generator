const imgBox = document.getElementById('imgBox');
const qrImg = document.getElementById('qrImg');
const qrText = document.getElementById('qrText');
const btn = document.querySelector('button');

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img');
    }  
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}


btn.addEventListener('click', generateQR);