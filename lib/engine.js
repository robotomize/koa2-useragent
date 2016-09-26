export default class Engine {
    constructor() {
        this.Edge = /windows.+\sedge\/([\w\.]+)/i;
        this.Presto = /(presto)\/([\w\.]+)/i;
        this.Gecko = /rv\:([\w\.]+).*(gecko)/i;
        this.Tasman = /(tasman)[\/\s]\(?([\w\.]+)/i;
        this.Khtml = /(khtml)[\/\s]\(?([\w\.]+)/i;
        this.Links = /(links)[\/\s]\(?([\w\.]+)/i;
        this.Webkit = /(webkit)\/([\w\.]+)/i;
        this.Trident = /(trident)\/([\w\.]+)/i;
        this.Netfront = /(netfront)\/([\w\.]+)/i;
        this.Netsurf = /(netsurf)\/([\w\.]+)/i;
        this.Amaya = /(amaya)\/([\w\.]+)/i;
        this.Lynx = /(lynx)\/([\w\.]+)/i;
        this.W3m = /(w3m)\/([\w\.]+)/i;
        this.Icab = /(icab)[\/\s]([23]\.[\d\.]+)/i;
    }
}
