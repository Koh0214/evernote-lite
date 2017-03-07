$(function(){

  $('.wrapper').ready(function(){
    console.log('aaa');
    var body = $('.wrapper .form-content__body__text').val();
    $('.wrapper .form-content__body__text').val(body.replace(/  /g,""));
  })
})
