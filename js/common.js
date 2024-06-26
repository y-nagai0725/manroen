//共通用JS
document.addEventListener('DOMContentLoaded', function () {
  //ハンバーガーアイコン
  const hamburger = document.getElementById('hamburger-menu');

  //スライドメニュー
  const slideMenu = document.getElementById('slide-menu');

  //スライドメニューリンク
  const slideMenuLink = document.querySelectorAll('.slide-menu__link');

  //js-activeクラス付与対象
  const activeTargetList = document.querySelectorAll('.js-fadeIn, .js-title');

  //クラス付与のスクロール位置調整用
  const adjustmentNumber = 0.65;

  //ヘッダー
  const header = document.getElementById('header');

  //フッター
  const footer = document.getElementById('footer');

  //現在のページURLのハッシュ
  const hash = location.hash;

  //opアニメーション時間
  const openingTime = 400;

  //ハンバーガーアイコンクリック時処理
  hamburger.addEventListener('click', function () {
    this.classList.toggle('opened');
    slideMenu.classList.toggle('opened');
  });

  slideMenuLink.forEach(link => {
    link.addEventListener('click', function () {
      hamburger.classList.remove('opened');
      slideMenu.classList.remove('opened');
    });
    link.addEventListener('mouseover', function () {
      slideMenuLink.forEach(link => {
        link.classList.add('no-focus');
      });
      link.classList.remove('no-focus');
    });
    link.addEventListener('mouseleave', function () {
      slideMenuLink.forEach(link => {
        link.classList.remove('no-focus');
      });
    });
  });

  luxy.init();

  window.addEventListener('scroll', function () {
    setJsTargetActive();
    hideHeader();
  });

  //対象にクラス付与
  function setJsTargetActive() {
    const windowHeight = window.innerHeight;
    const st = window.scrollY;
    activeTargetList.forEach((e) => {
      const position = e.getBoundingClientRect().top + st;
      if (st > position - windowHeight * adjustmentNumber) {
        e.classList.add('js-active');
      }
    });
  }

  //ヘッダー非表示
  function hideHeader() {
    const windowHeight = window.innerHeight;
    const st = window.scrollY;
    const footerPosition = footer.getBoundingClientRect().top + st;
    if (st > footerPosition - windowHeight * 0.9) {
      header.classList.add('js-hide');
    } else {
      header.classList.remove('js-hide');
    }
  }

  //ナビゲーションリンククリック時処理
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      //対象場所へスムーススクロール
      const href = this.getAttribute('href').replace('#', '');
      const target = document.getElementById(href);
      const targetPos = target.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: targetPos,
        behavior: 'smooth',
      });
    });
  });

  //ページ外リンクからの遷移時
  if (hash) {
    setTimeout(function () {
      const href = hash.replace('#', '');
      const target = document.getElementById(href);
      const targetPos = target.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: targetPos,
        behavior: 'smooth',
      });
    }, openingTime);
  }
}, false);