"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULT_GROUP_ID = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _qs = _interopRequireDefault(require("qs"));
var _global = require("global");
var _theming = require("@storybook/theming");
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
var _coreEvents = require("@storybook/core-events");
var _components = require("@storybook/components");
var _shared = require("../shared");
var _types = require("./types");
var _PropForm = _interopRequireDefault(require("./PropForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getTimestamp = function getTimestamp() {
  return +new Date();
};
var DEFAULT_GROUP_ID = 'Other';
exports.DEFAULT_GROUP_ID = DEFAULT_GROUP_ID;
var PanelWrapper = (0, _theming.styled)(function (_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_components.ScrollArea, {
    horizontal: true,
    vertical: true,
    className: className
  }, children);
})({
  height: '100%',
  width: '100%'
});
var KnobPanel = /*#__PURE__*/function (_PureComponent) {
  _inherits(KnobPanel, _PureComponent);
  var _super = _createSuper(KnobPanel);
  function KnobPanel() {
    var _this;
    _classCallCheck(this, KnobPanel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      knobs: {}
    });
    _defineProperty(_assertThisInitialized(_this), "options", {});
    _defineProperty(_assertThisInitialized(_this), "lastEdit", getTimestamp());
    _defineProperty(_assertThisInitialized(_this), "loadedFromUrl", false);
    _defineProperty(_assertThisInitialized(_this), "mounted", false);
    _defineProperty(_assertThisInitialized(_this), "setOptions", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        timestamps: false
      };
      _this.options = options;
    });
    _defineProperty(_assertThisInitialized(_this), "setKnobs", function (_ref2) {
      var knobs = _ref2.knobs,
        timestamp = _ref2.timestamp;
      var queryParams = {};
      var api = _this.props.api;
      if (!_this.options.timestamps || !timestamp || _this.lastEdit <= timestamp) {
        Object.keys(knobs).forEach(function (name) {
          var knob = knobs[name];
          // For the first time, get values from the URL and set them.
          if (!_this.loadedFromUrl) {
            var urlValue = api.getQueryParam("knob-".concat(name));

            // If the knob value present in url
            if (urlValue !== undefined) {
              var value = (0, _types.getKnobControl)(knob.type).deserialize(urlValue);
              knob.value = value;
              queryParams["knob-".concat(name)] = (0, _types.getKnobControl)(knob.type).serialize(value);
              api.emit(_shared.CHANGE, knob);
            }
          }
        });
        api.setQueryParams(queryParams);
        _this.setState({
          knobs: knobs
        });
        _this.loadedFromUrl = true;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var api = _this.props.api;
      api.emit(_shared.RESET);
    });
    _defineProperty(_assertThisInitialized(_this), "copy", function () {
      var location = _global.document.location;
      var query = _qs["default"].parse(location.search, {
        ignoreQueryPrefix: true
      });
      var knobs = _this.state.knobs;
      Object.entries(knobs).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          knob = _ref4[1];
        query["knob-".concat(name)] = (0, _types.getKnobControl)(knob.type).serialize(knob.value);
      });
      (0, _copyToClipboard["default"])("".concat(location.origin + location.pathname, "?").concat(_qs["default"].stringify(query, {
        encode: false
      })));

      // TODO: show some notification of this
    });
    _defineProperty(_assertThisInitialized(_this), "emitChange", function (changedKnob) {
      var api = _this.props.api;
      api.emit(_shared.CHANGE, changedKnob);
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (changedKnob) {
      _this.lastEdit = getTimestamp();
      var api = _this.props.api;
      var knobs = _this.state.knobs;
      var name = changedKnob.name;
      var newKnobs = _objectSpread({}, knobs);
      newKnobs[name] = _objectSpread(_objectSpread({}, newKnobs[name]), changedKnob);
      _this.setState({
        knobs: newKnobs
      }, function () {
        _this.emitChange(changedKnob);
        var queryParams = {};
        Object.keys(newKnobs).forEach(function (n) {
          var knob = newKnobs[n];
          queryParams["knob-".concat(n)] = (0, _types.getKnobControl)(knob.type).serialize(knob.value);
        });
        api.setQueryParams(queryParams);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleClick", function (knob) {
      var api = _this.props.api;
      api.emit(_shared.CLICK, knob);
    });
    return _this;
  }
  _createClass(KnobPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.mounted = true;
      var api = this.props.api;
      api.on(_shared.SET, this.setKnobs);
      api.on(_shared.SET_OPTIONS, this.setOptions);
      this.stopListeningOnStory = api.on(_coreEvents.STORY_CHANGED, function () {
        if (_this2.mounted) {
          _this2.setKnobs({
            knobs: {}
          });
        }
        _this2.setKnobs({
          knobs: {}
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      var api = this.props.api;
      api.off(_shared.SET, this.setKnobs);
      this.stopListeningOnStory();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var knobs = this.state.knobs;
      var panelActive = this.props.active;
      if (!panelActive) {
        return null;
      }
      var groups = {};
      var groupIds = [];
      var knobKeysArray = Object.keys(knobs).filter(function (key) {
        return knobs[key].used;
      });
      knobKeysArray.forEach(function (key) {
        var knobKeyGroupId = knobs[key].groupId || DEFAULT_GROUP_ID;
        groupIds.push(knobKeyGroupId);
        groups[knobKeyGroupId] = {
          render: function render(_ref5) {
            var active = _ref5.active;
            return /*#__PURE__*/_react["default"].createElement(_components.TabWrapper, {
              key: knobKeyGroupId,
              active: active
            }, /*#__PURE__*/_react["default"].createElement(_PropForm["default"], {
              knobs: knobsArray.filter(function (knob) {
                return (knob.groupId || DEFAULT_GROUP_ID) === knobKeyGroupId;
              }),
              onFieldChange: _this3.handleChange,
              onFieldClick: _this3.handleClick
            }));
          },
          title: knobKeyGroupId
        };
      });
      var knobsArray = knobKeysArray.map(function (key) {
        return knobs[key];
      });
      if (knobsArray.length === 0) {
        return /*#__PURE__*/_react["default"].createElement(_components.Placeholder, null, /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, "No knobs found"), /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, "Learn how to\xA0", /*#__PURE__*/_react["default"].createElement(_components.Link, {
          href: "https://github.com/storybookjs/storybook/tree/master/addons/knobs",
          target: "_blank",
          withArrow: true,
          cancel: false
        }, "dynamically interact with components")));
      }

      // Always sort DEFAULT_GROUP_ID (ungrouped) tab last without changing the remaining tabs
      var sortEntries = function sortEntries(g) {
        var unsortedKeys = Object.keys(g);
        if (unsortedKeys.includes(DEFAULT_GROUP_ID)) {
          var sortedKeys = unsortedKeys.filter(function (key) {
            return key !== DEFAULT_GROUP_ID;
          });
          sortedKeys.push(DEFAULT_GROUP_ID);
          return sortedKeys.map(function (key) {
            return [key, g[key]];
          });
        }
        return Object.entries(g);
      };
      var entries = sortEntries(groups);
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(PanelWrapper, null, entries.length > 1 ? /*#__PURE__*/_react["default"].createElement(_components.TabsState, null, entries.map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          k = _ref7[0],
          v = _ref7[1];
        return /*#__PURE__*/_react["default"].createElement("div", {
          id: k,
          key: k,
          title: v.title
        }, v.render);
      })) : /*#__PURE__*/_react["default"].createElement(_PropForm["default"], {
        knobs: knobsArray,
        onFieldChange: this.handleChange,
        onFieldClick: this.handleClick
      })), /*#__PURE__*/_react["default"].createElement(_components.ActionBar, {
        actionItems: [{
          title: 'Copy',
          onClick: this.copy
        }, {
          title: 'Reset',
          onClick: this.reset
        }]
      }));
    }
  }]);
  return KnobPanel;
}(_react.PureComponent);
exports["default"] = KnobPanel;
_defineProperty(KnobPanel, "propTypes", {
  active: _propTypes["default"].bool.isRequired,
  onReset: _propTypes["default"].object,
  // eslint-disable-line
  api: _propTypes["default"].shape({
    on: _propTypes["default"].func,
    off: _propTypes["default"].func,
    emit: _propTypes["default"].func,
    getQueryParam: _propTypes["default"].func,
    setQueryParams: _propTypes["default"].func
  }).isRequired
});
_defineProperty(KnobPanel, "defaultProps", {
  active: true,
  api: {
    on: function on() {
      return function () {};
    },
    off: function off() {},
    emit: function emit() {},
    getQueryParam: function getQueryParam() {
      return undefined;
    },
    setQueryParams: function setQueryParams() {}
  }
});