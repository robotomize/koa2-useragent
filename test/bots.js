const ua = new require('../dist/lib/useragent');

exports['Baiduspider Bot'] = function(test) {

  const source = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
      userAgent = ua.parse(source);

  test.ok(!userAgent.isMobile, 'Mobile');
  test.ok(!userAgent.isiPad, 'iPad');
  test.ok(!userAgent.isiPod, 'iPod');
  test.ok(!userAgent.isiPhone, 'iPhone');
  test.ok(!userAgent.isAndroid, 'Android');
  test.ok(!userAgent.isBlackberry, 'Blackberry');
  test.ok(!userAgent.isOpera, 'Opera');
  test.ok(!userAgent.isIE, 'IE');
  test.ok(!userAgent.isSafari, 'Safari');
  test.ok(!userAgent.isFirefox, 'Firefox');
  test.ok(!userAgent.isWebkit, 'Webkit');
  test.ok(!userAgent.isChrome, 'Chrome');
  test.ok(!userAgent.isKonqueror, 'Konqueror');
  test.ok(!userAgent.isOmniWeb, 'OmniWeb');
  test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
  test.ok(!userAgent.isFlock, 'Flock');
  test.ok(!userAgent.isAmaya, 'Amaya');
  test.ok(!userAgent.isEpiphany, 'Epiphany');
  test.ok(!userAgent.isDesktop, 'Desktop');
  test.ok(!userAgent.isWindows, 'Windows');
  test.ok(!userAgent.isLinux, 'Linux');
  test.ok(!userAgent.isMac, 'Mac');
  test.ok(!userAgent.isBada, 'Bada');
  test.ok(!userAgent.isSamsung, 'Samsung');
  test.ok(!userAgent.isRaspberry, 'Raspberry');
  test.ok(userAgent.isBot, 'Bot');
  test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

  test.done();
};

exports['Apple Bot'] = function(test) {
  const source = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)',
      userAgent = ua.parse(source);
  test.ok(!userAgent.isMobile, 'Mobile');
  test.ok(!userAgent.isiPad, 'iPad');
  test.ok(!userAgent.isiPod, 'iPod');
  test.ok(!userAgent.isiPhone, 'iPhone');
  test.ok(!userAgent.isAndroid, 'Android');
  test.ok(!userAgent.isBlackberry, 'Blackberry');
  test.ok(!userAgent.isOpera, 'Opera');
  test.ok(!userAgent.isIE, 'IE');
  test.ok(userAgent.isSafari, 'Safari');
  test.ok(!userAgent.isFirefox, 'Firefox');
  test.ok(userAgent.isWebkit, 'Webkit');
  test.ok(!userAgent.isChrome, 'Chrome');
  test.ok(!userAgent.isKonqueror, 'Konqueror');
  test.ok(!userAgent.isOmniWeb, 'OmniWeb');
  test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
  test.ok(!userAgent.isFlock, 'Flock');
  test.ok(!userAgent.isAmaya, 'Amaya');
  test.ok(!userAgent.isEpiphany, 'Epiphany');
  test.ok(userAgent.isDesktop, 'Desktop');
  test.ok(!userAgent.isWindows, 'Windows');
  test.ok(!userAgent.isLinux, 'Linux');
  test.ok(userAgent.isMac, 'Mac');
  test.ok(!userAgent.isBada, 'Bada');
  test.ok(!userAgent.isSamsung, 'Samsung');
  test.ok(!userAgent.isRaspberry, 'Raspberry');
  test.ok(userAgent.isBot, 'Bot');
  test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

  test.done();
};

exports['Pingdom Bot'] = function(test) {

  const source = 'Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)',
      userAgent = ua.parse(source);

  test.ok(!userAgent.isMobile, 'Mobile');
  test.ok(!userAgent.isiPad, 'iPad');
  test.ok(!userAgent.isiPod, 'iPod');
  test.ok(!userAgent.isiPhone, 'iPhone');
  test.ok(!userAgent.isAndroid, 'Android');
  test.ok(!userAgent.isBlackberry, 'Blackberry');
  test.ok(!userAgent.isOpera, 'Opera');
  test.ok(!userAgent.isIE, 'IE');
  test.ok(!userAgent.isSafari, 'Safari');
  test.ok(!userAgent.isFirefox, 'Firefox');
  test.ok(!userAgent.isWebkit, 'Webkit');
  test.ok(!userAgent.isChrome, 'Chrome');
  test.ok(!userAgent.isKonqueror, 'Konqueror');
  test.ok(!userAgent.isOmniWeb, 'OmniWeb');
  test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
  test.ok(!userAgent.isFlock, 'Flock');
  test.ok(!userAgent.isAmaya, 'Amaya');
  test.ok(!userAgent.isEpiphany, 'Epiphany');
  test.ok(!userAgent.isDesktop, 'Desktop');
  test.ok(!userAgent.isWindows, 'Windows');
  test.ok(!userAgent.isLinux, 'Linux');
  test.ok(!userAgent.isMac, 'Mac');
  test.ok(!userAgent.isBada, 'Bada');
  test.ok(!userAgent.isSamsung, 'Samsung');
  test.ok(!userAgent.isRaspberry, 'Raspberry');
  test.ok(userAgent.isBot, 'Bot');
  test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

  test.done();

};
