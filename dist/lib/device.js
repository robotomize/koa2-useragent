"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Device = function Device() {
    (0, _classCallCheck3.default)(this, Device);

    this.IpadPlaybook = /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i;
    this.Ipad = /applecoremedia\/[\w\.]+ \((ipad)/;
    this.AppleTv = /(apple\s{0,1}tv)/i;
    this.Archos = /(archos)\s(gamepad2?)/i;
    this.HpTouchPad = /(hp).+(touchpad)/i;
    this.Kindle = /(kindle)\/([\w\.]+)/i;
    this.Nook = /(kindle)\/([\w\.]+)/i;
    this.Dell = /(dell)\s(strea[kpr\s\d]*[\dko])/i;
    this.KindleFireHd = /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i;
    this.FirePhone = /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i;
    this.IpodIphone = /\((ip[honed|\s\w*]+);.+(apple)/i;
    this.IpodIphone2 = /\((ip[honed|\s\w*]+);/i;
    this.BlackBerry = /(blackberry)[\s-]?(\w+)/i;
    this.Benq = /(benq)[\s_-]?([\w-]+)*/i;
    this.Palm = /(palm(?=\-))[\s_-]?([\w-]+)*/i;
    this.SonyEricson = /(palm(?=\-)|sonyericsson)[\s_-]?([\w-]+)*/i;
    this.Acer = /(acer)[\s_-]?([\w-]+)*/i;
    this.Asus = /(asus)[\s_-]?([\w-]+)*/i;
    this.Huawei = /(huawei)[\s_-]?([\w-]+)*/i;
    this.Meizu = /(meizu)[\s_-]?([\w-]+)*/i;
    this.Motorola = /(motorola)[\s_-]?([\w-]+)*/i;
    this.Polytron = /(polytron)[\s_-]?([\w-]+)*/i;
    this.HpIpaq = /(hp)\s([\w\s]+\w)/i;
    this.Blackberry10 = /\(bb10;\s(\w+)/i;
    this.AsusTablet = /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i;
    this.Sony = /(sony)\s(tablet\s[ps])\sbuild\//i;
    this.Ouya = /\s(ouya)\s/i;
    this.Nintendo = /(nintendo)\s([wids3u]+)/i;
    this.Nvidia = /android.+;\s(shield)\sbuild/i;
    this.PlayStation = /(playstation\s[34portablevi]+)/i;
    this.SprintPhones = /(sprint\s(\w+))/i;
    this.LenovoTablets = /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i;
    this.Htc = /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i;
    this.Zte = /(zte)-(\w+)*/i;
    this.Alcatel = /(alcatel)[_\s-]?([\w-]+)*/i;
    this.GeeksPhone = /(geeksphone)[_\s-]?([\w-]+)*/i;
    this.Nexian = /(nexian)[_\s-]?([\w-]+)*/i;
    this.Panasonic = /(panasonic)[_\s-]?([\w-]+)*/i;
    this.HtcNexus9 = /(nexus\s9)/i;
    this.Xbox = /[\s\(;](xbox(?:\sone)?)[\s\);]/i;
    this.Kinect = /(kin\.[onetw]{3})/i;
    this.MotoMob = /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i;
    this.MotoTab = /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i;
    this.SumsungTab = /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i;
    this.SumsungPhone = /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i;
    this.Sharp = /\(dtv[\);].+(aquos)/i;
    this.Siemens = /sie-(\w+)*/i;
    this.Nokia = /(maemo|nokia).*(n900|lumia\s\d+)/i;
    this.Acer = /android\s3\.[\s\w;-]{10}(a\d{3})/i;
    this.LgTab = /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i;
};

exports.default = Device;