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
  <Icon {...props} name="arrow-back" />
);

const BackAction = (): React.ReactElement => (
  <TopNavigationAction icon={BackIcon} />
);

const BahasaJepang = () => {
  return (
    <Layout>
      <Layout>
        <TopNavigation accessoryLeft={BackAction} title="Home" />
      </Layout>
      <ScrollView>
        <Layout style={styles.container}>
          <Layout style={styles.headerWrapper}>
            <Text style={styles.header}>Bahasa</Text>
            <Text style={styles.header2}>Jepang</Text>
          </Layout>

          <Layout style={styles.pointWrapper}>
            <Text style={styles.point}>&#8226; Hiragana</Text>
          </Layout>

          <Text style={styles.desc}>
            {'\t\t\t\t\t'}Awalnya di Jepang hanya ada huruf kanji yang
            dikenalkan oleh negara Cina. Hingga pada zaman Heian, karena
            penulisan kanji sangat rumit, seorang pendeta yang juga seorang
            penulis membuat hiragana yang dikembangkan dari huruf kanji
            tersebut.
          </Text>
          <Text style={styles.desc}>
            {'\t\t\t\t\t'}Walau hiragana telah dibuat, saat itu hanya digunakan
            oleh kaum perempuan dalam membuat surat, puisi, cerita, esai dan
            lainnya.
          </Text>

          <Layout style={styles.photo}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Hiragana.jpg')}
            />
          </Layout>

          <Layout style={styles.photo}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Hiragana2.png')}
            />
          </Layout>

          <Layout style={styles.pointWrapper}>
            <Text style={styles.point}>&#8226; Katakana</Text>
          </Layout>

          <Text style={styles.desc}>
            {'\t\t\t\t\t'}Katakana lahir bersamaan dengan hiragana. Di mana
            kedua huruf ini berasal dari huruf kanji.
          </Text>
          <Text style={styles.desc}>
            {'\t\t\t\t\t'}Katakana biasanya digunakan untuk menulis kata-kata
            yang berasal dari bahasa asing yang sudah diserap ke dalam Bahasa
            Jepang (外来語/gairaigo) selain itu juga digunakan untuk menuliskan
            onomatope dan kata - kata asli Bahasa Jepang, hal ini hanya bersifat
            penegasan saja.
          </Text>

          <Layout style={styles.photo}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Katakana.png')}
            />
          </Layout>

          <Layout style={styles.photo}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Katakana2.png')}
            />
          </Layout>

          <Layout style={styles.pointWrapper2}>
            <Text style={styles.point2}>&#8226; Kanji</Text>
          </Layout>

          <Text style={styles.desc}>
            {'\t\t\t\t\t'}Huruf kanji 漢字 di buat di China lebih dari 3000
            tahun yang lalu. Setiap karakter Kanji memiliki dua pengucapan,
            yaitu pengucapan China yang biasa di sebut On Yomi (音読み) dan
            pengucapan Jepang yang biasa di sebut Kun Yomi (訓読み).
          </Text>

          <Layout style={styles.kanjiWrapper}>
            <Text style={styles.kanjidesc}>Huruf Kanji</Text>
            <Text style={styles.desc}>くんよみ (kunyomi)：ひ/び</Text>
            <Text style={styles.desc}>おんよみ (onyomi)：にち</Text>
          </Layout>

          <Layout style={styles.gif}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Kanji.gif')}
            />
          </Layout>

          <Layout style={styles.pointWrapper3}>
            <Text style={styles.point2}>&#8226; Tips Menghafal</Text>
          </Layout>

          <Text style={styles.tips}>
            <Text style={styles.num}>1.</Text>
            {'\t\t'}Belajarlah cara membaca dulu kemudian baru menulis huruf
            tersebut.
          </Text>
          <Text style={styles.tips}>
            <Text style={styles.num}>2.</Text>
            {'\t\t'}Latihan rutin mengikuti aturan guratan dalam penulisan
            hiragana dan katakana, dan kanji.
          </Text>
          <Text style={styles.tips}>
            <Text style={styles.num}>3.</Text>
            {'\t\t'}Langsung diaplikasikan huruf hiragana, katakana dan kanji
            yang sudah dihafal.
          </Text>

          <Layout style={styles.photo2}>
            <Image
              style={styles.img}
              source={require('../../assets/img/Tips.png')}
            />
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default BahasaJepang;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 75,
    width: '100%',
    height: '100%',
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

  pointWrapper: {
    marginTop: 15,
    marginBottom: 10,
    width: 200,
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 5,
  },

  pointWrapper2: {
    marginTop: 15,
    marginBottom: 10,
    width: 150,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 5,
  },

  pointWrapper3: {
    marginTop: 15,
    marginBottom: 10,
    width: 300,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 5,
  },

  point2: {
    marginStart: 15,
    fontSize: 36,
    fontFamily: 'Quicksand',
    fontWeight: '400',
    color: 'white',
  },

  point: {
    fontSize: 36,
    fontFamily: 'Quicksand',
    fontWeight: '400',
    color: 'white',
  },

  desc: {
    fontFamily: 'Quicksand',
    fontSize: 20,
    textAlign: 'justify',
  },

  tips: {
    fontFamily: 'Quicksand',
    fontSize: 20,
    textAlign: 'justify',
  },

  photo: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  photo2: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gif: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 250,
    height: 185,
    resizeMode: 'contain',
  },

  kanjidesc: {
    fontFamily: 'Quicksand',
    fontSize: 32,
  },

  kanjiWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  num: {
    fontFamily: 'Quicksand',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
