$(function() {
  $('.wrapper').on('keyup','.form-content__header__note-title',checkChangeTitle(this));
  $('.wrapper').on('keyup','.form-content__body__text',checkChangeText(this));

  function checkChangeTitle(e){
    var old = v=$(e).find('.form-content__header__note-title').val();
    return function(){
      v=$(e).find('.form-content__header__note-title').val();
      if(old != v){
        old = v;
        isChange = true;
        console.log($('.form-content__header__note-title').val());
        console.log($('.editing').find('.card__title').text());
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
        console.log($('.editing').find('.card__body').text());
      }
    }
  }

})
