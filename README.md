## imageXSS.js

一个简洁的方式，提供防止外部链接通过图片进行 XSS 攻击的方案。使用方法：

1. 引用 script:

  ```html
  <script src="jquery.js" />
  <script src="imagexss.js" />
  ```

2. 添加 html 属性：

  ```html
  <img src="" data-xssimg="图片的链接" />
  ```


## Testcase:

在浏览器打开 `/testcase/` 目录


## 原理：

images 如果 `Content-Type` 不对的话，并不会触发 load 事件。

详细说明：[通过 img URL 实施 XSS 的解决方案](http://sofish.de/2138)