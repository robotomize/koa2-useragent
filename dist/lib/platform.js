"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Platform = function Platform() {
    (0, _classCallCheck3.default)(this, Platform);

    this.Windows = /windows nt/i;
    this.WindowsPhone = /windows phone/i;
    this.Mac = /macintosh/i;
    this.Linux = /linux/i;
    this.Wii = /wii/i;
    this.Playstation = /playstation/i;
    this.iPad = /ipad/i;
    this.iPod = /ipod/i;
    this.iPhone = /iphone/i;
    this.Android = /android/i;
    this.Blackberry = /blackberry/i;
    this.Samsung = /samsung/i;
    this.Curl = /curl/i;
    this.Wechat = /micromessenger/i;
};

exports.default = Platform;