export default class Arch {
    constructor() {
        this.Amd64  = /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ;
        this.Ia32 = /(ia32(?=;))/i;
        this.Ia3386  = /((?:i[346]|x)86)[;\)]/i;
        this.powerPc = /(sun4\w)[;\)]/i;
        this.Arm64mips = /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i;
    }
}