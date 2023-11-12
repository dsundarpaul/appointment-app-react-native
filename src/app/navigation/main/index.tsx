import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';

export default function MainNav() {
  // const routeNameRef = React.useRef(null);
  // const navigationRef = React.useRef(null);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
