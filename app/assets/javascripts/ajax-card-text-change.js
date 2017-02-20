$(function() {
  $('.form-content__header__note-title').keyup(checkChangeTitle(this));
  $('.form-content__body__text').keyup(checkChangeText(this));

  function checkChangeTitle(e){
    var old = v=$(e).find('.form-content__header__note-title').val();
    return function(){
      v=$(e).find('.form-content__header__note-title').val();
      if(old != v){
        old = v;
        isChange = true;
        console.log($('.form-content__header__note-title').val());
      }
    }
  }

  function checkChangeText(e){
    var old = v=$(e).find('.form-content__body__text').val();
    return function(){
      v=$(e).find('.form-content__body__text').val();
      if(old != v){
        old = v;
        isChange = true;
        console.log($('.form-content__body__text').val());
      }
    }
  }

})
