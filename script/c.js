let ra = $('#raffle');

$('.carousel').carousel({
    interval: 3000
});

// $('.carousel').carousel();


$('#random').on('click', () => {
    let c = setInterval(function () {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let z = Math.floor(Math.random() * 10);

        $('#inbox').val('' + x + y + z);
    }, 100);
    setTimeout(function () {
        clearInterval(c)
    }, 600);


});

ra.on('click', async () => {
    let inb = $('#inbox').val();
    if (parseInt(inb) >= 0 && parseInt(inb) <= 999) {

        $('#pay-modal').modal('show');
        $('#raffle-val').text($('#inbox').val());

    } else {
        if (inb === '') $('#invalid-text').text('No number provided. Click random to generate random number');
        else $('#invalid-text').text('Raffle number must lie between 0 and 999');
        $('#invalid').modal('show');
    }
});


$('#draw-again').on('click', () => {
    let c = setInterval(function () {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let z = Math.floor(Math.random() * 10);

        $('#inbox').val('' + x + y + z);
    }, 100);
    setTimeout(function () {
        clearInterval(c)
    }, 600);
});

const API_publicKey = "FLWPUBK_TEST-4be08a2d552a7dcd0056882cacc767d3-X";

function pay() {
    let phone = $('#phone');
    let v = $('#inbox').val();
    let email = $('#email').val();

    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: email,
        amount: 500,
        customer_phone: phone.val(),
        currency: "NGN",
        redirect_url: "https://api-badcommentsmoviepromo.herokuapp.com/api/draw",
        txref: $('#name').val() + ':' + phone.val() + ':' + email + ':' + v + ':' + Date.now(),
        hosted_payment: 1,
        meta: [{
            metaname: "raffle-value",
            metavalue: v
        }],

        // callback: function (response) {
        //     var txref = response.tx.txRef; // collect txRef returned and pass to a erver page to complete status check.
        //     console.log("This is the response returned after a charge", response);
        //     if (
        //         response.tx.chargeResponseCode == "00" ||
        //         response.tx.chargeResponseCode == "0"
        //     ) {
        //         console.log('succeeded')
        //     } else {
        //         console.log('failed')
        //     }
        //
        //
        //     x.close(); // use this to close the modal immediately after payment.
        // }
    });
}


function payWithRave() {

    if (validateName($('#name').val()) && validatePhone($('#phone').val()) && validateEmail($('#email').val())) pay()
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let t = re.test(String(email).toLowerCase());
    let e = $('#email-val');
    if (t) e.addClass('d-none');
    else e.removeClass('d-none');

    return t;
}

function validatePhone(phone) {
    var re = /^\d{11}/;

    let t = re.test(String(phone));
    let p = $('#phone-val');
    if (t) p.addClass('d-none');
    else p.removeClass('d-none');
    return t;
}

function validateName(name) {
    let t = 1 <= name.length;

    let n = $('#name-val');
    if (t) n.addClass('d-none');
    else n.removeClass('d-none');

    return t;
}