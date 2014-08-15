$(document).ready(function() {
    $('.btn2').click(function(){
        $(this).addClass("btn-active1");
        $('.btn1').removeClass("btn-active1");
    }); 
    $('.btn1').click(function(){
        $('.btn2').removeClass("btn-active1");
        $('.btn1').addClass("btn-active1");
    }); 
    $('.btn4').click(function(){
        $(this).addClass("btn-active2");
        $('.btn3').removeClass("btn-active2");
    }); 
    $('.btn3').click(function(){
        $('.btn4').removeClass("btn-active2");
        $('.btn3').addClass("btn-active2");
    }); 
    $('.btn6').click(function(){
        $(this).addClass("btn-active3");
        $('.btn5').removeClass("btn-active3");
    }); 
    $('.btn5').click(function(){
        $('.btn6').removeClass("btn-active3");
        $('.btn5').addClass("btn-active3");
    }); 
});    


var cbpAnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.cbp-af-header' ),
        didScroll = false,
        changeHeaderOn = 300;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'cbp-af-header-shrink' );
        }
        else {
            classie.remove( header, 'cbp-af-header-shrink' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();