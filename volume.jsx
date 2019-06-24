import get from 'lodash/fp/get';
import { volume } from './style.jsx';
import { parse } from './helpers.jsx';

export const command = 'sh yabai-status-bar/scripts/volume.sh';

export const refreshFrequency = 500; // ms

export const className = volume;

const iconPicker = (level, muted) => {
  if (muted === 'true' || level < 10) {
    return 'fa-volume-mute';
  } else if (level < 50) {
    return 'fa-volume-down';
  } else {
    return 'fa-volume-up';
  }
};

export const render = ({ output }) => {
  let data = parse(output);

  return (
    <div>
      <i
        className={`fas ${iconPicker(get('level')(data), get('muted')(data))}`}
      />
    </div>
  );
};
