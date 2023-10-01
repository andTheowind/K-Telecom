const sendBtn = document.getElementById('send-btn');
const clientName = document.querySelector('.name');
const clientPhone = document.querySelector('.phone');

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if ((clientName.value !== '') && (clientPhone.value !== '')) {
        swal({
            title: "Спасибо за заявку!",
            text: "Наш менеджер свяжется с вами в ближайшее время",
            icon: "success",
            button: "OK",
        });
    }
});


