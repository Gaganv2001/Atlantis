import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Details';
import BottomTab from './BottomTab';


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Details" component={Details} />


    </Stack.Navigator>
  );
}
export default AppStack;
