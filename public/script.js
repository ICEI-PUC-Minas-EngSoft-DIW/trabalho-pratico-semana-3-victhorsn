const carrossel = document.querySelector('.carrossel');
let isDown = false;
let startX;
let scrollLeft;

carrossel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carrossel.offsetLeft;
    scrollLeft = carrossel.scrollLeft;
});
carrossel.addEventListener('mouseleave', () => isDown = false);
carrossel.addEventListener('mouseup', () => isDown = false);
carrossel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrossel.offsetLeft;
    const walk = (x - startX) * 2;
    carrossel.scrollLeft = scrollLeft - walk;
});


document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

//SCRIPT.JS
