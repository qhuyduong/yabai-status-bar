import { wifi } from './style.jsx';

export const command = 'networksetup -getairportnetwork en0 | cut -c 24-';

export const refreshFrequency = 5000; // ms

export const className = wifi;

const animation = `
.scroll-left {
  height: 25px;
  overflow: hidden;
  position: relative;
  width: 40px;
}

.scroll-left div {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 25px;
  text-align: center;
  transform:translateX(100%);
  animation: scroll-left 5s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}
`;

export const render = ({ output }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <style>{animation}</style>
    <i className="fas fa-wifi" style={{ marginRight: 5 }} />
    <div className="scroll-left">
      <div className="scroll-left">{output}</div>
    </div>
  </div>
);
