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
        var changed_title = $('.form-content__header__note-title').val();
        $('.editing').find('.card__title').text(changed_title);
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
        var changed_text = $('.form-content__body__text').val();
        $('.editing').find('.card__body').text(changed_text);
      }
    }
  }

})
