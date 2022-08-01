import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaHome from './components/TelaHome';

const Menu = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="home" component={TelaHome}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}

