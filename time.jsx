import { time } from './style.jsx';

export const command = 'date +"%a %H:%M"';

export const refreshFrequency = 5000; // ms

export const className = time;

export const render = ({ output }) => <div>{output}</div>;
