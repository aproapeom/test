//global variables ---------------------------------------------------------------------------------------------------------------
var arr = [];
var daychecktemplate = function(k, ix, jj){
    arr[0+jj] =  '<div class="checkKont"><label for="ziua'+k+'">'+k+'</label><input type="radio" id="ziua'+k+'" value="ziua'+k+'" name="ziua"/></div>';
    arr[1+jj] =  '<div class="checkKont"><label for="luna'+k+'">'+k+'</label><input type="radio" id="luna'+k+'" value="luna'+k+'" name="luna"/></div>';
    arr[2+jj] =  '<div class="checkKont"><label for="an'+k+'">'+k+'</label><input type="radio" id="an'+k+'" value="an'+k+'" name="an"/></div>';
    arr[3+jj] =  '<div class="checkKont"><label for="deplasare'+k+'">'+k+'</label><input type="radio" id="deplasare'+k+'" value="deplasare'+k+'" name="deplasare"/></div>';
    arr[4+jj] =  '<div class="checkKont"><label for="permise'+k+'">'+k+'</label><input type="radio" id="permise'+k+'" value="permise'+k+'" name="permise"/></div>';
    arr[5+jj] =  '<div class="checkKont"><label for="pregatire'+k+'">'+k+'</label><input type="radio" id="pregatire'+k+'" value="pregatire'+k+'" name="pregatire"/></div>';
    arr[6+jj] =  '<div class="checkKont"><label for="executie'+k+'">'+k+'</label><input type="radio" id="executie'+k+'" value="executie'+k+'" name="executie"/></div>';
    arr[7+jj] =  '<div class="checkKont"><label for="inchidere'+k+'">'+k+'</label><input type="radio" id="inchidere'+k+'" value="inchidere'+k+'" name="inchidere"/></div>';
    arr[8+jj] =  '<div class="checkKont"><label for="altele'+k+'">'+k+'</label><input type="radio" id="altele'+k+'" value="altele'+k+'" name="altele"/></div>';




    return arr[ix+jj];
};





//main functions ---------------------------------------------------------------------------------------------------------------
//home slider
function homeSlider() {
    $('.your-class').slick({
        dots: false,
        appendArrows: $('#sliderMove'),
        prevArrow: $('#sliderMove a').get(0),
        nextArrow: $('#sliderMove a').get(1),
        infinite: false
    });
}

//add elements
function appendForLoop(min, max, element, ixx, jjj){
    for(i=min; i<max; i++){
        $(element).append(daychecktemplate(addZero(i), ixx, jjj));
    }
}

// from 2 to 02
function addZero(xdd){
    if(xdd>=0 && xdd<10){
        xdd = ("0" + xdd).slice(-2);
        return xdd;
    }else{
        return xdd;
    }
}

//on load functions ---------------------------------------------------------------------------------------------------------------
$(document).ready(function () {

    if ($("#home").length) {
        homeSlider();
    }


    if ($("#pontaj").length) {

        appendForLoop(1,32,$("#daysCheck"),0,0);
        appendForLoop(1,13,$("#monthCheck"),1,0);
        appendForLoop(2017,2020,$("#yearCheck"),2,0);

        appendForLoop(1,9,$("#deplasareCheck"),3,0);
        appendForLoop(1,9,$("#permiseCheck"),4,0);
        appendForLoop(1,9,$("#pregatireCheck"),5,0);
        appendForLoop(1,9,$("#executieCheck"),6,0);
        appendForLoop(1,9,$("#inchidereCheck"),7,0);
        appendForLoop(1,9,$("#alteleCheck"),8,0);

        $('#pontaj').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green',
            increaseArea: '20%' // optional
        });
    }

});


window.onload = function () {

    setTimeout(function () {
        $('#preloader').hide();
    }, 1000);

};