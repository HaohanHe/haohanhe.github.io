window.onscroll = function() {scrollFunction()};  
  
function scrollFunction() {  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {  
        document.getElementsByClassName("navbar")[0].classList.add("scrolled");  
    } else {  
        document.getElementsByClassName("navbar")[0].classList.remove("scrolled");  
    }  
}
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 3000); // 每隔3秒切换一次轮播图
}

startSlideshow();
