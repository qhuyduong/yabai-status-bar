import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import { desktop } from './style.jsx';

export const command = 'sh yabai-status-bar/scripts/desktop.sh';

export const refreshFrequency = 500; // ms

export const className = desktop;

const mapWithIndex = map.convert({ cap: false });

const parse = input => {
  try {
    return JSON.parse(input);
  } catch (e) {
    return undefined;
  }
};

const iconList = [
  'fi emacs-icon',
  'fi terminal-icon',
  'fab fa-slack',
  'fab fa-chrome',
  'fab fa-apple',
];

export const render = ({ output }) => {
  let data = parse(output);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 20,
        position: 'relative',
      }}
    >
      {mapWithIndex((workspace, index) => (
        <div
          key={index}
          style={{
            marginRight: 25,
            fontSize: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <i
            className={
              index >= iconList.length
                ? iconList[iconList.length - 1]
                : iconList[index]
            }
            style={{
              fontSize: 12,
            }}
          />
          {workspace.index === get('active.index')(data) && (
            <div
              style={{
                height: 1,
                backgroundColor: '#bab72d',
                width: 32,
                top: 18,
                alignSelf: 'bottom',
                position: 'absolute',
              }}
            />
          )}
        </div>
      ))(get('workspaces')(data))}
    </div>
  );
};
