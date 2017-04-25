export function getQueryParams(qs) {
    const re = /[?&]?([^=]+)=([^&]*)/g;

    qs = qs.split('+').join(' ');

    let result = {};
    let tokens;

    while (tokens = re.exec(qs)) {
        result[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return result;
};

export function validateColor(color) {
    return /(^#[0-9A-F]{6}$)/i.test(color);
};

export function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16);
    var t = percent < 0 ? 0 : 255;
    var p = percent < 0 ? percent * -1 : percent;
    
    var R = f >> 16;
    var G = f >> 8 & 0x00FF; 
    var B = f & 0x0000FF;

    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};