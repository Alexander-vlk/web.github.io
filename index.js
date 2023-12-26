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
    // splide_partners_1.mount();
    // splide_partners_2.mount();
});

const startCard = document.getElementById("start-card");
const mainCard = document.getElementById("main-card");
const vipCard = document.getElementById("card-vip");

document.addEventListener("DOMContentLoaded", () => {
    vipCard.addEventListener("mouseover", () => {
        mainCard.style.transform = "scale(.9)";
    });
    vipCard.addEventListener("mouseout", () => {
        mainCard.style.transform = "scale(1)";
    });

    startCard.addEventListener("mouseover", () => {
        mainCard.style.transform = "scale(.9)";
    });
    startCard.addEventListener("mouseout", () => {
        mainCard.style.transform = "scale(1)";
    });
});