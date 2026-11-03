# ===========================
*あなたはプロのWeb製作者です。ホームページやWebデザインを得意領域としているので
エージェントオーケストレータの私に協力してください*
- *会社名は情報漏洩対策としてXXXとします*
[制約]
*各コンポーネントは骨子です。スタイリングの選定はあなたの裁量が大きいですがプロンプトで明示的に示したルールは必ず守ってください*
# ===========================

## 今回の顧客
- 複合機販売の大手代理販売店
*ビジネスモデル*
- *大手メーカの製造している複合機を提案・導入することで発生するマージンでマネタイズする中小企業*
- *今回は集客のためにホームページを私に依頼*

### ページコンテンツ

## *ヘッダー*
 - *ヘッダーリンク*

　*ヘッダー*
  [*項目仕様*]
 *サービス*
   - *クリック時、セクション「サービス」に移動*
 *会社案内*
  - *クリック時、セクション「会社概要」に移動*
*お問い合わせ*
- *クリック時セクション「お問い合わせ」に移動*

	
[制約]
  *aタグを使用*
  *リンクのテキストには[*項目仕様*]の各テキストを使用する。*

  *PC画面レイアウト*
  #### リンクが横並びになったヘッダーリンク方式
  ```html
  <header>
  合資会社 XXXXXXX
   <div class="slide-menu header-menu">
    <nav id =”header-items”>
       <a class ="header-item" href="company-service">サービス</a>
       <a class ="header-item" href="company-info">会社案内</a>
       <a class ="header-item" href="company-qa">お問い合わせ</a>
    </nav>
   </div>
  </header>
  ```

*モバイル画面*
#### スライド＆回転メニュー 
```html
 <header>
  合資会社 XXXXXXX
 </header>
<input id = "test_max_length" type="text" maxlength = "1" onClick="menuEvent()">
<!-- 開閉ボタン -->
<button id="menu-toggle" aria-label="メニューを開く">
  <span></span>
  <span></span>
  <span></span>
</button>

<nav class="slide-menu header-menu">
  <ul id =”header-items”>
    <li class ="header-item" ><a href="company-service">サービス</a></li>
    <li class ="header-item" ><a href="company-info">会社案内</a></li>
    <li class ="header-item" ><a href="company-qa">お問い合わせ</a></li>
  </ul>
</nav>
```
	  
    
```javascript
<script>
function menuEvent(){
  const menuToggle = document.getElementById('menu-toggle');
  const slideMenu = document.getElementById('slide-menu');
  menuToggle.addEventListener('click', () => {
  // ボタンとメニューの両方にクラスをトグル（交互に付け外し）する
  menuToggle.classList.toggle('is-open');
  slideMenu.classList.toggle('is-open');
  const test = document.getElementById('test_max_length');
  if (test.value > 1){
      throw Error('eeeeee')
   }
});
}
</script>
```



### *セクション「サービス」*
- *複合機*
     - *印刷・コピー・スキャンの機能を一台に集約した複合機*
- *ビジネスフォン*
	 - *オフィスのコミュニケーションを効率化するビジネスフォン。内線・転送・保留などの基本機能はもちろん、電話応対の履歴管理や会議通話機能も搭載。* 
- *PC・プリンター*
     - *業務内容やオフィス環境に合わせて、最適なパソコンやプリンターを提案。高速処理や高画質印刷など、効率的に作業を進められる性能を備える*

```html
<main id= "company-service">
  <div>
  <div>複合機</div>
  <img src="maluti.png" alt="複合機の画像">
  <div>印刷・コピー・スキャンの機能を一台に集約した複合機</div>
  </div>
  <div>
  <div>ビジネスフォン</div>
  <img src= "phone.png" alt="ビジネスフォンの画像" >
  <div>オフィスのコミュニケーションを効率化するビジネスフォン。内線・転送・保留などの基本機能はもちろん、電話応対の履歴管理や会議通話機能も搭載。
  </div>
  </div>
  <div>
  <div>PC・プリンター</div>
  <img src= "pc-printer.png" alt="pc・プリンタの画像" > 
  <div>業務内容やオフィス環境に合わせて、最適なパソコンやプリンターを提案。高速処理や高画質印刷など、効率的に作業を進められる性能を備える</div>
  </div>
</main>
```

### セクション「会社案内」
```html
<ul id= "company-info">
<li class="info-items" > ここに住所</li>
<li class="info-items">  連絡先</li>
<li class="info-items"> 社長の名前</li>
</ul>
```


### *セクション「お問い合わせ」*

```html
<div id = "company-qa">
<form action="alert('ここを押すとメールが届く')"  method="POST">
<label for="order">
<select name="order-items" id="order"> 
<option class = "order-item" value="materials">製品資料の取り寄せ</option> 
<option value="quotation">お見積もりの相談</option> 
<option value="example">その他・何を相談して良いかわからないが話を聞きたい</option>
</select>
</label>
<label for="qa-field" >
<textarea id="qa-field" name = "qa-field-detail" rows="5" col="30" >
</textarea>
</label>
<intput type= "submit" value="送信"/>
</form>
</div>
```


### フッタ-

```html
<footer><small>@Copyright2026</small></footer>
```



# スタイリング
## 方向性
- *黒を基調としたスタイリッシュなイメージ*
## テキスト
- *大きな見出し->ゴールド*
- *文字の色 -> シルバー*

[コーディング規約]
*CSS*
- *インラインタグ*
*javascript*
- *スクリプトタグ*
- *バニラJS*

[ファイル出力]
*index.htmlを作成・コーディング*
[C:\Users\User\myapp\dev\index.html](C:\Users\User\myapp\dev\index.html)

[制約]
- *今回はサンプルとしてクライアントに見せますが、案件は確約しているので、品質の担保は必須です。*
- *imgタグに入る画像は今後作成するのでいったん不要。とりあえず必要領域として420x420で確保しておいてください。*
- *モバイルレスポンシブも今後詰めていきますので最低限で構いません。スライド・回転メニューのモバイルレスポンしブは最低限キープしつつレイアウトに大きな崩れがないように*