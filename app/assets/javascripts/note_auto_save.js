$(function(){

  $('.wrapper').on("blur", ".form-content__header__note-title", function() {
    // new_noteを作った後に、formのclassが変わるのでその対応
    if ($('.new_note').length === 0) {
      var formData = new FormData($('.edit_note').get(0))
    }
    else{
      var formData = new FormData($('.new_note').get(0))
    }
    $.ajax({
      type: 'PUT',
      url: window.location.pathname, //'/note_folders/' + note_folder_id + '/notes/' + note_id,
      data: formData,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data) {
      console.log('unfocus-save(title)');
    })
    .fail(function(data) {
      console.log('送信失敗 title');
    });
  });

  $('.wrapper').on("blur", ".form-content__body__text", function() {
    // new_noteを作った後に、formのclassが変わるのでその対応
    if ($('.new_note').length === 0) {
      var formData = new FormData($('.edit_note').get(0))
    }
    else{
      var formData = new FormData($('.new_note').get(0))
    }
    $.ajax({
      type: 'PUT',
      url: window.location.pathname, //'/note_folders/' + note_folder_id + '/notes/' + note_id,
      data: formData,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data) {
      console.log('unfocus-save(body)');
    })
    .fail(function(data) {
      console.log('送信失敗 text');
    });
  });

});
