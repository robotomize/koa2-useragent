"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Versions = function Versions() {
    (0, _classCallCheck3.default)(this, Versions);

    this.Edge = /Edge\/([\d\w\.\-]+)/i;
    this.Firefox = /firefox\/([\d\w\.\-]+)/i;
    this.IE = /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i;
    this.Chrome = /chrome\/([\d\w\.\-]+)/i;
    this.Chromium = /(?:chromium|crios)\/([\d\w\.\-]+)/i;
    this.Safari = /version\/([\d\w\.\-]+)/i;
    this.Opera = /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i;
    this.Ps3 = /([\d\w\.\-]+)\)\s*$/i;
    this.Psp = /([\d\w\.\-]+)\)?\s*$/i;
    this.Amaya = /amaya\/([\d\w\.\-]+)/i;
    this.SeaMonkey = /seamonkey\/([\d\w\.\-]+)/i;
    this.OmniWeb = /omniweb\/v([\d\w\.\-]+)/i;
    this.Flock = /flock\/([\d\w\.\-]+)/i;
    this.Epiphany = /epiphany\/([\d\w\.\-]+)/i;
    this.WinJs = /msapphost\/([\d\w\.\-]+)/i;
};

exports.default = Versions;