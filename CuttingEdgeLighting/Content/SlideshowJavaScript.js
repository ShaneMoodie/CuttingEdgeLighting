//Top Auto Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//Bottom Auto Slideshow
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides2 = document.getElementsByClassName("slide2");
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) { slideIndex2 = 1 }
    slides2[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

//Top Manual Slideshow
var slideIndex3 = 1;
showDivs(slideIndex3);

function plusDivs(n) {
    showDivs(slideIndex3 += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("manSlide1");
    if (n > x.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex3 - 1].style.display = "block";
}

//Bottom Manual Slideshow
var slideIndex4 = 1;
showDivs2(slideIndex4);

function plusDivs2(n) {
    showDivs2(slideIndex4 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("manSlide2");
    if (n > x.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex4 - 1].style.display = "block";
}