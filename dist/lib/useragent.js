'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _versions = require('./versions');

var _versions2 = _interopRequireDefault(_versions);

var _browsers = require('./browsers');

var _browsers2 = _interopRequireDefault(_browsers);

var _os = require('./os');

var _os2 = _interopRequireDefault(_os);

var _platform = require('./platform');

var _platform2 = _interopRequireDefault(_platform);

var _engine = require('./engine');

var _engine2 = _interopRequireDefault(_engine);

var _arch = require('./arch.js');

var _arch2 = _interopRequireDefault(_arch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BOTS = ['\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/', 'googlebot', 'baiduspider', 'gurujibot', 'yandexbot', 'slurp', 'msnbot', 'bingbot', 'facebookexternalhit', 'linkedinbot', 'twitterbot', 'slackbot', 'telegrambot', 'applebot', 'pingdom', 'tumblr '];

var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

/**
 *
 */

var UserAgent = function () {
    function UserAgent() {
        (0, _classCallCheck3.default)(this, UserAgent);

        this._Versions = new _versions2.default();
        this._Browsers = new _browsers2.default();
        this._OS = new _os2.default();
        this._Platform = new _platform2.default();
        this._Engine = new _engine2.default();
        this._Arch = new _arch2.default();
        this.DefaultAgent = {
            isMobile: false,
            isTablet: false,
            isiPad: false,
            isiPod: false,
            isiPhone: false,
            isAndroid: false,
            isBlackberry: false,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isEpiphany: false,
            isDesktop: false,
            isWindows: false,
            isLinux: false,
            isLinux64: false,
            isMac: false,
            isChromeOS: false,
            isBada: false,
            isSamsung: false,
            isRaspberry: false,
            isBot: false,
            isCurl: false,
            isAndroidTablet: false,
            isWinJs: false,
            isKindleFire: false,
            isSilk: false,
            isCaptive: false,
            isSmartTV: false,
            isWechat: false,
            silkAccelerated: false,
            browser: 'unknown',
            version: 'unknown',
            engine: 'unknow',
            arch: 'unknow',
            os: 'unknown',
            platform: 'unknown',
            geoIp: {},
            source: ''
        };
        this.Agent = {};
    }

    /**
     *
     * @param string
     * @returns {*}
     */


    (0, _createClass3.default)(UserAgent, [{
        key: 'getBrowser',
        value: function getBrowser(string) {
            switch (true) {
                case this._Browsers.Edge.test(string):
                    this.Agent.isEdge = true;
                    return 'Edge';
                case this._Browsers.Konqueror.test(string):
                    this.Agent.isKonqueror = true;
                    return 'Konqueror';
                case this._Browsers.Amaya.test(string):
                    this.Agent.isAmaya = true;
                    return 'Amaya';
                case this._Browsers.Epiphany.test(string):
                    this.Agent.isEpiphany = true;
                    return 'Epiphany';
                case this._Browsers.SeaMonkey.test(string):
                    this.Agent.isSeaMonkey = true;
                    return 'SeaMonkey';
                case this._Browsers.Flock.test(string):
                    this.Agent.isFlock = true;
                    return 'Flock';
                case this._Browsers.OmniWeb.test(string):
                    this.Agent.isOmniWeb = true;
                    return 'OmniWeb';
                case this._Browsers.Opera.test(string):
                    this.Agent.isOpera = true;
                    return 'Opera';
                case this._Browsers.Chromium.test(string):
                    this.Agent.isChrome = true;
                    return 'Chromium';
                case this._Browsers.Chrome.test(string):
                    this.Agent.isChrome = true;
                    return 'Chrome';
                case this._Browsers.Safari.test(string):
                    this.Agent.isSafari = true;
                    return 'Safari';
                case this._Browsers.WinJs.test(string):
                    this.Agent.isWinJs = true;
                    return 'WinJs';
                case this._Browsers.IE.test(string):
                    this.Agent.isIE = true;
                    return 'IE';
                case this._Browsers.PS3.test(string):
                    return 'ps3';
                case this._Browsers.PSP.test(string):
                    return 'psp';
                case this._Browsers.Firefox.test(string):
                    this.Agent.isFirefox = true;
                    return 'Firefox';
                case this._Browsers.Wechat.test(string):
                    this.Agent.isWechat = true;
                    return 'Wechat';
                default:
                    return 'unknown';
            }
        }

        /**
         *
         * @param string
         * @returns {string}
         */

    }, {
        key: 'getBrowserVersion',
        value: function getBrowserVersion(string) {
            var regex = void 0;
            switch (this.Agent.browser) {
                case 'Edge':
                    if (this._Versions.Edge.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chrome':
                    if (this._Versions.Chrome.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chromium':
                    if (this._Versions.Chromium.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Safari':
                    if (this._Versions.Safari.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Opera':
                    if (this._Versions.Opera.test(string)) {
                        return RegExp.$1 ? RegExp.$1 : RegExp.$2;
                    }
                    break;
                case 'Firefox':
                    if (this._Versions.Firefox.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'WinJs':
                    if (this._Versions.WinJs.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'IE':
                    if (this._Versions.IE.test(string)) {
                        return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                    }
                    break;
                case 'ps3':
                    if (this._Versions.Ps3.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'psp':
                    if (this._Versions.Psp.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Amaya':
                    if (this._Versions.Amaya.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Epiphany':
                    if (this._Versions.Epiphany.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'SeaMonkey':
                    if (this._Versions.SeaMonkey.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Flock':
                    if (this._Versions.Flock.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'OmniWeb':
                    if (this._Versions.OmniWeb.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                default:
                    regex = /#{name}[\/ ]([\d\w\.\-]+)/i;
                    if (regex.test(string)) {
                        return RegExp.$1;
                    }
            }
        }

        /**
         *
         * @param string
         * @returns {*}
         */

    }, {
        key: 'getOS',
        value: function getOS(string) {
            switch (true) {
                case this._OS.WindowsVista.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows Vista';
                case this._OS.Windows7.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 7';
                case this._OS.Windows8.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8';
                case this._OS.Windows81.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8.1';
                case this._OS.Windows10.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 10.0';
                case this._OS.Windows2003.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2003';
                case this._OS.WindowsXP.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows XP';
                case this._OS.Windows2000.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2000';
                case this._OS.WindowsPhone8.test(string):
                    return 'Windows Phone 8';
                case this._OS.Linux64.test(string):
                    this.Agent.isLinux = true;
                    this.Agent.isLinux64 = true;
                    return 'Linux 64';
                case this._OS.Linux.test(string):
                    this.Agent.isLinux = true;
                    return 'Linux';
                case this._OS.ChromeOS.test(string):
                    this.Agent.isChromeOS = true;
                    return 'Chrome OS';
                case this._OS.Wii.test(string):
                    return 'Wii';
                case this._OS.PS3.test(string):
                    return 'Playstation';
                case this._OS.PSP.test(string):
                    return 'Playstation';
                case this._OS.OSXCheetah.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Cheetah';
                case this._OS.OSXPuma.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Puma';
                case this._OS.OSXJaguar.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Jaguar';
                case this._OS.OSXPanther.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Panther';
                case this._OS.OSXTiger.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Tiger';
                case this._OS.OSXLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Leopard';
                case this._OS.OSXSnowLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Snow Leopard';
                case this._OS.OSXLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Lion';
                case this._OS.OSXMountainLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mountain Lion';
                case this._OS.OSXMavericks.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mavericks';
                case this._OS.OSXYosemite.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Yosemite';
                case this._OS.OSXElCapitan.test(string):
                    this.Agent.isMac = true;
                    return 'OS X El Capitan';
                case this._OS.Mac.test(string):
                    this.Agent.isMac = true;
                    return 'OS X';
                case this._OS.iPad.test(string):
                    this.Agent.isiPad = true;
                    return string.match(this._OS.iPad)[0].replace('_', '.');
                case this._OS.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return string.match(this._OS.iPhone)[0].replace('_', '.');
                case this._OS.Bada.test(string):
                    this.Agent.isBada = true;
                    return 'Bada';
                case this._OS.Curl.test(string):
                    this.Agent.isCurl = true;
                    return 'Curl';
                case this._OS.Aix.test(string):
                    this.Agent.isAix = true;
                    return 'Aix';
                case this._OS.Haiku.test(string):
                    this.Agent.isHaiku = true;
                    return 'Haiku';
                case this._OS.OpenSolaris.test(string):
                    this.Agent.iSOpenSolaris = true;
                    return 'OpenSolaris';
                case this._OS.Solaris.test(string):
                    this.Agent.isSolaris = true;
                    return 'Solaris';
                case this._OS.Bsd.test(string):
                    this.Agent.isBsd = true;
                    return 'Bsd';
                case this._OS.FirefoxOs.test(string):
                    this.Agent.isFirefoxOs = true;
                    return 'FirefoxOs';
                case this._OS.Tizen.test(string):
                    this.Agent.isTizen = true;
                    return 'Tizen';
                case this._OS.Salfish.test(string):
                    this.Agent.isSalfish = true;
                    return 'Salfish';
                case this._OS.Symbian.test(string):
                    this.Agent.isSymbian = true;
                    return 'Symbian';
                default:
                    return 'unknown';
            }
        }

        /**
         *
         * @param string
         * @returns {*}
         */

    }, {
        key: 'getArch',
        value: function getArch(string) {
            switch (true) {
                case this._Arch.Amd64.test(string):
                    this.Agent.isAmd64 = true;
                    return 'Amd64';
                case this._Arch.Ia32.test(string):
                    this.Agent.isIa32 = true;
                    return 'Ia32';
                case this._Arch.Ia3386.test(string):
                    this.Agent.isIa3386 = true;
                    return '386';
                case this._Arch.powerPc.test(string):
                    this.Agent.ispowerPc = true;
                    return 'powerPc';
                case this._Arch.Arm64mips.test(string):
                    this.Agent.isArm64mips = true;
                    return 'Arm64-mps';
                default:
                    return 'Unknow';
            }
        }
    }, {
        key: 'getEngine',
        value: function getEngine(string) {
            switch (true) {
                case this._Engine.Edge.test(string):
                    this.Agent.isEdge = true;
                    return 'Edge';
                case this._Engine.Presto.test(string):
                    this.Agent.isPresto = true;
                    return 'Presto';
                case this._Engine.Gecko.test(string):
                    this.Agent.isGecko = true;
                    return 'Gecko';
                case this._Engine.Tasman.test(string):
                    this.Agent.isTasman = true;
                    return 'Tasman';
                case this._Engine.Khtml.test(string):
                    this.Agent.isKhtml = true;
                    return 'Khtml';
                case this._Engine.Links.test(string):
                    this.Agent.isLinks = true;
                    return 'Links';
                case this._Engine.Webkit.test(string):
                    this.Agent.isWebkit = true;
                    return 'Webkit';
                case this._Engine.Trident.test(string):
                    this.Agent.isTrident = true;
                    return 'Trident';
                case this._Engine.Netfront.test(string):
                    this.Agent.isNetfront = true;
                    return 'Netfront';
                case this._Engine.Netsurf.test(string):
                    this.Agent.isNetsurf = true;
                    return 'Netsurf';
                case this._Engine.Amaya.test(string):
                    this.Agent.isAmaya = true;
                    return 'Amaya';
                case this._Engine.Lynx.test(string):
                    this.Agent.isLynx = true;
                    return 'Lynx';
                case this._Engine.W3m.test(string):
                    this.Agent.isW3m = true;
                    return 'W3m';
                case this._Engine.Icab.test(string):
                    this.Agent.isIcab = true;
                    return 'Icab';
                default:
                    return 'Unknow';
            }
        }

        /**
         *
         * @param string
         * @returns {*}
         */

    }, {
        key: 'getPlatform',
        value: function getPlatform(string) {
            switch (true) {
                case this._Platform.Windows.test(string):
                    return 'Microsoft Windows';
                case this._Platform.WindowsPhone.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Microsoft Windows Phone';
                case this._Platform.Mac.test(string):
                    return 'Apple Mac';
                case this._Platform.Curl.test(string):
                    return 'Curl';
                case this._Platform.Android.test(string):
                    this.Agent.isAndroid = true;
                    return 'Android';
                case this._Platform.Blackberry.test(string):
                    this.Agent.isBlackberry = true;
                    return 'Blackberry';
                case this._Platform.Linux.test(string):
                    return 'Linux';
                case this._Platform.Wii.test(string):
                    return 'Wii';
                case this._Platform.Playstation.test(string):
                    return 'Playstation';
                case this._Platform.iPad.test(string):
                    this.Agent.isiPad = true;
                    return 'iPad';
                case this._Platform.iPod.test(string):
                    this.Agent.isiPod = true;
                    return 'iPod';
                case this._Platform.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return 'iPhone';
                case this._Platform.Samsung.test(string):
                    this.Agent.isiSamsung = true;
                    return 'Samsung';
                default:
                    return 'unknown';
            }
        }

        /**
         *
         */

    }, {
        key: 'testCompatibilityMode',
        value: function testCompatibilityMode() {
            var ua = this;
            if (this.Agent.isIE) {
                if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                    var tridentVersion = parseInt(RegExp.$1, 10);
                    var version = parseInt(ua.Agent.version, 10);
                    if (version === 7 && tridentVersion === 6) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 10.0;
                    }

                    if (version === 7 && tridentVersion === 5) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 9.0;
                    }

                    if (version === 7 && tridentVersion === 4) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 8.0;
                    }
                }
            }
        }

        /**
         *
         * @returns {*}
         */

    }, {
        key: 'testSilk',
        value: function testSilk() {
            var ua = this;
            switch (true) {
                case new RegExp('silk', 'gi').test(ua.Agent.source):
                    this.Agent.isSilk = true;
                    break;
                default:
            }

            if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
                this.Agent.SilkAccelerated = true;
            }
            return this.Agent.isSilk ? 'Silk' : false;
        }

        /**
         *
         * @returns {*}
         */

    }, {
        key: 'testKindleFire',
        value: function testKindleFire() {
            var ua = this;
            switch (true) {
                case /KFOT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire';
                case /KFTT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD';
                case /KFJWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9';
                case /KFJWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9 4G';
                case /KFSOWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 7';
                case /KFTHWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7';
                case /KFTHWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7 4G';
                case /KFAPWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9';
                case /KFAPWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9 4G';
                default:
                    return false;
            }
        }

        /**
         *
         * @returns {*}
         */

    }, {
        key: 'testCaptiveNetwork',
        value: function testCaptiveNetwork() {
            var ua = this;
            switch (true) {
                case /CaptiveNetwork/gi.test(ua.Agent.source):
                    ua.Agent.isCaptive = true;
                    ua.Agent.isMac = true;
                    ua.Agent.platform = 'Apple Mac';
                    return 'CaptiveNetwork';
                default:
                    return false;
            }
        }

        /**
         *
         * @returns {UserAgent}
         */

    }, {
        key: 'reset',
        value: function reset() {
            var ua = this;
            for (var key in ua.DefaultAgent) {
                ua.Agent[key] = ua.DefaultAgent[key];
            }
            return ua;
        }

        /**
         *
         */

    }, {
        key: 'testMobile',
        value: function testMobile() {
            var ua = this;
            switch (true) {
                case ua.Agent.isWindows:
                case ua.Agent.isLinux:
                case ua.Agent.isMac:
                case ua.Agent.isChromeOS:
                    ua.Agent.isDesktop = true;
                    break;
                case ua.Agent.isAndroid:
                case ua.Agent.isSamsung:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isiPod:
                case ua.Agent.isiPhone:
                case ua.Agent.isBada:
                case ua.Agent.isBlackberry:
                case ua.Agent.isAndroid:
                case ua.Agent.isWindowsPhone:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            if (/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isMobile = true;
                ua.Agent.isDesktop = false;
            }
        }

        /**
         *
         */

    }, {
        key: 'testTablet',
        value: function testTablet() {
            var ua = this;
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isAndroidTablet:
                case ua.Agent.isKindleFire:
                    ua.Agent.isTablet = true;
                    break;
            }
            if (/tablet/i.test(ua.Agent.source)) {
                ua.Agent.isTablet = true;
            }
        }

        /**
         *
         * @param headers
         */

    }, {
        key: 'testNginxGeoIP',
        value: function testNginxGeoIP(headers) {
            var ua = this;
            (0, _keys2.default)(headers).forEach(function (key) {
                if (/^GEOIP/i.test(key)) {
                    ua.Agent.geoIp[key] = headers[key];
                }
            });
        }
    }, {
        key: 'testBot',
        value: function testBot() {
            var ua = this;
            var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
            if (isBot) {
                ua.Agent.isBot = isBot[1];
            }
        }
    }, {
        key: 'testSmartTV',
        value: function testSmartTV() {
            var ua = this;
            var isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv', 'gi').exec(ua.Agent.source.toLowerCase());
            if (isSmartTV) {
                ua.Agent.isSmartTV = isSmartTV[1];
            }
        }
    }, {
        key: 'testAndroidTablet',
        value: function testAndroidTablet() {
            var ua = this;
            if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidTablet = true;
            }
        }

        /**
         *
         * @returns {{}|*}
         */

    }], [{
        key: 'parse',
        value: function parse() {
            var ua = new UserAgent();
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.os = ua.getOS(ua.Agent.source);
            ua.Agent.platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
            ua.Agent.engine = ua.getEngine(ua.Agent.source);
            ua.testBot();
            ua.testSmartTV();
            ua.testMobile();
            ua.testAndroidTablet();
            ua.testTablet();
            ua.testCompatibilityMode();
            ua.testSilk();
            ua.testKindleFire();
            ua.testCaptiveNetwork();
            return ua.Agent;
        }
    }]);
    return UserAgent;
}();

exports.default = UserAgent;