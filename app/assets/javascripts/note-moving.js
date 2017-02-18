$(function(){

  $('.notes__body__box').on('click', function(){
    $(this).animate({ backgroundColor: '#ffffff' }, 100, "easeInCubic")
    $(this).animate({ boxShadow: '0 0 30px #5ce050' }, 300, "easeInCubic")
    $(this).animate({ marginLeft: 10 }, 300, "easeInCubic")
    $(this).animate({ width: 285 }, 100, "easeInCubic")

    $(this).parent().siblings().children().animate({ backgroundColor: '#e0e3e0' }, 300, "easeInCubic")
    $(this).parent().siblings().children().animate({ marginLeft: 0 }, 400, "easeInCubic")
    $(this).parent().siblings().children().animate({ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }, 400, "easeInCubic")
    $(this).parent().siblings().children().animate({ width: 290 }, 1000, "easeInCubic")

  })

});
