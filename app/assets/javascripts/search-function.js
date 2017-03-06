$(function(){

  function buildCard(id, title, body) {
    console.log('buildCard');
    $(
      '<a href="/note_folders/' + gon.note_folder_id + '/notes/' + id + '">' +
        '<div class="notes__body__box">' +
          '<div class="notes__body__box__title card__title"></div>' +
          '<hr class="notes__body__box__line">' +
          '<div class="notes__body__box__body card__body"></div>' +
        '</div>' +
      '</a>'
    )
    .find('.card__title').text(title).end()
    .find('.card__body').text(body).end()
    .prependTo($('.notes__body'))
  };

  function buildCardList(cards) {
    console.log('buildList');
    $.each(cards,
      function (index, card) {
        buildCard(card.id, card.title, card.body)
      }
    );
  };

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
    .done(function(notes) {
      console.log(notes);
      $('.notes__body__box').remove();
      buildCardList(notes);
    })
    .fail(function(data) {
      console.log('送信失敗 text');
    });
  });


})
