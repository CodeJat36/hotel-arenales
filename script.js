popupWhatsApp = () => {

    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
    let sendReserva = document.getElementById('send-reserva');
    let sendReserva3 = document.getElementById('send-reserva2');
    let sendReserva4 = document.getElementById('send-reserva3');
    let enviarWhatsapp = document.getElementById('enviarWhatsapp');

    btnClosePopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
    })

    btnOpenPopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
        popup.style.animation = "fadeIn .6s 0.0s both";
    })

    sendBtn.addEventListener("click", () => {
        let msg = document.getElementById('whats-in').value;
        let relmsg = msg.replace(/ /g, "%20");

        window.open('https://wa.me/51902453586?text=' + relmsg, '_blank');

    });

    sendReserva.addEventListener("click", () => {
        let msg2 = "Quiero reservar una habitacion simple";
        let relmsg = msg2.replace(/ /g, "%20");

        window.open('https://wa.me/51902453586?text=' + relmsg, '_blank');

    });

    sendReserva3.addEventListener("click", () => {
        let msg3 = "Quiero reservar una habitacion matrimonial";
        let relmsg = msg3.replace(/ /g, "%20");

        window.open('https://wa.me/51902453586?text=' + relmsg, '_blank');

    });

    sendReserva4.addEventListener("click", () => {
        let msg4 = "Quiero reservar una habitacion especial";
        let relmsg = msg4.replace(/ /g, "%20");

        window.open('https://wa.me/51902453586?text=' + relmsg, '_blank');

    });

    enviarWhatsapp.addEventListener("click", () => {
        var nombre = document.getElementById("name").value;
        var correo = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;

        var texto = "Hola 🖐, mi nombre es " + nombre + ", mi correo es " + correo + " y mi telefono es " + telefono + ", deseo hacer una reserva ✍"

        var textCodificado = encodeURIComponent(texto);

        window.open('https://wa.me/51902453586?text=' + textCodificado, '_blank');
    });
}

popupWhatsApp();


    
