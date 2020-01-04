let t = setInterval(function () {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let z = Math.floor(Math.random() * 10);

    $('#nid-1').text(x.toString());
    $('#nid-2').text(y.toString());
    $('#nid-3').text(z.toString());
}, 100);

let ra = $('#raffle');


ra.on('click', async () => {
    clearInterval(t);

});