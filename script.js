let cursor = document.getElementsByClassName("cursor")[0];
let follower = document.getElementsByClassName("cursor-follower")[0];

const body = document.getElementById('main');

let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

/* Update the cursor and its follower's position every 10 miliseconds*/

setInterval(function () {

    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
            left: posX - 20,
            top: posY - 20
        }
    });

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });

}, 10);


/* Track the x and y position*/

$('body').on('mousemove', e => {
    mouseX = e.pageX;
    mouseY = e.pageY;

});


window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}
