# MD5

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

MD5.js is an ES module that provides a high-performance MD5 digest function, a slight modification of [Joseph Myers's algorithm](http://www.myersdaily.org/joseph/javascript/md5-text.html). It was forked from the [md5-js](https://github.com/wbond/md5-js) project.

## Usage

```js
import { MD5 } from "https://code4fukui.github.io/MD5/MD5.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(MD5.digest("hello"))); // 5d41402abc4b2a76b9719d911017c592
```

## Features
- Provides a high-performance MD5 digest function
- Can hash UTF-8 encoded strings
- Compatible with ES module imports

## License
MIT License — see [LICENSE](LICENSE).