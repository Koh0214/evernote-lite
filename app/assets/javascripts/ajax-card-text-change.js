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
        if (changed_title == 0) {
          $('.editing').find('.card__title').text('タイトルがありません');
          $('.editing .notes__body__box__title').attr('class','notes__body__box__no-title card__title');
        } else {
          $('.editing').find('.card__title').text(changed_title);
          $('.editing .notes__body__box__no-title').attr('class','notes__body__box__title card__title');
        }
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
        if (changed_text == 0) {
          $('.editing').find('.card__body').text('本文がありません');
          $('.editing .notes__body__box__body').attr('class','notes__body__box__no-body card__body');
        } else {
          $('.editing').find('.card__body').text(changed_text);
          $('.editing .notes__body__box__no-body').attr('class','notes__body__box__body card__body');
        }
      }
    }
  }

})
