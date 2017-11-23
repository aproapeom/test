//global variables ---------------------------------------------------------------------------------------------------------------
var arr = [];
var daychecktemplate = function(k, ix, jj){
    arr[0+jj] =  '<div class="checkKont"><label for="ziua'+k+'">'+k+'</label><input type="checkbox" id="ziua'+k+'" value="ziua'+k+'" name="ziua"/></div>';
    arr[1+jj] =  '<div class="checkKont"><label for="luna'+k+'">'+k+'</label><input type="checkbox" id="luna'+k+'" value="luna'+k+'" name="luna"/></div>';
    arr[2+jj] =  '<div class="checkKont"><label for="an'+k+'">'+k+'</label><input type="checkbox" id="an'+k+'" value="an'+k+'" name="an"/></div>';

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

        $('#pontaj').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green',
            increaseArea: '20%' // optional
        });
    }

});