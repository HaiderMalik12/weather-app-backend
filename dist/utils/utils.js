"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoursInNumbers = exports.extractTime = exports.extractDate = exports.destructureForecast = void 0;
function destructureForecast(forecastDay) {
    const currentDay = {
        date: '',
        day: {
            avgtemp_c: 0,
            condition: {
                icon: '',
            },
        },
        hours: [{ time: '', humidity: 0, temperature: 0, icon: '' }],
    };
    currentDay.date = forecastDay.date;
    currentDay.day.avgtemp_c = forecastDay.day.avgtemp_c;
    currentDay.day.condition.icon = forecastDay.day.condition.icon;
    currentDay.hours = forecastDay.hour.map((hour) => {
        return {
            time: extractTime(hour.time),
            humidity: hour.humidity,
            temperature: hour.temp_c,
            icon: hour.condition.icon,
            hoursInNumber: getHoursInNumbers(hour.time),
        };
    });
    // console.log(currentDay.hours);
    return currentDay;
}
exports.destructureForecast = destructureForecast;
function extractDate(dateString) {
    const dateObject = new Date(dateString);
    const separateDate = dateObject.toLocaleDateString();
    return separateDate;
}
exports.extractDate = extractDate;
function extractTime(dateString) {
    const dateObject = new Date(dateString);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const separateTime = dateObject.toLocaleTimeString(undefined, options);
    return separateTime;
}
exports.extractTime = extractTime;
function getHoursInNumbers(dateString) {
    const dateObject = new Date(dateString);
    const options = {
        hour: 'numeric',
        hour12: false,
    };
    const hoursInNumners = dateObject.toLocaleTimeString(undefined, options);
    return hoursInNumners;
}
exports.getHoursInNumbers = getHoursInNumbers;
//# sourceMappingURL=utils.js.map