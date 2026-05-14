# MD5

MD5.jsは、[Joseph Myersのアルゴリズム](http://www.myersdaily.org/joseph/javascript/md5-text.html)にわずかな修正を加えた、高性能なMD5ダイジェスト関数を提供するESモジュールです。[md5-js](https://github.com/wbond/md5-js)プロジェクトからフォークされました。

## 使い方

```js
import { MD5 } from "https://code4fukui.github.io/MD5/MD5.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(MD5.digest("hello"))); // 5d41402abc4b2a76b9719d911017c592
```

## 特徴
- 高性能なMD5ダイジェスト関数を提供
- UTF-8エンコードされた文字列のハッシュ化が可能
- ESモジュールのインポートに対応

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
