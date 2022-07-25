$(document).ready(function(){

    /*-----Header------*/

    var burger = $('.burger__item');

    $('.burger').click(function(event){
       event.preventDefault();

        $('.burger__item, .header__nav').toggleClass('active');
        $('body').addClass('lock');

        if(burger.hasClass('active')){

        } else {
            $('body').removeClass('lock');
        }
    });


    var header = $(".header");
    var scrollChange = 1;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            header.addClass('active');
        } else {
            header.removeClass("active");
        }
});

   /*-----Timetable-accordion------*/
    $('.timetable__trainings__item').click(function(event){
       event.preventDefault();
        $(this).toggleClass('active');
    });


    /*-----slider------*/

    $('.slider__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.slider__slider .slick-prev').click(function(event){
       event.preventDefault();

        $('.slider__arrow--prev').addClass('shadow');
    });
    $('.slider__slider .slick-next').click(function(event){
       event.preventDefault();

        $('.slider__arrow--next').addClass('shadow');
    });

    $('.slider__slider .slick-prev').hover(function(event){
       event.preventDefault();

        $('.slider__arrow--prev').toggleClass('rotate');
    });
    $('.slider__slider .slick-next').hover(function(event){
       event.preventDefault();

        $('.slider__arrow--next').toggleClass('rotate');
    });


    /*-----Article-Tabs------*/
    $('.article__triggers__item').click(function(event){
        event.preventDefault();

        $('.article__triggers__item').removeClass('active');
        $('.articles__grid').removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');
    });

    $('.article__triggers__item:first').click();


    /*-----Modal-Window------*/

    $('.modal-button').click(function(event){
       event.preventDefault();

        $('.modal').addClass('show');
        $('body').addClass('lock');
         $('.modal__block').addClass('active');
    });

    $('.modal-close').click(function(event){
       event.preventDefault();

        $('.modal').removeClass('show');
        $('body').removeClass('lock');
    });

    $('.modal-thanks__button').click(function(event){

        $('.modal-thanks__block, .modal__block').removeClass('active');

        $('.modal').removeClass('show');
        $('body').removeClass('lock');

    });

    /*-----Modal-Validation------*/

    var validName = false;
    var validPhone = false;
    var validService = false;
    var validMessenger = false;

    $("form").submit(function(event){
       event.preventDefault();

        var name = $("#name").val();
        var phone = $("#phone").val();
        var service = $('input:radio[name="option"]:checked');
        var messenger = $('input:radio[name="messenger"]:checked');

        if(name == "") {
            $('#name').parent().addClass('active');
        } else {
            validName = true;
            $('#name').parent().removeClass('active');
        }
        if(phone == "") {
            $('#phone').parent().addClass('active');
        } else {
            validPhone = true;
            $('#phone').parent().removeClass('active');
        }
        if(service.length == 0) {
            $('.input__star--left').addClass('active');
        } else {
            validService = true;
            $('.input__star--left').removeClass('active');
        }
        if(messenger.length == 0) {
            $('.input__star--height').addClass('active');
        } else {
            validMessenger = true;
            $('.input__star--height').removeClass('active');
        }

        if(validName == true && validPhone == true && validService == true && validMessenger == true){

            $('.modal-thanks__block, .modal__block').addClass('active');
            $('#name,#phone').parent().removeClass('active');

            $('.input__star--left, .input__star--height, .modal__span,.modal__block').removeClass('active');
        }else {
            $('.modal__span').addClass('active');
        }
    });


    /*-----custom-select------*/

    const selected = document.querySelector(".modal__selected");
    const optionsContainer = document.querySelector(".modal__options-container");
    const optionList = document.querySelectorAll(".modal__option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });

    optionList.forEach(o => {
       o.addEventListener("click", () => {
           selected.innerHTML = o.querySelector("label").innerHTML;
           optionsContainer.classList.remove("active");
       });
    });

});
