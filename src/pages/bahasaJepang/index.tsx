import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Layout,
  Text,
  Icon,
  IconElement,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = (props: any): IconElement => (
  <Icon {...props} name="arrow-back" />
);

const BackAction = (): React.ReactElement => (
  <TopNavigationAction icon={BackIcon} />
);

const BahasaJepang = () => {
  return (
    <Layout>
      <Layout style={styles.topNav}>
        <TopNavigation accessoryLeft={BackAction} title="Home" />
      </Layout>
      <Layout style={styles.container}>
        <Layout style={styles.headerWrapper}>
          <Text style={styles.header}>Bahasa</Text>
          <Text style={styles.header2}>Jepang</Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BahasaJepang;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '100%',
    height: '100%',
  },

  topNav: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  headerWrapper: {
    marginLeft: 30,
  },

  header: {
    marginTop: -5,
    fontFamily: 'Quicksand',
    fontSize: 72,
    fontWeight: '400',
  },

  header2: {
    marginTop: -25,
    marginLeft: 50,
    fontFamily: 'Quicksand',
    fontSize: 72,
    fontWeight: '400',
  },
});
