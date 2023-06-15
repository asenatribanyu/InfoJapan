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

const KondisiJepang = () => {
  return (
    <Layout>
      <ScrollView>
        <TopNavigation
          style={{backgroundColor: '#415A77'}}
          accessoryLeft={BackAction}
        />

        <Layout style={styles.container}>
          <View style={styles.mainHeader}>
            <Text style={styles.header}>Kondisi</Text>
            <Text style={styles.header2}>Jepang</Text>
            <Text style={styles.header3}>Terkini</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Kondisi Ekonomi</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text3}>COVID-19</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text3}>Perang Rusia VS Ukraina</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text3}>Inflasi</Text>
              </View>
            </View>
          </View>

          <ScrollView style={styles.scroll} horizontal>
            <View style={styles.yenWrapper}>
              <Text style={styles.yen}>&#165;</Text>
              <Text style={styles.yen2}>2 April 20: Rp.150</Text>
              <Icon
                name="arrow-forward-outline"
                width={50}
                height={50}
                fill="white"
              />
              <Text style={styles.yen3}>29 Juli 22: Rp.111</Text>
            </View>
          </ScrollView>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img4}
              source={require('../../assets/img/Ekonomi.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Fenomena</Text>
            </View>
            <View style={styles.cardDesc}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text3}>Urbanisasi</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text3}>Depopulasi</Text>
              </View>
              <View style={styles.imgWrapper2}>
                <Image
                  style={styles.img3}
                  source={require('../../assets/img/Fenomena.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Fenomena2.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Fenomena</Text>
            </View>
            <View style={styles.cardDesc}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text3}>Ruralisasi</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text3}>Slow Living</Text>
              </View>

              <View style={styles.imgWrapper2}>
                <Image
                  style={styles.img3}
                  source={require('../../assets/img/Fenomena3.jpg')}
                />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Slow Living</Text>
            </View>
            <View style={styles.cardDesc}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Keinginan untuk menjalani hidup lebih tenang
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Keinginan untuk mendapat bahan makanan yang lebih
                  segar/organik
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Beberapa pekerjaan bisa dilakukan secara online
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Kekurangan Tenaga Kerja</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Pengembangan industri di Jepang lebih ke daerah yang jauh dari
                  perkotaan, tapi warga usia produktif tidak ada
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>Tingkat produksi sangat tinggi</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Tingkat kematian lebih tinggi, dibandingkan tingkat kelahiran
                </Text>
              </View>
            </View>
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default KondisiJepang;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 50,
    width: '100%',
    height: '100%',
    backgroundColor: '#415A77',
    alignItems: 'center',
  },

  mainHeader: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    marginTop: -5,
    fontSize: 72,
    color: 'white',
  },

  header2: {
    marginTop: -25,
    fontSize: 72,
    color: 'white',
  },

  header3: {
    marginTop: -15,
    fontSize: 72,
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

  pointWrapper3: {
    width: 250,
    height: 135,
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
    height: 225,
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

  imgWrapper2: {
    padding: 10,
    marginBottom: 25,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#778DA9',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },

  text2: {
    color: 'black',
    fontSize: 28,
  },

  text3: {
    color: 'white',
    fontSize: 24,
  },

  yen: {
    color: '#E0E1DD',
    fontSize: 72,
    marginTop: -15,
  },

  yen2: {
    backgroundColor: '#1B263B',
    color: 'white',
    fontSize: 50,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  yen3: {
    backgroundColor: '#1B263B',
    color: 'white',
    fontSize: 50,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  yenWrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  scroll: {
    height: 50,
    marginBottom: 10,
    marginTop: -10,
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
