"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthUnit = exports.WeightUnit = exports.Temp = exports.HazardousLevelType = void 0;
var HazardousLevelType;
(function (HazardousLevelType) {
    HazardousLevelType["NA"] = "na";
    HazardousLevelType["LOW"] = "low";
    HazardousLevelType["MEDIUM"] = "medium";
    HazardousLevelType["HIGH"] = "high";
})(HazardousLevelType = exports.HazardousLevelType || (exports.HazardousLevelType = {}));
var Temp;
(function (Temp) {
    Temp["F"] = "fahrenheit";
    Temp["C"] = "celsius";
})(Temp = exports.Temp || (exports.Temp = {}));
var WeightUnit;
(function (WeightUnit) {
    WeightUnit["Kg"] = "kg";
    WeightUnit["Lb"] = "lb";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
var LengthUnit;
(function (LengthUnit) {
    LengthUnit["Cm"] = "cm";
    LengthUnit["Mtr"] = "mtr";
    LengthUnit["Inches"] = "inches";
    LengthUnit["Ft"] = "ft";
})(LengthUnit = exports.LengthUnit || (exports.LengthUnit = {}));
