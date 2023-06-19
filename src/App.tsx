import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Home from './pages';
import {default as mapping} from '../mapping.json';
import BahasaJepang from './pages/bahasaJepang';
import BudayaJepang from './pages/budayaJepang';
import KesempatanJepang from './pages/kesempatanJepang';
import KehidupanJepang from './pages/kehidupanJepang';
import KondisiJepang from './pages/kondisiJepang';
import ProspekKerja from './pages/prospekKerja';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
          <Stack.Navigator>
            <Stack.Screen
              name="Informasi Jepang"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BahasaJepang"
              component={BahasaJepang}
              options={{
                headerStyle: {backgroundColor: '#415A77'},
                headerTintColor: 'white',
                headerTitle: '',
              }}
            />
            <Stack.Screen
              name="BudayaJepang"
              component={BudayaJepang}
              options={{
                headerStyle: {backgroundColor: '#415A77'},
                headerTintColor: 'white',
                headerTitle: '',
              }}
            />
            <Stack.Screen
              name="KesempatanJepang"
              component={KesempatanJepang}
              options={{
                headerStyle: {backgroundColor: '#415A77'},
                headerTintColor: 'white',
                headerTitle: '',
              }}
            />
            <Stack.Screen
              name="KehidupanJepang"
              component={KehidupanJepang}
              options={{
                headerStyle: {backgroundColor: '#415A77'},
                headerTintColor: 'white',
                headerTitle: '',
              }}
            />
            <Stack.Screen
              name="KondisiJepang"
              component={KondisiJepang}
              options={{
                headerStyle: {backgroundColor: '#415A77'},
                headerTintColor: 'white',
                headerTitle: '',
              }}
            />
            <Stack.Screen
              name="ProspekKerja"
              component={ProspekKerja}
              options={{
                headerStyle: {backgroundColor: '#415A77'},
                headerTintColor: 'white',
                headerTitle: '',
              }}
            />
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
