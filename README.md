koa2-useragent
=====

Fast UserAgent parser based on [express-useragent](https://github.com/biggora/express-useragent)

## Install 

```js
npm install koa2-useragent
```

## Usage 
```js
 import userAgent from 'koa2-useragent';

 const app = new Koa();

 app.use(userAgent());

 app.use(ctx => {
  "use strict";
  console.log(ctx.userAgent);
 });
```

### The module will display similar information

```js
{ isMobile: false,
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
  isChrome: true,
  isKonqueror: false,
  isOmniWeb: false,
  isSeaMonkey: false,
  isFlock: false,
  isAmaya: false,
  isEpiphany: false,
  isDesktop: true,
  isWindows: false,
  isLinux: true,
  isLinux64: true,
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
  browser: 'Chrome',
  version: '51.0.2704.106',
  os: 'Linux 64',
  platform: 'Linux',
  geoIp: {},
  source: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36' }
```
## Author

Ivanov Nikita  (robotomize@gmail.com).

Based on express-useragent by Aleksej Gordejev (aleksej@gordejev.lv).
