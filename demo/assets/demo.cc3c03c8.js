import { c as createComponent } from "./component.910eece4.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, f as reactive, r as ref, c as createElementBlock, a as createBaseVNode, t as toDisplayString, n as normalizeClass, b as openBlock } from "./mobile.d3f6eb3c.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("calendar");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            quick: "\u5FEB\u6377\u9009\u62E9",
            custom: "\u81EA\u5B9A\u4E49\u65E5\u5386",
            tiled: "\u5E73\u94FA\u5C55\u793A"
          },
          cellTitle: {
            single: "\u9009\u62E9\u5355\u4E2A\u65E5\u671F",
            multiple: "\u9009\u62E9\u591A\u4E2A\u65E5\u671F",
            range: "\u9009\u62E9\u65E5\u671F\u533A\u95F4",
            customDefault: "\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C",
            customMaxRange: "\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",
            customRange: "\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",
            customConfirm: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",
            customDayText: "\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",
            customPosition: "\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E",
            customCss: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
            weekFirstDay: "\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"
          },
          otherText: {
            multiple: "\u4E2A\u65E5\u671F",
            confirmText: "\u5B8C\u6210",
            confirmDisabledText: "\u8BF7\u9009\u62E9",
            midAutumn: "\u4E2D\u79CB\u8282",
            nationalDday: "\u56FD\u5E86\u8282",
            today: "\u4ECA\u5929",
            rest: "\u4F11",
            in: "\u5165\u5E97",
            out: "\u79BB\u5E97"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            quick: "Quick Select",
            custom: "Custom Calendar",
            tiled: "Tiled display"
          },
          cellTitle: {
            single: "Select Single Date",
            multiple: "Select Multiple Date",
            range: "Select Date Range",
            customDefault: "Custom Selected Value",
            customMaxRange: "Custom The Maximum Number Of Selected Days",
            customRange: "Custom Date Range",
            customConfirm: "Custom Confirm Text",
            customDayText: "Custom Day Text",
            customPosition: "Custom Pop Position",
            customCss: "Custom CSS",
            weekFirstDay: "Custom First Day Of Week"
          },
          otherText: {
            multiple: "Dates",
            confirmText: "OK",
            confirmDisabledText: "Please Select",
            midAutumn: "Mid-Autumn",
            nationalDday: "National Day",
            today: "Today",
            rest: "Rest",
            in: "In",
            out: "Out"
          }
        }
      });
    });
    const state = reactive({
      date: {
        selectSingle: null,
        selectRange: [],
        selectMultiple: [],
        quickSelectSingle: null,
        quickSelectRange: [],
        customDefault: new Date(),
        customConfirm: [],
        customRange: null,
        customMaxRange: [],
        customDayText: [],
        weekFirstDay: null,
        customPosition: null,
        customCss: null
      },
      isCss: false,
      visible: false,
      type: "single",
      round: true,
      minDate: void 0,
      maxDate: void 0,
      tiledMinDate: "2023-09-01",
      tiledMaxDate: "2023-10-31",
      maxRange: void 0,
      position: void 0,
      formatter: void 0,
      hideConfirm: false,
      confirmText: void 0,
      confirmDisabledText: void 0,
      weekFirstDay: 0
    });
    const calendarRef = ref(null);
    const resetSettings = () => {
      state.round = true;
      state.minDate = void 0;
      state.maxDate = void 0;
      state.maxRange = void 0;
      state.position = void 0;
      state.formatter = void 0;
      state.hideConfirm = false;
      state.confirmText = void 0;
      state.confirmDisabledText = void 0;
      state.weekFirstDay = 0;
      state.isCss = false;
      calendarRef.value.setValue(null);
    };
    const dayFormatter = (day) => {
      if (!day.date) {
        return day;
      }
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      if (month === 9) {
        if (date === 29) {
          day.topInfo = translate("otherText.midAutumn");
        }
        if (date === 10) {
          day.topInfo = translate("otherText.today");
        }
        if (date > 28) {
          day.bottomInfo = translate("otherText.rest");
        }
      }
      if (month === 10) {
        if (date === 1) {
          day.topInfo = translate("otherText.nationalDday");
        }
        if (date < 7) {
          day.bottomInfo = translate("otherText.rest");
        }
      }
      if (day.type === "start") {
        day.bottomInfo = translate("otherText.in");
      } else if (day.type === "end") {
        day.bottomInfo = translate("otherText.out");
      }
      return day;
    };
    const open = (type, id) => {
      resetSettings();
      state.id = id;
      state.type = type;
      state.visible = true;
      switch (id) {
        case "quickSelectSingle":
        case "quickSelectRange":
          state.hideConfirm = true;
          break;
        case "customDefault":
          calendarRef.value.setValue(new Date());
          break;
        case "customConfirm":
          state.confirmText = translate("otherText.confirmText");
          state.confirmDisabledText = translate(
            "otherText.confirmDisabledText"
          );
          break;
        case "customRange":
          state.minDate = "2022-1-1";
          state.maxDate = "2022-1-31";
          break;
        case "customDayText":
          state.minDate = "2023-9-15";
          state.maxDate = "2023-10-15";
          calendarRef.value.setFormatter(dayFormatter);
          break;
        case "customPosition":
          state.round = false;
          state.position = "right";
          break;
        case "customMaxRange":
          state.maxRange = 3;
          break;
        case "weekFirstDay":
          state.weekFirstDay = 1;
          break;
        case "customCss":
          state.isCss = true;
          break;
      }
    };
    const formatDate = (date) => {
      if (date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }
    };
    const formatFullDate = (date) => {
      if (date) {
        return `${date.getFullYear()}/${formatDate(date)}`;
      }
    };
    const formatMultiple = (dates) => {
      if (dates.length) {
        let text = translate("otherText.multiple");
        if (dates.length === 1 && text.match(/.+s$/)) {
          text = text.slice(0, text.length - 1);
        }
        return dates.length + text;
      }
    };
    const formatRange = (dateRange) => {
      if (dateRange.length) {
        const [start, end] = dateRange;
        return `${formatDate(start)} - ${formatDate(end)}`;
      }
    };
    const confirm = ({ value }) => {
      state.visible = false;
      state.date[state.id] = value;
    };
    const close = () => {
      state.visible = false;
    };
    return {
      translate,
      state,
      calendarRef,
      resetSettings,
      open,
      close,
      confirm,
      formatFullDate,
      formatMultiple,
      formatRange
    };
  }
});
const _hoisted_1 = { class: "demo button-demo" };
const _hoisted_2 = ["title", "desc"];
const _hoisted_3 = ["title", "desc"];
const _hoisted_4 = ["title", "desc"];
const _hoisted_5 = ["title", "desc"];
const _hoisted_6 = ["title", "desc"];
const _hoisted_7 = ["title", "desc"];
const _hoisted_8 = ["title", "desc"];
const _hoisted_9 = ["title", "desc"];
const _hoisted_10 = ["title", "desc"];
const _hoisted_11 = ["title", "desc"];
const _hoisted_12 = ["title", "desc"];
const _hoisted_13 = ["title", "desc"];
const _hoisted_14 = ["title", "desc"];
const _hoisted_15 = ["maxdate", "mindate"];
const _hoisted_16 = ["open", "type", "round", "position", "mindate", "maxdate", "maxrange", "formatter", "hideconfirm", "confirmtext", "weekfirstday", "confirmdisabledtext"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.single"),
        desc: _ctx.formatFullDate(_ctx.state.date.selectSingle),
        islink: "",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.open("single", "selectSingle"))
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.multiple"),
        desc: _ctx.formatMultiple(_ctx.state.date.selectMultiple),
        islink: "",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.open("multiple", "selectMultiple"))
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.range"),
        desc: _ctx.formatRange(_ctx.state.date.selectRange),
        islink: "",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.open("range", "selectRange"))
      }, null, 8, _hoisted_4)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.quick")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.single"),
        desc: _ctx.formatFullDate(_ctx.state.date.quickSelectSingle),
        islink: "",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.open("single", "quickSelectSingle"))
      }, null, 8, _hoisted_5),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.range"),
        desc: _ctx.formatRange(_ctx.state.date.quickSelectRange),
        islink: "",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.open("range", "quickSelectRange"))
      }, null, 8, _hoisted_6)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.custom")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customDefault"),
        desc: _ctx.formatFullDate(_ctx.state.date.customDefault),
        islink: "",
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.open("single", "customDefault"))
      }, null, 8, _hoisted_7),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customRange"),
        desc: _ctx.formatFullDate(_ctx.state.date.customRange),
        islink: "",
        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.open("single", "customRange"))
      }, null, 8, _hoisted_8),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customMaxRange"),
        desc: _ctx.formatRange(_ctx.state.date.customMaxRange),
        islink: "",
        onClick: _cache[7] || (_cache[7] = ($event) => _ctx.open("range", "customMaxRange"))
      }, null, 8, _hoisted_9),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customConfirm"),
        desc: _ctx.formatRange(_ctx.state.date.customConfirm),
        islink: "",
        onClick: _cache[8] || (_cache[8] = ($event) => _ctx.open("range", "customConfirm"))
      }, null, 8, _hoisted_10),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customDayText"),
        desc: _ctx.formatRange(_ctx.state.date.customDayText),
        islink: "",
        onClick: _cache[9] || (_cache[9] = ($event) => _ctx.open("range", "customDayText"))
      }, null, 8, _hoisted_11),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.weekFirstDay"),
        desc: _ctx.formatFullDate(_ctx.state.date.weekFirstDay),
        islink: "",
        onClick: _cache[10] || (_cache[10] = ($event) => _ctx.open("single", "weekFirstDay"))
      }, null, 8, _hoisted_12),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customPosition"),
        desc: _ctx.formatFullDate(_ctx.state.date.customPosition),
        islink: "",
        onClick: _cache[11] || (_cache[11] = ($event) => _ctx.open("single", "customPosition"))
      }, null, 8, _hoisted_13),
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("cellTitle.customCss"),
        desc: _ctx.formatFullDate(_ctx.state.date.customCss),
        islink: "",
        onClick: _cache[12] || (_cache[12] = ($event) => _ctx.open("single", "customCss"))
      }, null, 8, _hoisted_14)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.tiled")), 1),
    createBaseVNode("quark-calendar", {
      tiled: true,
      maxdate: _ctx.state.tiledMaxDate,
      mindate: _ctx.state.tiledMinDate,
      hideconfirm: "",
      false: ""
    }, null, 8, _hoisted_15),
    createBaseVNode("quark-calendar", {
      class: normalizeClass(_ctx.state.isCss ? "custom-css" : ""),
      ref: "calendarRef",
      open: _ctx.state.visible,
      type: _ctx.state.type,
      round: _ctx.state.round,
      position: _ctx.state.position,
      mindate: _ctx.state.minDate,
      maxdate: _ctx.state.maxDate,
      maxrange: _ctx.state.maxRange,
      formatter: _ctx.state.formatter,
      hideconfirm: _ctx.state.hideConfirm,
      confirmtext: _ctx.state.confirmText,
      weekfirstday: _ctx.state.weekFirstDay,
      confirmdisabledtext: _ctx.state.confirmDisabledText,
      onClose: _cache[13] || (_cache[13] = (...args) => _ctx.close && _ctx.close(...args)),
      onConfirm: _cache[14] || (_cache[14] = ({ detail }) => _ctx.confirm(detail))
    }, null, 42, _hoisted_16)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
