let x, y, z = 0;
let t = setInterval(function () {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    z = Math.floor(Math.random() * 10);

    $('#nid-1').text(x.toString());
    $('#nid-2').text(y.toString());
    $('#nid-3').text(z.toString());
}, 100);

let ra = $('#raffle');


ra.on('click', async () => {
    clearInterval(t);
    // ra.modal('show');
    $('#raffle-val').text('' + x + y + z);

});

$('#raffle-close').on('click', () => {
    t = setInterval(function () {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        z = Math.floor(Math.random() * 10);

        $('#nid-1').text(x.toString());
        $('#nid-2').text(y.toString());
        $('#nid-3').text(z.toString());
    }, 100);
});
$('#draw-again').on('click', () => {
    t = setInterval(function () {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        z = Math.floor(Math.random() * 10);

        $('#nid-1').text(x.toString());
        $('#nid-2').text(y.toString());
        $('#nid-3').text(z.toString());
    }, 100);
});