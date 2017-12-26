export default class Platform {
    constructor() {
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
    }
}