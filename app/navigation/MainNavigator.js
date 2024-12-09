import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import HomePage from '../pages/home/HomePage';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';


const Stack = createStackNavigator();

const MainNavigator = () => {

    return (<Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomePage} />
        <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>);

};

export default MainNavigator;
