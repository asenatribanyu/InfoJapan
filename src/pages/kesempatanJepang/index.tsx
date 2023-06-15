import {StyleSheet, Image, ScrollView, View} from 'react-native';
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
  <Icon
    {...props}
    name="arrow-back-outline"
    fill="white"
    style={{width: 35, height: 35, marginStart: -5}}
  />
);

const BackAction = (): React.ReactElement => (
  <TopNavigationAction icon={BackIcon} />
);

const KesempatanJepang = () => {
  return (
    <Layout>
      <ScrollView>
        <Layout style={styles.container}>
          <View style={styles.mainHeader}>
            <Text style={styles.header}>Kesempatan</Text>
            <Text style={styles.header2}>Ke Jepang</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Bagaimana Caranya?</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Jalin Pertemanan/Homestay di Jepang
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Homestay.png')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Bagaimana Caranya?</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>Ikuti Ajang Talent</Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img4}
              source={require('../../assets/img/Talent.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Bagaimana Caranya?</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Menangkan Lomba Berpidato Bahasa Jepang
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img4}
              source={require('../../assets/img/Pidato.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Bagaimana Caranya?</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>Beasiswa</Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img4}
              source={require('../../assets/img/Beasiswa.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Beasiswa</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  LPDP LN (Lembaga Pengelola Dana Pendidikan Luar Negeri)
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Beasiswa MEXT atau Monbukagakusho (untuk penelitian, diploma,
                  sarjana dan pascasarjana)
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Beasiswa Program Japanese Studies
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>
                  Beasiswa Mitsui-Bussan Scholarship Program for Indonesia
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>5</Text>
                </Layout>
                <Text style={styles.text}>Ajinomoto Foundation</Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>6</Text>
                </Layout>
                <Text style={styles.text}>
                  Beasiswa Pemerintah Prefektur Aichi
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>7</Text>
                </Layout>
                <Text style={styles.text}>
                  Beasiswa Joint Japan World Bank Graduate Scholarship Program
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>8</Text>
                </Layout>
                <Text style={styles.text}>
                  Program pertukaran budaya Hamamatsu-Bandung
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>9</Text>
                </Layout>
                <Text style={styles.text}>
                  Program American Field Service (AFS)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Beasiswa2.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img5}
              source={require('../../assets/img/Closing.jpg')}
            />
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default KesempatanJepang;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
    backgroundColor: '#415A77',
    alignItems: 'center',
  },

  mainHeader: {
    marginBottom: 40,
  },

  header: {
    marginTop: -5,
    fontSize: 62,
    color: 'white',
  },

  header2: {
    marginTop: -25,
    marginLeft: 25,
    fontSize: 62,
    color: 'white',
  },

  card: {
    width: 350,
    paddingBottom: 50,
    marginBottom: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 15,
    backgroundColor: '#778DA9',

    shadowColor: '#0D1B2A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },

  cardDesc: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },

  cardDesc2: {
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'center',
  },

  cardDesc3: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },

  pointWrapper: {
    width: 250,
    height: 50,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#1B263B',
  },

  pointWrapper2: {
    width: 250,
    height: 95,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#1B263B',
  },

  pointHeader: {
    fontSize: 32,
    marginStart: 40,
    color: 'white',
  },

  gif: {
    width: 225,
    height: 225,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  img: {
    borderRadius: 15,
    resizeMode: 'cover',
  },

  img2: {
    width: 230,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  img3: {
    width: 300,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  img4: {
    width: 300,
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  img5: {
    width: 300,
    height: 100,
    borderRadius: 15,
    resizeMode: 'contain',
  },

  imgWrapper: {
    padding: 10,
    marginBottom: 25,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#778DA9',

    shadowColor: '#0D1B2A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },

  text: {
    color: 'white',
    fontSize: 20,
  },

  text2: {
    color: 'black',
    fontSize: 28,
  },

  numberWrapper: {
    width: 275,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  numberWrapper2: {
    width: 275,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  number: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#E0E1DD',
  },
});
