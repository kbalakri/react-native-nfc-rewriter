import {genEnablePasswordCommands, genDisablePasswordCommands, genVerifyPasswordCommands} from './ntag-213';

const enablePassword = {
  name: 'nxp215-enable-pass',
  ...genEnablePasswordCommands(0x83),
};

const disablePassword = {
  name: 'nxp215-disable-pass',
  ...genDisablePasswordCommands(0x83),
};

const verifyPassword = {
  name: 'nxp215-verify-pass',
  ...genVerifyPasswordCommands(),
};

export {enablePassword,disablePassword, verifyPassword};
