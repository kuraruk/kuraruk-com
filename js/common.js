;(function($) { // 末尾にセミコロンが無いファイルと結合した場合の予防に行頭にセミコロンを書く
  $(function(){

    /*------------------------------------
    common method
    --------------------------------------*/
     //IE link dot
      $('a').focus(function(){this.blur();});
      // a > div
      $(".box_links").click(function(){
          if($(this).find("a").attr("target")=="_blank"){
              window.open($(this).find("a").attr("href"), '_blank');
          }else{
              window.location=$(this).find("a").attr("href");
          }
          return false;
      });
      $("img.img_over").hover(function(){
          $(this).fadeTo("fast", 0.5); // opacity 50
      },function(){
          $(this).fadeTo("fast", 1.0); // opacity 100
      });

    /*------------------------------------
    trigger
    --------------------------------------*/
    $(window).on("load", function(){
        w_w = $(window).width();
        w_h = $(window).height();
        console.log("call");
        if(w_w <= 768){ // 768 min
        }else{ // 768 over
          profile_pop();
        }
        break_reload();
    });
    $(window).on("load resize", function(){
        w_w = $(window).width();
        w_h = $(window).height();
        console.log("call load&resize");
        // fv_view_set(w_w,w_h);
        // if(w_w <= 768){ // 768 min
        // }else{ // 768 over
        // }
    });


    /*------------------------------------
    functions
    // gnav
    // sp_gnav
    // break_reload
    // scroll_evt
    // skewed_slide_in
    --------------------------------------*/

    // ブレイクポイントリロード
    function break_reload(){
      console.log('break_reload');
      if ((navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPad") > 0) || navigator.userAgent.indexOf("iPod") > 0 || navigator.userAgent.indexOf("Android") > 0) {
        $(window).on("orientationchange",function(){
              // location.reload(false);
          });
      }else {
        //ブレイクポイントを超えたリサイズ終了時のみリロードする
        var windowWidth01 = $(window).width(); //現在のウインドウサイズ
        var timer = false; //リサイズ終了フラグ
        $(window).on("resize", function() {
          var windowWidth02 = $(window).width(); //リサイズ後のウインドウサイズ
          var BP = 768;
          if(( windowWidth01 > BP && windowWidth02 <= BP ) || ( windowWidth01 <= BP && windowWidth02 > BP )) {
          if (timer !== false) { clearTimeout(timer); } // リサイズ作業中はタイマーを動作させない
          timer = setTimeout(function() { location.href = location.href; }, 200); //リロード
          }
        });
      }
    }

    function profile_pop(){
      $('.js-popup_btn').on('click', function(e){
        $('.js-popup').addClass('is_active');
      });
      $('.js-popup_close').on('click', function(e){
        $('.js-popup').removeClass('is_active');
      });
    }

    //ページ内スクロール
    // function scroll_evt(w){
    //   // $('a[href^="#"]').on('click', function(e){
    //   //   e.preventDefault();
    //   //   var target = $(this).attr('href');
    //   //   $('body, html').animate({scrollTop: target.offset().top +'px'}, 500, 'swing');
    //   // });
    //   $('#js-pagetop a[href^=#]').click(function(){
    //       // scroll speed
    //       var speed = 500; // miri
    //       // anc value
    //       var href = $(this).attr('href');
    //       // move value
    //       var target = $( href == '#' || href == '' ? 'html' : href );
    //       // move offset value
    //       var position = target.offset().top;
    //       // smooth scroll
    //       $('body,html').animate({scrollTop:position} , speed , 'swing');
    //       return false;
    //   });
    //   $('.js-scroll a[href^=#]').click(function(){
    //       // scroll speed
    //       var speed = 500; // miri
    //       // anc value
    //       var href = $(this).attr('href');
    //       // move value
    //       var target = $( href == '#' || href == '' ? 'html' : href );
    //       // move offset value
    //       var position = target.offset().top;
    //       // smooth scroll
    //       $('body,html').animate({scrollTop:position} , speed , 'swing');
    //       return false;
    //   });
    //   $('.js-scroll_recruit a[href^=#]').click(function(){
    //       // scroll speed
    //       var speed = 500; // miri
    //       // anc value
    //       var href = $(this).attr('href');
    //       // move value
    //       var target = $( href == '#' || href == '' ? 'html' : href );
    //       // move offset value
    //       if(w > 768){
    //         var position = target.offset().top - 80;
    //       } else {
    //         var position = target.offset().top - 200;
    //       }
    //       // smooth scroll
    //       $('body,html').animate({scrollTop:position} , speed , 'swing');
    //       return false;
    //   });
    // }



  });

})(window.jQuery);