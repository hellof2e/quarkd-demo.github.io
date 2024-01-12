import { s as f, x as r, y as w, z as s, M, B as h, C as d, D as a$1 } from "./mobile.87742fdd.js";
function a(n) {
  var o = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t) {
      return false;
    }
  }();
  return function() {
    var i, r2 = d(n);
    if (o) {
      var c = d(this).constructor;
      i = Reflect.construct(r2, arguments, c);
    } else
      i = r2.apply(this, arguments);
    return a$1(this, i);
  };
}
var u = function(t) {
  f(s$1, t);
  var e = a(s$1);
  function s$1() {
    var t2;
    return r(this, s$1), (t2 = e.call(this)).attachShadow({
      mode: "open"
    }).innerHTML = "\n            <style>\n                ".concat(w, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat('<path d="M682.666667 810.666667h170.666666a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 896h-170.666666a42.666667 42.666667 0 0 1-4.992-85.034667L682.666667 810.666667zM512 128a213.333333 213.333333 0 0 1 9.258667 426.453333L512 554.666667a298.666667 298.666667 0 0 0-298.666667 298.666666 42.666667 42.666667 0 1 1-85.333333 0 384.128 384.128 0 0 1 238.933333-355.626666A213.333333 213.333333 0 0 1 512 128z m170.666667 554.666667h170.666666a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 768h-170.666666a42.666667 42.666667 0 0 1-4.992-85.034667L682.666667 682.666667z m0-128h170.666666a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 640h-170.666666a42.666667 42.666667 0 0 1-4.992-85.034667L682.666667 554.666667z m-170.666667-341.333334a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" p-id="4064"></path>', "\n            </svg>\n        "), t2.icon = t2.shadowRoot.getElementById("icon"), t2;
  }
  return s(s$1, [{
    key: "connectedCallback",
    value: function() {
      this.upgradeProperty();
    }
  }, {
    key: "attributeChangedCallback",
    value: function(t2, e2, n) {
      if ("color" === t2)
        this.icon.style.color = n;
      else if ("size" === t2) {
        var o = this.getFontSize();
        this.icon.style.fontSize = "".concat(o);
      }
    }
  }, {
    key: "upgradeProperty",
    value: function() {
      this.size = this.size, this.color = this.color;
    }
  }, {
    key: "getFontSize",
    value: function() {
      return M(this.size);
    }
  }, {
    key: "size",
    get: function() {
      return this.getAttribute("size");
    },
    set: function(t2) {
      this.setAttribute("size", t2);
    }
  }, {
    key: "color",
    get: function() {
      return this.getAttribute("color");
    },
    set: function(t2) {
      this.setAttribute("color", t2);
    }
  }], [{
    key: "observedAttributes",
    get: function() {
      return ["size", "color"];
    }
  }]), s$1;
}(h(HTMLElement));
customElements.get("quark-icon-user") || customElements.define("quark-icon-user", u);
