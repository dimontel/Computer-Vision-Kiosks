//OPENING AND CLOSING THE CONNECT MENU BAR--------------------------------------------------------------------------------------------------
var connectstate = 0;
function openConnect() {
    if (connectstate == 0) {
        $('.sidebar').css('right', '0')
        connectstate = 1;
    } else if (connectstate == 1) {
        $('.sidebar').css('right', '')
        connectstate = 0;
    }
}

//ADDING TO THE CONNECT LIST--------------------------------------------------------------------------------------------------
$('.connect-add').click(function () {
    var name = $("h2", this).html();

    if ($('.star', this).css('display') === 'none') {
        $('#connect-frame').append('<div class="connect-tile">' + name + '</div>');
        $('.star', this).css('display', 'block');
    } else {};
});

//REMOVING TO THE CONNECT LIST--------------------------------------------------------------------------------------------------
$(document).on("click", ".connect-tile", function(){
    var name = $(this).html();
    $(this).remove();
    //console.log('Im working, and ' + name + ' is my name!');

    var potatosalad = $("h2:contains('" + name + "')").parent();
    
    $('.star', potatosalad).css('display', 'none');
});



//SCROLL PANEL UP & DOWN -------------------------------------------------------------------------------------------------
$(document).ready(function(){

    $('.trigger').on('click', function(){
        $('#panel').toggleClass('open');

    });
});