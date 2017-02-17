$(function(){
  
  $('.form-content__header__note-title, .form-content__body__text').mouseout(function() {
    var note_id = gon.note_id
    var note_folder_id = gon.note_folder_id
    var formData = new FormData($('.edit_note').get(0))
    $.ajax({
      type: 'PUT',
      url: '/note_folders/' + note_folder_id + '/notes/' + note_id,
      data: formData,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data) {
      console.log('mouseout save(title)');
    })
    .fail(function(data) {
      console.log('送信失敗');
    });
  });

  // ビューのリロード時に出来てしまう空白を削除
  $('.form-content__body__text').ready(function(){
    $('.form-content__body__text').each(function(){
      var txt = $(this).text();
      $(this).text(txt.replace(/            /g,""));
      $(this).text(txt.replace(/          /g,""));
      $(this).text(txt.replace(/  /g,""));
    });
  });

});
