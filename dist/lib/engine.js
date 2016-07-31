"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Engine = function Engine() {
    (0, _classCallCheck3.default)(this, Engine);

    this.Edge = /windows.+\sedge\/([\w\.]+)/i;
    this.Presto = /(presto)\/([\w\.]+)/i;
    this.Gecko = /rv\:([\w\.]+).*(gecko)/i;
    this.Tasman = /(tasman)[\/\s]\(?([\w\.]+)/i;
    this.Khtml = /(khtml)[\/\s]\(?([\w\.]+)/i;
    this.Links = /(links)[\/\s]\(?([\w\.]+)/i;
    this.Webkit = /(webkit)\/([\w\.]+)/i;
    this.Trident = /(trident)\/([\w\.]+)/i;
    this.Netfront = /(netfront)\/([\w\.]+)/i;
    this.Netsurf = /(netsurf)\/([\w\.]+)/i;
    this.Amaya = /(amaya)\/([\w\.]+)/i;
    this.Lynx = /(lynx)\/([\w\.]+)/i;
    this.W3m = /(w3m)\/([\w\.]+)/i;
    this.Icab = /(icab)[\/\s]([23]\.[\d\.]+)/i;
};

exports.default = Engine;