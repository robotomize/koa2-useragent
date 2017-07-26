'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _useragent = require('./lib/useragent');

var _useragent2 = _interopRequireDefault(_useragent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
            var source, ua, pullToAgent;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            source = ctx.req.headers['user-agent'] || '';
                            ua = new _useragent2.default();


                            ua.reset();

                            if (typeof source === 'undefined') {
                                source = 'unknown';
                            }

                            pullToAgent = function () {
                                var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                                    "use strict";

                                    return _regenerator2.default.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
                                                    ua.Agent.os = ua.getOS(ua.Agent.source);
                                                    ua.Agent.platform = ua.getPlatform(ua.Agent.source);
                                                    ua.Agent.browser = ua.getBrowser(ua.Agent.source);
                                                    ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
                                                    ua.Agent.engine = ua.getEngine(ua.Agent.source);
                                                    ua.Agent.arch = ua.getArch(ua.Agent.source);
                                                    ua.testNginxGeoIP(ctx.req.headers);
                                                    ua.testBot();
                                                    ua.testMobile();
                                                    ua.testAndroidTablet();
                                                    ua.testTablet();
                                                    ua.testCompatibilityMode();
                                                    ua.testSilk();
                                                    ua.testKindleFire();

                                                case 15:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, undefined);
                                }));

                                return function pullToAgent() {
                                    return _ref2.apply(this, arguments);
                                };
                            }();

                            _context2.next = 7;
                            return pullToAgent();

                        case 7:
                            _context2.next = 9;
                            return ua.Agent;

                        case 9:
                            ctx.userAgent = _context2.sent;
                            _context2.next = 12;
                            return next();

                        case 12:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};