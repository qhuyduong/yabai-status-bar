import { desktop } from './style.jsx';

export const command = 'sh yabai-status-bar/scripts/desktop.sh';

export const refreshFrequency = 500; // ms

export const className = desktop;

export const render = ({ output }) => <div>{output}</div>;
