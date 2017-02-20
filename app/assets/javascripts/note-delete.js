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
  });
})
