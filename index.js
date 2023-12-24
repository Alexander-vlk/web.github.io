document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        perPage: 1,
        width: '100%',
        perMove: 1,
        gap: '2rem',
        autoplay: false,
        interval: 5000,
        type  : 'loop',
    });
    
    splide.mount();
});