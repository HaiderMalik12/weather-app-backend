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
  avgtemp_c?: number;
  condition?: Condition;
}

interface Forecast {
  date?: string;
  day?: Day;
  hours?: Hour[];
}

export function destructureForecast(forecastDay) {
  const currentDay: Forecast = {
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

  // Send the next hours details not the past hours
  // if the hour is past then skip the
  // send the current and the future hours of the day

  currentDay.hours = forecastDay.hour.map((hour) => {
    return {
      time: extractTime(hour.time),
      humidity: hour.humidity,
      temperature: hour.temp_c,
      icon: hour.condition.icon,
    };
  });

  console.log(currentDay.hours);

  return currentDay;
}

export function extractDate(dateString) {
  const dateObject = new Date(dateString);
  const separateDate = dateObject.toLocaleDateString();
  return separateDate;
}

export function extractTime(dateString) {
  const dateObject = new Date(dateString);

  const options: any = { hour: 'numeric', minute: 'numeric', hour12: true };

  const separateTime = dateObject.toLocaleTimeString(undefined, options);
  return separateTime;
}
