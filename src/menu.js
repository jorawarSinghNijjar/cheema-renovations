export const paperMenu = {
  $window: $("#paper-window"),
  $paperFront: $("#paper-front"),
  $hamburger: $(".hamburger"),
  offset: 1800,
  pageHeight: $("#paper-front").outerHeight(),

  open: function () {
    this.$window.addClass("tilt");
    this.$hamburger.off("click");
    $(".hamburger").on("click", this.close.bind(this));
    this.hamburgerFix(true);
    console.log("opening...");
  },

  close: function () {
    this.$window.removeClass("tilt");
    this.$hamburger.off("click");
    this.$hamburger.on("click", this.open.bind(this));
    this.hamburgerFix(false);
    console.log("closing...");
  },

  hamburgerFix: function (opening) {
    if (opening) {
      $(".hamburger").css({
        position: "absolute",
        top: this.$window.scrollTop() + 30 + "px",
      });
    } else {
      setTimeout(function () {
        $(".hamburger").css({
          position: "fixed",
          top: "30px",
        });
      }, 300);
    }
  },

  updateTransformOrigin: function () {
    let scrollTop = this.$window.scrollTop();
    let equation = ((scrollTop + this.offset) / this.pageHeight) * 100;
    this.$paperFront.css("transform-origin", "center " + equation + "%");
  },

  bindEvents: function () {
    this.$hamburger.on("click", this.open.bind(this));
    $(".close-menu, .mobile-nav__list-item").on("click", this.close.bind(this));
    this.$window.on("scroll", this.updateTransformOrigin.bind(this));
  },
  init: function () {
    console.log("initializing...");
    // console.log(this);
    this.bindEvents();
    this.updateTransformOrigin();
  },
};

