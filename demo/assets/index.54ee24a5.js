import { m as _inherits, n as _getPrototypeOf, q as _possibleConstructorReturn, s as _classCallCheck, v as style, w as _createClass, x as _wrapNativeSuper } from "./mobile.48460718.js";
var Icon = '<path d="M682.666667 810.666667h170.666666a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 896h-170.666666a42.666667 42.666667 0 0 1-4.992-85.034667L682.666667 810.666667zM512 128a213.333333 213.333333 0 0 1 9.258667 426.453333L512 554.666667a298.666667 298.666667 0 0 0-298.666667 298.666666 42.666667 42.666667 0 1 1-85.333333 0 384.128 384.128 0 0 1 238.933333-355.626666A213.333333 213.333333 0 0 1 512 128z m170.666667 554.666667h170.666666a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 768h-170.666666a42.666667 42.666667 0 0 1-4.992-85.034667L682.666667 682.666667z m0-128h170.666666a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 640h-170.666666a42.666667 42.666667 0 0 1-4.992-85.034667L682.666667 554.666667z m-170.666667-341.333334a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" p-id="4064"></path>';
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
var QuarkIconUser = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconUser2, _HTMLElement);
  var _super = _createSuper(QuarkIconUser2);
  function QuarkIconUser2() {
    var _this;
    _classCallCheck(this, QuarkIconUser2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconUser2, [{
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
  return QuarkIconUser2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-user")) {
  customElements.define("quark-icon-user", QuarkIconUser);
}
