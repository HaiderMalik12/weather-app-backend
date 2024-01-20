interface Hour {
  time?: string;
  humidity?: number;
  temperature?: number;
  icon?: string;
}

interface Condition {
  icon?: string;
}

interface Day {
  avgtemp_f?: number;
  condition?: Condition;
}

interface Forecast {
  date?: string;
  day?: Day;
  hours?: Hour[];
}

export function destructureForecast(forecastDay) {
  //   const forecastOut: Forecast = {};

  //   console.log(JSON.stringify(forecastInput));

  //   forecastOut.date = forecastInput.date;
  //   //   forecastOut.day.avgtemp_f = forecastInput.day.avgtemp_f;
  //   forecastOut.day.condition.icon = forecastInput.day.condition.icon;

  //   forecastOut.hours = forecastInput.hour.map((hour) => {
  //     return {
  //       time: hour.time,
  //       humidity: hour.humidity,
  //       temperature: hour.temp_f,
  //       icon: hour.condition.icon,
  //     };
  //   });
  //   return forecastOut;

  const currentDay: Forecast = {
    date: '',
    day: {
      avgtemp_f: 0,
      condition: {
        icon: '',
      },
    },
    hours: [{ time: '', humidity: 0, temperature: 0, icon: '' }],
  };
  currentDay.date = forecastDay.date;
  currentDay.day.avgtemp_f = forecastDay.day.avgtemp_f;
  currentDay.day.condition.icon = forecastDay.day.condition.icon;
  currentDay.hours = forecastDay.hour.map((hour) => {
    return {
      time: hour.time,
      humidity: hour.humidity,
      temprature: hour.temp_f,
      icon: hour.condition.icon,
    };
  });

  return currentDay;
}
