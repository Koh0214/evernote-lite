$(function(){

  $('.wrapper').on('click mouseover', '.not-searching', function(){
    $('.notes__search-bar').val('')
    $('.notes__search-bar').animate({ left: 8, top: 10, width: 245, opacity: 1}, 500, "easeOutExpo")
    $(this).addClass('searching')
    $(this).removeClass('not-searching')
    $('.notes__search-bar')[0].focus();
  })

  $('.wrapper').on('click', '.searching', function(){
    $('.notes__search-bar').animate({ left: 295, top: 10, width: 10, opacity: 0}, 300, "easeInCubic")
    $(this).removeClass('searching')
    $(this).addClass('not-searching')
  })
})
