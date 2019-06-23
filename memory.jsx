import { memory } from './style.jsx';

export const command =
  "top -l 1 | head -n 7 | grep PhysMem | egrep -o '[0-9]+' | tail -1";

export const refreshFrequency = 5000; // ms

export const className = memory;

export const render = ({ output }) => (
  <div>
    <i className="fas fa-memory" />
    &nbsp; Free:&nbsp;
    {output < 1024 ? `${output}M` : `${(output / 1024).toFixed(2)}G`}
  </div>
);
