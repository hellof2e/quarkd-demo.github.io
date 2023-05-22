import { L as Locale, d as defineComponent } from "./mobile.e2684bd6.js";
const isFunction = (val) => typeof val === "function";
const getPropByPath = (obj, keyPath) => {
  try {
    return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
  } catch (error) {
    return "";
  }
};
function createComponent(name) {
  const componentName = "quark-" + name;
  return {
    componentName,
    translate(keyPath, ...args) {
      const languages = Locale.languages();
      const text = getPropByPath(languages, `${name.replace("-", "")}.${keyPath}`) || getPropByPath(languages, keyPath);
      return isFunction(text) ? text(...args) : text;
    },
    createDemo: function(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return defineComponent(_component);
    }
  };
}
export { createComponent as c };
