$(function(){
    var $el = $('#parallax1, #parallax, #parallax2');     
    $(window).scroll(function () {
        para($el);
    });
    para($el);
});
var speed = 0.2;
function para($el) {
    var diff = $(window).scrollTop() - $el.offset().top;
    var yPos = -(diff * speed);
    var coords = '50% ' + yPos + 'px';
    $el.css({
        backgroundPosition: coords
    });
}