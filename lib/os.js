export default class Os {
    constructor() {
        this.Windows10 = /windows nt 10\.0/i;
        this.Windows81 = /windows nt 6\.3/i;
        this.Windows8 = /windows nt 6\.2/i;
        this.Windows7 = /windows nt 6\.1/i;
        this.UnknownWindows = /windows nt 6\.\d+/i;
        this.WindowsVista = /windows nt 6\.0/i;
        this.Windows2003 = /windows nt 5\.2/i;
        this.WindowsXP = /windows nt 5\.1/i;
        this.Windows2000 = /windows nt 5\.0/i;
        this.WindowsPhone8 = /windows phone 8\./;
        this.OSXCheetah = /os x 10[._]0/i;
        this.OSXPuma = /os x 10[._]1(\D|$)/i;
        this.OSXJaguar = /os x 10[._]2/i;
        this.OSXPanther = /os x 10[._]3/i;
        this.OSXTiger = /os x 10[._]4/i;
        this.OSXLeopard = /os x 10[._]5/i;
        this.OSXSnowLeopard = /os x 10[._]6/i;
        this.OSXLion = /os x 10[._]7/i;
        this.OSXMountainLion = /os x 10[._]8/i;
        this.OSXMavericks = /os x 10[._]9/i;
        this.OSXYosemite = /os x 10[._]10/i;
        this.OSXElCapitan = /os x 10[._]11/i;
        this.Mac = /os x/i;
        this.Linux = /linux/i;
        this.Linux64 = /linux x86\_64/i;
        this.ChromeOS = /cros/i;
        this.Wii = /wii/i;
        this.PS3 = /playstation 3/i;
        this.PSP = /playstation portable/i;
        this.iPad = /\(iPad.*os (\d+)[._](\d+)/i;
        this.iPhone = /\(iPhone.*os (\d+)[._](\d+)/i;
        this.Bada = /Bada\/(\d+)\.(\d+)/i;
        this.Curl = /curl\/(\d+)\.(\d+)\.(\d+)/i;
        this.Unix = /(unix)\s?([\w\.]+)*/i;
        this.Aix = /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i;
        this.Haiku = /(haiku)\s(\w+)/i;
        this.OpenSolaris = /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i;
        this.Solaris = /(sunos)\s?([\w\.]+\d)*/i;
        this.Bsd = /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i;
        this.FirefoxOs = /mozilla.+\(mobile;.+gecko.+firefox/i;
        this.Tizen = /(tizen)[\/\s]([\w\.]+)/i;
        this.Salfish = /linux;.+(sailfish);/i;
        this.Symbian = /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i;
    }
}