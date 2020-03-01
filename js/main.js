$(document).ready(function() {

    $('.menu-item').click(function() {

        $('.menu-item').children('.freccia-down').removeClass('ruota');

        if($(this).children('.dropdown-menu').is(':visible')) {
            $(this).children('.dropdown-menu').slideToggle(200);
            $('.menu-item').children('.freccia-down').removeClass('ruota');
        } else {
            $('.menu-item').children('.dropdown-menu').slideUp(200);
            $(this).children('.dropdown-menu').toggle(200);
            $(this).children('.freccia-down').addClass('ruota');
        }
    });
});
