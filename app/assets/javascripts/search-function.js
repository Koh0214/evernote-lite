$(function(){

  $('.notes__search-bar').on("keyup", function() {

    var input_text = $('.notes__search-bar').val();
    var note_folder_id = gon.note_folder_id
    $.ajax({
      // notes#index
      type: 'GET',
      url: '/note_folders/' + note_folder_id + '/notes/',
      data: { text: input_text },
      dataType: 'json'
    })
    .done(function(data) {
      console.log(data);
    })
    .fail(function(data) {
      console.log('送信失敗 text');
    });
  });


})
