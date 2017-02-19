$(function(){

  $('.notes__body').on('click','.notes__body__box', function(){
    $(this).animate({ backgroundColor: '#ffffff' }, 100, "easeInCubic")
    $(this).animate({ boxShadow: '0 0 30px #5ce050' }, 300, "easeInCubic")

    // aタグのデフォルトを禁止することで選択されたノートをクリック禁止にする
    $(this).click(function(e){
			e.preventDefault();
		});

    // このコードは重すぎるから、クラスとかでいい感じに判定を入れる
    $(this).parent().siblings().children().animate({ backgroundColor: '#e6ece6' }, 300, "easeInCubic")
    $(this).parent().siblings().children().animate({ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }, 400, "easeInCubic")
  })

});
