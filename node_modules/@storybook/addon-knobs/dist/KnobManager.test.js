"use strict";

var _KnobManager = _interopRequireDefault(require("./KnobManager"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('global', function () {
  return {
    navigator: {
      userAgent: 'browser',
      platform: ''
    },
    window: {
      __STORYBOOK_CLIENT_API__: undefined,
      addEventListener: jest.fn(),
      location: {
        search: ''
      },
      history: {
        replaceState: jest.fn()
      }
    },
    document: {
      addEventListener: jest.fn(),
      getElementById: jest.fn().mockReturnValue({}),
      body: {
        classList: {
          add: jest.fn(),
          remove: jest.fn()
        }
      },
      documentElement: {},
      location: {
        search: '?id=kind--story'
      }
    }
  };
});
describe('KnobManager', function () {
  describe('knob()', function () {
    describe('when the knob is present in the knobStore', function () {
      var testManager = new _KnobManager["default"]();
      beforeEach(function () {
        testManager.knobStore = {
          set: jest.fn(),
          update: jest.fn(),
          get: function get() {
            return {
              defaultValue: 'default value',
              name: 'foo',
              type: 'string',
              value: 'current value'
            };
          }
        };
      });
      it('should return the existing knob value when types match', function () {
        var defaultKnob = {
          name: 'foo',
          type: 'string',
          value: 'default value'
        };
        var knob = testManager.knob('foo', defaultKnob);
        expect(knob).toEqual('current value');
        expect(testManager.knobStore.set).not.toHaveBeenCalled();
      });
      it('should update the existing knob options when types match', function () {
        var defaultKnob = {
          name: 'foo',
          type: 'string',
          value: 'default value',
          foo: 'foo'
        };
        testManager.knob('foo', defaultKnob);
        expect(testManager.knobStore.update).toHaveBeenCalledWith('foo', expect.objectContaining({
          foo: 'foo'
        }));
      });
      it('should return the new default knob value when type has changed', function () {
        var defaultKnob = {
          name: 'foo',
          value: true,
          type: 'boolean'
        };
        testManager.knob('foo', defaultKnob);
        var newKnob = _objectSpread(_objectSpread({}, defaultKnob), {}, {
          label: 'foo',
          defaultValue: defaultKnob.value
        });
        expect(testManager.knobStore.set).toHaveBeenCalledWith('foo', newKnob);
      });
    });
    describe('when the knob is not present in the knobStore', function () {
      var testManager = new _KnobManager["default"]();
      beforeEach(function () {
        testManager.knobStore = {
          set: jest.fn(),
          get: jest.fn()
        };
        testManager.knobStore.get.mockImplementationOnce(function () {
          return undefined;
        }).mockImplementationOnce(function () {
          return 'normal value';
        });
      });
      it('should return the new default knob value when default has changed', function () {
        var defaultKnob = {
          name: 'foo',
          value: 'normal value'
        };
        testManager.knob('foo', defaultKnob);
        var newKnob = _objectSpread(_objectSpread({}, defaultKnob), {}, {
          label: 'foo',
          defaultValue: defaultKnob.value
        });
        expect(testManager.knobStore.set).toHaveBeenCalledWith('foo', newKnob);
      });
    });
  });
});