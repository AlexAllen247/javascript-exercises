const sumAll = function (min, max) {
    if (isNaN(min) || isNaN(max)) return "ERROR"
    if (typeof min === "string" || typeof max === "string") return "ERROR"
    if (min < 0 || max < 0) return "ERROR"
    return (Math.abs(max - min) + 1) * (min + max) / 2
};

// Do not edit below this line
module.exports = sumAll;
