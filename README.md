# 満楼苑<!-- omit in toc -->
![Image](https://github.com/user-attachments/assets/1f68fa56-3b30-4d09-a1a6-bf4892c2264f)

## 目次<!-- omit in toc -->
- [概要](#概要)
- [公開URL](#公開url)
- [目的](#目的)
- [使用技術](#使用技術)
- [使用フォント](#使用フォント)
- [デザインカンプ](#デザインカンプ)
- [トップページ](#トップページ)
  - [FV](#fv)
  - [アコーディオンメニュー](#アコーディオンメニュー)
  - [スライダー](#スライダー)

## 概要
* 老舗本格中華を味わえる中華料理店サイト。
* PC、スマートフォン用のデザインを作成し、レスポンシブ対応のコーディングを行った作品です。

## 公開URL
[https://manroen.mikanbako.jp/](https://manroen.mikanbako.jp/)

## 目的
* 複数ページのwebサイト作成の練習

## 使用技術
* HTML
* CSS
* JavaScript
* Swiper.js
* Luxy.js（慣性スクロール実装に使用）

## 使用フォント
* 和文フォント
  * [Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)
* 欧文フォント
  * [Roc Grotesk](https://fonts.adobe.com/fonts/roc-grotesk)
  * [Cherry Cream Soda](https://fonts.google.com/specimen/Cherry+Cream+Soda)：見出しに使用

## デザインカンプ
[Figmaページ（閲覧のみ可能です）](https://www.figma.com/file/nkC8xDwqQZOmqGXH1SAPLp/%E6%BA%80%E6%A5%BC%E8%8B%91?type=design&node-id=0%3A1&mode=design&t=C4JPFDmYRPupC1Md-1)

## トップページ
![Image](https://github.com/user-attachments/assets/f0e9cc8b-a6b7-499d-9369-7e0740621759)

### FV
![Image](https://github.com/user-attachments/assets/b8430f8f-8aa8-4382-a779-51913cb0341f)

背景画像が拡大しながらフェードで切り替わっていきます。

**Swiper.js**を使用して実装しました。

### アコーディオンメニュー
![Image](https://github.com/user-attachments/assets/22a0e6a4-53d3-464d-b11f-7ebe41144120)

開閉時のクラスの付与、要素の高さ設定などをJavaScriptで実装しました。

```javascript
//メニュー開閉ボタン
const menuBtn = document.querySelectorAll('.menu__heading-btn');

//メニュー開閉ボタンクリック時処理
menuBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const contents = btn.parentElement.nextElementSibling;
    const children = contents.children;

    //リストの高さ合計を取得
    let contentsHeight = 0;
    for (let i = 0; i < children.length; i++) {
      contentsHeight += children[i].offsetHeight;
    }

    //開閉処理
    if (btn.classList.contains('opened')) {
      btn.classList.remove('opened');
      contents.style.height = contentsHeight + 'px';
      setTimeout(() => {
        contents.style.height = 0;
        contents.style.opacity = 0;
      });
    } else {
      btn.classList.add('opened');
      contents.style.height = contentsHeight + 'px';
      contents.style.opacity = 1;
      setTimeout(() => {
        contents.style.height = 'auto';
      }, 600);
    }
  })
});
```

### スライダー
![Image](https://github.com/user-attachments/assets/ae03821c-5994-47e4-893b-5f25cde2b106)

無限スライダー、マウス操作でスライドも可能です。

**Swiper.js**を使用して実装しました。