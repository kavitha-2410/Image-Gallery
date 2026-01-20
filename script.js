const images = document.querySelectorAll('.wrapper .image img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const nextBtn = document.querySelector('.lightbox .next');
const prevBtn = document.querySelector('.lightbox .prev');

let currentIndex = 0;


images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});


closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});


document.addEventListener('keydown', (e) => {
    if(lightbox.style.display === 'flex'){
        if(e.key === 'ArrowRight') nextBtn.click();
        if(e.key === 'ArrowLeft') prevBtn.click();
        if(e.key === 'Escape') closeBtn.click();
    }
});

