$(function(){

  Barba.Pjax.start();

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      //startはトランジションが起動した直後の一番最初に呼び出される。

      //promise.allを使うと、配列で渡された処理が全て終わった後に.thenを実行。
      //この場合は.newContainerLOadingと.fadeOutが終わってから.thenが実行される。
      Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      //古いページコンテンツに対して行う処理。
      //ここでは、animateを使って、fadeoutさせている。
      return $(this.oldContainer).animate({ marginLeft: 1200 }, 800, "easeInCubic").promise();
    },

    fadeIn: function() {
      //startに記述したallによって、fadeOutが終わったらこのfadeIn関数が呼び出されている。

      var _this = this;
      //ここでのnewContainerは、ajaxで読み込まれてきた新しい方の.barba-containerにあたる。
      var $el = $(this.newContainer);

      //opacity:0;になっていた古いbarba-containerをdisplay:none;に。
      //こちらおそらくfadeIn発動時古いbarba-containerの初期設定として。
      $(this.oldContainer).hide();
      //こちらも新しいbarba-containerの初期設定。
      //visiblityがあるのは、デフォルトではこれがhiddenになってるっぽいから。
      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        //.done()をつけることで古いbarba-containerのDOMは削除され、transitionが終了する。
        _this.done();
      });

      // 選択したカードのtitle, bodyを取得
      var title = $('.editing .card__title').text();
      var body = $('.editing .card__body').text();

      // 先頭に入ってしまうスペースをreplaceしつつ、formの中に埋め込む
      $('.wrapper .form-content__header__note-title').text(title.replace(/              /g,"").replace(/            /g,""));
      
      if (body != "本文がありません") {
        $('.wrapper .form-content__body__text').text(body.replace(/\r?\n/,"").replace(/  /g,"").replace(/    /g,"").replace(/              /g,""));
      }
    }
  });

  Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
    return FadeTransition;
  };

});
