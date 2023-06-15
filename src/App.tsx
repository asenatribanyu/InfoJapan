import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as mapping} from '../mapping.json';
import BahasaJepang from './pages/bahasaJepang';
import BudayaJepang from './pages/budayaJepang';
import KesempatanJepang from './pages/kesempatanJepang';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
      {/* <BahasaJepang />
      <BudayaJepang /> */}
      <KesempatanJepang />
    </ApplicationProvider>
  </>
);
