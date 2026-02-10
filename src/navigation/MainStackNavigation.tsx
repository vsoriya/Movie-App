import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from '../screens/Root'
import SignUpScreen from '../screens/SignUpScreen';
import Verification from '../screens/Verification';
import VerificationScreen from '../screens/Verification'
import ResetpasswordScreen from '../screens/Reset_Password'
import LoginScreen from '../screens/LoginPage';
import CreateNewPasswordScreen from '../screens/Create_New_Password';



const RootStack = createNativeStackNavigator({
  screens: {
      Home: Root,
      SignUp: SignUpScreen,
      Verification: VerificationScreen,
      Login: LoginScreen,
      ResetPassword: ResetpasswordScreen,
      CreateNewPassword: CreateNewPasswordScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
