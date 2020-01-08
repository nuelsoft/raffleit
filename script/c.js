let ra = $('#raffle');

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

function payWithRave() {

    console.log('called');

    let phone = $('#phone');
    let v = $('#inbox').val();
    let email = $('#email').val();

    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: email,
        amount: 1000,
        customer_phone: phone.val(),
        currency: "NGN",
        redirect_url: "https://api-raffleit.herokuapp.com/api/draw",
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