$(function() {
  $('.wrapper').on("click", ".delete-note-icon", function() {
    $.ajax({
      type: 'DELETE',
      url: window.location.pathname, //'/note_folders/' + note_folder_id + '/notes/' + note_id,
      data: {dammy: ''},
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data) {
      console.log('成功 delete');
    })
    .fail(function(data) {
      console.log('送信失敗 delete');
    });
  });
})
