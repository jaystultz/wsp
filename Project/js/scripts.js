$(function(){

    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

    $('#nav ul li a').each(function() {
    if ($(this).attr('href') == pathname)
    {
        $(this).addClass('current');
    }
    });
});