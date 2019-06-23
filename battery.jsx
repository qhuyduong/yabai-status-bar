import get from 'lodash/fp/get';
import { battery } from './style.jsx';
import { parse } from './helpers.jsx';

export const command = 'sh yabai-status-bar/scripts/battery.sh';

export const refreshFrequency = 2000; // ms

export const className = battery;

const iconPicker = (level, status) => {
  if (status === 'AC') {
    return 'fa-bolt';
  } else if (level < 20) {
    return 'fa-battery-empty';
  } else if (level < 40) {
    return 'fa-le-quarter';
  } else if (level < 60) {
    return 'fa-battery-half';
  } else if (level < 80) {
    return 'fa-battery-three-quarters';
  } else {
    return 'fa-battery-full';
  }
};

export const render = ({ output }) => {
  let data = parse(output);

  return (
    <div>
      <i
        className={`fas ${iconPicker(get('level')(data), get('status')(data))}`}
      />
      &nbsp;
      {get('level')(data)}
    </div>
  );
};
