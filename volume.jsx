import { volume } from './style.jsx';

export const command = "osascript -e 'output volume of (get volume settings)'";

export const refreshFrequency = 500; // ms

export const className = volume;

export const render = ({ output }) => (
  <div>
    <i className="fas fa-volume-up" style={{ color: 'red' }} />
    &nbsp;
    {output}
  </div>
);
