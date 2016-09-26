import userAgent from './lib/useragent';

export default () => {
    return async (ctx, next) => {
        let source =  ctx.req.headers['user-agent'] || '';
        let ua = new userAgent();

        ua.reset();

        if (typeof source === 'undefined') {
            source = 'unknown';
        }

        let pullToAgent = async () => {
            "use strict";
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
        };

        await pullToAgent();

        ctx.userAgent = await ua.Agent;

        await next();
    };
};
