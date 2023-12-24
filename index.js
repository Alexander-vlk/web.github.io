document.addEventListener('DOMContentLoaded', function () {
    var splide_reviews = new Splide('.splide', {
        perPage: 1,
        width: '100%',
        perMove: 1,
        gap: '2rem',
        autoplay: false,
        interval: 5000,
        type  : 'loop',
    });

    var splide_partners_1 = new Splide('#splide1', {
        perPage: 1,
        width: '100%',
        perMove: 1,
        gap: '2rem',
        autoplay: false,
        interval: 5000,
        type  : 'loop',
    });

    var splide_partners_2 = new Splide('#splide2', {
        perPage: 1,
        width: '100%',
        perMove: 1,
        gap: '2rem',
        autoplay: false,
        interval: 5000,
        type  : 'loop',
    });
    
    splide_reviews.mount();
    splide_partners_1.mount();
    splide_partners_2.mount();
});