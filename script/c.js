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