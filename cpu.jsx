import { cpu } from './style.jsx';

export const command = `sysctl -n vm.loadavg | awk '{print $2}'`;

export const refreshFrequency = 5000; // ms

export const className = cpu;

export const render = ({ output }) => (
  <div>
    <i className="fas fa-microchip" style={{ color: 'red' }} />
    &nbsp;
    {output}
  </div>
);
