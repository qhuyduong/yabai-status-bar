import get from 'lodash/fp/get';

const memoryString = input => {
  if (input <= 16) {
    return `${input}G`;
  } else if (input <= 1024) {
    return `${input}M`;
  } else {
    return `${(input / 1024).toFixed(2)}G`;
  }
};

const Memory = ({ data }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <i className="fas fa-memory" />
    <div style={{ marginLeft: 5 }}>
      Free:&nbsp;{memoryString(get('free')(data))}
    </div>
  </div>
);

export default Memory;
