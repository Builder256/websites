document.addEventListener('DOMContentLoaded', () => {

    // すべての「navbar-burger」要素を取得する
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // ナビゲーションバーバーガーがあるかどうかを確認します
    if ($navbarBurgers.length > 0) {
  
      // それぞれにクリックイベントを追加します
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // 「data-target」属性からターゲットを取得します
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // 「navbar-burger」と「navbar-menu」の両方で「is-active」クラスを切り替えます
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });