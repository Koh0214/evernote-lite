$(function(){

  // notes__bodyの中のaタグをマウスオーバーすると移動するメソッド
  $('.notes__body__box').on('mouseover', function(){
    $(this)[0].click();
  })

  $('.wrapper').on('mouseover','.form-content__header__note-title', function(){
    var txt = $(this).val();

    // カーソルを一番最後に持ってくる
    $(this).val('');
    $(this)[0].focus()
    $(this).val(txt);
  })

  $('.wrapper').on('mouseover','.form-content__body__text', function(){
    $(this)[0].focus();
  })
})
