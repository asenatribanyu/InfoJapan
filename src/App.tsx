import React from 'react';
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

const Stack = createNativeStackNavigator();

export default () => (
  <>
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  </>
);
