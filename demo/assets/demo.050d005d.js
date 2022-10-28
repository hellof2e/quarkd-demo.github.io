import { c as createComponent } from "./component.6089a895.js";
import { m as _inherits, n as _classCallCheck, s as style, q as _createClass, v as _wrapNativeSuper, w as _getPrototypeOf, x as _possibleConstructorReturn, _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.fc810470.js";
import "./index.dda09e20.js";
import "./index.e68a3d02.js";
var Icon$G = '<path d="M140.544 311.125333a42.666667 42.666667 0 0 1 56.32-3.498666l4.010667 3.584 310.314666 311.082666 312.021334-311.168a42.666667 42.666667 0 0 1 56.32-3.498666l4.010666 3.584a42.666667 42.666667 0 0 1 3.498667 56.32l-3.584 4.010666-342.186667 341.333334a42.666667 42.666667 0 0 1-56.32 3.498666l-4.010666-3.584-340.48-341.333333a42.666667 42.666667 0 0 1 0.085333-60.330667z" p-id="3930"></path>';
function _createSuper$G(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$G();
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
function _isNativeReflectConstruct$G() {
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
var QuarkIconArrowDown = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconArrowDown2, _HTMLElement);
  var _super = _createSuper$G(QuarkIconArrowDown2);
  function QuarkIconArrowDown2() {
    var _this;
    _classCallCheck(this, QuarkIconArrowDown2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$G, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconArrowDown2, [{
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
  return QuarkIconArrowDown2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-arrow-down")) {
  customElements.define("quark-icon-arrow-down", QuarkIconArrowDown);
}
var Icon$F = '<path d="M482.730667 311.125333a42.666667 42.666667 0 0 1 56.32-3.498666l4.010666 3.584 340.48 341.333333a42.666667 42.666667 0 0 1-56.405333 63.829333l-4.010667-3.584-310.357333-311.125333-311.978667 311.210667a42.666667 42.666667 0 0 1-56.32 3.498666l-4.010666-3.584a42.666667 42.666667 0 0 1-3.498667-56.32l3.584-4.010666 342.186667-341.333334z" p-id="3780"></path>';
function _createSuper$F(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$F();
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
function _isNativeReflectConstruct$F() {
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
var QuarkIconArrowUp = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconArrowUp2, _HTMLElement);
  var _super = _createSuper$F(QuarkIconArrowUp2);
  function QuarkIconArrowUp2() {
    var _this;
    _classCallCheck(this, QuarkIconArrowUp2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$F, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconArrowUp2, [{
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
  return QuarkIconArrowUp2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-arrow-up")) {
  customElements.define("quark-icon-arrow-up", QuarkIconArrowUp);
}
var Icon$E = '<path d="M725.333333 128a170.666667 170.666667 0 0 1 170.666667 170.666667v298.666666a170.666667 170.666667 0 0 1-170.666667 170.666667h-63.061333l-85.205333 100.693333a85.333333 85.333333 0 0 1-130.218667 0.128L361.344 768H298.666667a170.666667 170.666667 0 0 1-170.666667-170.666667V298.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h426.666666z m0 85.333333H298.666667a85.333333 85.333333 0 0 0-85.12 78.933334L213.333333 298.666667v298.666666a85.333333 85.333333 0 0 0 78.933334 85.12L298.666667 682.666667h62.677333a85.333333 85.333333 0 0 1 59.989333 24.661333l5.077334 5.461333 85.504 100.821334 85.205333-100.693334a85.333333 85.333333 0 0 1 57.685333-29.909333l7.466667-0.341333H725.333333a85.333333 85.333333 0 0 0 85.12-78.933334L810.666667 597.333333V298.666667a85.333333 85.333333 0 0 0-78.933334-85.12L725.333333 213.333333zM400.725333 420.394667c24.149333 10.325333 61.44 15.957333 111.274667 15.957333 49.834667 0 87.125333-5.632 111.274667-15.957333a42.666667 42.666667 0 0 1 33.450666 78.506666c-36.352 15.530667-84.394667 22.784-144.725333 22.784s-108.373333-7.253333-144.725333-22.784a42.666667 42.666667 0 1 1 33.450666-78.506666z" p-id="3222"></path>';
function _createSuper$E(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$E();
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
function _isNativeReflectConstruct$E() {
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
var QuarkIconMessage = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconMessage2, _HTMLElement);
  var _super = _createSuper$E(QuarkIconMessage2);
  function QuarkIconMessage2() {
    var _this;
    _classCallCheck(this, QuarkIconMessage2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$E, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconMessage2, [{
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
  return QuarkIconMessage2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-message")) {
  customElements.define("quark-icon-message", QuarkIconMessage);
}
var Icon$D = '<path d="M641.749333 128c57.301333 0 110.549333 28.672 142.122667 75.904l5.077333 8.064 125.994667 213.333333c29.866667 50.517333 31.530667 112.554667 4.992 164.394667l-4.992 9.002667-125.994667 213.333333a170.922667 170.922667 0 0 1-137.685333 83.712l-9.514667 0.256H382.72c-57.173333 0-110.378667-28.586667-141.994667-75.690667l-5.077333-8.021333-126.421333-213.333333a170.453333 170.453333 0 0 1-5.034667-164.821334l5.034667-9.088 126.421333-213.333333a170.922667 170.922667 0 0 1 137.557333-83.456L382.72 128h259.072z m0 85.333333H382.72c-27.861333 0-53.845333 13.568-69.76 36.053334l-3.754667 5.802666-126.464 213.333334c-14.677333 24.746667-15.786667 55.04-3.413333 80.64l3.413333 6.314666 126.464 213.333334c14.165333 23.936 39.082667 39.338667 66.56 41.557333L382.72 810.666667h259.072c27.946667 0 53.930667-13.610667 69.845333-36.138667l3.754667-5.845333 126.037333-213.333334c14.506667-24.533333 15.658667-54.485333 3.584-79.872l-3.584-6.826666-126.037333-213.333334a85.461333 85.461333 0 0 0-66.645333-41.685333L641.706667 213.333333z m-130.261333 128a170.794667 170.794667 0 0 1 170.88 170.666667c0 94.293333-76.501333 170.666667-170.88 170.666667a170.794667 170.794667 0 0 1-170.88-170.666667c0-94.293333 76.501333-170.666667 170.88-170.666667z m0 85.333334a85.376 85.376 0 0 0-85.461333 85.333333c0 47.146667 38.272 85.333333 85.461333 85.333333a85.376 85.376 0 0 0 85.418667-85.333333c0-47.146667-38.229333-85.333333-85.418667-85.333333z" p-id="3764"></path>';
function _createSuper$D(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$D();
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
function _isNativeReflectConstruct$D() {
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
var QuarkIconSetting = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSetting2, _HTMLElement);
  var _super = _createSuper$D(QuarkIconSetting2);
  function QuarkIconSetting2() {
    var _this;
    _classCallCheck(this, QuarkIconSetting2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$D, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSetting2, [{
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
  return QuarkIconSetting2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-setting")) {
  customElements.define("quark-icon-setting", QuarkIconSetting);
}
var Icon$C = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m0 469.333333a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m0-341.333333a42.666667 42.666667 0 0 1 42.368 37.674666L554.666667 341.333333v170.666667a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 512V341.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="5356"></path>';
function _createSuper$C(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$C();
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
function _isNativeReflectConstruct$C() {
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
var QuarkIconWarningO = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconWarningO2, _HTMLElement);
  var _super = _createSuper$C(QuarkIconWarningO2);
  function QuarkIconWarningO2() {
    var _this;
    _classCallCheck(this, QuarkIconWarningO2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$C, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconWarningO2, [{
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
  return QuarkIconWarningO2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-warning-o")) {
  customElements.define("quark-icon-warning-o", QuarkIconWarningO);
}
var Icon$B = '<path d="M512 128a42.666667 42.666667 0 0 1 42.368 37.674667L554.666667 170.666667l-0.042667 298.624L853.333333 469.333333a42.666667 42.666667 0 0 1 4.992 85.034667L853.333333 554.666667l-298.709333-0.042667L554.666667 853.333333a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 853.333333l-0.042666-298.709333L170.666667 554.666667a42.666667 42.666667 0 0 1-4.992-85.034667L170.666667 469.333333l298.624-0.042666L469.333333 170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="4514"></path>';
function _createSuper$B(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$B();
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
function _isNativeReflectConstruct$B() {
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
var QuarkIconPlus = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconPlus2, _HTMLElement);
  var _super = _createSuper$B(QuarkIconPlus2);
  function QuarkIconPlus2() {
    var _this;
    _classCallCheck(this, QuarkIconPlus2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$B, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconPlus2, [{
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
  return QuarkIconPlus2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-plus")) {
  customElements.define("quark-icon-plus", QuarkIconPlus);
}
var Icon$A = '<path d="M746.666667 512a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m-298.666667 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m-298.666667 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z" p-id="4664"></path>';
function _createSuper$A(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$A();
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
function _isNativeReflectConstruct$A() {
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
var QuarkIconMoreH = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconMoreH2, _HTMLElement);
  var _super = _createSuper$A(QuarkIconMoreH2);
  function QuarkIconMoreH2() {
    var _this;
    _classCallCheck(this, QuarkIconMoreH2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$A, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconMoreH2, [{
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
  return QuarkIconMoreH2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-more-h")) {
  customElements.define("quark-icon-more-h", QuarkIconMoreH);
}
var Icon$z = '<path d="M512 277.333333a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m0 298.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m0 298.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" p-id="4814"></path>';
function _createSuper$z(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$z();
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
function _isNativeReflectConstruct$z() {
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
var QuarkIconMoreV = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconMoreV2, _HTMLElement);
  var _super = _createSuper$z(QuarkIconMoreV2);
  function QuarkIconMoreV2() {
    var _this;
    _classCallCheck(this, QuarkIconMoreV2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$z, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconMoreV2, [{
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
  return QuarkIconMoreV2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-more-v")) {
  customElements.define("quark-icon-more-v", QuarkIconMoreV);
}
var Icon$y = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m0 298.666666a42.666667 42.666667 0 0 1 42.368 37.674667L554.666667 512v170.666667a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 682.666667v-170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m0-170.666666a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z" p-id="5656"></path>';
function _createSuper$y(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$y();
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
function _isNativeReflectConstruct$y() {
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
var QuarkIconInfo = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconInfo2, _HTMLElement);
  var _super = _createSuper$y(QuarkIconInfo2);
  function QuarkIconInfo2() {
    var _this;
    _classCallCheck(this, QuarkIconInfo2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$y, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconInfo2, [{
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
  return QuarkIconInfo2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-info")) {
  customElements.define("quark-icon-info", QuarkIconInfo);
}
var Icon$x = '<path d="M511.616 128a42.666667 42.666667 0 0 1 4.992 85.034667L511.573333 213.333333H298.496a85.290667 85.290667 0 0 0-84.992 78.933334L213.248 298.666667v364.8a128 128 0 0 0 92.928 123.178666c56.064 15.914667 124.586667 24.021333 205.44 24.021334 81.024 0 149.76-8.106667 206.122667-24.149334a127.957333 127.957333 0 0 0 92.8-115.754666l0.213333-7.808-0.768-236.16a42.666667 42.666667 0 0 1 84.949333-5.248l0.298667 4.992 0.768 236.16a213.290667 213.290667 0 0 1-155.008 205.952c-64.554667 18.346667-140.970667 27.349333-229.376 27.349333-88.234667 0-164.437333-9.002667-228.736-27.306667a213.333333 213.333333 0 0 1-154.666667-195.413333L128 663.466667V298.666667a170.581333 170.581333 0 0 1 162.005333-170.453334l8.533334-0.213333h213.077333z m329.216 12.501333a42.666667 42.666667 0 0 1 3.541333 56.32l-3.541333 4.010667-384 384a42.666667 42.666667 0 0 1-63.872-56.32l3.541333-4.010667 384-384a42.666667 42.666667 0 0 1 60.330667 0z" p-id="5806"></path>';
function _createSuper$x(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$x();
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
function _isNativeReflectConstruct$x() {
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
var QuarkIconEdit = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconEdit2, _HTMLElement);
  var _super = _createSuper$x(QuarkIconEdit2);
  function QuarkIconEdit2() {
    var _this;
    _classCallCheck(this, QuarkIconEdit2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$x, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconEdit2, [{
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
  return QuarkIconEdit2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-edit")) {
  customElements.define("quark-icon-edit", QuarkIconEdit);
}
var Icon$w = '<path d="M512 106.666667a405.333333 405.333333 0 0 1 405.333333 405.333333c0 223.872-176 405.333333-405.333333 405.333333-53.205333 0-107.434667-11.52-162.688-34.688a85.333333 85.333333 0 0 0-50.048-4.821333l-82.858667 16.981333a73.856 73.856 0 0 1-87.210666-87.210666l17.621333-85.888a85.248 85.248 0 0 0-3.2-45.781334C118.997333 607.146667 106.666667 552.448 106.666667 512c0-244.053333 181.461333-405.333333 405.333333-405.333333z m0 85.333333c-184.618667 0-320 130.730667-320 320 0 28.885333 10.325333 74.752 32 135.338667 9.301333 26.112 12.074667 54.016 8.192 81.322666l-1.792 10.24-14.165333 68.821334 65.877333-13.525334a170.666667 170.666667 0 0 1 89.472 5.717334l10.666667 4.010666c45.098667 18.901333 88.192 28.074667 129.749333 28.074667 180.138667 0 320-141.226667 320-320A320 320 0 0 0 512 192z m166.613333 451.157333a42.666667 42.666667 0 0 1-20.48 56.746667c-36.778667 17.322667-85.333333 25.429333-146.133333 25.429333-60.842667 0-109.354667-8.106667-146.176-25.386666a42.666667 42.666667 0 0 1 31.701333-79.061334l4.650667 1.834667C425.813333 633.856 462.634667 640 512 640c45.226667 0 79.914667-5.12 103.68-14.592l6.144-2.688a42.666667 42.666667 0 0 1 56.746667 20.48z" p-id="6556"></path>';
function _createSuper$w(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$w();
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
function _isNativeReflectConstruct$w() {
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
var QuarkIconComment = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconComment2, _HTMLElement);
  var _super = _createSuper$w(QuarkIconComment2);
  function QuarkIconComment2() {
    var _this;
    _classCallCheck(this, QuarkIconComment2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$w, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconComment2, [{
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
  return QuarkIconComment2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-comment")) {
  customElements.define("quark-icon-comment", QuarkIconComment);
}
var Icon$v = '<path d="M638.165333 85.333333a85.333333 85.333333 0 0 1 82.133334 107.306667L680.789333 341.333333h108.970667a128 128 0 0 1 125.141333 152.746667l-44.629333 227.456a170.752 170.752 0 0 1-85.12 116.949333C714.453333 877.269333 618.026667 896 495.573333 896c-110.037333 0-199.210667-15.146667-267.776-46.293333A170.794667 170.794667 0 0 1 128 694.229333V469.333333c0-70.698667 57.088-128 127.530667-128h79.274666c30.72 0 59.008-16.64 74.069334-43.434666l72.704-129.493334A162.56 162.56 0 0 1 623.274667 85.333333z m0 85.333334h-14.890666c-27.989333 0-53.845333 15.146667-67.626667 39.68L482.986667 339.754667a170.154667 170.154667 0 0 1-99.882667 79.872l-0.085333 384.170666c33.834667 4.522667 71.381333 6.826667 112.597333 6.826667 109.397333 0 192.426667-16.128 248.704-47.018667 22.144-12.202667 37.717333-33.621333 42.581333-58.538666l44.629334-227.541334A42.666667 42.666667 0 0 0 789.76 426.666667h-108.970667a85.162667 85.162667 0 0 1-82.133333-107.306667L638.165333 170.666667z m-340.138666 256h-42.496a42.581333 42.581333 0 0 0-42.496 42.666666v224.896c0 33.536 19.498667 63.957333 49.877333 77.781334 10.88 4.949333 22.613333 9.429333 35.114667 13.44V426.666667z" p-id="6406"></path>';
function _createSuper$v(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$v();
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
function _isNativeReflectConstruct$v() {
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
var QuarkIconGoodJob = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconGoodJob2, _HTMLElement);
  var _super = _createSuper$v(QuarkIconGoodJob2);
  function QuarkIconGoodJob2() {
    var _this;
    _classCallCheck(this, QuarkIconGoodJob2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$v, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconGoodJob2, [{
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
  return QuarkIconGoodJob2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-good-job")) {
  customElements.define("quark-icon-good-job", QuarkIconGoodJob);
}
var Icon$u = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m0 469.333333a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-0.213333-341.333333a113.066667 113.066667 0 0 1 80.298666 33.152 113.066667 113.066667 0 0 1 33.194667 80.085333 113.066667 113.066667 0 0 1-33.194667 80.085333 163.114667 163.114667 0 0 1-19.797333 16.554667 42.538667 42.538667 0 0 0-17.322667 29.568l-0.298666 5.12v2.432a42.666667 42.666667 0 0 1-84.992 5.546667L469.333333 545.877333v-2.389333a127.872 127.872 0 0 1 46.421334-99.072l12.16-9.386667 3.84-3.370666a27.733333 27.733333 0 0 0 8.192-19.754667 27.733333 27.733333 0 0 0-8.192-19.754667A27.733333 27.733333 0 0 0 512 384c-8.874667 0-22.869333 4.906667-34.944 13.226667a42.666667 42.666667 0 1 1-48.256-70.4c25.472-17.493333 55.808-28.117333 83.029333-28.16z" p-id="5956"></path>';
function _createSuper$u(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$u();
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
function _isNativeReflectConstruct$u() {
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
var QuarkIconHelp = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconHelp2, _HTMLElement);
  var _super = _createSuper$u(QuarkIconHelp2);
  function QuarkIconHelp2() {
    var _this;
    _classCallCheck(this, QuarkIconHelp2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$u, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconHelp2, [{
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
  return QuarkIconHelp2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-help")) {
  customElements.define("quark-icon-help", QuarkIconHelp);
}
var Icon$t = '<path d="M853.333333 469.333333a42.666667 42.666667 0 0 1 4.992 85.034667L853.333333 554.666667H170.666667a42.666667 42.666667 0 0 1-4.992-85.034667L170.666667 469.333333h682.666666z m-85.333333-341.333333a128 128 0 0 1 127.786667 120.448L896 256v85.333333a42.666667 42.666667 0 0 1-85.034667 4.949334L810.666667 341.333333V256a42.666667 42.666667 0 0 0-37.674667-42.410667L768 213.333333h-85.333333a42.666667 42.666667 0 0 1-4.992-85.077333L682.666667 128h85.333333zM256 896a128 128 0 0 1-127.786667-120.490667L128 768v-85.333333a42.666667 42.666667 0 0 1 85.034667-4.992L213.333333 682.666667v85.333333a42.666667 42.666667 0 0 0 37.674667 42.368L256 810.666667h85.333333a42.666667 42.666667 0 0 1 4.992 85.034666L341.333333 896H256z m597.333333-256a42.666667 42.666667 0 0 1 42.368 37.674667L896 682.666667v85.333333a128 128 0 0 1-120.490667 127.786667L768 896h-85.333333a42.666667 42.666667 0 0 1-4.992-85.077333L682.666667 810.666667h85.333333a42.666667 42.666667 0 0 0 42.368-37.717334L810.666667 768v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667zM170.666667 384a42.666667 42.666667 0 0 1-42.368-37.717333L128 341.333333V256a128 128 0 0 1 120.490667-127.786667L256 128h85.333333a42.666667 42.666667 0 0 1 4.992 85.034667L341.333333 213.333333H256a42.666667 42.666667 0 0 0-42.368 37.674667L213.333333 256v85.333333a42.666667 42.666667 0 0 1-42.666666 42.666667z" p-id="6106"></path>';
function _createSuper$t(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$t();
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
function _isNativeReflectConstruct$t() {
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
var QuarkIconScan = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconScan2, _HTMLElement);
  var _super = _createSuper$t(QuarkIconScan2);
  function QuarkIconScan2() {
    var _this;
    _classCallCheck(this, QuarkIconScan2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$t, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconScan2, [{
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
  return QuarkIconScan2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-scan")) {
  customElements.define("quark-icon-scan", QuarkIconScan);
}
var Icon$s = '<path d="M725.333333 213.333333a85.333333 85.333333 0 0 1 85.333334 85.333334v25.386666A128 128 0 0 1 764.586667 422.4l-66.56 55.466667a42.666667 42.666667 0 0 0-15.36 32.768v324.864a85.333333 85.333333 0 0 1-42.794667 73.856c-33.962667 19.541333-76.586667 29.312-127.872 29.312s-93.866667-9.770667-127.872-29.312A85.333333 85.333333 0 0 1 341.333333 835.498667v-324.864a42.666667 42.666667 0 0 0-15.36-32.768L259.413333 422.4A128 128 0 0 1 213.333333 324.053333V298.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h426.666666z m0 85.333334H298.666667v25.386666a42.666667 42.666667 0 0 0 11.434666 29.056l3.925334 3.712 66.56 55.466667a128 128 0 0 1 45.781333 89.6l0.298667 8.746667v324.736l6.954666 3.669333c19.413333 9.216 45.269333 14.293333 78.378667 14.293333s58.965333-5.12 78.336-14.293333L597.333333 835.413333v-324.778666a128 128 0 0 1 39.552-92.501334l6.485334-5.802666 66.602666-55.466667a42.666667 42.666667 0 0 0 15.018667-27.434667L725.333333 324.053333V298.666667z m-213.333333 256a42.666667 42.666667 0 0 1 42.368 37.674666L554.666667 597.333333v85.333334a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 682.666667v-85.333334a42.666667 42.666667 0 0 1 42.666667-42.666666z m128-469.333334a42.666667 42.666667 0 0 1 4.992 85.034667L640 170.666667H384a42.666667 42.666667 0 0 1-4.992-85.034667L384 85.333333h256z" p-id="6856"></path>';
function _createSuper$s(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$s();
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
function _isNativeReflectConstruct$s() {
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
var QuarkIconFlash = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconFlash2, _HTMLElement);
  var _super = _createSuper$s(QuarkIconFlash2);
  function QuarkIconFlash2() {
    var _this;
    _classCallCheck(this, QuarkIconFlash2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$s, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconFlash2, [{
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
  return QuarkIconFlash2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-flash")) {
  customElements.define("quark-icon-flash", QuarkIconFlash);
}
var Icon$r = '<path d="M856.618667 243.968c95.146667 97.749333 95.146667 256.213333 0 353.962667l-252.458667 259.285333a128.938667 128.938667 0 0 1-180.992 3.328l-3.328-3.328-252.458667-259.285333c-95.146667-97.706667-95.146667-256.213333 0-353.962667a239.189333 239.189333 0 0 1 344.618667 0 239.189333 239.189333 0 0 1 344.618667 0zM450.56 302.592a153.216 153.216 0 0 0-221.738667 0c-61.141333 62.762667-63.232 164.394667-6.314666 229.845333l6.314666 6.869334 253.568 260.437333c15.658667 14.933333 39.893333 15.658667 56.362667 2.474667l3.968-3.584 252.458667-259.328c63.317333-65.024 63.317333-171.690667 0-236.714667a153.088 153.088 0 0 0-215.210667-6.314667l-6.528 6.314667a85.973333 85.973333 0 0 1-117.674667 4.906667l-5.205333-4.906667z"  p-id="7006"></path>';
function _createSuper$r(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$r();
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
function _isNativeReflectConstruct$r() {
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
var QuarkIconLike = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconLike2, _HTMLElement);
  var _super = _createSuper$r(QuarkIconLike2);
  function QuarkIconLike2() {
    var _this;
    _classCallCheck(this, QuarkIconLike2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$r, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconLike2, [{
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
  return QuarkIconLike2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-like")) {
  customElements.define("quark-icon-like", QuarkIconLike);
}
var Icon$q = '<path d="M554.496 127.402667c18.773333 9.429333 34.005333 24.832 43.306667 43.818666l73.6 150.314667 164.053333 24.32c52.352 7.765333 88.533333 57.002667 80.853333 109.909333a97.28 97.28 0 0 1-27.818666 55.210667l-118.570667 117.248 27.818667 165.333333c8.832 52.736-26.24 102.741333-78.378667 111.701334a94.805333 94.805333 0 0 1-60.458667-9.685334L512 817.749333 365.098667 895.573333a95.232 95.232 0 0 1-129.28-40.832 97.834667 97.834667 0 0 1-9.557334-61.184l27.818667-165.333333-118.613333-117.248a97.621333 97.621333 0 0 1-1.536-136.96 95.402667 95.402667 0 0 1 54.613333-28.16l164.053333-24.32 73.6-150.314667a95.274667 95.274667 0 0 1 128.298667-43.818666z m-36.949333 75.52a12.373333 12.373333 0 0 0-15.189334 3.242666l-1.536 2.432-73.642666 150.314667c-11.093333 22.698667-31.658667 38.997333-55.808 44.672l-6.698667 1.28-164.053333 24.32a12.458667 12.458667 0 0 0-7.125334 3.669333 12.757333 12.757333 0 0 0-1.621333 15.616l1.834667 2.261334 118.570666 117.248c17.92 17.706667 26.88 42.538667 24.746667 67.541333l-0.853333 6.826667-27.818667 165.333333a12.8 12.8 0 0 0 1.28 7.978667 12.458667 12.458667 0 0 0 14.122667 6.4l2.730666-1.066667 146.858667-77.824a82.432 82.432 0 0 1 70.570667-3.2l6.741333 3.2 146.858667 77.824a12.373333 12.373333 0 0 0 7.893333 1.28 12.586667 12.586667 0 0 0 10.368-11.690667l-0.128-2.901333-27.818667-165.376a84.906667 84.906667 0 0 1 19.2-69.333333l4.693334-4.992 118.570666-117.248a12.672 12.672 0 0 0-4.138666-20.778667l-2.773334-0.768-164.053333-24.32a83.2 83.2 0 0 1-59.306667-39.936l-3.242666-6.016-73.6-150.314667a12.586667 12.586667 0 0 0-3.370667-4.266666l-2.261333-1.450667z"  p-id="7306"></path>';
function _createSuper$q(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$q();
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
function _isNativeReflectConstruct$q() {
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
var QuarkIconStar = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconStar2, _HTMLElement);
  var _super = _createSuper$q(QuarkIconStar2);
  function QuarkIconStar2() {
    var _this;
    _classCallCheck(this, QuarkIconStar2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$q, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconStar2, [{
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
  return QuarkIconStar2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-star")) {
  customElements.define("quark-icon-star", QuarkIconStar);
}
var Icon$p = '<path d="M768 128a128 128 0 0 1 127.786667 120.448L896 256v85.333333a42.666667 42.666667 0 0 1-85.034667 4.949334L810.666667 341.333333V256a42.666667 42.666667 0 0 0-37.674667-42.410667L768 213.333333h-85.333333a42.666667 42.666667 0 0 1-4.992-85.077333L682.666667 128h85.333333zM256 896a128 128 0 0 1-127.786667-120.490667L128 768v-85.333333a42.666667 42.666667 0 0 1 85.034667-4.992L213.333333 682.666667v85.333333a42.666667 42.666667 0 0 0 37.674667 42.368L256 810.666667h85.333333a42.666667 42.666667 0 0 1 4.992 85.034666L341.333333 896H256z m597.333333-256a42.666667 42.666667 0 0 1 42.368 37.674667L896 682.666667v85.333333a128 128 0 0 1-120.490667 127.786667L768 896h-85.333333a42.666667 42.666667 0 0 1-4.992-85.077333L682.666667 810.666667h85.333333a42.666667 42.666667 0 0 0 42.368-37.717334L810.666667 768v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667zM170.666667 384a42.666667 42.666667 0 0 1-42.368-37.717333L128 341.333333V256a128 128 0 0 1 120.490667-127.786667L256 128h85.333333a42.666667 42.666667 0 0 1 4.992 85.034667L341.333333 213.333333H256a42.666667 42.666667 0 0 0-42.368 37.674667L213.333333 256v85.333333a42.666667 42.666667 0 0 1-42.666666 42.666667z" p-id="7456"></path>';
function _createSuper$p(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$p();
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
function _isNativeReflectConstruct$p() {
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
var QuarkIconExpand = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconExpand2, _HTMLElement);
  var _super = _createSuper$p(QuarkIconExpand2);
  function QuarkIconExpand2() {
    var _this;
    _classCallCheck(this, QuarkIconExpand2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$p, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconExpand2, [{
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
  return QuarkIconExpand2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-expand")) {
  customElements.define("quark-icon-expand", QuarkIconExpand);
}
var Icon$o = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m158.165333 225.834666a42.666667 42.666667 0 0 1 3.541334 56.32l-3.541334 4.010667-170.666666 170.666667a42.666667 42.666667 0 0 1-56.32 3.541333l-4.010667-3.541333-85.333333-85.333334a42.666667 42.666667 0 0 1 56.32-63.872l4.010666 3.541334L469.333333 536.96l140.501334-140.458667a42.666667 42.666667 0 0 1 60.330666 0z" p-id="7606"></path>';
function _createSuper$o(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$o();
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
function _isNativeReflectConstruct$o() {
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
var QuarkIconSuccessO = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSuccessO2, _HTMLElement);
  var _super = _createSuper$o(QuarkIconSuccessO2);
  function QuarkIconSuccessO2() {
    var _this;
    _classCallCheck(this, QuarkIconSuccessO2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$o, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSuccessO2, [{
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
  return QuarkIconSuccessO2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-success-o")) {
  customElements.define("quark-icon-success-o", QuarkIconSuccessO);
}
var Icon$n = '<path d="M195.242667 85.333333a42.24 42.24 0 0 1 41.301333 34.346667l0.682667 5.034667L243.925333 213.333333h547.157334c2.261333 0 4.522667 0.042667 6.784 0.170667l6.741333 0.554667c69.333333 7.594667 119.466667 70.698667 112 141.013333l-25.429333 238.933333a170.026667 170.026667 0 0 1-118.4 145.152c-62.72 19.370667-140.288 28.842667-232.874667 28.842667-91.221333 0-167.850667-9.216-230.101333-27.989333a170.24 170.24 0 0 1-119.68-149.333334l-27.093334-331.136v-0.256L156.288 170.666667h-28.885333a42.282667 42.282667 0 0 1-41.813334-37.674667L85.333333 128c0-21.888 16.213333-39.936 37.162667-42.368L127.402667 85.333333h67.84z m595.84 213.333334H250.666667l23.338666 284.885333c2.901333 34.986667 26.624 64.64 59.818667 74.666667 53.589333 16.213333 122.368 24.448 206.08 24.448 84.906667 0 154.453333-8.533333 208.384-25.173334a84.992 84.992 0 0 0 59.221333-72.576l25.429334-239.018666A42.538667 42.538667 0 0 0 791.125333 298.666667zM789.333333 938.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m-469.333333 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" p-id="7756"></path>';
function _createSuper$n(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$n();
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
function _isNativeReflectConstruct$n() {
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
var QuarkIconShopCart = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconShopCart2, _HTMLElement);
  var _super = _createSuper$n(QuarkIconShopCart2);
  function QuarkIconShopCart2() {
    var _this;
    _classCallCheck(this, QuarkIconShopCart2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$n, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconShopCart2, [{
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
  return QuarkIconShopCart2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-shop-cart")) {
  customElements.define("quark-icon-shop-cart", QuarkIconShopCart);
}
var Icon$m = '<path d="M767.445333 185.045333l8.874667 8.490667h-0.426667a365.952 365.952 0 0 1 8.533334 513.28l-8.533334 8.789333-203.946666 198.741334c-31.530667 30.72-81.066667 32.341333-114.474667 4.864l-5.376-4.864-203.946667-198.741334a365.994667 365.994667 0 0 1 0-522.069333c143.018667-141.397333 372.821333-144.213333 519.296-8.533333zM308.48 253.312a281.941333 281.941333 0 0 0-8.106667 394.24l7.68 7.808L512 854.186667l203.52-198.4a282.026667 282.026667 0 0 0 7.68-394.581334l-7.68-7.893333-9.173333-9.088-6.528-5.717333c-113.237333-96.256-283.989333-91.306667-391.338667 14.805333zM511.701333 341.333333a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 85.333334a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z" p-id="7906"></path>';
function _createSuper$m(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$m();
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
function _isNativeReflectConstruct$m() {
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
var QuarkIconLocation = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconLocation2, _HTMLElement);
  var _super = _createSuper$m(QuarkIconLocation2);
  function QuarkIconLocation2() {
    var _this;
    _classCallCheck(this, QuarkIconLocation2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$m, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconLocation2, [{
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
  return QuarkIconLocation2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-location")) {
  customElements.define("quark-icon-location", QuarkIconLocation);
}
var Icon$l = '<path d="M512 85.333333a384 384 0 0 1 383.829333 372.693334L896 469.333333v256a213.333333 213.333333 0 0 1-204.074667 213.12L682.666667 938.666667h-170.666667a42.666667 42.666667 0 0 1-4.992-85.034667L512 853.333333h170.666667a128.042667 128.042667 0 0 0 120.704-85.333333H768a85.333333 85.333333 0 0 1-85.333333-85.333333v-128a85.333333 85.333333 0 0 1 85.333333-85.333334h42.666667a298.666667 298.666667 0 0 0-597.162667-10.24L213.333333 469.333333h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333334v128a85.333333 85.333333 0 0 1-85.333333 85.333333H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-256a384 384 0 0 1 384-384zM256 554.666667H213.333333v128h42.666667v-128z m554.666667 0h-42.666667v128h42.666667v-128z"  p-id="8056"></path>';
function _createSuper$l(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$l();
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
function _isNativeReflectConstruct$l() {
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
var QuarkIconCustomerService = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconCustomerService2, _HTMLElement);
  var _super = _createSuper$l(QuarkIconCustomerService2);
  function QuarkIconCustomerService2() {
    var _this;
    _classCallCheck(this, QuarkIconCustomerService2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$l, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconCustomerService2, [{
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
  return QuarkIconCustomerService2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-customer-service")) {
  customElements.define("quark-icon-customer-service", QuarkIconCustomerService);
}
var Icon$k = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m0 384c77.013333 0 146.901333 41.173333 184.746667 106.666666a42.666667 42.666667 0 1 1-73.813334 42.666667A127.914667 127.914667 0 0 0 512 640a127.914667 127.914667 0 0 0-110.933333 64 42.666667 42.666667 0 1 1-73.813334-42.666667A213.248 213.248 0 0 1 512 554.666667z m128-213.333334a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM384 341.333333a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" p-id="8356"></path>';
function _createSuper$k(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$k();
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
function _isNativeReflectConstruct$k() {
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
var QuarkIconUnSmile = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconUnSmile2, _HTMLElement);
  var _super = _createSuper$k(QuarkIconUnSmile2);
  function QuarkIconUnSmile2() {
    var _this;
    _classCallCheck(this, QuarkIconUnSmile2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$k, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconUnSmile2, [{
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
  return QuarkIconUnSmile2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-unsmile")) {
  customElements.define("quark-icon-unsmile", QuarkIconUnSmile);
}
var Icon$j = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m169.216 389.717333a42.666667 42.666667 0 0 1 15.573333 58.325333A213.248 213.248 0 0 1 512 725.333333a213.248 213.248 0 0 1-184.746667-106.666666 42.666667 42.666667 0 1 1 73.813334-42.666667A127.914667 127.914667 0 0 0 512 640a127.914667 127.914667 0 0 0 110.933333-64 42.666667 42.666667 0 0 1 58.282667-15.616zM640 341.333333a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM384 341.333333a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" p-id="8506"></path>';
function _createSuper$j(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$j();
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
function _isNativeReflectConstruct$j() {
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
var QuarkIconSmile = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSmile2, _HTMLElement);
  var _super = _createSuper$j(QuarkIconSmile2);
  function QuarkIconSmile2() {
    var _this;
    _classCallCheck(this, QuarkIconSmile2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$j, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSmile2, [{
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
  return QuarkIconSmile2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-smile")) {
  customElements.define("quark-icon-smile", QuarkIconSmile);
}
var Icon$i = '<path d="M563.84 93.44l10.026667 3.541333 240.512 93.866667a128.426667 128.426667 0 0 1 81.365333 111.402667L896 310.613333v297.813334a257.109333 257.109333 0 0 1-123.434667 219.733333l-9.301333 5.418667-210.176 115.882666a85.077333 85.077333 0 0 1-75.690667 3.242667l-6.485333-3.242667-210.176-115.882666a257.024 257.024 0 0 1-132.522667-214.4L128 608.341333V310.613333c0-50.176 29.098667-95.488 73.984-116.48l7.637333-3.242666 240.512-93.866667a170.112 170.112 0 0 1 113.706667-3.541333z m-75.221333 80.810667l-7.552 2.56-240.512 93.866666c-14.762667 5.76-25.002667 19.2-26.88 34.688L213.333333 310.570667v297.813333c0 59.306667 30.592 114.218667 80.469334 145.365333l8.021333 4.693334L512 874.410667l210.176-115.882667a171.349333 171.349333 0 0 0 88.234667-140.8l0.256-9.344V310.613333c0-15.872-8.746667-30.293333-22.442667-37.717333l-4.778667-2.176-240.512-93.866667a85.034667 85.034667 0 0 0-54.314666-2.56z m-35.84 228.693333l4.053333 3.584L512 461.866667l55.210667-55.338667a42.538667 42.538667 0 0 1 60.330666 0c15.36 15.445333 16.554667 39.722667 3.541334 56.533333l-3.541334 4.010667-55.168 55.381333 55.168 55.381334c16.64 16.725333 16.64 43.818667 0 60.544a42.581333 42.581333 0 0 1-56.32 3.541333l-4.010666-3.541333L512 582.997333l-55.168 55.381334a42.538667 42.538667 0 0 1-60.330667 0 42.922667 42.922667 0 0 1-3.541333-56.533334l3.541333-4.010666 55.125334-55.381334-55.125334-55.381333a42.922667 42.922667 0 0 1 0-60.544 42.581333 42.581333 0 0 1 56.32-3.541333z" p-id="8656"></path>';
function _createSuper$i(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$i();
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
function _isNativeReflectConstruct$i() {
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
var QuarkIconUnSafe = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconUnSafe2, _HTMLElement);
  var _super = _createSuper$i(QuarkIconUnSafe2);
  function QuarkIconUnSafe2() {
    var _this;
    _classCallCheck(this, QuarkIconUnSafe2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$i, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconUnSafe2, [{
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
  return QuarkIconUnSafe2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-unsafe")) {
  customElements.define("quark-icon-unsafe", QuarkIconUnSafe);
}
var Icon$h = '<path d="M563.84 93.44l10.026667 3.541333 240.512 93.866667a128.426667 128.426667 0 0 1 81.365333 111.402667L896 310.613333v297.813334a257.109333 257.109333 0 0 1-123.434667 219.733333l-9.301333 5.418667-210.176 115.882666a85.077333 85.077333 0 0 1-75.690667 3.242667l-6.485333-3.242667-210.176-115.882666a257.024 257.024 0 0 1-132.522667-214.4L128 608.341333V310.613333c0-50.176 29.098667-95.488 73.984-116.48l7.637333-3.242666 240.512-93.866667a170.112 170.112 0 0 1 113.706667-3.541333z m-75.221333 80.810667l-7.552 2.56-240.512 93.866666c-14.762667 5.76-25.002667 19.2-26.88 34.688L213.333333 310.570667v297.813333c0 59.306667 30.592 114.218667 80.469334 145.365333l8.021333 4.693334L512 874.410667l210.176-115.882667a171.349333 171.349333 0 0 0 88.234667-140.8l0.256-9.344V310.613333c0-15.872-8.746667-30.293333-22.442667-37.717333l-4.778667-2.176-240.512-93.866667a85.034667 85.034667 0 0 0-54.314666-2.56z m181.546666 232.277333c15.36 15.445333 16.554667 39.722667 3.541334 56.533333l-3.541334 4.010667-170.666666 171.306667a42.581333 42.581333 0 0 1-56.32 3.541333l-4.010667-3.541333-85.333333-85.632a42.922667 42.922667 0 0 1 0-60.586667 42.581333 42.581333 0 0 1 56.32-3.541333l4.010666 3.541333L469.333333 547.498667l140.501334-140.970667a42.538667 42.538667 0 0 1 60.330666 0z" p-id="8806"></path>';
function _createSuper$h(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$h();
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
function _isNativeReflectConstruct$h() {
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
var QuarkIconSafe = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSafe2, _HTMLElement);
  var _super = _createSuper$h(QuarkIconSafe2);
  function QuarkIconSafe2() {
    var _this;
    _classCallCheck(this, QuarkIconSafe2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$h, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSafe2, [{
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
  return QuarkIconSafe2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-safe")) {
  customElements.define("quark-icon-safe", QuarkIconSafe);
}
var Icon$g = '<path d="M446.549333 128a42.666667 42.666667 0 0 1 4.992 85.034667L446.549333 213.333333h-148.053333a85.333333 85.333333 0 0 0-84.992 78.933334L213.248 298.666667v364.8a128 128 0 0 0 92.928 123.178666c56.064 15.914667 124.586667 24.021333 205.482667 24.021334 80.853333 0 149.504-8.106667 205.781333-24.021334a128 128 0 0 0 92.842667-116.138666l0.170666-7.808-0.426666-66.432a42.666667 42.666667 0 0 1 84.906666-5.504l0.341334 4.992 0.426666 66.432a213.333333 213.333333 0 0 1-155.008 206.506666c-64.512 18.304-140.8 27.306667-229.034666 27.306667-88.277333 0-164.48-9.002667-228.778667-27.306667a213.333333 213.333333 0 0 1-154.666667-195.413333L128 663.466667V298.666667a170.624 170.624 0 0 1 162.005333-170.453334l8.533334-0.213333h148.053333z m291.84 10.24l3.754667 3.370667 141.525333 142.634666a42.666667 42.666667 0 0 1 3.242667 56.32l-3.285333 3.754667-141.653334 142.762667a42.666667 42.666667 0 0 1-63.829333-56.32l3.328-3.754667 69.290667-69.802667c-84.224-2.474667-150.613333 19.157333-201.130667 64.085334-57.514667 51.2-84.48 127.445333-80 232.533333a42.666667 42.666667 0 1 1-85.162667 3.669333c-5.546667-129.152 30.293333-230.4 108.544-299.946666 67.370667-59.946667 154.026667-88.277333 258.133334-85.717334l-69.546667-70.101333a42.666667 42.666667 0 0 1-3.114667-56.618667l3.328-3.712a42.666667 42.666667 0 0 1 56.618667-3.114666z" p-id="3222"></path>';
function _createSuper$g(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$g();
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
function _isNativeReflectConstruct$g() {
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
var QuarkIconShare = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconShare2, _HTMLElement);
  var _super = _createSuper$g(QuarkIconShare2);
  function QuarkIconShare2() {
    var _this;
    _classCallCheck(this, QuarkIconShare2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$g, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconShare2, [{
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
  return QuarkIconShare2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-share")) {
  customElements.define("quark-icon-share", QuarkIconShare);
}
var Icon$f = '<path d="M616.021333 85.333333A128 128 0 0 1 738.133333 174.933333l2.090667 7.338667L758.613333 256H853.333333a42.666667 42.666667 0 0 1 4.992 85.034667L853.333333 341.333333h-42.666666v411.093334a170.666667 170.666667 0 0 1-122.026667 163.626666c-50.858667 15.146667-109.738667 22.613333-176.64 22.613334-66.901333 0-125.781333-7.466667-176.64-22.613334a170.666667 170.666667 0 0 1-121.813333-154.922666L213.333333 752.426667V341.333333H170.666667a42.666667 42.666667 0 0 1-4.992-85.034666L170.666667 256h94.634666l18.474667-73.728a128 128 0 0 1 116.565333-96.725333L407.978667 85.333333h208.042666zM725.333333 341.333333H298.666667v411.136a85.333333 85.333333 0 0 0 61.013333 81.792c42.410667 12.629333 93.226667 19.072 152.32 19.072 59.093333 0 109.909333-6.4 152.32-19.072a85.333333 85.333333 0 0 0 60.714667-74.794666l0.298666-7.04V341.333333z m-128 128a42.666667 42.666667 0 0 1 42.368 37.674667L640 512v170.666667a42.666667 42.666667 0 0 1-85.034667 4.992L554.666667 682.666667v-170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z m-170.666666 0a42.666667 42.666667 0 0 1 42.368 37.674667L469.333333 512v170.666667a42.666667 42.666667 0 0 1-85.034666 4.992L384 682.666667v-170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m189.354666-298.666666H407.978667a42.666667 42.666667 0 0 0-39.978667 27.690666l-1.450667 4.608L353.28 256h317.397333l-13.226666-53.034667a42.666667 42.666667 0 0 0-36.565334-32L616.021333 170.666667z" p-id="3372"></path>';
function _createSuper$f(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$f();
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
function _isNativeReflectConstruct$f() {
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
var QuarkIconDelete = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconDelete2, _HTMLElement);
  var _super = _createSuper$f(QuarkIconDelete2);
  function QuarkIconDelete2() {
    var _this;
    _classCallCheck(this, QuarkIconDelete2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$f, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconDelete2, [{
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
  return QuarkIconDelete2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-delete")) {
  customElements.define("quark-icon-delete", QuarkIconDelete);
}
var Icon$e = '<path d="M512 128a384 384 0 1 1-286.250667 128H158.592a42.666667 42.666667 0 0 1-42.368-37.674667L115.925333 213.333333a42.666667 42.666667 0 0 1 37.717334-42.368L158.592 170.666667h170.666667a42.666667 42.666667 0 0 1 42.410666 37.674666L371.925333 213.333333v170.666667a42.666667 42.666667 0 0 1-85.034666 4.992L286.592 384V316.074667A298.666667 298.666667 0 1 0 512 213.333333a42.666667 42.666667 0 0 1-0.042667-85.333333z" p-id="3522"></path>';
function _createSuper$e(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$e();
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
function _isNativeReflectConstruct$e() {
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
var QuarkIconRefresh = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconRefresh2, _HTMLElement);
  var _super = _createSuper$e(QuarkIconRefresh2);
  function QuarkIconRefresh2() {
    var _this;
    _classCallCheck(this, QuarkIconRefresh2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$e, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconRefresh2, [{
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
  return QuarkIconRefresh2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-refresh")) {
  customElements.define("quark-icon-refresh", QuarkIconRefresh);
}
var Icon$d = '<path d="M858.069333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667A384 384 0 0 1 256 793.898667L256 861.610667a42.666667 42.666667 0 0 1-37.674667 42.368L213.333333 904.277333a42.666667 42.666667 0 0 1-42.368-37.717333L170.666667 861.610667v-170.666667a42.666667 42.666667 0 0 1 37.674666-42.410667L213.333333 648.277333h170.666667a42.666667 42.666667 0 0 1 4.992 85.034667L384 733.610667H316.501333A298.666667 298.666667 0 0 0 815.36 512a42.666667 42.666667 0 0 1 42.666667-42.666667zM810.666667 115.84a42.666667 42.666667 0 0 1 42.368 37.717333l0.298666 4.949334v170.666666a42.666667 42.666667 0 0 1-37.674666 42.410667L810.666667 371.84h-170.666667a42.666667 42.666667 0 0 1-4.992-85.034667L640 286.506667h63.146667A298.666667 298.666667 0 0 0 208.64 512a42.666667 42.666667 0 1 1-85.333333 0A384 384 0 0 1 768 230.144L768 158.506667a42.666667 42.666667 0 0 1 37.674667-42.368L810.666667 115.84z" p-id="3672"></path>';
function _createSuper$d(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$d();
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
function _isNativeReflectConstruct$d() {
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
var QuarkIconSynchronous = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSynchronous2, _HTMLElement);
  var _super = _createSuper$d(QuarkIconSynchronous2);
  function QuarkIconSynchronous2() {
    var _this;
    _classCallCheck(this, QuarkIconSynchronous2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$d, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSynchronous2, [{
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
  return QuarkIconSynchronous2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-synchronous")) {
  customElements.define("quark-icon-synchronous", QuarkIconSynchronous);
}
var Icon$c = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m-42.666667 128a42.666667 42.666667 0 0 1 42.368 37.674666L512 341.333333v170.666667h170.666667a42.666667 42.666667 0 0 1 42.368 37.674667L725.333333 554.666667a42.666667 42.666667 0 0 1-37.674666 42.368L682.666667 597.333333h-213.333334a42.666667 42.666667 0 0 1-42.368-37.674666L426.666667 554.666667V341.333333a42.666667 42.666667 0 0 1 42.666666-42.666666z" p-id="3822"></path>';
function _createSuper$c(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$c();
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
function _isNativeReflectConstruct$c() {
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
var QuarkIconTime = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconTime2, _HTMLElement);
  var _super = _createSuper$c(QuarkIconTime2);
  function QuarkIconTime2() {
    var _this;
    _classCallCheck(this, QuarkIconTime2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$c, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconTime2, [{
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
  return QuarkIconTime2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-time")) {
  customElements.define("quark-icon-time", QuarkIconTime);
}
var Icon$b = '<path d="M725.333333 128a170.666667 170.666667 0 0 1 170.666667 170.666667v366.293333a213.333333 213.333333 0 0 1-161.28 206.805333c-64.170667 16.170667-138.453333 24.234667-222.72 24.234667-84.266667 0-158.549333-8.106667-222.72-24.234667A213.333333 213.333333 0 0 1 128 664.96V298.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h426.666666z m0 85.333333H298.666667a85.333333 85.333333 0 0 0-85.12 78.933334L213.333333 298.666667v366.250666a128 128 0 0 0 96.725334 124.074667C367.018667 803.328 434.389333 810.666667 512 810.666667c77.653333 0 144.981333-7.338667 201.898667-21.632a128 128 0 0 0 96.554666-116.48l0.213334-7.594667V298.666667a85.333333 85.333333 0 0 0-78.933334-85.12L725.333333 213.333333z m-384 298.666667h213.333334a42.666667 42.666667 0 0 1 4.992 85.034667L554.666667 597.333333H341.333333a42.666667 42.666667 0 0 1-4.992-85.034666L341.333333 512z m0-170.666667h298.666667a42.666667 42.666667 0 0 1 4.992 85.034667L640 426.666667H341.333333a42.666667 42.666667 0 0 1-4.992-85.034667L341.333333 341.333333z" p-id="3972"></path>';
function _createSuper$b(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$b();
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
function _isNativeReflectConstruct$b() {
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
var QuarkIconOrder = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconOrder2, _HTMLElement);
  var _super = _createSuper$b(QuarkIconOrder2);
  function QuarkIconOrder2() {
    var _this;
    _classCallCheck(this, QuarkIconOrder2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$b, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconOrder2, [{
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
  return QuarkIconOrder2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-order")) {
  customElements.define("quark-icon-order", QuarkIconOrder);
}
var Icon$a = '<path d="M856.618667 243.968c95.146667 97.749333 95.146667 256.213333 0 353.962667l-252.458667 259.285333a128.938667 128.938667 0 0 1-180.992 3.328l-3.328-3.328-252.458667-259.285333c-95.146667-97.706667-95.146667-256.213333 0-353.962667a239.189333 239.189333 0 0 1 344.618667 0 239.189333 239.189333 0 0 1 344.618667 0z" p-id="4122"></path>';
function _createSuper$a(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$a();
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
function _isNativeReflectConstruct$a() {
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
var QuarkIconLikeFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconLikeFill2, _HTMLElement);
  var _super = _createSuper$a(QuarkIconLikeFill2);
  function QuarkIconLikeFill2() {
    var _this;
    _classCallCheck(this, QuarkIconLikeFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$a, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconLikeFill2, [{
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
  return QuarkIconLikeFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-like-fill")) {
  customElements.define("quark-icon-like-fill", QuarkIconLikeFill);
}
var Icon$9 = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m158.165333 311.168a42.666667 42.666667 0 0 0-60.330666 0L469.333333 536.96l-55.168-55.125333-4.010666-3.541334a42.666667 42.666667 0 0 0-56.32 63.872l85.333333 85.333334 4.010667 3.541333a42.666667 42.666667 0 0 0 56.32-3.541333l170.666666-170.666667 3.541334-4.010667a42.666667 42.666667 0 0 0-3.541334-56.32z"  p-id="4272"></path>';
function _createSuper$9(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
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
function _isNativeReflectConstruct$9() {
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
var QuarkIconSuccessFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSuccessFill2, _HTMLElement);
  var _super = _createSuper$9(QuarkIconSuccessFill2);
  function QuarkIconSuccessFill2() {
    var _this;
    _classCallCheck(this, QuarkIconSuccessFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$9, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSuccessFill2, [{
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
  return QuarkIconSuccessFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-success-fill")) {
  customElements.define("quark-icon-success-fill", QuarkIconSuccessFill);
}
var Icon$8 = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-59.178667 307.626667a42.666667 42.666667 0 0 0-56.32 63.872L451.626667 512l-55.125334 55.168-3.541333 4.010667a42.666667 42.666667 0 0 0 63.872 56.32L512 572.373333l55.168 55.125334 4.010667 3.541333a42.666667 42.666667 0 0 0 56.32-63.872L572.373333 512l55.125334-55.168 3.541333-4.010667a42.666667 42.666667 0 0 0-63.872-56.32L512 451.626667l-55.168-55.125334z" p-id="4422"></path>';
function _createSuper$8(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
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
function _isNativeReflectConstruct$8() {
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
var QuarkIconCloseFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconCloseFill2, _HTMLElement);
  var _super = _createSuper$8(QuarkIconCloseFill2);
  function QuarkIconCloseFill2() {
    var _this;
    _classCallCheck(this, QuarkIconCloseFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$8, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconCloseFill2, [{
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
  return QuarkIconCloseFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-close-fill")) {
  customElements.define("quark-icon-close-fill", QuarkIconCloseFill);
}
var Icon$7 = '<path d="M638.165333 85.333333a85.333333 85.333333 0 0 1 83.541334 101.12l-1.408 6.186667L680.789333 341.333333h108.970667a128 128 0 0 1 126.378667 145.322667l-1.237334 7.424-44.629333 227.456a170.752 170.752 0 0 1-85.12 116.949333C714.453333 877.269333 618.026667 896 495.573333 896c-40.32 0-77.824-2.048-112.554666-6.144l0.042666-563.626667c8.576-5.888 16.128-13.44 22.101334-22.314666l3.712-6.016 72.704-129.493334a162.56 162.56 0 0 1 132.48-82.773333L623.274667 85.333333h14.890666zM298.026667 341.333333v532.906667a434.944 434.944 0 0 1-70.229334-24.533333 170.752 170.752 0 0 1-99.541333-146.346667L128 694.186667V469.333333a127.786667 127.786667 0 0 1 120.021333-127.786666L255.573333 341.333333h42.496z" p-id="4572"></path>';
function _createSuper$7(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
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
function _isNativeReflectConstruct$7() {
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
var QuarkIconGoodJobFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconGoodJobFill2, _HTMLElement);
  var _super = _createSuper$7(QuarkIconGoodJobFill2);
  function QuarkIconGoodJobFill2() {
    var _this;
    _classCallCheck(this, QuarkIconGoodJobFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$7, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconGoodJobFill2, [{
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
  return QuarkIconGoodJobFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-good-job-fill")) {
  customElements.define("quark-icon-good-job-fill", QuarkIconGoodJobFill);
}
var Icon$6 = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-42.666667 213.333334a42.666667 42.666667 0 0 0-42.666666 42.666666v213.333334l0.298666 4.992A42.666667 42.666667 0 0 0 469.333333 597.333333h213.333334l4.992-0.298666A42.666667 42.666667 0 0 0 725.333333 554.666667l-0.298666-4.992A42.666667 42.666667 0 0 0 682.666667 512h-170.666667V341.333333l-0.298667-4.992A42.666667 42.666667 0 0 0 469.333333 298.666667z" p-id="4722"></path>';
function _createSuper$6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
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
function _isNativeReflectConstruct$6() {
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
var QuarkIconTimeFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconTimeFill2, _HTMLElement);
  var _super = _createSuper$6(QuarkIconTimeFill2);
  function QuarkIconTimeFill2() {
    var _this;
    _classCallCheck(this, QuarkIconTimeFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$6, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconTimeFill2, [{
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
  return QuarkIconTimeFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-time-fill")) {
  customElements.define("quark-icon-time-fill", QuarkIconTimeFill);
}
var Icon$5 = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 554.666667a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z m-0.213333-341.333333c-27.221333 0-57.557333 10.666667-83.029334 28.16a42.666667 42.666667 0 0 0 48.256 70.357333c12.074667-8.32 26.026667-13.226667 34.944-13.226667a27.733333 27.733333 0 0 1 19.797334 8.192 27.733333 27.733333 0 0 1 8.192 19.754667 27.733333 27.733333 0 0 1-8.192 19.754667l-3.84 3.413333-12.16 9.344A127.872 127.872 0 0 0 469.333333 543.488v2.389333l0.341334 5.333334A42.666667 42.666667 0 0 0 554.666667 545.706667v-2.432l0.298666-5.12a42.538667 42.538667 0 0 1 17.322667-29.568c7.765333-5.632 14.336-11.093333 19.797333-16.554667a113.066667 113.066667 0 0 0 33.194667-80.085333 113.066667 113.066667 0 0 0-33.194667-80.085334 113.066667 113.066667 0 0 0-80.298666-33.194666z" p-id="4872"></path>';
function _createSuper$5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
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
function _isNativeReflectConstruct$5() {
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
var QuarkIconHelpFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconHelpFill2, _HTMLElement);
  var _super = _createSuper$5(QuarkIconHelpFill2);
  function QuarkIconHelpFill2() {
    var _this;
    _classCallCheck(this, QuarkIconHelpFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$5, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconHelpFill2, [{
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
  return QuarkIconHelpFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-help-fill")) {
  customElements.define("quark-icon-help-fill", QuarkIconHelpFill);
}
var Icon$4 = '<path d="M767.445333 185.045333l8.874667 8.490667h-0.426667a365.952 365.952 0 0 1 8.533334 513.28l-8.533334 8.789333-203.946666 198.741334c-31.530667 30.72-81.066667 32.341333-114.474667 4.864l-5.376-4.864-203.946667-198.741334a365.994667 365.994667 0 0 1 0-522.069333c143.018667-141.397333 372.821333-144.213333 519.296-8.533333zM512 341.333333a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" p-id="5022"></path>';
function _createSuper$4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
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
function _isNativeReflectConstruct$4() {
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
var QuarkIconLocationFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconLocationFill2, _HTMLElement);
  var _super = _createSuper$4(QuarkIconLocationFill2);
  function QuarkIconLocationFill2() {
    var _this;
    _classCallCheck(this, QuarkIconLocationFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$4, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconLocationFill2, [{
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
  return QuarkIconLocationFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-location-fill")) {
  customElements.define("quark-icon-location-fill", QuarkIconLocationFill);
}
var Icon$3 = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 384a42.666667 42.666667 0 0 0-42.368 37.674667L469.333333 512v170.666667l0.298667 4.992a42.666667 42.666667 0 0 0 84.736 0L554.666667 682.666667v-170.666667l-0.298667-4.992A42.666667 42.666667 0 0 0 512 469.333333z m0-170.666666a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z" p-id="5322"></path>';
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
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
function _isNativeReflectConstruct$3() {
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
var QuarkIconInfoFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconInfoFill2, _HTMLElement);
  var _super = _createSuper$3(QuarkIconInfoFill2);
  function QuarkIconInfoFill2() {
    var _this;
    _classCallCheck(this, QuarkIconInfoFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$3, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconInfoFill2, [{
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
  return QuarkIconInfoFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-info-fill")) {
  customElements.define("quark-icon-info-fill", QuarkIconInfoFill);
}
var Icon$2 = '<path d="M563.84 93.44l10.026667 3.541333 240.512 93.866667a128.426667 128.426667 0 0 1 81.365333 111.402667L896 310.613333v297.813334a257.109333 257.109333 0 0 1-123.434667 219.733333l-9.301333 5.418667-210.176 115.882666a85.077333 85.077333 0 0 1-75.690667 3.242667l-6.485333-3.242667-210.176-115.882666a257.024 257.024 0 0 1-132.522667-214.4L128 608.341333V310.613333c0-50.176 29.098667-95.488 73.984-116.48l7.637333-3.242666 240.512-93.866667a170.112 170.112 0 0 1 113.706667-3.541333z m106.325333 313.088a42.538667 42.538667 0 0 0-60.330666 0L469.333333 547.498667l-55.168-55.338667-4.010666-3.541333a42.581333 42.581333 0 0 0-56.32 3.541333 42.922667 42.922667 0 0 0 0 60.586667l85.333333 85.632 4.010667 3.541333a42.581333 42.581333 0 0 0 56.32-3.541333l170.666666-171.306667 3.541334-4.010667a42.922667 42.922667 0 0 0-3.541334-56.533333z" p-id="5472"></path>';
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
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
function _isNativeReflectConstruct$2() {
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
var QuarkIconSafeFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconSafeFill2, _HTMLElement);
  var _super = _createSuper$2(QuarkIconSafeFill2);
  function QuarkIconSafeFill2() {
    var _this;
    _classCallCheck(this, QuarkIconSafeFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$2, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconSafeFill2, [{
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
  return QuarkIconSafeFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-safe-fill")) {
  customElements.define("quark-icon-safe-fill", QuarkIconSafeFill);
}
var Icon$1 = '<path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 554.666667a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z m0-341.333333a42.666667 42.666667 0 0 0-42.666667 42.666666v170.666667l0.298667 4.992A42.666667 42.666667 0 0 0 554.666667 512V341.333333l-0.298667-4.992A42.666667 42.666667 0 0 0 512 298.666667z" p-id="5622"></path>';
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
var QuarkIconWarningFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconWarningFill2, _HTMLElement);
  var _super = _createSuper$1(QuarkIconWarningFill2);
  function QuarkIconWarningFill2() {
    var _this;
    _classCallCheck(this, QuarkIconWarningFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon$1, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconWarningFill2, [{
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
  return QuarkIconWarningFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-warning-fill")) {
  customElements.define("quark-icon-warning-fill", QuarkIconWarningFill);
}
var Icon = '<path d="M563.84 93.44l10.026667 3.541333 240.512 93.866667a128.426667 128.426667 0 0 1 81.365333 111.402667L896 310.613333v297.813334a257.109333 257.109333 0 0 1-123.434667 219.733333l-9.301333 5.418667-210.176 115.882666a85.077333 85.077333 0 0 1-75.690667 3.242667l-6.485333-3.242667-210.176-115.882666a257.024 257.024 0 0 1-132.522667-214.4L128 608.341333V310.613333c0-50.176 29.098667-95.488 73.984-116.48l7.637333-3.242666 240.512-93.866667a170.112 170.112 0 0 1 113.706667-3.541333z m-111.018667 309.546667a42.581333 42.581333 0 0 0-56.32 3.541333 42.922667 42.922667 0 0 0 0 60.586667l55.125334 55.338666-55.125334 55.381334-3.541333 4.010666c-13.013333 16.810667-11.861333 41.088 3.541333 56.533334a42.538667 42.538667 0 0 0 60.330667 0L512 582.997333l55.168 55.381334 4.010667 3.541333a42.581333 42.581333 0 0 0 56.32-3.541333c16.64-16.725333 16.64-43.818667 0-60.586667l-55.168-55.338667 55.168-55.381333 3.541333-4.010667a42.922667 42.922667 0 0 0-3.541333-56.533333 42.538667 42.538667 0 0 0-60.330667 0l-55.210667 55.338667-55.125333-55.338667z" p-id="5772"></path>';
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
var QuarkIconUnSafeFill = /* @__PURE__ */ function(_HTMLElement) {
  _inherits(QuarkIconUnSafeFill2, _HTMLElement);
  var _super = _createSuper(QuarkIconUnSafeFill2);
  function QuarkIconUnSafeFill2() {
    var _this;
    _classCallCheck(this, QuarkIconUnSafeFill2);
    _this = _super.call(this);
    var shadowRoot = _this.attachShadow({
      mode: "open"
    });
    shadowRoot.innerHTML = "\n            <style>\n                ".concat(style, '\n            </style>\n            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n                ').concat(Icon, "\n            </svg>\n        ");
    _this.icon = _this.shadowRoot.getElementById("icon");
    return _this;
  }
  _createClass(QuarkIconUnSafeFill2, [{
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
  return QuarkIconUnSafeFill2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
if (!customElements.get("quark-icon-unsafe-fill")) {
  customElements.define("quark-icon-unsafe-fill", QuarkIconUnSafeFill);
}
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("icon");
function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selection = document.getSelection();
  if (!selection) {
    return;
  }
  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}
const _sfc_main = createDemo({
  setup() {
    const copyIcon = (icon) => {
      const t = `<quark-icon-${icon} size="20" />`;
      copyToClipboard(t);
      Toast.text(`\u590D\u5236\u6210\u529F\uFF1A${t}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          label: {
            example: "\u7528\u6CD5\u793A\u4F8B",
            basic: "\u57FA\u7840\u56FE\u6807",
            wireframe: "\u7EBF\u6846\u98CE\u683C",
            solid: "\u5B9E\u5E95\u98CE\u683C"
          },
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            size: "\u56FE\u6807\u5927\u5C0F",
            color: "\u56FE\u6807\u989C\u8272"
          }
        },
        "en-US": {
          label: {
            example: "For Example",
            basic: "Basic Icon",
            wireframe: "Wireframe Style",
            solid: "Solid Style"
          },
          title: {
            basic: "Basic Usage",
            size: "Icon Size",
            color: "Icon Color"
          }
        }
      });
    });
    return {
      translate,
      copyIcon
    };
  }
});
const _hoisted_1 = { class: "demo icon-demo no-padding" };
const _hoisted_2 = { activekey: "tab1" };
const _hoisted_3 = ["label"];
const _hoisted_4 = { class: "h2-custom" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("section", { class: "demo-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "26" })
], -1);
const _hoisted_6 = { class: "h2-custom" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("section", { class: "demo-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "18" }),
  /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "24" }),
  /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "30" })
], -1);
const _hoisted_8 = { class: "h2-custom" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("section", { class: "demo-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-icon-user", {
    size: "26",
    color: "#F44336"
  }),
  /* @__PURE__ */ createBaseVNode("quark-icon-user", {
    size: "26",
    color: "#3F51B5"
  })
], -1);
const _hoisted_10 = ["label"];
const _hoisted_11 = { class: "icons-container" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-left", { size: "26" }, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", null, "arrow-left", -1);
const _hoisted_14 = [
  _hoisted_12,
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", { size: "26" }, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "arrow-right", -1);
const _hoisted_17 = [
  _hoisted_15,
  _hoisted_16
];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-up", { size: "26" }, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "arrow-up", -1);
const _hoisted_20 = [
  _hoisted_18,
  _hoisted_19
];
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-down", { size: "26" }, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "arrow-down", -1);
const _hoisted_23 = [
  _hoisted_21,
  _hoisted_22
];
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("quark-icon-close", { size: "26" }, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "close", -1);
const _hoisted_26 = [
  _hoisted_24,
  _hoisted_25
];
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("quark-icon-success", { size: "26" }, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "success", -1);
const _hoisted_29 = [
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("quark-icon-plus", { size: "26" }, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, "plus", -1);
const _hoisted_32 = [
  _hoisted_30,
  _hoisted_31
];
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("quark-icon-more-h", { size: "26" }, null, -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("span", null, "more-h", -1);
const _hoisted_35 = [
  _hoisted_33,
  _hoisted_34
];
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("quark-icon-more-v", { size: "26" }, null, -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", null, "more-v", -1);
const _hoisted_38 = [
  _hoisted_36,
  _hoisted_37
];
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("quark-icon-warning", { size: "20" }, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", null, "warning", -1);
const _hoisted_41 = [
  _hoisted_39,
  _hoisted_40
];
const _hoisted_42 = ["label"];
const _hoisted_43 = { class: "icons-container" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("quark-icon-home", { size: "26" }, null, -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", null, "home", -1);
const _hoisted_46 = [
  _hoisted_44,
  _hoisted_45
];
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("quark-icon-search", { size: "26" }, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("span", null, "search", -1);
const _hoisted_49 = [
  _hoisted_47,
  _hoisted_48
];
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("quark-icon-message", { size: "26" }, null, -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("span", null, "message", -1);
const _hoisted_52 = [
  _hoisted_50,
  _hoisted_51
];
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("quark-icon-setting", { size: "26" }, null, -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", null, "setting", -1);
const _hoisted_55 = [
  _hoisted_53,
  _hoisted_54
];
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "26" }, null, -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("span", null, "user", -1);
const _hoisted_58 = [
  _hoisted_56,
  _hoisted_57
];
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("quark-icon-tel", { size: "26" }, null, -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("span", null, "tel", -1);
const _hoisted_61 = [
  _hoisted_59,
  _hoisted_60
];
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("quark-icon-close-o", { size: "26" }, null, -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", null, "close-o", -1);
const _hoisted_64 = [
  _hoisted_62,
  _hoisted_63
];
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("quark-icon-notify", { size: "26" }, null, -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("span", null, "notify", -1);
const _hoisted_67 = [
  _hoisted_65,
  _hoisted_66
];
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("quark-icon-warning-o", { size: "26" }, null, -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("span", null, "warning-o", -1);
const _hoisted_70 = [
  _hoisted_68,
  _hoisted_69
];
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("quark-icon-info", { size: "26" }, null, -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("span", null, "info", -1);
const _hoisted_73 = [
  _hoisted_71,
  _hoisted_72
];
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("quark-icon-edit", { size: "26" }, null, -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("span", null, "edit", -1);
const _hoisted_76 = [
  _hoisted_74,
  _hoisted_75
];
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("quark-icon-help", { size: "26" }, null, -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("span", null, "help", -1);
const _hoisted_79 = [
  _hoisted_77,
  _hoisted_78
];
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("quark-icon-scan", { size: "26" }, null, -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("span", null, "scan", -1);
const _hoisted_82 = [
  _hoisted_80,
  _hoisted_81
];
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("quark-icon-good-job", { size: "26" }, null, -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("span", null, "good-job", -1);
const _hoisted_85 = [
  _hoisted_83,
  _hoisted_84
];
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("quark-icon-comment", { size: "26" }, null, -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("span", null, "comment", -1);
const _hoisted_88 = [
  _hoisted_86,
  _hoisted_87
];
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("quark-icon-flash", { size: "26" }, null, -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("span", null, "flash", -1);
const _hoisted_91 = [
  _hoisted_89,
  _hoisted_90
];
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("quark-icon-like", { size: "26" }, null, -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("span", null, "like", -1);
const _hoisted_94 = [
  _hoisted_92,
  _hoisted_93
];
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("quark-icon-star", { size: "26" }, null, -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("span", null, "star", -1);
const _hoisted_97 = [
  _hoisted_95,
  _hoisted_96
];
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("quark-icon-expand", { size: "26" }, null, -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("span", null, "expand", -1);
const _hoisted_100 = [
  _hoisted_98,
  _hoisted_99
];
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("quark-icon-success-o", { size: "26" }, null, -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("span", null, "success-o", -1);
const _hoisted_103 = [
  _hoisted_101,
  _hoisted_102
];
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("quark-icon-shop-cart", { size: "26" }, null, -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("span", null, "shop-cart", -1);
const _hoisted_106 = [
  _hoisted_104,
  _hoisted_105
];
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("quark-icon-location", { size: "26" }, null, -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("span", null, "location", -1);
const _hoisted_109 = [
  _hoisted_107,
  _hoisted_108
];
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("quark-icon-customer-service", { size: "26" }, null, -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("span", null, "service", -1);
const _hoisted_112 = [
  _hoisted_110,
  _hoisted_111
];
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("quark-icon-smile", { size: "26" }, null, -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("span", null, "smile", -1);
const _hoisted_115 = [
  _hoisted_113,
  _hoisted_114
];
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("quark-icon-unsmile", { size: "26" }, null, -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("span", null, "unsmile", -1);
const _hoisted_118 = [
  _hoisted_116,
  _hoisted_117
];
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("quark-icon-unsafe", { size: "26" }, null, -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("span", null, "unsafe", -1);
const _hoisted_121 = [
  _hoisted_119,
  _hoisted_120
];
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("quark-icon-safe", { size: "26" }, null, -1);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("span", null, "safe", -1);
const _hoisted_124 = [
  _hoisted_122,
  _hoisted_123
];
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("quark-icon-share", { size: "26" }, null, -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("span", null, "share", -1);
const _hoisted_127 = [
  _hoisted_125,
  _hoisted_126
];
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("quark-icon-delete", { size: "26" }, null, -1);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("span", null, "delete", -1);
const _hoisted_130 = [
  _hoisted_128,
  _hoisted_129
];
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("quark-icon-refresh", { size: "26" }, null, -1);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("span", null, "refresh", -1);
const _hoisted_133 = [
  _hoisted_131,
  _hoisted_132
];
const _hoisted_134 = /* @__PURE__ */ createBaseVNode("quark-icon-synchronous", { size: "26" }, null, -1);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("span", null, "synchronous", -1);
const _hoisted_136 = [
  _hoisted_134,
  _hoisted_135
];
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("quark-icon-time", { size: "26" }, null, -1);
const _hoisted_138 = /* @__PURE__ */ createBaseVNode("span", null, "time", -1);
const _hoisted_139 = [
  _hoisted_137,
  _hoisted_138
];
const _hoisted_140 = /* @__PURE__ */ createBaseVNode("quark-icon-order", { size: "26" }, null, -1);
const _hoisted_141 = /* @__PURE__ */ createBaseVNode("span", null, "order", -1);
const _hoisted_142 = [
  _hoisted_140,
  _hoisted_141
];
const _hoisted_143 = ["label"];
const _hoisted_144 = { class: "icons-container" };
const _hoisted_145 = /* @__PURE__ */ createBaseVNode("quark-icon-camera-fill", { size: "26" }, null, -1);
const _hoisted_146 = /* @__PURE__ */ createBaseVNode("span", null, "camera-fill", -1);
const _hoisted_147 = [
  _hoisted_145,
  _hoisted_146
];
const _hoisted_148 = /* @__PURE__ */ createBaseVNode("quark-icon-star-fill", { size: "26" }, null, -1);
const _hoisted_149 = /* @__PURE__ */ createBaseVNode("span", null, "star-fill", -1);
const _hoisted_150 = [
  _hoisted_148,
  _hoisted_149
];
const _hoisted_151 = /* @__PURE__ */ createBaseVNode("quark-icon-like-fill", { size: "26" }, null, -1);
const _hoisted_152 = /* @__PURE__ */ createBaseVNode("span", null, "like-fill", -1);
const _hoisted_153 = [
  _hoisted_151,
  _hoisted_152
];
const _hoisted_154 = /* @__PURE__ */ createBaseVNode("quark-icon-success-fill", { size: "26" }, null, -1);
const _hoisted_155 = /* @__PURE__ */ createBaseVNode("span", null, "success-fill", -1);
const _hoisted_156 = [
  _hoisted_154,
  _hoisted_155
];
const _hoisted_157 = /* @__PURE__ */ createBaseVNode("quark-icon-close-fill", { size: "26" }, null, -1);
const _hoisted_158 = /* @__PURE__ */ createBaseVNode("span", null, "close-fill", -1);
const _hoisted_159 = [
  _hoisted_157,
  _hoisted_158
];
const _hoisted_160 = /* @__PURE__ */ createBaseVNode("quark-icon-good-job-fill", { size: "26" }, null, -1);
const _hoisted_161 = /* @__PURE__ */ createBaseVNode("span", null, "good-job-fill", -1);
const _hoisted_162 = [
  _hoisted_160,
  _hoisted_161
];
const _hoisted_163 = /* @__PURE__ */ createBaseVNode("quark-icon-time-fill", { size: "26" }, null, -1);
const _hoisted_164 = /* @__PURE__ */ createBaseVNode("span", null, "time-fill", -1);
const _hoisted_165 = [
  _hoisted_163,
  _hoisted_164
];
const _hoisted_166 = /* @__PURE__ */ createBaseVNode("quark-icon-help-fill", { size: "26" }, null, -1);
const _hoisted_167 = /* @__PURE__ */ createBaseVNode("span", null, "help-fill", -1);
const _hoisted_168 = [
  _hoisted_166,
  _hoisted_167
];
const _hoisted_169 = /* @__PURE__ */ createBaseVNode("quark-icon-location-fill", { size: "26" }, null, -1);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode("span", null, "location-fill", -1);
const _hoisted_171 = [
  _hoisted_169,
  _hoisted_170
];
const _hoisted_172 = /* @__PURE__ */ createBaseVNode("quark-icon-info-fill", { size: "26" }, null, -1);
const _hoisted_173 = /* @__PURE__ */ createBaseVNode("span", null, "info-fill", -1);
const _hoisted_174 = [
  _hoisted_172,
  _hoisted_173
];
const _hoisted_175 = /* @__PURE__ */ createBaseVNode("quark-icon-safe-fill", { size: "26" }, null, -1);
const _hoisted_176 = /* @__PURE__ */ createBaseVNode("span", null, "safe-fill", -1);
const _hoisted_177 = [
  _hoisted_175,
  _hoisted_176
];
const _hoisted_178 = /* @__PURE__ */ createBaseVNode("quark-icon-warning-fill", { size: "26" }, null, -1);
const _hoisted_179 = /* @__PURE__ */ createBaseVNode("span", null, "warning-fill", -1);
const _hoisted_180 = [
  _hoisted_178,
  _hoisted_179
];
const _hoisted_181 = /* @__PURE__ */ createBaseVNode("quark-icon-unsafe-fill", { size: "26" }, null, -1);
const _hoisted_182 = /* @__PURE__ */ createBaseVNode("span", null, "unsafe-fill", -1);
const _hoisted_183 = [
  _hoisted_181,
  _hoisted_182
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("quark-tabs", _hoisted_2, [
      createBaseVNode("quark-tab-content", {
        label: _ctx.translate("label.example"),
        name: "tab1"
      }, [
        createBaseVNode("div", null, [
          createBaseVNode("h2", _hoisted_4, toDisplayString(_ctx.translate("title.basic")), 1),
          _hoisted_5,
          createBaseVNode("h2", _hoisted_6, toDisplayString(_ctx.translate("title.size")), 1),
          _hoisted_7,
          createBaseVNode("h2", _hoisted_8, toDisplayString(_ctx.translate("title.color")), 1),
          _hoisted_9
        ])
      ], 8, _hoisted_3),
      createBaseVNode("quark-tab-content", {
        label: _ctx.translate("label.basic"),
        name: "tab2"
      }, [
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.copyIcon("arrow-left"))
          }, _hoisted_14),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.copyIcon("arrow-right"))
          }, _hoisted_17),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.copyIcon("arrow-up"))
          }, _hoisted_20),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.copyIcon("arrow-down"))
          }, _hoisted_23),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.copyIcon("close"))
          }, _hoisted_26),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.copyIcon("success"))
          }, _hoisted_29),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[6] || (_cache[6] = ($event) => _ctx.copyIcon("plus"))
          }, _hoisted_32),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[7] || (_cache[7] = ($event) => _ctx.copyIcon("more-h"))
          }, _hoisted_35),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[8] || (_cache[8] = ($event) => _ctx.copyIcon("more-v"))
          }, _hoisted_38),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[9] || (_cache[9] = ($event) => _ctx.copyIcon("warning"))
          }, _hoisted_41)
        ])
      ], 8, _hoisted_10),
      createBaseVNode("quark-tab-content", {
        label: _ctx.translate("label.wireframe"),
        name: "tab3"
      }, [
        createBaseVNode("div", _hoisted_43, [
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[10] || (_cache[10] = ($event) => _ctx.copyIcon("home"))
          }, _hoisted_46),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[11] || (_cache[11] = ($event) => _ctx.copyIcon("search"))
          }, _hoisted_49),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[12] || (_cache[12] = ($event) => _ctx.copyIcon("message"))
          }, _hoisted_52),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[13] || (_cache[13] = ($event) => _ctx.copyIcon("setting"))
          }, _hoisted_55),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[14] || (_cache[14] = ($event) => _ctx.copyIcon("user"))
          }, _hoisted_58),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[15] || (_cache[15] = ($event) => _ctx.copyIcon("tel"))
          }, _hoisted_61),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[16] || (_cache[16] = ($event) => _ctx.copyIcon("close-o"))
          }, _hoisted_64),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[17] || (_cache[17] = ($event) => _ctx.copyIcon("notify"))
          }, _hoisted_67),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[18] || (_cache[18] = ($event) => _ctx.copyIcon("warning-o"))
          }, _hoisted_70),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[19] || (_cache[19] = ($event) => _ctx.copyIcon("info"))
          }, _hoisted_73),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[20] || (_cache[20] = ($event) => _ctx.copyIcon("edit"))
          }, _hoisted_76),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[21] || (_cache[21] = ($event) => _ctx.copyIcon("help"))
          }, _hoisted_79),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[22] || (_cache[22] = ($event) => _ctx.copyIcon("scan"))
          }, _hoisted_82),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[23] || (_cache[23] = ($event) => _ctx.copyIcon("good-job"))
          }, _hoisted_85),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[24] || (_cache[24] = ($event) => _ctx.copyIcon("comment"))
          }, _hoisted_88),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[25] || (_cache[25] = ($event) => _ctx.copyIcon("flash"))
          }, _hoisted_91),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[26] || (_cache[26] = ($event) => _ctx.copyIcon("like"))
          }, _hoisted_94),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[27] || (_cache[27] = ($event) => _ctx.copyIcon("star"))
          }, _hoisted_97),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[28] || (_cache[28] = ($event) => _ctx.copyIcon("expand"))
          }, _hoisted_100),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[29] || (_cache[29] = ($event) => _ctx.copyIcon("success-o"))
          }, _hoisted_103),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[30] || (_cache[30] = ($event) => _ctx.copyIcon("shop-cart"))
          }, _hoisted_106),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[31] || (_cache[31] = ($event) => _ctx.copyIcon("location"))
          }, _hoisted_109),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[32] || (_cache[32] = ($event) => _ctx.copyIcon("customer-service"))
          }, _hoisted_112),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[33] || (_cache[33] = ($event) => _ctx.copyIcon("smile"))
          }, _hoisted_115),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[34] || (_cache[34] = ($event) => _ctx.copyIcon("unsmile"))
          }, _hoisted_118),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[35] || (_cache[35] = ($event) => _ctx.copyIcon("unsafe"))
          }, _hoisted_121),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[36] || (_cache[36] = ($event) => _ctx.copyIcon("safe"))
          }, _hoisted_124),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[37] || (_cache[37] = ($event) => _ctx.copyIcon("share"))
          }, _hoisted_127),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[38] || (_cache[38] = ($event) => _ctx.copyIcon("delete"))
          }, _hoisted_130),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[39] || (_cache[39] = ($event) => _ctx.copyIcon("refresh"))
          }, _hoisted_133),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[40] || (_cache[40] = ($event) => _ctx.copyIcon("synchronous"))
          }, _hoisted_136),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[41] || (_cache[41] = ($event) => _ctx.copyIcon("time"))
          }, _hoisted_139),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[42] || (_cache[42] = ($event) => _ctx.copyIcon("order"))
          }, _hoisted_142)
        ])
      ], 8, _hoisted_42),
      createBaseVNode("quark-tab-content", {
        label: _ctx.translate("label.solid"),
        name: "tab4"
      }, [
        createBaseVNode("div", _hoisted_144, [
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[43] || (_cache[43] = ($event) => _ctx.copyIcon("camera-fill"))
          }, _hoisted_147),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[44] || (_cache[44] = ($event) => _ctx.copyIcon("star-fill"))
          }, _hoisted_150),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[45] || (_cache[45] = ($event) => _ctx.copyIcon("like-fill"))
          }, _hoisted_153),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[46] || (_cache[46] = ($event) => _ctx.copyIcon("success-fill"))
          }, _hoisted_156),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[47] || (_cache[47] = ($event) => _ctx.copyIcon("close-fill"))
          }, _hoisted_159),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[48] || (_cache[48] = ($event) => _ctx.copyIcon("good-job-fill"))
          }, _hoisted_162),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[49] || (_cache[49] = ($event) => _ctx.copyIcon("time-fill"))
          }, _hoisted_165),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[50] || (_cache[50] = ($event) => _ctx.copyIcon("help-fill"))
          }, _hoisted_168),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[51] || (_cache[51] = ($event) => _ctx.copyIcon("location-fill"))
          }, _hoisted_171),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[52] || (_cache[52] = ($event) => _ctx.copyIcon("info-fill"))
          }, _hoisted_174),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[53] || (_cache[53] = ($event) => _ctx.copyIcon("safe-fill"))
          }, _hoisted_177),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[54] || (_cache[54] = ($event) => _ctx.copyIcon("warning-fill"))
          }, _hoisted_180),
          createBaseVNode("div", {
            class: "icon-item",
            onClick: _cache[55] || (_cache[55] = ($event) => _ctx.copyIcon("unsafe-fill"))
          }, _hoisted_183)
        ])
      ], 8, _hoisted_143)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
