import { memory } from './style.jsx';

export const command = `
MEMORY_FREE=$(memory_pressure | grep "Pages free" | grep -o -E '[0-9]+')
MEMORY_TOTAL=$(memory_pressure | grep system | awk -F" " '{print $5}' | grep -o -E '[0-9]+')
echo $MEMORY_FREE/$MEMORY_TOTAL
`;

export const refreshFrequency = 5000; // ms

export const className = memory;

export const render = ({ output }) => (
  <div>
    <i class="fas fa-memory" style={{ color: 'red' }} />
    &nbsp;
    {output}
  </div>
);
