$('document').ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        }else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    })
    $('#login').click(function(){
        $('#loginmodal').modal('toggle')  
    })
    $('.close').click(function(){
        $('#loginmodal').modal('hide')  
    })
    $('#reserveButton').click(function(){
        $('#reservtable').modal('toggle')
    })
    $('.close').click(function(){
        $('#reservtable').modal('hide')  
    })
})