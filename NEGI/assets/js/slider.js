$(document).ready(function () {
    // var sliderWidth = $('.slider').width();
    var slideCount = $('.slides .slide').length / 3;
    var currentPosition = 0;
    var slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        currentPosition++;
        if (currentPosition == slideCount) {
            console.log(slideCount);
            currentPosition = 0;
        }
        $('.slides').animate({ marginLeft: - (currentPosition * 500) }, 1000);
    }
});
