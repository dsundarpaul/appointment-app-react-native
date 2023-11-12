import {Text} from 'react-native-paper';
import {theme} from '../../../../config/theme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Dashboard from '../../../screens/user/dashboard';
import More from '../../../screens/user/more';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function BottomTabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      shifting={false}
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="DashbardTab"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          // tabBarIcon: ({color}) => (
          //   <MaterialCommunityIcons
          //     name={'monitor-dashboard'}
          //     color={color}
          //     size={26}
          //   />
          // ),
        }}
      />

      <Tab.Screen
        name="MoreTab"
        component={More}
        options={{
          tabBarLabel: 'More',
          // tabBarIcon: ({color}) => (
          //   <MaterialCommunityIcons
          //     name={'sitemap-outline'}
          //     color={color}
          //     size={26}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
