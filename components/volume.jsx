import get from 'lodash/fp/get';

const iconPicker = (level, muted) => {
  if (muted === 'true' || level < 10) {
    return 'fa-volume-mute';
  } else if (level < 20) {
    return 'fa-volume-down';
  } else {
    return 'fa-volume-up';
  }
};

const Volume = ({ data }) => (
  <div>
    <i
      className={`fas ${iconPicker(get('level')(data), get('muted')(data))}`}
    />
  </div>
);
export default Volume;
