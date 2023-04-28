import { J as customElement, Q as QuarkElement, K as property, N as state, O as p, _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.d9cd9b68.js";
import { c as createComponent } from "./component.3fec3639.js";
var style = ":host {\n  width: 100%;\n}\n\n:host .quark-virtual-list {\n  width: var(--virtual-list-width, 100%);\n  background-color: var(--virtual-list-background-color, #fff);\n  overflow-y: auto;\n  position: relative;\n}\n\n:host .quark-virtual-list-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n";
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
function _initializerDefineProperty(target, property2, descriptor, context) {
  if (!descriptor)
    return;
  Object.defineProperty(target, property2, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _applyDecoratedDescriptor(target, property2, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function(key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
    return decorator(target, property2, desc2) || desc2;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property2, desc);
    desc = null;
  }
  return desc;
}
_dec = customElement({
  tag: "quark-virtuallist",
  style
}), _dec2 = property({
  type: Number
}), _dec3 = property({
  type: Number
}), _dec4 = state(), _dec5 = state(), _dec6 = state(), _dec7 = state(), _dec(_class = (_class2 = class QuarkVirtualList2 extends QuarkElement {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "itemheight", _descriptor, this);
    _initializerDefineProperty(this, "containerheight", _descriptor2, this);
    _initializerDefineProperty(this, "listData", _descriptor3, this);
    _initializerDefineProperty(this, "visibleData", _descriptor4, this);
    _initializerDefineProperty(this, "renderItem", _descriptor5, this);
    _initializerDefineProperty(this, "startOffset", _descriptor6, this);
    _defineProperty(this, "prevStart", 0);
    _defineProperty(this, "prevEnd", 0);
    _defineProperty(this, "virtualListRef", p());
    _defineProperty(this, "containerRef", p());
    _defineProperty(this, "updateVisibleData", (scrollTop = 0) => {
      const start = Math.floor(scrollTop / this.itemheight);
      const visibleItemCnt = Math.ceil(this.containerheight / this.itemheight);
      const end = Math.min(start + visibleItemCnt, this.listData.length) + 1;
      if (this.prevStart !== start || this.prevEnd !== end) {
        this.visibleData = this.listData.slice(start, end);
        this.prevStart = start;
        this.prevEnd = end;
        this.startOffset = start * this.itemheight;
      }
      if (start + visibleItemCnt >= this.listData.length) {
        this.$emit("load");
      }
    });
    _defineProperty(this, "handleListScroll", () => {
      const {
        current
      } = this.virtualListRef;
      if (!current) {
        console.warn("virtualListRef not find");
        return;
      }
      const scrollTop = current.scrollTop;
      this.updateVisibleData(scrollTop);
    });
    _defineProperty(this, "componentDidMount", () => {
      this.updateVisibleData();
    });
    _defineProperty(this, "renderList", () => {
      const list = this.visibleData.map((item) => this.renderItem(item));
      if (this.containerRef.current) {
        this.containerRef.current.innerHTML = list.join("\n");
      }
    });
  }
  setListData(listData) {
    this.listData = listData;
    this.updateVisibleData();
  }
  setRenderItem(renderItem) {
    this.renderItem = renderItem;
  }
  render() {
    return /* @__PURE__ */ QuarkElement.h("div", {
      ref: this.virtualListRef,
      class: "quark-virtual-list",
      style: {
        height: this.containerheight
      },
      onScroll: this.handleListScroll
    }, /* @__PURE__ */ QuarkElement.h("div", {
      class: "quark-virtual-list-phantom",
      style: {
        height: this.listData.length * this.itemheight
      }
    }), /* @__PURE__ */ QuarkElement.h("div", {
      ref: this.containerRef,
      class: "quark-virtual-list-container",
      style: {
        transform: `translate3d(0, ${this.startOffset}px, 0)`
      }
    }, this.renderList()));
  }
}, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemheight", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return 50;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "containerheight", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return document.documentElement.clientHeight || document.body.clientHeight || 667;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listData", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return [];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "visibleData", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "renderItem", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return () => null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startOffset", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return 0;
  }
}), _class2)) || _class;
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("virtuallist");
const _sfc_main = createDemo({
  setup() {
    const list = ref(new Array(100).fill(0).map((_, i) => i + 1));
    const virtualListRef = ref(null);
    const onLoad = () => {
      const len = list.value.length;
      const arr = new Array(100).fill(0).map((_, i) => len + i + 1);
      list.value = list.value.concat(arr);
      virtualListRef.value.setListData(list.value);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u7528\u6CD5"
        },
        "en-US": {
          basic: "Basic Usage"
        }
      });
    });
    const renderItem = (text) => {
      const div = `
        <div style="height: 50px; line-height: 50px; text-align: center;">${text}</div>
      `;
      return div;
    };
    onMounted(() => {
      virtualListRef.value.setListData(list.value);
      virtualListRef.value.setRenderItem(renderItem);
    });
    return {
      translate,
      virtualListRef,
      onLoad
    };
  }
});
const _hoisted_1 = { class: "demo no-padding popup-demo" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-virtuallist", {
      ref: "virtualListRef",
      itemheight: 50,
      containerheight: 500,
      onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoad && _ctx.onLoad(...args))
    }, null, 544)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
