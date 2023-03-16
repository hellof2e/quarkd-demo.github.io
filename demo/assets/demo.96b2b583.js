import { c as createComponent } from "./component.8551d1fc.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.b0f3b686.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("cascadepicker");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    const dateVisible = ref(false);
    const yearMonthVisible = ref(false);
    const monthDayVisible = ref(false);
    const timeVisible = ref(false);
    const datetimeVisible = ref(false);
    const datehourVisible = ref(false);
    const customToolbarVisible = ref(false);
    const setValueVisible = ref(false);
    const minDate = ref("2020-10-01");
    const maxDate = ref("2025-08-13");
    const currentDate = ref("2021-11-30");
    const currentTime = ref("16:01");
    const datetimePickerRef = ref();
    const timePicekerRef = ref();
    const yearMonthRef = ref();
    const monthDayRef = ref();
    const datetimeRef = ref();
    const setValueRef = ref();
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            head: "\u81EA\u5B9A\u4E49\u5934\u90E8",
            date: "\u9009\u62E9\u5E74\u6708\u65E5",
            yearMonth: "\u9009\u62E9\u5E74\u6708",
            monthDay: "\u9009\u62E9\u6708\u65E5",
            time: "\u9009\u62E9\u65F6\u95F4",
            datetime: "\u9009\u62E9\u5B8C\u6574\u65F6\u95F4",
            datehour: "\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6",
            setValue: "\u8BBE\u7F6E\u5F53\u524D\u65F6\u95F4"
          },
          button: {
            cancel: "\u53D6\u6D88",
            confirm: "\u786E\u5B9A"
          },
          year: "\u5E74",
          month: "\u6708",
          day: "\u65E5",
          hour: "\u65F6",
          minute: "\u5206"
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            head: "Custom Head",
            date: "Choose Date",
            yearMonth: "Choose Year-Month",
            monthDay: "Choose Month-Day",
            time: "Choose Time",
            datetime: "Choose Datetime",
            datehour: "Choose DateHour",
            setValue: "Set current date"
          },
          button: {
            cancel: "Cancel",
            confirm: "Confirm"
          },
          year: "Year",
          month: "Month",
          day: "Day",
          hour: "Hour",
          minute: "Minute"
        }
      });
    });
    const formatter = (type, val) => {
      if (type === "year") {
        return `${val}${translate("year")}`;
      }
      if (type === "month") {
        return `${val}${translate("month")}`;
      }
      if (type === "day") {
        return `${val}${translate("day")}`;
      }
      return val;
    };
    onMounted(() => {
      yearMonthRef.value.setFormatter(formatter);
      monthDayRef.value.setFormatter(formatter);
      timePicekerRef.value.setFormatter((type, val) => {
        if (type === "hour") {
          return `${val}${translate("hour")}`;
        }
        if (type === "minute") {
          return `${val}${translate("minute")}`;
        }
        return val;
      });
      timePicekerRef.value.setFilter(filter);
    });
    const filter = (type, options) => {
      if (type === "minute") {
        return options.filter((option) => Number(option) % 5 === 0);
      }
      return options;
    };
    const visibleHandle = (type, visible = true) => {
      if (type === "date") {
        dateVisible.value = visible;
      } else if (type === "year-month") {
        yearMonthVisible.value = visible;
      } else if (type === "month-day") {
        monthDayVisible.value = visible;
      } else if (type === "time") {
        timeVisible.value = visible;
      } else if (type === "datetime") {
        datetimeVisible.value = visible;
      } else if (type === "datehour") {
        datehourVisible.value = visible;
      } else if (type === "custom") {
        customToolbarVisible.value = visible;
      } else if (type === "setValue") {
        if (visible === true) {
          setValueRef.value.setValue("2023-10-07");
        }
        setValueVisible.value = visible;
      }
    };
    const confirm = (type, { detail }) => {
      visibleHandle(type, false);
      if (type === "time") {
        Toast.text(`${detail.value}`);
        return;
      }
      const year = detail.value.getFullYear();
      const month = detail.value.getMonth() + 1;
      const day = detail.value.getDate();
      const hour = detail.value.getHours();
      const minute = detail.value.getMinutes();
      if (type === "date" || type === "custom" || type === "setValue") {
        Toast.text(`${year}\u5E74${month}\u6708${day}\u65E5`);
      } else if (type === "year-month") {
        Toast.text(`${year}\u5E74${month}\u6708`);
      } else if (type === "month-day") {
        Toast.text(`${month}\u6708${day}\u65E5`);
      } else if (type === "datetime") {
        Toast.text(`${year}\u5E74${month}\u6708${day}\u65E5 ${hour}:${minute}`);
      } else if (type === "datehour") {
        Toast.text(`${year}\u5E74${month}\u6708${day}\u65E5 ${hour}\u65F6`);
      }
    };
    const change = ({ detail }) => {
      console.log(detail.value);
    };
    return {
      open,
      confirm,
      change,
      translate,
      minDate,
      maxDate,
      currentDate,
      dateVisible,
      yearMonthVisible,
      monthDayVisible,
      timeVisible,
      datetimeVisible,
      datehourVisible,
      customToolbarVisible,
      visibleHandle,
      currentTime,
      datetimePickerRef,
      timePicekerRef,
      yearMonthRef,
      monthDayRef,
      datetimeRef,
      setValueVisible,
      setValueRef
    };
  }
});
const _hoisted_1 = { class: "demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["value", "title", "open", "mindate", "maxdate", "confirmbuttontext", "cancelbuttontext"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title", "open", "mindate", "maxdate"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title", "open"];
const _hoisted_8 = ["title"];
const _hoisted_9 = ["value", "title", "open"];
const _hoisted_10 = ["title"];
const _hoisted_11 = ["title", "open", "mindate", "maxdate"];
const _hoisted_12 = ["title"];
const _hoisted_13 = ["title", "open"];
const _hoisted_14 = ["title"];
const _hoisted_15 = ["title", "open", "mindate", "maxdate"];
const _hoisted_16 = ["title"];
const _hoisted_17 = ["title", "open", "mindate", "maxdate"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.date"),
        islink: "",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.visibleHandle("date"))
      }, null, 8, _hoisted_2)
    ]),
    createBaseVNode("quark-datetime-picker", {
      ref: "datetimePickerRef",
      type: "date",
      value: _ctx.currentDate,
      title: _ctx.translate("title.date"),
      open: _ctx.dateVisible,
      mindate: _ctx.minDate,
      maxdate: _ctx.maxDate,
      confirmbuttontext: _ctx.translate("button.confirm"),
      cancelbuttontext: _ctx.translate("button.cancel"),
      onClose: _cache[1] || (_cache[1] = ($event) => _ctx.visibleHandle("date", false)),
      onConfirm: _cache[2] || (_cache[2] = (detail) => _ctx.confirm("date", detail))
    }, null, 40, _hoisted_3),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.yearMonth"),
        islink: "",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.visibleHandle("year-month"))
      }, null, 8, _hoisted_4)
    ]),
    createBaseVNode("quark-datetime-picker", {
      ref: "yearMonthRef",
      type: "year-month",
      title: _ctx.translate("title.yearMonth"),
      open: _ctx.yearMonthVisible,
      mindate: _ctx.minDate,
      maxdate: _ctx.maxDate,
      onClose: _cache[4] || (_cache[4] = ($event) => _ctx.visibleHandle("year-month", false)),
      onConfirm: _cache[5] || (_cache[5] = (detail) => _ctx.confirm("year-month", detail))
    }, null, 40, _hoisted_5),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.monthDay"),
        islink: "",
        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.visibleHandle("month-day"))
      }, null, 8, _hoisted_6)
    ]),
    createBaseVNode("quark-datetime-picker", {
      ref: "monthDayRef",
      type: "month-day",
      title: _ctx.translate("title.monthDay"),
      open: _ctx.monthDayVisible,
      onClose: _cache[7] || (_cache[7] = ($event) => _ctx.visibleHandle("month-day", false)),
      onConfirm: _cache[8] || (_cache[8] = (detail) => _ctx.confirm("month-day", detail))
    }, null, 40, _hoisted_7),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.time"),
        islink: "",
        onClick: _cache[9] || (_cache[9] = ($event) => _ctx.visibleHandle("time"))
      }, null, 8, _hoisted_8)
    ]),
    createBaseVNode("quark-datetime-picker", {
      ref: "timePicekerRef",
      type: "time",
      value: _ctx.currentTime,
      title: _ctx.translate("title.time"),
      open: _ctx.timeVisible,
      minhour: 10,
      maxhour: 22,
      minminute: 5,
      maxminute: 45,
      bottomhidden: true,
      onClose: _cache[10] || (_cache[10] = ($event) => _ctx.visibleHandle("time", false)),
      onConfirm: _cache[11] || (_cache[11] = (detail) => _ctx.confirm("time", detail)),
      onChange: _cache[12] || (_cache[12] = (...args) => _ctx.change && _ctx.change(...args))
    }, null, 40, _hoisted_9),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.datetime"),
        islink: "",
        onClick: _cache[13] || (_cache[13] = ($event) => _ctx.visibleHandle("datetime"))
      }, null, 8, _hoisted_10)
    ]),
    createBaseVNode("quark-datetime-picker", {
      ref: "datetimeRef",
      type: "datetime",
      title: _ctx.translate("title.datetime"),
      open: _ctx.datetimeVisible,
      mindate: _ctx.minDate,
      maxdate: _ctx.maxDate,
      onClose: _cache[14] || (_cache[14] = ($event) => _ctx.visibleHandle("datetime", false)),
      onConfirm: _cache[15] || (_cache[15] = (detail) => _ctx.confirm("datetime", detail))
    }, null, 40, _hoisted_11),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.datehour"),
        islink: "",
        onClick: _cache[16] || (_cache[16] = ($event) => _ctx.visibleHandle("datehour"))
      }, null, 8, _hoisted_12)
    ]),
    createBaseVNode("quark-datetime-picker", {
      type: "datehour",
      title: _ctx.translate("title.datehour"),
      open: _ctx.datehourVisible,
      onClose: _cache[17] || (_cache[17] = ($event) => _ctx.visibleHandle("datehour", false)),
      onConfirm: _cache[18] || (_cache[18] = (detail) => _ctx.confirm("datehour", detail))
    }, null, 40, _hoisted_13),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.head"),
        islink: "",
        onClick: _cache[19] || (_cache[19] = ($event) => _ctx.visibleHandle("custom"))
      }, null, 8, _hoisted_14)
    ]),
    createBaseVNode("quark-datetime-picker", {
      title: _ctx.translate("title.head"),
      type: "date",
      open: _ctx.customToolbarVisible,
      mindate: _ctx.minDate,
      maxdate: _ctx.maxDate,
      showtoolbar: true,
      onClose: _cache[20] || (_cache[20] = ($event) => _ctx.visibleHandle("custom", false)),
      onConfirm: _cache[21] || (_cache[21] = (detail) => _ctx.confirm("custom", detail))
    }, null, 40, _hoisted_15),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.setValue"),
        islink: "",
        onClick: _cache[22] || (_cache[22] = ($event) => _ctx.visibleHandle("setValue"))
      }, null, 8, _hoisted_16)
    ]),
    createBaseVNode("quark-datetime-picker", {
      ref: "setValueRef",
      title: _ctx.translate("title.setValue"),
      type: "date",
      open: _ctx.setValueVisible,
      mindate: _ctx.minDate,
      maxdate: _ctx.maxDate,
      showtoolbar: true,
      onClose: _cache[23] || (_cache[23] = ($event) => _ctx.visibleHandle("setValue", false)),
      onConfirm: _cache[24] || (_cache[24] = (detail) => _ctx.confirm("setValue", detail))
    }, null, 40, _hoisted_17)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
