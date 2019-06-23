import { app } from './style.jsx';

export const command = 'sh yabai-status-bar/scripts/app.sh';

export const refreshFrequency = 500; // ms

export const className = app;

export const render = ({ output }) => <div>{output}</div>;
