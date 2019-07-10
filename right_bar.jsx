import get from 'lodash/fp/get';
import Memory from './components/memory.jsx';
import Wifi from './components/wifi.jsx';
import Battery from './components/battery.jsx';
import { parse } from './helpers.jsx';

export const command = 'sh yabai-status-bar/scripts/right_bar.sh';

export const refreshFrequency = 5000; // ms

export const className = `
  right: 0;

  .right-bar {
    align-items: center;
    color: #a8a8a8;
    display: flex;
    font-family: Helvetica Neue;
    font-size: 14px;
    height: 23px;
    position: relative;
    right: 0;
  }

  .right-bar > div {
    margin-right: 20px;
  }
`;

export const render = ({ output }) => {
  const data = parse(output);

  return (
    <div className="right-bar">
      <Memory data={get('memory')(data)} />
      <Wifi data={get('wifi')(data)} />
      <Battery data={get('battery')(data)} />
      <div>{get('date_time')(data)}</div>
    </div>
  );
};
