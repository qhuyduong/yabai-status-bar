import { battery } from './style.jsx';

export const command =
  "pmset -g batt | egrep '([0-9]+%).*' -o --colour=auto | cut -f1 -d'%'";

export const refreshFrequency = 5000; // ms

export const className = battery;

export const render = ({ output }) => (
  <div>
    <i className="fas fa-battery-full" style={{ color: 'red' }} />
    &nbsp;
    {output}
  </div>
);
