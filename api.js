
(function() {

  window.Itch = {};

  Itch.attachBuyButton = function(el, opts) {
    var domain, height, left, top, width;
    if (opts == null) {
      opts = {};
    }
    domain = opts.domain || "itch.io";
    width = opts.width || 650;
    height = opts.height || 400;
    top = (screen.height - height) / 2;
    left = (screen.width - width) / 2;
    if (!opts.user) {
      throw new Error("Missing user");
    }
    if (!opts.game) {
      throw new Error("Missing game");
    }
    return el.onclick = function() {
      var w;
      w = window.open("http://" + opts.user + "." + domain + "/" + opts.game + "/purchase", "purchase", "scrollbars=1, resizable=no, width=" + width + ", height=" + height + ", top=" + top + ", left=" + left);
      if (typeof w.focus === "function") {
        w.focus();
      }
      return false;
    };
  };

}).call(this);
