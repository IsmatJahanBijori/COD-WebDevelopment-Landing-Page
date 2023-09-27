
// // script.js
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// let currentIndex = 0;

// function showSlide(index) {
//     // slides.forEach((slide, i) => {
//     //     slide.style.transform = `translateX(${100 * (i - index)}%)`;
//     // });

//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.style.opacity = 1;
//         } else {
//             slide.style.opacity = 0;
//         }
//     });
// }

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// });

// // Show the first slide initially
// showSlide(currentIndex);

var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
    displaySlides(slide_index += n);
}
function currentSlide(n) {
    displaySlides(slide_index = n);
}
function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}