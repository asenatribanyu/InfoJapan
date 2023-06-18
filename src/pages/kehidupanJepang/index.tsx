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

const KehidupanJepang = () => {
  return (
    <Layout>
      <ScrollView>
        <Layout style={styles.container}>
          <View style={styles.mainHeader}>
            <Text style={styles.header}>Kehidupan</Text>
            <Text style={styles.header2}>Di Jepang</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Kondisi</Text>
              <Text style={styles.pointHeader}>Alam</Text>
            </View>
            <View style={styles.cardDesc}>
              <View style={styles.numberWrapper2}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>1</Text>
                </Layout>
                <Text style={styles.text3}>Spring</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>2</Text>
                </Layout>
                <Text style={styles.text3}>Summer</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>3</Text>
                </Layout>
                <Text style={styles.text3}>Fall</Text>
              </View>

              <View style={styles.numberWrapper}>
                <Layout style={styles.number}>
                  <Text style={styles.text2}>4</Text>
                </Layout>
                <Text style={styles.text3}>Winter</Text>
              </View>
            </View>
          </View>

          <ScrollView style={styles.scroll} horizontal>
            <View style={styles.imgWrapper2}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/Alam.png')}
              />
            </View>

            <View style={styles.imgWrapper2}>
              <Image
                style={styles.img5}
                source={require('../../assets/img/Alam2.png')}
              />
            </View>

            <View style={styles.imgWrapper2}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/Alam3.png')}
              />
            </View>

            <View style={styles.imgWrapper2}>
              <Image
                style={styles.img4}
                source={require('../../assets/img/Alam4.png')}
              />
            </View>
          </ScrollView>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Fasilitas Umum</Text>
            </View>
            <View style={styles.cardDesc3}>
              <ScrollView style={styles.scroll2} horizontal>
                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fasilitas.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fasilitas2.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fasilitas3.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fasilitas4.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fasilitas5.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fasilitas6.png')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Kegiatan di Rumah</Text>
            </View>
            <View style={styles.cardDesc3}>
              <ScrollView style={styles.scroll2} horizontal>
                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Kegiatan.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Kegiatan2.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Kegiatan3.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Kegiatan4.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Kegiatan5.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Kegiatan6.png')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>
                Kegiatan di Sekolah dan Kampus
              </Text>
            </View>
            <View style={styles.cardDesc3}>
              <ScrollView style={styles.scroll2} horizontal>
                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/SekolahKampus.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/SekolahKampus2.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/SekolahKampus3.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/SekolahKampus4.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/SekolahKampus5.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/SekolahKampus6.png')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper2}>
              <Text style={styles.pointHeader}>Bekerja di Jepang</Text>
            </View>
            <View style={styles.cardDesc3}>
              <ScrollView style={styles.scroll2} horizontal>
                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Bekerja.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Bekerja2.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Bekerja3.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Bekerja4.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Bekerja5.png')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper3}>
              <Text style={styles.pointHeader}>Kegiatan Bersama Teman</Text>
            </View>
            <View style={styles.cardDesc3}>
              <ScrollView style={styles.scroll2} horizontal>
                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Teman.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Teman2.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Teman3.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Teman4.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Teman5.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Teman6.png')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.pointWrapper}>
              <Text style={styles.pointHeader}>Festival</Text>
            </View>
            <View style={styles.cardDesc3}>
              <ScrollView style={styles.scroll2} horizontal>
                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fest.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fest2.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fest3.png')}
                  />
                </View>

                <View style={styles.imgWrapper3}>
                  <Image
                    style={styles.img3}
                    source={require('../../assets/img/Fest4.png')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default KehidupanJepang;

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
    marginLeft: 8,
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
    width: 250,
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
  },

  img5: {
    width: 250,
    height: 200,
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
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

  imgWrapper3: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#778DA9',
  },

  scroll: {
    height: 350,
  },

  scroll2: {
    height: 250,
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
