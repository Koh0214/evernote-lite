$(function(){

  function build_form(data) {
    $(
      "<a href='/note_folders/" + data.note_folder_id + "/notes/" + data.id + "'>" +
        "<div class='notes__body__box ajax-box editing'>" +
          "<div class='notes__body__box__no-title'>タイトルがありません</div>" +
          "<hr class='notes__body__box__line'>" +
          "<div class='notes__body__box__no-body'>本文がありません</div>" +
        "</div>" +
      "</a>"
    )
    .prependTo($('.notes__body'))
    .children().animate({ paddingTop: 15, height: 100, paddingBottom: 15 }, 350, "easeInCubic")
    .animate({ boxShadow: '0 0 30px #5ce050' }, 300, "easeInCubic")

    // aタグのデフォルトを禁止することで選択されたノートをクリック禁止にする
    .click(function(e){
      e.preventDefault();
    });

    // 新規作成したノートに向かってスクロール
    var targetY = $('.notes__body').offset().top;
    $('.notes__body').animate({scrollTop: targetY - 120}, 800, 'easeInCubic');
  };

  $('.wrapper').on("click", ".new-note-icon", function() {
    // 選択していたノートを非選択状態に戻す
    $('.notes__body__box').animate({ backgroundColor: '#e6ece6' }, 300, "easeInCubic")
    $('.notes__body__box').animate({ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }, 400, "easeInCubic")

    $.ajax({
      type: 'POST',
      url: '/note_folders/' + gon.note_folder_id + '/notes',
      data: {note: {title: '', body: ''}} ,
      dataType: 'json'
    })
    .done(function(data) {
      build_form(data)
      $('.form-content__body__text').animate({ height: 500 }, 350, "easeInCubic")
      history.replaceState('','',data.id);
    })
    .fail(function(data) {
      console.log('惜しい。');
    });
  });
});
