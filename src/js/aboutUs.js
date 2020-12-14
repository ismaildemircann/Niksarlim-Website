const clearHtml = () => {
    document.querySelector("#photos").innerHTML = "";
  },
  photos = (a) => {
    let s;
    a.matches
      ? ((s =
          '\n    <div class="container">\n      <div class="row blog">\n        <div class="col-sm-12">\n          <div id="blogCarousel" class="carousel slide" data-ride="carousel">\n            <ol class="carousel-indicators">\n              <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>\n              <li data-target="#blogCarousel" data-slide-to="1"></li>\n              <li data-target="#blogCarousel" data-slide-to="2"></li>\n              <li data-target="#blogCarousel" data-slide-to="3"></li>\n              <li data-target="#blogCarousel" data-slide-to="4"></li>\n              <li data-target="#blogCarousel" data-slide-to="5"></li>\n              <li data-target="#blogCarousel" data-slide-to="6"></li>\n              <li data-target="#blogCarousel" data-slide-to="7"></li>\n            </ol>\n\n            <div class="carousel-inner">\n              <div class="carousel-item active">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında1.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında2.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında3.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında4.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında5.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında6.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında7.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n              <div class="carousel-item">\n                <div class="row">\n                  <div class="col">\n                    <img class="img-carousel" src="images/Hakkında8.jpeg" alt="Image">\n                  </div>\n                </div>  \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <script src="http://static.tumblr.com/xz44nnc/o5lkyivqw/jquery-1.3.2.min.js">\n    $(\'#blogCarousel\').carousel({ interval: 5000 });\n    </script>\n      '),
        clearHtml(),
        document.querySelector("#photos").insertAdjacentHTML("afterbegin", s))
      : ((s =
          '\n    <div class="container">\n    <div class="row blog">\n      <div class="col-sm-12">\n        <div id="blogCarousel" class="carousel slide" data-ride="carousel">\n\n          <ol class="carousel-indicators">\n            <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>\n            <li data-target="#blogCarousel" data-slide-to="1"></li>\n          </ol>\n\n          \x3c!-- Carousel items --\x3e\n          <div class="carousel-inner">\n            <div class="carousel-item active">\n              <div class="row">\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında1.jpeg" alt="Image">\n                </div>\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında2.jpeg" alt="Image">\n                </div>\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında3.jpeg" alt="Image">\n                </div>\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında4.jpeg" alt="Image">\n                </div>\n              </div>\n              \x3c!--.row--\x3e\n            </div>\n            \x3c!--.item--\x3e\n\n            <div class="carousel-item">\n              <div class="row">\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında5.jpeg" alt="Image">\n                </div>\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında6.jpeg" alt="Image">\n                </div>\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında7.jpeg" alt="Image">\n                </div>\n                <div class="col">\n                  <img class="img-carousel" src="images/Hakkında8.jpeg" alt="Image">\n                </div>\n              </div>\n              \x3c!--.row--\x3e\n            </div>\n            \x3c!--.item--\x3e\n          </div>\n          \x3c!--.carousel-inner--\x3e\n        </div>\n        \x3c!--.Carousel--\x3e\n      </div>\n    </div>\n  </div>\n  <script src="http://static.tumblr.com/xz44nnc/o5lkyivqw/jquery-1.3.2.min.js">\n    $(\'#blogCarousel\').carousel({ interval: 5000 });\n  </script>'),
        clearHtml(),
        document.querySelector("#photos").insertAdjacentHTML("afterbegin", s));
  };
var mediaQuery = window.matchMedia("(max-width: 1200px)");
photos(mediaQuery),
  mediaQuery.addListener(photos),
  $("img.img-carousel")
    .css({ cursor: "pointer" })
    .on("click", function () {
      var a = $(this),
        s = $("<img />").css({
          "max-width": "100%",
          "max-height": "100%",
          display: "inline",
        });
      s.attr({
        src: a.attr("src"),
        alt: a.attr("alt"),
        title: a.attr("title"),
      });
      $("<div />")
        .text(" ")
        .css({
          height: "100%",
          width: "100%",
          background: "rgba(0,0,0,.82)",
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          cursor: "pointer",
          "z-index": 9999,
          "text-align": "center",
        })
        .append(s)
        .bind("click", function () {
          $(this).fadeOut(300, function () {
            $(this).remove();
          });
        })
        .insertAfter(this)
        .animate({ opacity: 1 }, 300);
    });
