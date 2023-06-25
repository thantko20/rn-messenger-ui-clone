import { NavigationContainer } from '@react-navigation/native';
import { Box, Text } from '../atoms';
import BottomTabs from './bottom-tabs';

const Navigations = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Navigations;
