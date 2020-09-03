(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('ui-box'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['react', 'ui-box', 'styled-components'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Element = factory(global.React, global.Box, global.styledComponents));
}(this, (function (React, Box, styledComponents) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var findDevice = function findDevice(deviceWidth) {
    var _find;

    return (_find = [["mobile", 768], ["tablet", 1024], ["desktop", 1440], ["hd", Infinity]].find(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          width = _ref2[1];

      return deviceWidth < width;
    })) === null || _find === void 0 ? void 0 : _find[0];
  };

  function useDeviceInfo() {
    var _React$useState = React__default['default'].useState({
      width: 0,
      device: "desktop"
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    React__default['default'].useEffect(function () {
      var updateState = function updateState() {
        return setState({
          width: window.innerWidth,
          device: findDevice(window.innerWidth)
        });
      };

      updateState();
      window.addEventListener("resize", updateState);
      return function () {
        window.removeEventListener("resize", updateState);
      };
    }, []);
    return state;
  }

  var CSS_ALIAS_MAP = {
    ai: "alignItems",
    as: "alignSelf",
    b: "bottom",
    bd: "border",
    bdb: "borderBottom",
    bdc: "borderColor",
    bdl: "borderLeft",
    bdr: "borderRight",
    bdrs: "borderRadius",
    bdt: "borderTop",
    bg: "background",
    c: "color",
    d: "display",
    fv: "fontVariant",
    fw: "fontWeight",
    fx: "flex",
    fxd: "flexDirection",
    fxw: "flexWrap",
    fz: "fontSize",
    h: "height",
    jc: "justifyContent",
    l: "left",
    lh: "lineHeight",
    m: "margin",
    mah: "maxHeight",
    maw: "maxWidth",
    mb: "marginBottom",
    mih: "minHeight",
    miw: "minWidth",
    ml: "marginLeft",
    mr: "marginRight",
    mt: "marginTop",
    op: "opacity",
    p: "padding",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",
    pt: "paddingTop",
    r: "right",
    t: "top",
    ta: "textAlign",
    tt: "textTransform",
    va: "verticalAlign",
    w: "width"
  };
  var HTML_ATTRIBUTES = ["accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "cols", "colSpan", "content", "contentEditable", "contextMenu", "controls", "controlsList", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "nonce", "noValidate", "onBlur", "onClick", "onChange", "onContextMenu", "onDoubleClick", "onDragEnd", "onDragEnter", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onFocus", "onKeyDown", "onKeyPress", "onKeyUp", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rows", "rowSpan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "wmode", "wrap"];
  var CSS_PROPS = ["alignContent", "alignItems", "alignSelf", "animation", "background", "backgroundBlendMode", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundRepeat", "backgroundSize", "border", "borderBottom", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStyle", "borderBottomWidth", "borderColor", "borderLeft", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius", "borderRight", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderStyle", "borderTop", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom", "boxShadow", "boxSizing", "clear", "clearfix", "color", "columnGap", "cursor", "display", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "float", "font", "fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "gap", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "height", "justifyContent", "justifyItems", "justifySelf", "left", "letterSpacing", "lineHeight", "listStyle", "listStyleImage", "listStylePosition", "listStyleType", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "maxHeight", "maxWidth", "minHeight", "minWidth", "opacity", "order", "overflow", "overflowX", "overflowY", "overflowWrap", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingX", "paddingY", "placeContent", "placeItems", "placeSelf", "pointerEvents", "position", "right", "rowGap", "textAlign", "textDecoration", "textOverflow", "textShadow", "textTransform", "top", "transform", "transformOrigin", "transition", "transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction", "userSelect", "verticalAlign", "visibility", "whiteSpace", "width", "wordBreak", "wordWrap", "zIndex"];

  var pick = function pick(wl) {
    return function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return wl.reduce(function (acc, key) {
        return typeof obj[key] !== "undefined" ? _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, obj[key])) : acc;
      }, {});
    };
  };

  var pickBy = function pickBy(testFn) {
    return function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(obj).reduce(function (acc, key) {
        return testFn(obj[key], key) ? _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, obj[key])) : acc;
      }, {});
    };
  };

  var cond = function cond(conds) {
    return function (input) {
      var _conds$find;

      return (_conds$find = conds.find(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            cond = _ref2[0];

        return cond(input);
      })) === null || _conds$find === void 0 ? void 0 : _conds$find[1](input);
    };
  };

  var pickDataAttrs = pickBy(function (_, key) {
    return RegExp(/^data-.+/).test(key);
  });
  var pickAllowedAttrs = pick([].concat(_toConsumableArray(HTML_ATTRIBUTES), _toConsumableArray(CSS_PROPS)));
  var cssAliasProps = Object.keys(CSS_ALIAS_MAP);
  var resolveAlias = function resolveAlias(props) {
    var resolvedShorthandProps = cssAliasProps.reduce(function (map, value) {
      return typeof props[value] !== "undefined" ? _objectSpread2(_objectSpread2({}, map), {}, _defineProperty({}, CSS_ALIAS_MAP[value], props[value])) : map;
    }, {});
    return _objectSpread2(_objectSpread2({}, props), resolvedShorthandProps);
  };
  var parseValue = function parseValue(theme, device, value) {
    return cond([[function (v) {
      return typeof v === "undefined" || v === null;
    }, function (v) {
      return v;
    }], [function (v) {
      return typeof v === "boolean";
    }, function () {
      return "".concat(theme.gridSize, "px");
    }], [function (v) {
      return typeof v === "number";
    }, function (num) {
      return "".concat(theme.gridSize * num, "px");
    }], [function (v) {
      return typeof v === "function";
    }, function (fn) {
      return parseValue(theme, device, fn(theme));
    }], [function (v) {
      return _typeof(v) === "object";
    }, function (v) {
      return parseValue(theme, device, v[device]);
    }], [function () {
      return true;
    }, String]])(value);
  };
  var parseValues = function parseValues(theme, device, props) {
    return Object.keys(props).reduce(function (acc, key) {
      if (![].concat(_toConsumableArray(CSS_PROPS), _toConsumableArray(cssAliasProps)).includes(key)) {
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, props[key]));
      }

      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, parseValue(theme, device, props[key])));
    }, {});
  };

  var Element = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    var theme = styledComponents.useTheme();
    var deviceInfo = useDeviceInfo();
    var resolvedProps = React__default['default'].useMemo(function () {
      return parseValues(theme, deviceInfo.device, resolveAlias(props));
    }, [props]);
    var allowedAttrs = React__default['default'].useMemo(function () {
      return pickAllowedAttrs(resolvedProps);
    }, [resolvedProps]);
    return /*#__PURE__*/React__default['default'].createElement(Box__default['default'], _extends({
      ref: ref
    }, allowedAttrs, pickDataAttrs(props)), children);
  });
  Element.displayName = "Element";
  Element.defaultProps = {
    display: "flex",
    flexDirection: "column",
    position: "relative"
  };

  return Element;

})));
