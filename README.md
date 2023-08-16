# MD5

MD5.js is an ES module provides digest() as MD5, a slight modification of [[http://www.myersdaily.org/joseph/javascript/md5-text.html|Joseph Myers's high-performance function]]. forked [md5-js](https://github.com/wbond/md5-js)

## Usage

```js
import { MD5 } from "https://code4fukui.github.io/MD5/MD5.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(MD5.digest("hello"))); // 5d41402abc4b2a76b9719d911017c592
```
