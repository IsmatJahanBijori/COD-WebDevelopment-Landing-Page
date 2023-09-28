let slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
    displaySlides(slide_index += n);
}
function currentSlide(n) {
    displaySlides(slide_index = n);
}
function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-info");
    if (n > slides.length) 
    { slide_index = 1 }
    if (n < 1)
     { slide_index = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}




const accordionButtons = document.querySelectorAll('.accordion-btn');
const accordionContents = document.querySelectorAll('.accordion-details');

// Add click event listeners to buttons
accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle the active class to show/hide content
        accordionContents[index].classList.toggle('active');
    });
});
