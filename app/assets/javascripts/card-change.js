$(function(){

  $('.notes__body').on('mouseover','.notes__body__box', function(){
    $(this).animate({ backgroundColor: '#ffffff' }, 10, "easeInCubic")
    $(this).animate({ boxShadow: '0 0 30px #5ce050' }, 30, "easeInCubic")
    $(this).addClass('editing')

    // aタグのデフォルトを禁止することで選択されたノートをクリック禁止にする
    $(this).click(function(e){
			e.preventDefault();
		});

    // このコードは重すぎるから、クラスとかでいい感じに判定を入れる
    $(this).parent().siblings().children().animate({ backgroundColor: '#e6ece6' }, 30, "easeInCubic")
    $(this).parent().siblings().children().animate({ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }, 40, "easeInCubic")
    $(this).parent().siblings().children().removeClass('editing')
    console.log('change-color');
  })

});
