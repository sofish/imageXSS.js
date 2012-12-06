/*! Licensed under: MIT; @author: sofish, https://github.com/sofish */
~function ($) {

  // 给不显示的图片提供一个 fallback URL
  var defaultImage = '';

  /* 用 js 解决 image 外部链接 url 问题
   * @param defaultImage {String} 默认图片的 url
   * @usage 在 html 中添加 data-xssimg 属性
   *  <img src="" data-xssimg="http://sofish.de/images/xxs.jpg" />
   */

  $.fn.imageXSS = function () {

    this.each(function () {

      var that = $(this)
        , url = that.data('xssimg')
        , img = document.createElement('img')

      // 只在是 image 的时候会触发
      $(img).on('load', function () {
        that.attr('src', url);
      })

      defaultImage && $(img).on('error', function () {
        that.attr('src', defaultImage);
      })

      img.src = url;
    })
  }

  // 使用 URL
  $('[data-xssimg]').imageXSS();

}(window.jQuery);