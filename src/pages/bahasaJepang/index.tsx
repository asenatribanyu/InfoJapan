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

const BahasaJepang = () => {
  return (
    <Layout>
      <ScrollView>
        <TopNavigation
          style={{backgroundColor: '#415A77'}}
          accessoryLeft={BackAction}
        />

        <Layout style={styles.container}>
          <View style={styles.mainHeader}>
            <Text style={styles.header}>Bahasa</Text>
            <Text style={styles.header2}>Jepang</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Hiragana</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text}>
                {'\t\t\t'}Awalnya di Jepang hanya ada huruf kanji yang
                dikenalkan oleh negara Cina. Hingga pada zaman Heian, karena
                penulisan kanji sangat rumit, seorang pendeta yang juga seorang
                penulis membuat hiragana yang dikembangkan dari huruf kanji
                tersebut.
              </Text>
              <Text style={styles.text}>
                {'\t\t\t'}Walau hiragana telah dibuat, saat itu hanya digunakan
                oleh kaum perempuan dalam membuat surat, puisi, cerita, esai dan
                lainnya.
              </Text>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Hiragana.jpg')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img2}
              source={require('../../assets/img/Hiragana2.png')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Katakana</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text}>
                {'\t\t\t'}Katakana lahir bersamaan dengan hiragana. Di mana
                kedua huruf ini berasal dari huruf kanji.
              </Text>
              <Text style={styles.text}>
                {'\t\t\t'}Katakana biasanya digunakan untuk menulis kata-kata
                yang berasal dari bahasa asing yang sudah diserap ke dalam
                Bahasa Jepang (外来語/gairaigo) selain itu juga digunakan untuk
                menuliskan onomatope dan kata-kata asli Bahasa Jepang, hal ini
                hanya bersifat penegasan saja.
              </Text>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Katakana.png')}
            />
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Katakana2.png')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Kanji</Text>
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.text}>
                {'\t\t\t'}Huruf kanji 漢字 di buat di China lebih dari 3000
                tahun yang lalu. Setiap karakter Kanji memiliki dua pengucapan,
                yaitu pengucapan China yang biasa di sebut On Yomi (音読み) dan
                pengucapan Jepang yang biasa di sebut Kun Yomi (訓読み).
              </Text>
              <Text style={styles.text}>{'\t\t\t'}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Huruf Kanji</Text>
            </View>
            <View style={styles.cardDesc2}>
              <Text style={styles.text}>くんよみ (kunyomi)：ひ/び</Text>
              <Text style={styles.text}>おんよみ (onyomi)：にち</Text>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.gif}
              source={require('../../assets/img/Kanji.gif')}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Tips Menghafal</Text>
            </View>
            <View style={styles.cardDesc3}>
              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text}>
                  Belajarlah cara membaca dulu kemudian baru menulis huruf
                  tersebut.
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text}>
                  Latihan rutin mengikuti aturan guratan dalam penulisan
                  hiragana dan katakana, dan kanji.
                </Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text}>
                  Langsung diaplikasikan huruf hiragana, katakana dan kanji yang
                  sudah dihafal.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgWrapper}>
            <Image
              style={styles.img3}
              source={require('../../assets/img/Tips.png')}
            />
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default BahasaJepang;

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
    marginLeft: 50,
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

  number: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#E0E1DD',
  },
});
