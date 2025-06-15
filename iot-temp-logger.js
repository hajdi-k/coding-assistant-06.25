"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var dotenv = require("dotenv");
dotenv.config();
// Generate a mock indoor temperature between 18°C and 27°C
function getMockIndoorTemperature() {
    return +(Math.random() * (27 - 18) + 18).toFixed(1);
}
// Fetch outdoor temperature from OpenWeather API
function getOutdoorTemperature(lat, lon) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, url, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = process.env.OPENWEATHER_API_KEY;
                    if (!apiKey) {
                        console.error('OpenWeather API key not set in .env');
                        return [2 /*return*/, null];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(apiKey, "&units=metric");
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.main.temp];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching outdoor temperature:', error_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Main function to compare and log temperatures
function logTemperatureComparison() {
    return __awaiter(this, void 0, void 0, function () {
        var indoorTemp, lat, lon, outdoorTemp, difference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    indoorTemp = getMockIndoorTemperature();
                    lat = 59.91;
                    lon = 10.75;
                    return [4 /*yield*/, getOutdoorTemperature(lat, lon)];
                case 1:
                    outdoorTemp = _a.sent();
                    if (outdoorTemp === null) {
                        console.log('Could not fetch outdoor temperature.');
                        return [2 /*return*/];
                    }
                    difference = +(indoorTemp - outdoorTemp).toFixed(1);
                    console.log("Indoor temperature:  ".concat(indoorTemp, "\u00B0C"));
                    console.log("Outdoor temperature: ".concat(outdoorTemp, "\u00B0C"));
                    console.log("Difference:         ".concat(difference, "\u00B0C"));
                    console.log('---');
                    return [2 /*return*/];
            }
        });
    });
}
// Poll every 10 seconds
setInterval(logTemperatureComparison, 10000);
// Initial call
logTemperatureComparison();
