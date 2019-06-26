import get from 'lodash/fp/get';

const Wifi = ({ data }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <i
      className="fas fa-wifi"
      style={{ marginRight: 5, color: !get('ssid')(data).trim() ? 'red' : '' }}
    />
    <div>{get('ssid')(data)}</div>
  </div>
);

export default Wifi;
