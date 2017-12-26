"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Browsers = function Browsers() {
    (0, _classCallCheck3.default)(this, Browsers);

    this.Edge = /edge/i;
    this.Amaya = /amaya/i;
    this.Konqueror = /konqueror/i;
    this.Epiphany = /epiphany/i;
    this.SeaMonkey = /seamonkey/i;
    this.Flock = /flock/i;
    this.OmniWeb = /omniweb/i;
    this.Chromium = /chromium|crios/i;
    this.Chrome = /chrome/i;
    this.Safari = /safari/i;
    this.IE = /msie|trident/i;
    this.Opera = /opera|OPR/i;
    this.PS3 = /playstation 3/i;
    this.PSP = /playstation portable/i;
    this.Firefox = /firefox/i;
    this.WinJs = /msapphost/i;
    this.Wechat = /wechat/i;
};

exports.default = Browsers;