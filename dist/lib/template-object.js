'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = function () {
    function Template() {
        (0, _classCallCheck3.default)(this, Template);

        this._defaultUserAgent = {
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
            silkAccelerated: false,
            browser: 'unknown',
            version: 'unknown',
            engine: 'unknown',
            arch: 'unknown',
            os: 'unknown',
            platform: 'unknown',
            geoIp: {},
            source: ''
        };
    }

    /**
     *
     * @returns {{isMobile: boolean, isTablet: boolean, isiPad: boolean, isiPod: boolean, isiPhone: boolean, isAndroid: boolean, isBlackberry: boolean, isOpera: boolean, isIE: boolean, isEdge: boolean, isIECompatibilityMode: boolean, isSafari: boolean, isFirefox: boolean, isWebkit: boolean, isChrome: boolean, isKonqueror: boolean, isOmniWeb: boolean, isSeaMonkey: boolean, isFlock: boolean, isAmaya: boolean, isEpiphany: boolean, isDesktop: boolean, isWindows: boolean, isLinux: boolean, isLinux64: boolean, isMac: boolean, isChromeOS: boolean, isBada: boolean, isSamsung: boolean, isRaspberry: boolean, isBot: boolean, isCurl: boolean, isAndroidTablet: boolean, isWinJs: boolean, isKindleFire: boolean, isSilk: boolean, isCaptive: boolean, isSmartTV: boolean, silkAccelerated: boolean, browser: string, version: string, engine: string, arch: string, os: string, platform: string, geoIp: {}, source: string}|*}
     */


    (0, _createClass3.default)(Template, [{
        key: 'defaultUserAgent',
        get: function get() {
            return this._defaultUserAgent;
        }
    }]);
    return Template;
}();

exports.default = Template;