$(function(){

  setInterval(function() {
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
      console.log(data);
      console.log('OKKKKK!');
    })
    .fail(function(data) {
      console.log(data);
      console.log('惜しいよおおおお');
    });
  },3000);

});
