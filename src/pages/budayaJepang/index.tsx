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

const BudayaJepang = () => {
  return (
    <Layout>
      <ScrollView>
        <Layout style={styles.container}>
          <View style={styles.mainHeader}>
            <Text style={styles.header}>Keunikan</Text>
            <Text style={styles.header2}>Budaya</Text>
            <Text style={styles.header2}>Jepang</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Karakteristik Orang Jepang</Text>
            </View>
            <View style={styles.cardDesc}>
              <View style={styles.imgWrapper2}>
                <Image
                  style={styles.img}
                  source={require('../../assets/img/Karakter.jpg')}
                />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Keunikan Budaya Jepang</Text>
            </View>
            <View style={styles.cardDesc}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text3}>Menjaga Tradisi</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text3}>Sederhana</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text3}>Cerdik</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text3}>Disiplin</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>5</Text>
                </Layout>
                <Text style={styles.text3}>Bersih</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Menjaga Tradisi</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text}>
                {'\t\t\t'}Jepang negara maju dan modern tapi tetap memegang
                teguh dan melestarikan budaya tradisional.
              </Text>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Menjaga.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Menjaga2.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Sederhana</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.imgWrapper2}>
                <Image
                  style={styles.img3}
                  source={require('../../assets/img/Sederhana.jpg')}
                />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Budaya Disiplin</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text}>
                {'\t\t\t'}Masyarakat Jepang terkenal akan kedisiplinannya,
                contoh:
              </Text>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text3}>Disiplin Waktu</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text3}>Taat Pada Aturan</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text3}>Disiplin Mengantri</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text3}>Dan Lain-lain</Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img4}
              source={require('../../assets/img/Disiplin.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Budaya Bersih</Text>
            </View>
            <View style={styles.cardDesc3}>
              <Text style={styles.text}>
                {'\t\t\t'}Budaya bersih di Jepang sudah ditanamkan sejak dini.
              </Text>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Di bangku sekolah TK, anak-anak TK selalu dibiasakan bersih
                  baik oleh orang tuanya maupun guru.
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Seluruh siswa mulai dari SD sampai SMA, mempunyai jadwal tugas
                  bersih -bersih secara bergiliran.
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Setiap perusahaan di Jepang menerapkan 5S, salah satu S nya
                  berarti Seisou yang artinya kebersihan.
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>
                  Adanya jadwal pembuangan sampah di masing-masing lingkungan
                  RT/RW.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Bersih.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Bersih2.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Keunikan Lainnya</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text4}>1. Cara/Etika Makan</Text>
            </View>
            <View style={styles.cardDesc3}>
              <Text style={styles.text}>
                {'\t\t\t'}Jepang mempunyai etika makan yang berbeda dengan
                negara lain Seperti:
              </Text>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>Cara makan di meja makan</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Mengucapkan itadakimasu sebelum mulai makan
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>Cara menggunakan sumpit</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>
                  Bersuara (suara seruput) saat makan Soba, Ramen, dan Udon
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>5</Text>
                </Layout>
                <Text style={styles.text}>
                  Mengucapkan gochisousama setelah selesai makan
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/EtikaMakan.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/EtikaMakan2.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/EtikaMakan3.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Keunikan Lainnya</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text4}>
                2. Banyaknya Festival dan upacara keagamaan (Matsuri)
              </Text>
            </View>
            <View style={styles.cardDesc3}>
              <Text style={styles.text}>
                {'\t\t\t'}Festival dan upcara adalah salah satu tradisi yang
                selalu dilakukan oleh orang Jepang, dalam setahun ada banyak
                festival atau upacara keagamaan yang diselenggarakan. Seperti
                misalnya:
              </Text>

              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Oshogatsu (Menyambut Tahun Baru, 1 Januari)
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Hina Matsuri ( upacara untuk anak perempuan, 3 Maret)
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Koinobori (upacara untuk anak laki-laki, 7 Mei)
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>
                  Seijin Shiki (upacara untuk remaja yang sudah menginjak usia
                  20 tahun)
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>5</Text>
                </Layout>
                <Text style={styles.text}>
                  Tanabata Matsuri (biasanya diasakan pada musim panas)
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>6</Text>
                </Layout>
                <Text style={styles.text}>Yuki Matsuri</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>7</Text>
                </Layout>
                <Text style={styles.text}>Hanami dan lain-lain</Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Fest.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Fest2.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Fest3.jpg')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Keunikan Lainnya</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text4}>3. Anime</Text>
            </View>
            <View style={styles.cardDesc3}>
              <Text style={styles.text}>{'\t\t\t'}Ciri khas Anime Jepang:</Text>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>Bermata besar</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Cewek kaya selalu berambut blonde
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Selalu ada adegan cewek memberi bento untuk cowok yang disukai
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text}>Ekspresif</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>5</Text>
                </Layout>
                <Text style={styles.text}>Air mata pancuran</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>6</Text>
                </Layout>
                <Text style={styles.text}>Dan lain-lain</Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Keunikan.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.gif}
              source={require('../../assets/img/Anime.gif')}
            />
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default BudayaJepang;

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
    fontSize: 72,
    color: 'white',
  },

  header2: {
    marginTop: -25,
    marginLeft: 25,
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
    height: 135,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#1B263B',
  },

  pointWrapper3: {
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
    height: 275,
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
    width: 275,
    height: 350,
    borderRadius: 15,
    resizeMode: 'cover',
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
    marginTop: 10,
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

  text4: {
    color: 'white',
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
