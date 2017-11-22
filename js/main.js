function homeSlider(){
    $('.your-class').slick({
        dots: false,
        appendArrows: $('#sliderMove'),
        prevArrow: $('#sliderMove a').get(0),
        nextArrow: $('#sliderMove a').get(1),
        infinite: false
});
}


//on load functions
$(document).ready(function () {


    if ($("#home").length) {
        homeSlider();
    }

    if ($("#pontaj").length) {
        $('#pontaj').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green',
            increaseArea: '20%' // optional
        });
    }

});