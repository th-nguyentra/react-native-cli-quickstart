import { STORYBOOK_ENABLED } from '@env';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () =>
  STORYBOOK_ENABLED === 'true' ? require('./.storybook').default : App,
);
