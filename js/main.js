// モバイルブラウザかどうか判定
var isMobile = !!(new MobileDetect(window.navigator.userAgent).mobile());

/**
 * ページロード時に実行する処理
 */
$(document).ready(function() {

  // animatedクラスを持つ要素が画面内に入ったら
  // Animate.cssのfadeInUpエフェクトを適用
  $(".animated").waypoint(function(direction) {
    if (direction === "down") {
      $(this.element).removeClass("fadeOutUp");
      $(this.element).addClass("fadeInUp");
    }else if (direction === "up"){
      $(this.element).removeClass("fadeInUp");
      $(this.element).addClass("fadeOutUp");
    }
  }, { offset: "95%" });


  // ナビゲーションバーのリンクをクリックしたら
  // スムーズにスクロールしながら対象位置に移動
  $("#navbar a").click(function() {
    var destination = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(destination).offset().top,
    }, 1400);

    // ハンバーガーメニューが開いている場合は閉じる
    $(".navbar-toggle:visible").click();

    // 本来のクリックイベントは処理しない
    return false;
  });
  
  $(".fa-chevron-down").click(
    function() {
    $(this).parents(".block").find(".works_content").fadeIn(1000);
    $(this).hide();
    $(this).siblings(".fa-chevron-up").show();
  });
  $(".fa-chevron-up").click(
    function() {
    $(this).parents(".block").find(".works_content").hide();
    $(this).hide();
    $(this).siblings(".fa-chevron-down").show();
  });
  
});
