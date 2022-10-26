import { m as _inherits, n as _classCallCheck, s as style, q as _createClass, v as _wrapNativeSuper, w as _getPrototypeOf, x as _possibleConstructorReturn } from "./mobile.6b10b621.js";
var Icon$1 = '<path d="M564.608 121.258667l275.114667 185.088A127.146667 127.146667 0 0 1 896 411.818667v281.130666a169.770667 169.770667 0 0 1-107.434667 157.696C712.448 880.896 620.245333 896 512 896c-108.245333 0-200.448-15.104-276.565333-45.354667A169.770667 169.770667 0 0 1 128 692.906667V412.885333a127.146667 127.146667 0 0 1 57.685333-106.410666l284.245334-185.856a85.717333 85.717333 0 0 1 94.72 0.64z m-47.786667 70.314666L232.533333 377.429333a42.410667 42.410667 0 0 0-18.901333 30.165334L213.333333 412.885333v280.064a84.906667 84.906667 0 0 0 53.76 78.848c65.237333 25.941333 146.858667 39.296 244.906667 39.296s179.669333-13.354667 244.992-39.296a84.906667 84.906667 0 0 0 53.376-71.978666l0.298667-6.869334V411.733333a42.368 42.368 0 0 0-14.592-31.914666l-4.181334-3.2-275.072-185.088z m-116.053333 351.274667c24.106667 10.282667 61.397333 15.914667 111.232 15.914667 49.834667 0 87.125333-5.632 111.274667-15.914667a42.666667 42.666667 0 1 1 33.450666 78.506667c-36.352 15.488-84.394667 22.741333-144.725333 22.741333s-108.373333-7.253333-144.725333-22.741333a42.666667 42.666667 0 1 1 33.450666-78.506667z" p-id="4214"></path>';
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var QuarkIconHome = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconHome2, _HTMLElement);
  var _super = _createSuper$1(QuarkIconHome2);
  function QuarkIconHome2() {
    var _this;
    _classCallCheck(this, QuarkIconHome2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$1, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconHome2, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.upgradeProperty();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === "color") {
        this.icon.style.color = newValue;
      } else if (name === "size") {
        var fontSize = this.getFontSize();
        this.icon.style.fontSize = "".concat(fontSize);
      }
    }
  }, {
    key: "upgradeProperty",
    value: function upgradeProperty() {
      this.size = this.size;
      this.color = this.color;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      var fontSize = "";
      if (this.size && (this.size.includes("px") || this.size.includes("rem") || this.size.includes("em"))) {
        fontSize = this.size;
      } else {
        fontSize = "".concat(this.size, "px");
      }
      return fontSize;
    }
  }, {
    key: "size",
    get: function get() {
      return this.getAttribute("size");
    },
    set: function set(value) {
      this.setAttribute("size", value);
    }
  }, {
    key: "color",
    get: function get() {
      return this.getAttribute("color");
    },
    set: function set(value) {
      this.setAttribute("color", value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["size", "color"];
    }
  }]);
  return QuarkIconHome2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-home")) {
  customElements.define("quark-icon-home", QuarkIconHome);
}
var Icon = '<path d="M288.78124999 152c26.8125 0 51.09375001 14.8125 63.37500002 38.8125l69.93749998 135.9375 0 0 0 0c2.25 4.3125 3.46875001 9.46875001 3.46875001 14.34375001 0 7.96875001-3 15.5625-8.4375 21.46874999l-14.53125001 15.84375001h0c-31.40625001 34.125-38.25 84.84375001-16.96874999 126.09374998 29.71875001 57.46875001 75.75 103.50000001 133.21874999 133.12500001 15.46875001 7.96875001 33 12.1875 50.625 12.1875 28.21875001 0 55.03125002-10.3125 75.46875001-29.0625l15.84374999-14.53125001 0.09375001-0.09374999 0.09375001-0.09375001c5.4375-5.0625 13.78125001-8.0625 22.12499998-8.06249998 5.0625 0 9.84375001 1.125 13.78125001 3.09374999l0 0 0 0 136.125 69.9375c23.90625001 12.28125001 38.8125 36.5625 38.8125 63.28125001 0 18.75-7.3125 36.5625-20.53125001 49.96874999l-47.34374999 47.90625001 0 0 0 0c-24.75 25.125-59.34375001 39.46875001-94.78125001 39.46874999-15.1875 0-30.09375001-2.53125001-44.34374999-7.59375001-239.0625-84.5625-428.34375001-278.90625001-506.53125001-519.74999998-17.34375001-53.53125001 1.03124999-112.40625001 45.84375001-146.53125001l41.4375-31.59375001C258.125 157.0625 273.03124999 152 288.78124999 152M288.78124999 92c-29.0625 0-56.53125001 9.28125001-79.49999998 26.8125l-41.34375001 31.59375001c-64.96875001 49.50000001-91.6875 135-66.46874999 212.71874999 83.8125 258.5625 287.0625 467.0625 543.56249998 557.8125 20.71875001 7.3125 42.375 11.0625 64.31250002 11.0625 51.375 0 101.4375-20.90625001 137.43749998-57.375l47.34375001-47.90625001c24.46875001-24.75 37.875-57.46875001 37.875-92.15624999 0-49.40625001-27.375-94.125-71.4375-116.71875001l-136.125-69.93749998c-12.84375001-6.5625-27-9.75-41.25-9.75-22.875 0-45.75 8.25-62.71875001 23.90624999l-15.9375 14.53125001c-9.46875001 8.71875001-22.21875001 13.3125-34.96874999 13.3125-7.96875001 0-15.9375-1.78125001-23.15625001-5.53125001-46.40625001-23.90625001-83.53125001-61.03125002-107.43749998-107.34374998-9.75-18.9375-6.65625001-42.28125001 7.875-58.03125002l14.53124999-15.84374999c15.65625001-16.96875001 24.1875-39 24.1875-62.0625 0-14.53125001-3.46875001-28.96875001-10.125-41.90625001l-69.93750001-135.9375C382.90624999 119.28124999 338.1875 92 288.78124999 92L288.78124999 92z" p-id="861"></path>';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var QuarkIconTel = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconTel2, _HTMLElement);
  var _super = _createSuper(QuarkIconTel2);
  function QuarkIconTel2() {
    var _this;
    _classCallCheck(this, QuarkIconTel2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconTel2, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.upgradeProperty();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === "color") {
        this.icon.style.color = newValue;
      } else if (name === "size") {
        var fontSize = this.getFontSize();
        this.icon.style.fontSize = "".concat(fontSize);
      }
    }
  }, {
    key: "upgradeProperty",
    value: function upgradeProperty() {
      this.size = this.size;
      this.color = this.color;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      var fontSize = "";
      if (this.size && (this.size.includes("px") || this.size.includes("rem") || this.size.includes("em"))) {
        fontSize = this.size;
      } else {
        fontSize = "".concat(this.size, "px");
      }
      return fontSize;
    }
  }, {
    key: "size",
    get: function get() {
      return this.getAttribute("size");
    },
    set: function set(value) {
      this.setAttribute("size", value);
    }
  }, {
    key: "color",
    get: function get() {
      return this.getAttribute("color");
    },
    set: function set(value) {
      this.setAttribute("color", value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["size", "color"];
    }
  }]);
  return QuarkIconTel2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-tel")) {
  customElements.define("quark-icon-tel", QuarkIconTel);
}
