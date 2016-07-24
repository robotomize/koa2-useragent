koa2-useragent
=====

Fast UserAgent parser based on [express-useragent](https://github.com/biggora/express-useragent).
I rewrite the code to es7, but I did use gulp+babel to compile

[![NPM](https://nodei.co/npm/koa2-useragent.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/koa2-useragent/)

## Install 

```js
npm install koa2-useragent
```

## Usage 
```js
 import userAgent from 'koa2-useragent';

 app.use(userAgent());

 app.use(async (ctx, next) => {
     console.log(ctx.userAgent);
     await next();
 });
```
### Use property filters isDesktop isMobile, as an example
#### You can aggregate the objects into arrays and filter data for analysis or statistics


```js
let userAgentStorage = [];
let filtered = [];
uas.push(ctx.userAgent); // Desktop user agent object
uas.push(ctx.userAgent); // Mobile user agent object

/**
 *  You will fetch only mobile and Android useragent
 */
filtered = userAgentStorage.filter((userAgent) => {
    if (userAgent.isMobile === true && userAgent.isAndroid === true) {
        return userAgent;
    }
});

/**
 * You'll get desktop users on Mac using Chrome
 */
filtered = userAgentStorage.filter((userAgent) => {
    if (userAgent.isDesktop === true && userAgent.isMac === true && userAgent.isChrome) {
        return userAgent;
    }
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
