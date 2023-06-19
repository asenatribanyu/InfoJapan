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

const ProspekKerja = () => {
  return (
    <Layout>
      <ScrollView>
        <Layout style={styles.container}>
          <View style={styles.mainHeader}>
            <Text style={styles.header}>Prospek </Text>
            <Text style={styles.header2}>Kerja</Text>
            <Text style={styles.header2}>Lulusan</Text>
            <Text style={styles.header2}>Bahasa</Text>
            <Text style={styles.header2}>Jepang</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>
                Hubungan Bilateral Indonesia Jepang
              </Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Hubungan diplomatik dimulai April 1958 dengan Penandatanganan
                  Perjanjian Perdamaian antara Jepang dan Republik Indonesia.
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Pembukaan jalur penerbangan antara Jepang dan Indonesia
                  diadakan pada tahun 1963.
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Jumlah warganegara Indonesia yang tinggal di Jepang : 56. 346
                  orang (per Maret 2019)
                </Text>
              </View>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>
                  Jumlah warganegara Jepang yang tinggal di Indonesia : 11. 263
                  orang (per Oktober 2020)
                </Text>
              </View>
            </View>
          </View>

          <ScrollView style={styles.scroll} horizontal>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/FDI.png')}
              />
            </View>
          </ScrollView>

          <ScrollView style={styles.scroll} horizontal>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/FDI2.png')}
              />
            </View>
          </ScrollView>

          <ScrollView style={styles.scroll} horizontal>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/Perusahaan.jpg')}
              />
            </View>
          </ScrollView>

          <ScrollView style={styles.scroll2} horizontal>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.img5}
                source={require('../../assets/img/Perusahaan2.jpg')}
              />
            </View>
          </ScrollView>

          <ScrollView style={styles.scroll} horizontal>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/Kriteria.jpg')}
              />
            </View>
          </ScrollView>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Prospek</Text>
              <Text style={styles.pointHeader}>Kerja</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text}>
                {'\t\t\t'}Interpreter, Translator, Dosen, Guru, Ahli Lintas
                Budaya, Kepala Layanan Kebahasaan, Ahli Teknologi, Peneliti,
                Copy Editor, MC, Proofreader, Lexicographer, Guide, Information
                Officer, Staf Kedutaan/Diplomat, Staf Organisasi Internasional,
                Staf/Manager di Organisasi Pemerintah/Organisasi Swasta,
                Entertainer, Artis/Youtuber.
              </Text>
            </View>
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default ProspekKerja;

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
    alignItems: 'center',
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
    height: 175,
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
    width: 650,
    height: 500,
    borderRadius: 15,
    resizeMode: 'stretch',
  },

  img5: {
    width: 500,
    height: 250,
    borderRadius: 15,
    resizeMode: 'contain',
  },

  scroll: {
    height: 550,
  },

  scroll2: {
    height: 295,
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
